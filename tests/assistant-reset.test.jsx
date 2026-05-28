import { describe, it, expect, vi } from 'vitest';
import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import VoiceAssistant from '../src/components/Common/VoiceAssistant';
import { assistantData } from '../src/constants/assistantData';

// Mock scrollToBottom to avoid errors in JSDOM
window.HTMLElement.prototype.scrollIntoView = vi.fn();

describe('VoiceAssistant reset functionality', () => {
  it('should reset messages and mode when resetAssistant is called (via Back button)', async () => {
    render(<VoiceAssistant />);

    // Open the assistant
    const openButton = screen.getByLabelText('Open Assistant');
    fireEvent.click(openButton);

    // Check initial state
    expect(screen.getByText(assistantData.welcomeMessage)).toBeDefined();

    // Navigate to projects_list
    const exploreButton = screen.getByText('Explore Repositories');
    fireEvent.click(exploreButton);

    // Should see "Back" button now
    const backButton = screen.getByText('Back');
    expect(backButton).toBeDefined();

    // Reset via back button
    fireEvent.click(backButton);

    // Should be back to main menu and messages should be reset (though in this case it was just the welcome message anyway)
    expect(screen.getByText('How can I help you today?')).toBeDefined();
  });

  it('should reset conversation when navigating back from about section', () => {
    render(<VoiceAssistant />);

    // Open the assistant
    fireEvent.click(screen.getByLabelText('Open Assistant'));

    // Navigate to About
    fireEvent.click(screen.getAllByText("About Darshil's Background")[0]);

    // Should see "Main Menu" button
    const mainMenuButton = screen.getByText('Main Menu');
    expect(mainMenuButton).toBeDefined();

    // Check that we have a user message now
    expect(screen.getByText('Tell me about Darshil')).toBeDefined();

    // Reset via main menu button
    fireEvent.click(mainMenuButton);

    // Should be back to main menu
    expect(screen.getAllByText('How can I help you today?')[0]).toBeDefined();

    // Messages should be reset (only welcome message should be present)
    // We can check if the user message "Tell me about Darshil" is GONE
    expect(screen.queryByText('Tell me about Darshil')).toBeNull();
  });
});
