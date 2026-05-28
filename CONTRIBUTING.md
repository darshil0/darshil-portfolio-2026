# Contributing to Darshil's Portfolio

Thank you for your interest in contributing! This project showcases a high-fidelity personal portfolio with a focus on QA leadership and AI-driven testing.

## Code of Conduct

Please be respectful and professional in all interactions.

## How to Contribute

1. **Ask Jules**: If you're unsure where to start, ask the Jules AI Assistant for contribution tips or an overview of the codebase.
2. **Fork the Repository**: Create your own fork of the project.
3. **Clone the Fork**: `git clone https://github.com/your-username/darshil-portfolio-2026.git`
4. **Create a Feature Branch**: `git checkout -b feature/your-feature-name`
5. **Make Changes**: Implement your feature or fix.
6. **Add Tests**: Ensure your changes are covered by tests (Vitest for units, Playwright for E2E). When modifying the AI Assistant, update or add relevant cases in `tests/assistant-reset.test.jsx`.
7. **Verify Changes**: Run `npm test` and `npm run test:e2e`.
8. **Commit Changes**: Use clear, descriptive commit messages.
9. **Push and PR**: Push to your fork and submit a Pull Request.

## Development Setup

- Node.js 18+
- `npm install` to install dependencies
- `npm run dev` to start the development server

## Coding Standards

- Use functional React components.
- Follow Tailwind CSS best practices (avoid dynamic class generation if possible).
- Ensure WCAG AA accessibility compliance.
- Keep the design system (Manrope/Inter fonts) consistent.

## Testing Requirements

- All new features must include relevant tests.
- Existing tests must pass.
- Maintain or improve the current test coverage.

## Versioning

We use a date-based versioning scheme (YYYY.M.D). Please do not manually update the version in `package.json` unless instructed.

---
© 2026 Darshil Shah
