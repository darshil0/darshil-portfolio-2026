export const assistantData = {
  welcomeMessage: "Hi! I'm Darshil's AI assistant. I can help you explore his repositories. What would you like to know?",
  commonQuestions: [
    "What does this repo do?",
    "How do I run it?",
    "What technologies does it use?",
    "How do I test it?",
    "How can I contribute?",
    "Summary in plain English",
    "Important files & entry points"
  ],
  repositories: [
    {
      id: "darshil-portfolio-2026",
      name: "Portfolio 2026",
      description: "A high-fidelity personal portfolio showcasing QA leadership and AI testing expertise.",
      fullPurpose: "This repository hosts Darshil's professional portfolio. It's designed to demonstrate modern web development practices (React 19, Vite 6) alongside robust QA processes (Vitest, Playwright). It serves as a central hub for his experience, projects, and certifications.",
      summary: "In simple terms, this is Darshil's digital resume and showcase. It's a fast, modern website that looks great on all devices and tells the story of his 14+ years in QA engineering.",
      run: "1. Clone the repo\n2. Run `npm install` to install dependencies\n3. Run `npm run dev` to start the local development server at http://localhost:5173",
      tech: ["React 19", "Vite 6", "Tailwind CSS 3", "Lucide React", "Framer Motion", "Vitest", "Playwright"],
      test: "Execute `npm test` for unit and content tests, or `npm run test:e2e` for Playwright end-to-end tests.",
      contribute: "Contributions are welcome! Please check the `CONTRIBUTING.md` file for guidelines on code style and pull request processes.",
      files: "• `src/App.jsx`: Main application shell\n• `src/constants/data.js`: Central data store for content\n• `src/components/Sections/`: UI components for each page section\n• `tests/`: Unit and E2E test suites"
    },
    {
      id: "atlas-strategic-matrix",
      name: "ATLAS Strategic Matrix",
      description: "Enterprise strategic roadmap orchestration platform powered by autonomous agent swarms.",
      fullPurpose: "ATLAS transforms executive strategic directives into executable, topologically sorted quarterly roadmaps. It uses a multi-agent system (Strategist, Analyst, Critic, Architect) powered by Gemini 1.5 Flash to ensure feasibility and risk mitigation.",
      summary: "Think of ATLAS as an AI brain for corporate planning. You give it a big goal, and it breaks it down into a step-by-step plan for the whole year, checking for risks and conflicts along the way.",
      run: "1. Clone the repo\n2. Run `npm install`\n3. Copy `.env.example` to `.env` and add your `VITE_GEMINI_API_KEY`\n4. Run `npm run dev`",
      tech: ["React 19", "Vite 6", "Tailwind CSS v4", "@xyflow/react", "D3.js", "Google Gemini Flash 1.5", "Firestore"],
      test: "Run `npm test` for the complete suite or `npm run test:coverage` for metrics.",
      contribute: "Follow the Conventional Commits specification and review `CONTRIBUTING.md` for style guides.",
      files: "• `src/components/MissionControl.tsx`: Main dashboard\n• `src/services/agentEngine.ts`: AI multi-agent orchestration logic\n• `src/hooks/useTopology.ts`: Graph visualization logic"
    },
    {
      id: "customer-support-agent",
      name: "Customer Support Agent",
      description: "Intelligent multi-agent support system built with Google ADK and Spring Boot.",
      fullPurpose: "A production-ready solution showcasing hierarchical multi-agent orchestration. It includes specialized agents for billing, technical support, and account management, with robust tooling for ticket systems and payments.",
      summary: "This is a smart customer service bot system. It can handle billing, tech support, and refunds automatically by routing questions to the right 'mini-agent' that knows how to fix that specific problem.",
      run: "1. Ensure Java 17+ and Maven are installed\n2. Set `GOOGLE_API_KEY` environment variable\n3. Run `mvn clean install` to build and test\n4. Run `mvn spring-boot:run` to start the backend",
      tech: ["Java 17", "Spring Boot 3.4.5", "Google ADK 1.3.0", "React 19", "Vite 7", "Tailwind CSS 4", "JUnit 5"],
      test: "Run `mvn test` to execute 38+ test methods covering 100% of the tools.",
      contribute: "Fork the repo, create a feature branch, and ensure all tests pass before submitting a PR. Follow Google Java Style Guide.",
      files: "• `src/main/java/.../App.java`: Spring Boot entry point\n• `.../CustomerSupportAgent.java`: Core logic for the 7 support tools\n• `.../AgentConfiguration.java`: Multi-agent hierarchy setup"
    },
    {
      id: "AI-Evaluation-QA",
      name: "AI Evaluation QA",
      description: "Python framework for systematic evaluation and scoring of AI model performance.",
      fullPurpose: "A production-grade framework for evaluating, scoring, and comparing responses from OpenAI, Anthropic, and Azure OpenAI at scale. Features rubric-based scoring and automated defect detection.",
      summary: "This tool tests other AIs. It sends them lots of questions, grades their answers based on accuracy and tone, and flags common mistakes like 'hallucinations' or logic errors.",
      run: "1. Create a Python 3.9+ virtual environment\n2. Run `pip install -r requirements.txt` and `pip install -e .`\n3. Configure `.env` with API keys\n4. Use `ai-eval evaluate --prompts ...` to start an evaluation",
      tech: ["Python 3.9+", "Tiktoken", "Click", "OpenAI/Anthropic SDKs", "Docker", "Makefile"],
      test: "Run `make test` to execute the suite (maintains 87% coverage).",
      contribute: "Review `CONTRIBUTING.md`. New code must maintain at least 80% coverage.",
      files: "• `main.py`: CLI entry point\n• `evaluation/scoring_engine.py`: Logic for grading AI responses\n• `evaluation/report_generator.py`: Generates the HTML dashboards"
    },
    {
      id: "Gemini-Pulsar-Workspace",
      name: "Gemini Pulsar Workspace",
      description: "AI dashboard with email assistant, image studio, and real-time vocal workspace.",
      fullPurpose: "A high-performance workspace featuring low-latency voice interaction, intelligent email categorization/drafting, and vision-guided image remixing.",
      summary: "A futuristic workspace where you can talk to an AI in real-time with voice, get help drafting emails, and create art just by describing what you want.",
      run: "1. Set `GEMINI_API_KEY` in your environment\n2. Run `npm install` and `npm run dev`",
      tech: ["React 18", "Vite", "Tailwind CSS 4", "Framer Motion", "D3.js", "Google Gemini 2.0 Flash Exp"],
      test: "Standard React testing patterns apply; run `npm test` if available.",
      contribute: "Standard GitHub PR flow. Ensure API security by not committing raw keys.",
      files: "• `server.ts`: Secure API proxy for Gemini\n• `src/hooks/useAudioLive.ts`: Low-latency voice streaming logic\n• `src/components/workspaces/EmailHelper.tsx`: AI email assistant UI"
    },
    {
      id: "mindful-coach-app",
      name: "Mindful Coach",
      description: "Minimalist health coaching app for wellness tracking and AI-powered insights.",
      fullPurpose: "A calm, local-first application designed for mindful wellness. Includes personalized onboarding, daily energy scoring, and real-time coaching with Gemini AI.",
      summary: "A wellness app that helps you stay mindful. It tracks your sleep and energy, and gives you science-backed advice through an AI coach that remembers your goals.",
      run: "1. Run `npm install`\n2. Copy `.env.example` to `.env.local` and add your Gemini API key\n3. Run `npm run dev`",
      tech: ["React 19", "TypeScript", "Tailwind CSS 4", "Lucide React", "Recharts", "Google Gemini 3 Flash"],
      test: "Recommended: `npm test`. Supports Accessibility (WCAG AA) and responsive audits.",
      contribute: "Feedback and contributions are welcome via GitHub issues.",
      files: "• `src/services/geminiService.ts`: AI coaching logic\n• `src/components/Dashboard.tsx`: Main wellness metrics view\n• `src/components/Onboarding.tsx`: Goal-setting flow"
    }
  ]
};
