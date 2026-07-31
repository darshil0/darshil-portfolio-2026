import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import React from "react";
import {
  render,
  screen,
  fireEvent,
  act,
  cleanup,
} from "@testing-library/react";
import VoiceAssistant from "../src/components/Common/VoiceAssistant";
import { assistantData } from "../src/constants/assistantData";

// Mock scrollIntoView to prevent errors in JSDOM
window.HTMLElement.prototype.scrollIntoView = vi.fn();

describe("VoiceAssistant Speech and Type-only Mode", () => {
  let mockSpeak;
  let mockCancel;
  let originalSpeechSynthesis;
  let originalSpeechRecognition;
  let originalSpeechSynthesisUtterance;

  beforeEach(() => {
    vi.useFakeTimers();
    mockSpeak = vi.fn();
    mockCancel = vi.fn();

    originalSpeechSynthesis = window.speechSynthesis;
    originalSpeechRecognition = window.SpeechRecognition;
    originalSpeechSynthesisUtterance = window.SpeechSynthesisUtterance;

    // Define mock speechSynthesis
    Object.defineProperty(window, "speechSynthesis", {
      writable: true,
      configurable: true,
      value: {
        speak: mockSpeak,
        cancel: mockCancel,
      },
    });

    // Mock SpeechSynthesisUtterance
    class MockSpeechSynthesisUtterance {
      constructor(text) {
        this.text = text;
      }
    }
    Object.defineProperty(window, "SpeechSynthesisUtterance", {
      writable: true,
      configurable: true,
      value: MockSpeechSynthesisUtterance,
    });

    // Mock SpeechRecognition
    class MockSpeechRecognition {
      constructor() {
        this.start = vi.fn();
        this.stop = vi.fn();
      }
    }
    Object.defineProperty(window, "SpeechRecognition", {
      writable: true,
      configurable: true,
      value: MockSpeechRecognition,
    });
  });

  afterEach(() => {
    cleanup();
    vi.useRealTimers();
    if (originalSpeechSynthesis) {
      Object.defineProperty(window, "speechSynthesis", {
        writable: true,
        configurable: true,
        value: originalSpeechSynthesis,
      });
    }
    if (originalSpeechSynthesisUtterance) {
      Object.defineProperty(window, "SpeechSynthesisUtterance", {
        writable: true,
        configurable: true,
        value: originalSpeechSynthesisUtterance,
      });
    }
    if (originalSpeechRecognition) {
      Object.defineProperty(window, "SpeechRecognition", {
        writable: true,
        configurable: true,
        value: originalSpeechRecognition,
      });
    }
    vi.clearAllMocks();
  });

  it("should support manual toggle of Type-only mode", () => {
    render(<VoiceAssistant />);

    // Open assistant
    fireEvent.click(screen.getByLabelText("Open Assistant"));

    // Type-Only button should be visible
    const toggleBtn = screen.getByRole("button", {
      name: /Toggle Type-only mode/i,
    });
    expect(toggleBtn).toBeDefined();

    // Toggle Type-only ON
    fireEvent.click(toggleBtn);

    // Text "TYPE-ONLY MODE ACTIVE" should appear
    expect(screen.getByText("Type-only Mode Active")).toBeDefined();

    // Toggle Type-only OFF
    fireEvent.click(toggleBtn);
    expect(screen.queryByText("Type-only Mode Active")).toBeNull();
  });

  it("should trigger speech synthesis on open unless in Type-only mode", () => {
    render(<VoiceAssistant />);
    fireEvent.click(screen.getByLabelText("Open Assistant"));

    // Should call speak with the welcome message
    expect(mockSpeak).toHaveBeenCalled();
  });

  it("should not trigger speech synthesis when Type-only mode is active", () => {
    render(<VoiceAssistant />);

    // Open assistant
    fireEvent.click(screen.getByLabelText("Open Assistant"));
    expect(mockSpeak).toHaveBeenCalledTimes(1);

    // Toggle Type-only ON
    const toggleBtn = screen.getByRole("button", {
      name: /Toggle Type-only mode/i,
    });
    fireEvent.click(toggleBtn);

    // Clear call counts
    mockSpeak.mockClear();

    // Navigate to Darshil's background
    fireEvent.click(screen.getAllByText("About Darshil's Background")[0]);

    // Should NOT call speak
    expect(mockSpeak).not.toHaveBeenCalled();
  });

  it("should truncate answers to a maximum of 10 lines in Type-only mode", () => {
    const originalCertifications = assistantData.personal.certifications;
    assistantData.personal.certifications =
      "Line 1\nLine 2\nLine 3\nLine 4\nLine 5\nLine 6\nLine 7\nLine 8\nLine 9\nLine 10\nLine 11\nLine 12";

    try {
      render(<VoiceAssistant />);
      fireEvent.click(screen.getByLabelText("Open Assistant"));

      // Toggle Type-only ON
      const toggleBtn = screen.getByRole("button", {
        name: /Toggle Type-only mode/i,
      });
      fireEvent.click(toggleBtn);

      // Let's navigate to Darshil's background to get a long paragraph response
      fireEvent.click(screen.getAllByText("About Darshil's Background")[0]);

      // Trigger a question that has a very long answer (more than 10 lines)
      // E.g. "What certifications does he have?"
      const certQuestionBtn = screen.getByText(
        "What certifications does he have?",
      );
      fireEvent.click(certQuestionBtn);

      // Fast forward typing timeout
      act(() => {
        vi.advanceTimersByTime(600);
      });

      // Find the response text. It should end with "... (truncated)"
      const responseBubble = screen.getByText(/truncated/i);
      expect(responseBubble).toBeDefined();

      // Check that it doesn't exceed 11 lines (10 lines plus the truncated marker)
      const textLines = responseBubble.textContent.split("\n");
      expect(textLines.length).toBeLessThanOrEqual(11);
    } finally {
      assistantData.personal.certifications = originalCertifications;
    }
  });

  it("should switch to Type-only mode automatically if SpeechRecognition fails", () => {
    let onErrorCallback;
    class ErroringSpeechRecognition {
      constructor() {
        this.start = vi.fn().mockImplementation(() => {
          if (onErrorCallback) {
            onErrorCallback({ error: "not-allowed" });
          }
        });
      }
      set onerror(cb) {
        onErrorCallback = cb;
      }
    }

    Object.defineProperty(window, "SpeechRecognition", {
      writable: true,
      configurable: true,
      value: ErroringSpeechRecognition,
    });

    render(<VoiceAssistant />);
    fireEvent.click(screen.getByLabelText("Open Assistant"));

    const micBtn = screen.getByRole("button", { name: /^Voice input$/i });
    fireEvent.click(micBtn);

    // It should have caught the error and set Type-only to true automatically
    expect(screen.getByText("Type-only Mode Active")).toBeDefined();
  });

  it("should allow typing questions and getting answers", async () => {
    render(<VoiceAssistant />);

    // Open assistant
    fireEvent.click(screen.getByLabelText("Open Assistant"));

    // Ensure the input is visible
    const inputField = screen.getByPlaceholderText("Ask Jules a question...");
    expect(inputField).toBeDefined();

    // Type a question: "What are his core strengths?"
    fireEvent.change(inputField, {
      target: { value: "What are his core strengths?" },
    });

    // Submit the form
    const submitBtn = screen.getByLabelText("Send question");
    fireEvent.click(submitBtn);

    // Fast forward typing timeout (600ms)
    act(() => {
      vi.advanceTimersByTime(600);
    });

    // Check that user question is appended
    expect(screen.getByText("What are his core strengths?")).toBeDefined();

    // Check that assistant answer is appended
    expect(screen.getByText(assistantData.personal.strengths)).toBeDefined();
  });
});
