import React, { useEffect, useRef, useState } from "react";
import { X, Bot, Mic, ChevronRight, Send } from "lucide-react";
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
  const [typedInput, setTypedInput] = useState("");

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
    isMountedRef.current = true;
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

  const formatAnswer = (answer) => {
    if (answer == null) return "";
    if (typeof answer === "string") return answer;
    if (Array.isArray(answer)) {
      return answer
        .map((item) =>
          typeof item === "object" && item !== null
            ? `${item.path} — ${item.purpose}`
            : String(item),
        )
        .join("\n");
    }
    return String(answer);
  };

  const limitLines = (text, maxLines = 10) => {
    const safe = typeof text === "string" ? text : formatAnswer(text);
    if (!safe) return "";
    const lines = safe.split(/\r?\n/);
    if (lines.length <= maxLines) return safe;
    return lines.slice(0, maxLines).join("\n") + "\n... (truncated)";
  };

  const speakText = (text) => {
    if (isTypeOnly) return;
    if (typeof window !== "undefined" && window.speechSynthesis) {
      try {
        window.speechSynthesis.cancel();
        const safeText = formatAnswer(text).replace(/<[^>]*>/g, "");
        const utterance = new SpeechSynthesisUtterance(safeText);
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

  const scoreMatch = (query, candidate) => {
    const candidateLower = candidate.toLowerCase();
    if (!query) return 0;
    if (candidateLower === query) return 100;
    if (candidateLower.includes(query)) return 80;
    if (query.includes(candidateLower)) return 70;

    const stopwords = new Set([
      "the", "a", "an", "is", "are", "do", "does", "did", "how", "what",
      "whats", "where", "who", "i", "me", "his", "her", "he", "she",
      "tell", "about", "have", "has", "this", "that", "it", "to", "in",
      "on", "of", "and", "or", "for", "with", "can", "could", "would",
      "you", "please", "show", "list", "give",
    ]);
    const queryTokens = query
      .split(/[^a-z0-9]+/)
      .filter((t) => t && !stopwords.has(t));
    const candidateTokens = candidateLower
      .split(/[^a-z0-9]+/)
      .filter((t) => t && !stopwords.has(t));
    if (queryTokens.length === 0) return 0;

    let hits = 0;
    for (const token of queryTokens) {
      if (candidateTokens.some((c) => c === token || c.includes(token) || token.includes(c))) {
        hits++;
      }
    }
    return Math.round((hits / queryTokens.length) * 60);
  };

  const processInput = (inputText, isVoice = false) => {
    const query = inputText.toLowerCase().trim();

    let bestPersonal = null;
    let bestPersonalScore = 0;
    for (const q of assistantData.personalQuestions) {
      const score = scoreMatch(query, q);
      if (score > bestPersonalScore) {
        bestPersonalScore = score;
        bestPersonal = q;
      }
    }

    let bestRepo = null;
    let bestRepoScore = 0;
    for (const r of assistantData.repositories) {
      const score = scoreMatch(query, r.name);
      if (score > bestRepoScore) {
        bestRepoScore = score;
        bestRepo = r;
      }
    }

    let bestCommon = null;
    let bestCommonScore = 0;
    for (const q of assistantData.commonQuestions) {
      const score = scoreMatch(query, q);
      if (score > bestCommonScore) {
        bestCommonScore = score;
        bestCommon = q;
      }
    }

    const threshold = 40;
    const candidates = [
      { type: "personal", item: bestPersonal, score: bestPersonalScore },
      { type: "repo", item: bestRepo, score: bestRepoScore },
      {
        type: "common",
        item: bestCommon,
        score: selectedRepoRef.current ? bestCommonScore : 0,
      },
    ];
    candidates.sort((a, b) => b.score - a.score);
    const winner = candidates[0];

    if (winner && winner.score >= threshold) {
      if (winner.type === "personal") handleQuestion(winner.item);
      else if (winner.type === "repo") handleRepoSelect(winner.item);
      else handleQuestion(winner.item);
      return;
    }

    const feedbackMessage = isVoice
      ? `I heard: "${inputText}". Please select or ask one of the options shown on screen.`
      : `I received: "${inputText}". Please select or ask one of the options shown on screen.`;

    appendMessagePair(inputText, feedbackMessage);
  };

  const handleVoiceInput = (transcript) => {
    processInput(transcript, true);
  };

  const handleTextSubmit = (e) => {
    e.preventDefault();
    if (!typedInput.trim()) return;
    const input = typedInput.trim();
    setTypedInput("");
    processInput(input, false);
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
    const formatted = formatAnswer(assistantContent);
    const limitedAssistantContent = isTypeOnly
      ? limitLines(formatted, 10)
      : formatted;
    setMessages((prev) => [
      ...prev,
      { role: "user", content: userContent },
      { role: "assistant", content: limitedAssistantContent },
    ]);
    if (!isTypeOnly) {
      speakText(formatted);
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

    const formattedAnswer = formatAnswer(answer);

    setMessages((prev) => [...prev, { role: "user", content: question }]);
    setIsTyping(true);

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    typingTimeoutRef.current = setTimeout(() => {
      if (!isMountedRef.current) return;
      const limitedAnswer = isTypeOnly
        ? limitLines(formattedAnswer, 10)
        : formattedAnswer;
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: limitedAnswer },
      ]);
      setIsTyping(false);
      if (!isTypeOnly) {
        speakText(formattedAnswer);
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

            <div className="mt-4">
              {isTypeOnly && (
                <div className="px-2 mb-1.5 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-[#00685f]/50 dark:bg-[#6bd8cb]/50 rounded-full animate-pulse" />
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                    Type-only Mode Active
                  </span>
                </div>
              )}

              <form
                onSubmit={handleTextSubmit}
                className="flex items-center gap-3 px-2"
              >
                <div className="flex-1 relative flex items-center">
                  {isListening ? (
                    <div className="flex-1 h-10 bg-slate-200 dark:bg-slate-700 rounded-full flex items-center px-4 overflow-hidden relative">
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                          <div
                            key={i}
                            className="w-0.5 h-3 bg-[#00685f] dark:bg-[#6bd8cb] animate-pulse"
                            style={{ animationDelay: `${i * 0.1}s` }}
                          />
                        ))}
                      </div>
                      <span className="ml-3 text-[10px] text-slate-400 italic">
                        Listening...
                      </span>
                    </div>
                  ) : (
                    <div className="w-full relative flex items-center">
                      <input
                        type="text"
                        value={typedInput}
                        onChange={(e) => setTypedInput(e.target.value)}
                        placeholder="Ask Jules a question..."
                        className="w-full h-10 pl-4 pr-10 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-full text-xs text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#00685f] dark:focus:ring-[#6bd8cb] focus:border-transparent transition-all"
                      />
                      <button
                        type="submit"
                        disabled={!typedInput.trim()}
                        className="absolute right-2 p-1.5 text-slate-400 hover:text-[#00685f] dark:hover:text-[#6bd8cb] disabled:opacity-30 disabled:hover:text-slate-400 transition-colors"
                        aria-label="Send question"
                      >
                        <Send className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>

                <button
                  type="button"
                  onClick={
                    isTypeOnly ? () => setIsTypeOnly(false) : startListening
                  }
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors shrink-0 ${
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
                  type="button"
                  onClick={() => setIsTypeOnly((prev) => !prev)}
                  className={`px-2.5 py-1 text-[9px] font-bold uppercase rounded-md border tracking-wider transition-colors shrink-0 ${
                    isTypeOnly
                      ? "bg-[#00685f] text-white border-transparent animate-pulse"
                      : "bg-transparent text-slate-400 border-slate-300 dark:border-slate-700 hover:text-slate-600 dark:hover:text-slate-200"
                  }`}
                  aria-label="Toggle Type-only mode"
                >
                  Type-Only
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
