export const assistantData = {
  welcomeMessage:
    "Hi! I'm Darshil's AI assistant. I can help you explore his repositories and professional background. What would you like to know?",
  commonQuestions: [
    "What does this repo do?",
    "How do I run it?",
    "What technologies does it use?",
    "How do I test it?",
    "How can I contribute?",
    "Summary in plain English",
    "Important files & entry points",
  ],
  personalQuestions: [
    "Tell me about Darshil's background",
    "What are his core strengths?",
    "Where has he worked?",
    "What certifications does he have?",
  ],
  personal: {
    background:
      "Darshil is a Global Healthcare QA Leader and SDET with over 14 years of experience. He specializes in maintaining a production defect escape rate below 1%, building agentic AI systems, enterprise-grade test automation frameworks, and leading global QA teams for Fortune 500 companies.",
    strengths:
      "His core strengths include QA leadership, test automation reliability, agentic AI development, healthcare compliance (HIPAA, FDA), and scaling quality for mission-critical applications. He is experienced with Playwright, Selenium, and Appium.",
    experience: [
      "Phynix — IT QA Analyst",
      "Accenture — QA Lead for Kaiser Permanente",
      "Infosys — SDET for Prime Therapeutics",
      "TCS — Automation Engineer for Sony Pictures",
      "Eternal Web — QA Engineer",
    ],
    certifications:
      "He holds professional certifications across AI/ML, cloud, and Agile from providers like Anthropic, IBM, Google, Microsoft, AWS, and PMI, with a focus on agentic AI and prompt engineering.",
  },
  repositories: [
    {
      id: "darshil-portfolio-2026",
      name: "Portfolio 2026",
      description:
        "A high-fidelity personal portfolio showcasing QA leadership and AI testing expertise.",
      fullPurpose:
        "This repository hosts Darshil's professional portfolio. It is designed to demonstrate modern web development practices alongside QA processes and serves as a central hub for his experience, projects, and certifications.",
      summary:
        "A modern personal website that acts as a digital resume and showcase.",
      run: [
        "Clone the repo",
        "Run `npm install`",
        "Run `npm run dev`",
      ],
      tech: ["React", "Vite", "Tailwind CSS", "Lucide React", "Framer Motion", "Vitest", "Playwright"],
      test: ["Run `npm test`", "Run `npm run test:e2e`"],
      contribute:
        "Contributions are welcome. Check `CONTRIBUTING.md` for code style and pull request guidelines.",
      files: [
        { path: "src/App.jsx", purpose: "Main application shell" },
        { path: "src/constants/data.js", purpose: "Central data store" },
        { path: "src/components/Sections/", purpose: "Page sections" },
        { path: "tests/", purpose: "Unit and E2E test suites" },
      ],
    },
    {
      id: "nourishbot-ai-coach",
      name: "NourishBot AI Coach",
      description:
        "A multi-agent AI nutrition coach powered by Google Gemini.",
      fullPurpose:
        "A nutrition assistant that analyzes food images and generates nutritional insights.",
      summary:
        "Helps users understand their food by turning photos into nutrition guidance.",
      run: [
        "Clone the repo",
        "Run `npm install`",
        "Set the required Gemini API key",
        "Run `npm run dev`",
      ],
      tech: ["TypeScript"],
      test: "Run the project tests if available.",
      contribute:
        "Open an issue or submit a pull request following the repository guidelines.",
      files: [
        { path: "src/", purpose: "Main app source" },
        { path: "README.md", purpose: "Setup and usage notes" },
      ],
    },
    {
      id: "colorjoy-ai",
      name: "ColorJoy AI",
      description:
        "A personalized children's coloring book generator powered by Google Gemini.",
      fullPurpose:
        "An AI tool that generates custom coloring books for children.",
      summary:
        "Creates personalized coloring books with AI and packages them into polished PDF layouts.",
      run: [
        "Clone the repo",
        "Run `npm install`",
        "Configure the required API key",
        "Run `npm run dev`",
      ],
      tech: ["TypeScript"],
      test: "Use the repository test script if provided.",
      contribute:
        "Follow the repo contribution instructions and submit a pull request.",
      files: [
        { path: "src/", purpose: "Application source" },
        { path: "README.md", purpose: "Setup instructions" },
      ],
    },
    {
      id: "map-genie-ai",
      name: "Map-Genie AI",
      description: "An AI-powered travel planning web application.",
      fullPurpose:
        "A travel-planning web app that helps users organize destinations, plans, and trip details.",
      summary: "Helps users plan trips with AI assistance.",
      run: [
        "Clone the repo",
        "Run `npm install`",
        "Configure environment variables if needed",
        "Run `npm run dev`",
      ],
      tech: ["TypeScript"],
      test: "Run the project tests if defined in package scripts.",
      contribute: "Use the standard GitHub PR workflow.",
      files: [
        { path: "src/", purpose: "Main application code" },
        { path: "README.md", purpose: "Project overview" },
      ],
    },
    {
      id: "qa-architect-career-intelligence-dashboard",
      name: "QA Architect Career Intelligence Dashboard",
      description:
        "Career intelligence hub for senior QA/SDET architects.",
      fullPurpose:
        "A career management dashboard for tracking applications, tailoring resumes, and managing job search workflows.",
      summary: "A job-search command center for senior QA professionals.",
      run: [
        "Clone the repo",
        "Run `npm install`",
        "Set up required environment variables",
        "Run `npm run dev`",
      ],
      tech: ["TypeScript"],
      test: "Follow the repository's available test scripts.",
      contribute:
        "Submit changes through pull requests and keep code aligned with the dashboard architecture.",
      files: [
        { path: "src/", purpose: "App source" },
        { path: "README.md", purpose: "Usage details" },
      ],
    },
    {
      id: "kronos-ai",
      name: "Kronos AI",
      description: "An AI-assisted calendar app for scheduling and event handling.",
      fullPurpose: "An AI-assisted calendar application for scheduling and event handling.",
      summary: "Helps manage calendars and events using AI.",
      run: [
        "Clone the repo",
        "Run `npm install`",
        "Configure environment variables",
        "Run `npm run dev`",
      ],
      tech: ["TypeScript"],
      test: "Run the repository test scripts if available.",
      contribute: "Use the usual GitHub pull request process.",
      files: [
        { path: "src/", purpose: "Application source" },
        { path: "README.md", purpose: "Documentation" },
      ],
    },
    {
      id: "dineai",
      name: "DineAI",
      description:
        "An AI-powered restaurant recommendation engine using specialized agents.",
      fullPurpose:
        "A restaurant recommendation engine that uses multi-agent AI coordination to suggest places to eat in real time.",
      summary:
        "Helps users decide where to eat by combining recommendations from several AI agents.",
      run: [
        "Clone the repo",
        "Run `npm install`",
        "Set the required API key",
        "Run `npm run dev`",
      ],
      tech: ["TypeScript"],
      test: "Use the available repository test commands.",
      contribute: "Create a branch, make changes, and open a pull request.",
      files: [
        { path: "src/", purpose: "App source" },
        { path: "README.md", purpose: "Project instructions" },
      ],
    },
    {
      id: "splitsmart-ai",
      name: "SplitSmart AI",
      description: "A smart bill-splitting app.",
      fullPurpose: "An app that helps users split shared expenses and bills.",
      summary: "Makes splitting bills easier for groups.",
      run: [
        "Clone the repo",
        "Run `npm install`",
        "Run `npm run dev`",
      ],
      tech: ["TypeScript"],
      test: "Run the project tests if defined.",
      contribute: "Follow standard pull request practices.",
      files: [
        { path: "src/", purpose: "Application files" },
        { path: "README.md", purpose: "Instructions" },
      ],
    },
    {
      id: "ai-financial-auditor",
      name: "AI Financial Auditor",
      description:
        "Transforms raw earnings PDFs into actionable financial insights.",
      fullPurpose:
        "A financial analysis tool that extracts insights from earnings PDFs and presents structured intelligence.",
      summary:
        "Reads earnings reports and turns them into useful financial insights.",
      run: [
        "Clone the repo",
        "Run `npm install`",
        "Configure the API key",
        "Run `npm run dev`",
      ],
      tech: ["TypeScript"],
      test: "Use the repository test scripts if present.",
      contribute: "Open issues and pull requests through the normal workflow.",
      files: [
        { path: "src/", purpose: "App source" },
        { path: "README.md", purpose: "Project guide" },
      ],
    },
    {
      id: "ai-evaluation-qa",
      name: "AI Evaluation QA",
      description:
        "Python framework for scoring and comparing AI model performance.",
      fullPurpose:
        "A Python framework for evaluating AI model responses with rubric-based scoring and hallucination detection.",
      summary: "Tests AIs and scores how well they respond.",
      run: [
        "Create a Python environment",
        "Install dependencies",
        "Configure environment variables",
        "Run the evaluation commands in the README",
      ],
      tech: ["Python", "OpenAI SDK", "Anthropic SDK", "Docker"],
      test: "Run the repo test suite using its Python test command.",
      contribute: "Follow the contributing instructions in the repository.",
      files: [
        { path: "main.py", purpose: "Entry point" },
        { path: "evaluation/", purpose: "Evaluation logic" },
      ],
    },
    {
      id: "ai-meme-generator",
      name: "AI Meme Generator",
      description:
        "An Angular app that generates memes with Google Gemini captions.",
      fullPurpose: "An AI meme creation app that generates captions and layouts for images.",
      summary: "Helps you make memes with AI in a few clicks.",
      run: [
        "Clone the repo",
        "Run `npm install`",
        "Set up the required API key",
        "Run `npm run dev`",
      ],
      tech: ["TypeScript"],
      test: "Run the project tests if available.",
      contribute: "Create a PR after testing your changes.",
      files: [
        { path: "src/", purpose: "Angular app source" },
        { path: "README.md", purpose: "Usage instructions" },
      ],
    },
    {
      id: "socratic-math-tutor",
      name: "Socratic Math Tutor",
      description:
        "A compassionate AI math tutor that guides students step by step.",
      fullPurpose:
        "An AI tutoring app that teaches math by guiding students step by step instead of giving direct answers.",
      summary:
        "Helps people solve math problems by asking smart questions and giving hints.",
      run: [
        "Clone the repo",
        "Run `npm install`",
        "Set the API key",
        "Run `npm run dev`",
      ],
      tech: ["TypeScript"],
      test: "Run the repository tests if configured.",
      contribute: "Contribute through GitHub pull requests.",
      files: [
        { path: "src/", purpose: "Application code" },
        { path: "README.md", purpose: "Setup details" },
      ],
    },
    {
      id: "enterprise-prompt-engineering-portal-2025",
      name: "Enterprise Prompt Engineering Portal 2025",
      description:
        "An interactive AI-powered manual for modern prompt engineering.",
      fullPurpose:
        "A portal for learning and comparing prompt engineering techniques.",
      summary: "A guide and toolkit for writing better prompts.",
      run: [
        "Clone the repo",
        "Run `npm install`",
        "Run `npm run dev`",
      ],
      tech: ["TypeScript"],
      test: "Run repository tests if included.",
      contribute: "Submit a PR following the repo guidelines.",
      files: [
        { path: "src/", purpose: "Main source" },
        { path: "README.md", purpose: "Documentation" },
      ],
    },
    {
      id: "deep-research-agent",
      name: "Deep Research Agent",
      description:
        "An autonomous research agent that plans, searches, fetches, and synthesizes reports with citations.",
      fullPurpose:
        "A research automation agent that gathers information and produces cited reports.",
      summary: "Acts like an autonomous research assistant.",
      run: [
        "Clone the repo",
        "Install dependencies",
        "Add API keys if required",
        "Run the app from the README instructions",
      ],
      tech: ["TypeScript"],
      test: "Use the project test workflow if available.",
      contribute: "Follow the repository's contribution guide.",
      files: [
        { path: "src/", purpose: "Core code" },
        { path: "README.md", purpose: "Setup info" },
      ],
    },
    {
      id: "customer-support-agent",
      name: "Customer Support Agent",
      description:
        "A production-ready customer support solution built with Google ADK for Java.",
      fullPurpose:
        "A customer-support platform that routes issues to specialized agents for handling different support needs.",
      summary:
        "A smart support system that can answer different types of customer questions automatically.",
      run: [
        "Install Java and Maven",
        "Configure API keys",
        "Run `mvn clean install`",
        "Run `mvn spring-boot:run`",
      ],
      tech: ["Java 17", "Spring Boot 3.4.5", "Google ADK 1.3.0", "React 19"],
      test: "Follow the repository test instructions.",
      contribute: "Open a PR after validating your changes.",
      files: [
        { path: "src/", purpose: "Project code" },
        { path: "README.md", purpose: "Instructions" },
      ],
    },
    {
      id: "mindful-coach-app",
      name: "Mindful Coach App",
      description:
        "A calm, minimalist health coaching application for wellness and goal tracking.",
      fullPurpose:
        "A wellness app that provides coaching, goal tracking, and health insights.",
      summary:
        "Helps users build better health habits with a calm experience.",
      run: [
        "Clone the repo",
        "Run `npm install`",
        "Add the Gemini key",
        "Run `npm run dev`",
      ],
      tech: ["React 19", "TypeScript", "Google Gemini 2.0 Flash", "Recharts"],
      test: "Run project tests if configured.",
      contribute: "Use GitHub issues and pull requests.",
      files: [
        { path: "src/", purpose: "App code" },
        { path: "README.md", purpose: "Usage guide" },
      ],
    },
    {
      id: "darshil0-readme",
      name: "darshil0 (README)",
      description:
        "A profile README summarizing Darshil's QA experience and professional focus.",
      fullPurpose:
        "A profile README that summarizes Darshil's QA experience and professional focus.",
      summary: "A GitHub profile overview rather than a full app.",
      run: ["No runtime; this is a profile README."],
      tech: [],
      test: "Not applicable.",
      contribute: "Not applicable.",
      files: [{ path: "README.md", purpose: "Profile content" }],
    },
    {
      id: "gemini-pulsar-workspace",
      name: "Gemini Pulsar Workspace",
      description:
        "A high-performance AI dashboard featuring email, image, and voice capabilities.",
      fullPurpose:
        "An AI workspace with email help, image generation, and live voice interaction.",
      summary:
        "A futuristic AI dashboard for talking, writing, and creating.",
      run: [
        "Set the API key",
        "Run `npm install`",
        "Run `npm run dev`",
      ],
      tech: ["React 19", "Google Gemini 2.0 Flash", "Framer Motion", "TypeScript"],
      test: "Run the available test scripts if defined.",
      contribute: "Follow the repository PR process.",
      files: [
        { path: "src/", purpose: "UI source" },
        { path: "server.ts", purpose: "Backend proxy" },
      ],
    },
    {
      id: "atlas-strategic-matrix",
      name: "ATLAS Strategic Matrix",
      description:
        "A multi-agent AI orchestrator that transforms strategic directives into quarterly roadmaps.",
      fullPurpose:
        "A planning orchestrator that converts strategy into quarterly execution roadmaps.",
      summary:
        "Helps teams turn big goals into structured action plans.",
      run: [
        "Clone the repo",
        "Run `npm install`",
        "Configure environment variables",
        "Run `npm run dev`",
      ],
      tech: ["TypeScript", "React 19", "Vite 8", "Google Gemini 1.5 Flash", "@xyflow/react", "Firestore"],
      test: "Run the repository test commands if present.",
      contribute: "Submit improvements through a branch and PR.",
      files: [
        { path: "src/", purpose: "Main app" },
        { path: "README.md", purpose: "Setup notes" },
      ],
    },
    {
      id: "gemini-pdf-retrieval-agent",
      name: "Gemini PDF Retrieval Agent",
      description:
        "An intelligent document search engine powered by Google Gemini.",
      fullPurpose:
        "A document search tool for PDFs with citations and contextual search.",
      summary:
        "Makes it easy to search PDFs and jump to exact citations.",
      run: [
        "Clone the repo",
        "Install dependencies",
        "Add the Gemini API key",
        "Run the app",
      ],
      tech: ["TypeScript", "Google Gemini"],
    },
  ],
};
