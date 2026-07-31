import React, { useEffect, useRef, useState } from "react";
import { X, Bot, Mic, ChevronRight } from "lucide-react";
import { assistantData } from "../../constants/assistantData";

export default function VoiceAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTypeOnly, setIsTypeOnly] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [recognitionError, setRecognitionError] = useState(null);
  const [messages, setMessages] = useState([
    { role: "assistant", content: assistantData.welcomeMessage },
  ]);
  const [selectedRepo, setSelectedRepo] = useState(null);
  const [mode, setMode] = useState("menu");
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef(null);
  const typingTimeoutRef = useRef(null);
  const selectedRepoRef = useRef(null);
  const isMountedRef = useRef(true);

  useEffect(() => {
    selectedRepoRef.current = selectedRepo;
  }, [selectedRepo]);

  useEffect(() => {
    if (isOpen && !isTypeOnly) {
      speakText(assistantData.welcomeMessage);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isTypeOnly && typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
  }, [isTypeOnly]);

  useEffect(() => {
    return () => {
      isMountedRef.current = false;
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
      }
      if (typeof window !== "undefined" && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen, isTyping]);

  const limitLines = (text, maxLines = 10) => {
    if (!text) return "";
    const lines = text.split(/\r?\n/);
    if (lines.length <= maxLines) return text;
    return lines.slice(0, maxLines).join("\n") + "\n... (truncated)";
  };

  const speakText = (text) => {
    if (isTypeOnly) return;
    if (typeof window !== "undefined" && window.speechSynthesis) {
      try {
        window.speechSynthesis.cancel();
        const cleanText = text.replace(/<[^>]*>/g, "");
        const utterance = new SpeechSynthesisUtterance(cleanText);
        utterance.onerror = () => {
          setIsTypeOnly(true);
        };
        window.speechSynthesis.speak(utterance);
      } catch (e) {
        setIsTypeOnly(true);
      }
    } else {
      setIsTypeOnly(true);
    }
  };

  const handleVoiceInput = (transcript) => {
    const query = transcript.toLowerCase().trim();

    const matchedPersonal = assistantData.personalQuestions.find(
      (q) => q.toLowerCase().includes(query) || query.includes(q.toLowerCase()),
    );
    if (matchedPersonal) {
      handleQuestion(matchedPersonal);
      return;
    }

    const matchedRepo = assistantData.repositories.find(
      (r) =>
        r.name.toLowerCase().includes(query) ||
        query.includes(r.name.toLowerCase()),
    );
    if (matchedRepo) {
      handleRepoSelect(matchedRepo);
      return;
    }

    const matchedCommon = assistantData.commonQuestions.find(
      (q) => q.toLowerCase().includes(query) || query.includes(q.toLowerCase()),
    );
    if (matchedCommon && selectedRepoRef.current) {
      handleQuestion(matchedCommon);
      return;
    }

    appendMessagePair(
      transcript,
      `I heard: "${transcript}". Please select or ask one of the options shown on screen.`,
    );
  };

  const startListening = () => {
    if (typeof window === "undefined") return;
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setIsTypeOnly(true);
      return;
    }

    try {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = "en-US";

      recognition.onstart = () => {
        setIsListening(true);
        setRecognitionError(null);
      };

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setIsListening(false);
        handleVoiceInput(transcript);
      };

      recognition.onerror = (event) => {
        setRecognitionError(event.error);
        setIsListening(false);
        setIsTypeOnly(true);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.start();
    } catch (e) {
      setIsTypeOnly(true);
    }
  };

  const appendMessagePair = (userContent, assistantContent) => {
    const limitedAssistantContent = isTypeOnly
      ? limitLines(assistantContent, 10)
      : assistantContent;
    setMessages((prev) => [
      ...prev,
      { role: "user", content: userContent },
      { role: "assistant", content: limitedAssistantContent },
    ]);
    if (!isTypeOnly) {
      speakText(assistantContent);
    }
  };

  const handleRepoSelect = (repo) => {
    setSelectedRepo(repo);
    setMode("projects");
    appendMessagePair(`Tell me about ${repo.name}`, repo.description);
  };

  const handleAboutSelect = () => {
    setMode("about");
    appendMessagePair(
      "Tell me about Darshil",
      "I'd love to! Darshil is a seasoned QA leader with over 14 years of experience. You can ask me about his background, strengths, experience, or certifications.",
    );
  };

  const handleQuestion = (question) => {
    let answer = "";

    if (assistantData.personalQuestions.includes(question)) {
      switch (question) {
        case "Tell me about Darshil's background":
          answer = assistantData.personal.background;
          break;
        case "What are his core strengths?":
          answer = assistantData.personal.strengths;
          break;
        case "Where has he worked?":
          answer = assistantData.personal.experience;
          break;
        case "What certifications does he have?":
          answer = assistantData.personal.certifications;
          break;
        default:
          answer =
            "I'm not sure about that. Try one of the suggested questions!";
      }
    } else {
      const repo = selectedRepoRef.current;

      if (!repo) {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: "Please select a repository first!" },
        ]);
        return;
      }

      switch (question) {
        case "What does this repo do?":
          answer = repo.fullPurpose;
          break;
        case "How do I run it?":
          answer = repo.run;
          break;
        case "What technologies does it use?":
          answer = `It uses: ${repo.tech.join(", ")}.`;
          break;
        case "How do I test it?":
          answer = repo.test;
          break;
        case "How can I contribute?":
          answer = repo.contribute;
          break;
        case "Summary in plain English":
          answer = repo.summary;
          break;
        case "Important files & entry points":
          answer = repo.files;
          break;
        default:
          answer =
            "I'm not sure about that. Try one of the suggested questions!";
      }
    }

    setMessages((prev) => [...prev, { role: "user", content: question }]);
    setIsTyping(true);

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    typingTimeoutRef.current = setTimeout(() => {
      if (!isMountedRef.current) return;
      const limitedAnswer = isTypeOnly ? limitLines(answer, 10) : answer;
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: limitedAnswer },
      ]);
      setIsTyping(false);
      if (!isTypeOnly) {
        speakText(answer);
      }
    }, 600);
  };

  const resetAssistant = () => {
    setSelectedRepo(null);
    setMode("menu");
    setIsTyping(false);

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
      typingTimeoutRef.current = null;
    }

    const welcome = isTypeOnly
      ? limitLines(assistantData.welcomeMessage, 10)
      : assistantData.welcomeMessage;
    setMessages([{ role: "assistant", content: welcome }]);
    if (!isTypeOnly) {
      speakText(assistantData.welcomeMessage);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] font-body">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="relative group flex items-center justify-center w-16 h-16 bg-[#00685f] dark:bg-[#6bd8cb] rounded-full shadow-2xl hover:scale-110 transition-all duration-300"
          aria-label="Open Assistant"
        >
          <div className="absolute inset-0 rounded-full bg-[#00685f] dark:bg-[#6bd8cb] animate-ping opacity-20" />
          <Bot className="w-8 h-8 text-white dark:text-slate-900" />
          <div className="absolute right-20 px-4 py-2 bg-slate-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Need help? Ask me anything!
          </div>
        </button>
      )}

      {isOpen && (
        <div className="w-[380px] h-[600px] bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-10 duration-300">
          <div className="p-4 bg-[#00685f] dark:bg-[#6bd8cb] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6 text-white dark:text-slate-900" />
              </div>
              <div>
                <h3 className="font-headline font-bold text-white dark:text-slate-900">
                  Jules Assistant
                </h3>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                  <span className="text-[10px] text-white/80 dark:text-slate-900/80 uppercase tracking-widest font-bold">
                    Online
                  </span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-black/10 rounded-full transition-colors"
              aria-label="Close Assistant"
            >
              <X className="w-5 h-5 text-white dark:text-slate-900" />
            </button>
          </div>

          <div
            className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-slate-200 dark:scrollbar-thumb-slate-800"
            aria-live="polite"
          >
            {messages.map((msg, i) => (
              <div
                key={`${msg.role}-${i}`}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  tabIndex={msg.role === "assistant" ? 0 : undefined}
                  className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                    msg.role === "user"
                      ? "bg-[#00685f] text-white rounded-tr-none"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-tl-none focus-visible:ring-2 focus-visible:ring-[#00685f] outline-none"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded-2xl rounded-tl-none">
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" />
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-800">
            {mode === "menu" ? (
              <div className="space-y-3">
                <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold mb-2">
                  How can I help you today?
                </p>
                <div className="grid grid-cols-1 gap-2">
                  <button
                    onClick={() => setMode("projects_list")}
                    className="flex items-center justify-between p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl hover:border-[#00685f] dark:hover:border-[#6bd8cb] focus-visible:ring-2 focus-visible:ring-[#00685f] outline-none transition-colors group"
                  >
                    <span className="text-xs font-bold dark:text-slate-300">
                      Explore Repositories
                    </span>
                    <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-[#00685f] dark:group-hover:text-[#6bd8cb]" />
                  </button>
                  <button
                    onClick={handleAboutSelect}
                    className="flex items-center justify-between p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl hover:border-[#00685f] dark:hover:border-[#6bd8cb] focus-visible:ring-2 focus-visible:ring-[#00685f] outline-none transition-colors group"
                  >
                    <span className="text-xs font-bold dark:text-slate-300">
                      About Darshil&apos;s Background
                    </span>
                    <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-[#00685f] dark:group-hover:text-[#6bd8cb]" />
                  </button>
                </div>
              </div>
            ) : mode === "projects_list" ? (
              <div className="space-y-3">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">
                    Select a Repository
                  </p>
                  <button
                    onClick={resetAssistant}
                    className="text-[10px] text-[#00685f] dark:text-[#6bd8cb] font-bold uppercase hover:underline"
                  >
                    Back
                  </button>
                </div>
                <div className="grid grid-cols-1 gap-2 max-h-[150px] overflow-y-auto pr-2">
                  {assistantData.repositories.map((repo) => (
                    <button
                      key={repo.id}
                      onClick={() => handleRepoSelect(repo)}
                      className="flex items-center justify-between p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl hover:border-[#00685f] dark:hover:border-[#6bd8cb] focus-visible:ring-2 focus-visible:ring-[#00685f] outline-none transition-colors group text-left"
                    >
                      <span className="text-xs font-bold dark:text-slate-300">
                        {repo.name}
                      </span>
                      <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-[#00685f] dark:group-hover:text-[#6bd8cb]" />
                    </button>
                  ))}
                </div>
              </div>
            ) : mode === "projects" ? (
              <div className="space-y-3">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">
                    Asking about: {selectedRepo?.name}
                  </p>
                  <button
                    onClick={() => setMode("projects_list")}
                    className="text-[10px] text-[#00685f] dark:text-[#6bd8cb] font-bold uppercase hover:underline"
                  >
                    Change Repo
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {assistantData.commonQuestions.map((q, i) => (
                    <button
                      key={i}
                      onClick={() => handleQuestion(q)}
                      className="px-3 py-1.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-full text-[11px] font-medium hover:border-[#00685f] dark:hover:border-[#6bd8cb] hover:text-[#00685f] dark:hover:text-[#6bd8cb] focus-visible:ring-2 focus-visible:ring-[#00685f] outline-none transition-all"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">
                    About Darshil Shah
                  </p>
                  <button
                    onClick={resetAssistant}
                    className="text-[10px] text-[#00685f] dark:text-[#6bd8cb] font-bold uppercase hover:underline"
                  >
                    Main Menu
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {assistantData.personalQuestions.map((q, i) => (
                    <button
                      key={i}
                      onClick={() => handleQuestion(q)}
                      className="px-3 py-1.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-full text-[11px] font-medium hover:border-[#00685f] dark:hover:border-[#6bd8cb] hover:text-[#00685f] dark:hover:text-[#6bd8cb] focus-visible:ring-2 focus-visible:ring-[#00685f] outline-none transition-all"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-4 flex items-center gap-3 px-2">
              {isTypeOnly ? (
                <div className="flex-1 h-10 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center px-4 border border-dashed border-slate-300 dark:border-slate-700">
                  <span className="text-[10px] text-slate-500 font-bold tracking-wider uppercase">
                    Type-only Mode Active
                  </span>
                </div>
              ) : (
                <div className="flex-1 h-10 bg-slate-200 dark:bg-slate-700 rounded-full flex items-center px-4 overflow-hidden relative">
                  <div
                    className={`flex items-center gap-1 ${isListening ? "" : "opacity-40"}`}
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                      <div
                        key={i}
                        className={`w-0.5 h-3 bg-[#00685f] dark:bg-[#6bd8cb] ${isListening ? "animate-pulse" : ""}`}
                        style={{ animationDelay: `${i * 0.1}s` }}
                      />
                    ))}
                  </div>
                  <span className="ml-3 text-[10px] text-slate-400 italic">
                    {isListening ? "Listening..." : "Voice mode ready..."}
                  </span>
                </div>
              )}

              <button
                onClick={
                  isTypeOnly ? () => setIsTypeOnly(false) : startListening
                }
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                  isTypeOnly
                    ? "bg-slate-100 dark:bg-slate-700 text-slate-400 hover:text-[#00685f] hover:bg-slate-200"
                    : isListening
                      ? "bg-red-500 text-white animate-pulse hover:bg-red-600"
                      : "bg-[#00685f]/10 dark:bg-[#6bd8cb]/10 text-[#00685f] dark:text-[#6bd8cb] hover:bg-[#00685f]/20"
                }`}
                aria-label={
                  isTypeOnly
                    ? "Enable Voice input"
                    : isListening
                      ? "Stop listening"
                      : "Voice input"
                }
              >
                <Mic className="w-5 h-5" />
              </button>

              <button
                onClick={() => setIsTypeOnly((prev) => !prev)}
                className={`px-2.5 py-1 text-[9px] font-bold uppercase rounded-md border tracking-wider transition-colors ${
                  isTypeOnly
                    ? "bg-[#00685f] text-white border-transparent animate-pulse"
                    : "bg-transparent text-slate-400 border-slate-300 dark:border-slate-700 hover:text-slate-600 dark:hover:text-slate-200"
                }`}
                aria-label="Toggle Type-only mode"
              >
                Type-Only
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
