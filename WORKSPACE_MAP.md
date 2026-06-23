# Workspace Knowledge Map

This document serves as the repository-wide index for Darshil Shah's workspace, maintained by the Jules AI Agent.

## 1. Managed Repositories

### darshil-portfolio-2026 (Primary)

- **Purpose**: High-fidelity personal portfolio and QA leadership showcase.
- **Stack**: React 19, Vite 8, Tailwind CSS 3, Lucide React.
- **Testing**: Vitest (Unit), Playwright (E2E).
- **Key Files**: `src/App.jsx`, `src/constants/assistantData.js`, `src/components/Common/VoiceAssistant.jsx`.
- **Note**: Acts as the entry point for the "Jules" assistant persona.

### gemini-pdf-retrieval-agent

- **Purpose**: Intelligent document search engine with page-level grounding.
- **Stack**: Powered by Google Gemini 2.5.
- **Core Features**: Multiple PDF upload, context-aware keyword search, semantic grounding.
- **Grounding Source**: Issue Description.

### customer-support-agent

- **Purpose**: Production-ready intelligent customer support solution with multi-agent orchestration.
- **Stack**: Java 17, Spring Boot 3.4.5, Google ADK 1.3.0, React 19.
- **Core Features**: Hierarchical agent routing (billing, tech, account), 7 specialized tools, 100% tool coverage in tests.
- **Grounding Source**: Issue Description & `src/constants/assistantData.js`.

### atlas-strategic-agent (aka atlas-strategic-matrix)

- **Purpose**: Multi-agent AI orchestrator for strategic roadmap generation.
- **Stack**: React 19, Vite 8, Google Gemini 1.5 Flash, @xyflow/react, Firestore.
- **Core Features**: Converts high-level directives into topologically sorted quarterly roadmaps; uses Strategist, Analyst, Critic, and Architect agents.
- **Grounding Source**: Issue Description & `src/constants/assistantData.js`.

### AI-Evaluation-QA

- **Purpose**: Python framework for scoring and comparing AI model performance.
- **Stack**: Python 3.9+, OpenAI/Anthropic SDKs, Docker.
- **Core Features**: Rubric-based scoring, hallucination detection, 87% test coverage.
- **Grounding Source**: `src/constants/assistantData.js`.

### Gemini-Pulsar-Workspace

- **Purpose**: Real-time AI dashboard for email, image, and voice interaction.
- **Stack**: React 19, Google Gemini 2.0 Flash, Framer Motion.
- **Core Features**: Low-latency voice streaming, AI email categorization, vision-guided image remixing.
- **Grounding Source**: `src/constants/assistantData.js`.

### mindful-coach-app

- **Purpose**: Local-first wellness tracking and AI-powered coaching.
- **Stack**: React 19, TypeScript, Google Gemini 2.0 Flash, Recharts.
- **Core Features**: Energy scoring, daily coaching, WCAG AA compliance.
- **Grounding Source**: `src/constants/assistantData.js`.

## 2. Shared Intelligence Patterns

### AI Model Strategy

- **Google Gemini Ecosystem**: Unified use of Gemini 1.5 Flash, 2.0 Flash, and 2.5 across the portfolio.
- **Multi-Agent Orchestration**: Recurring pattern of hierarchical and swarm-based agent systems (ATLAS, Customer Support).

### Technical Standards

- **Modern React**: Standardization on React 19 and Vite 8 for all web-based agents.
- **Testing Rigor**: Consistent focus on high coverage (Unit/E2E) and systematic evaluation (AI-Evaluation-QA).
- **Branding**: "The Clinical Architect" theme across Healthcare QA and AI projects.

## 3. Operational Rules

- **Tone**: Professional, Direct, Representative of Darshil Shah.
- **Safety**: Secrets and sensitive data are redacted by default.
- **Retrieval**: Always prioritize verified repository evidence over generalized knowledge.
