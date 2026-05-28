# Contributing to Darshil's Portfolio

Thank you for considering a contribution to this project! We welcome improvements to the UI, content, and underlying architecture.

## Local Setup

1. **Fork** the repository on GitHub.
2. **Clone** your fork to your local machine:
   ```bash
   git clone https://github.com/your-username/darshil-portfolio-2026.git
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Start the development server**:
   ```bash
   npm run dev
   ```

## Branching and Pull Request Workflow

1. Create a new branch for your feature or fix:
   ```bash
   git checkout -b feature/amazing-feature
   # or
   git checkout -b fix/annoying-bug
   ```
2. Make your changes and commit them (see [Commit Message Guidelines](#commit-message-guidelines)).
3. Push your branch to GitHub:
   ```bash
   git push origin feature/amazing-feature
   ```
4. Open a **Pull Request** against the `main` branch of the original repository.

## Commit Message Guidelines

We prefer clear, descriptive commit messages. A good format is:
- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation changes
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, etc.)
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **test**: Adding missing tests or correcting existing tests

Example: `feat: add social share metadata to index.html`

## Code Style and Linting

- Follow standard React and JavaScript best practices.
- Use functional components and hooks.
- Use Tailwind CSS for all styling.
- Maintain WCAG AA accessibility standards (use semantic HTML, provide ARIA labels where needed).

## How to Add Tests

- For new components or logic, add a Vitest test in the `tests/` directory.
- For new user flows, add a Playwright spec in `tests/e2e/`.
- Ensure all tests pass before submitting a PR:
  ```bash
  npm test
  npm run test:e2e
  ```

## Review Checklist

Before submitting your PR, please ensure:
- [ ] The code follows the project's style and quality standards.
- [ ] New features are documented in the `README.md` or relevant section.
- [ ] New and existing tests pass locally.
- [ ] The `CHANGELOG.md` is updated with your changes.
- [ ] The PR description clearly explains the purpose of the changes.

## Issue Reporting

If you find a bug or have a feature request, please open an issue on GitHub with:
- A clear, descriptive title.
- Steps to reproduce (for bugs).
- Expected vs. actual behavior.
- Screenshots if applicable.

---
© 2026 Darshil Shah
