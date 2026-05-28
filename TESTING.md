# Testing Guide

This repository follows a rigorous testing strategy to ensure the highest quality and stability of the portfolio.

## Testing Stack

- **Unit & Integration Testing**: [Vitest](https://vitest.dev/)
- **End-to-End (E2E) Testing**: [Playwright](https://playwright.dev/)

## Running Tests

### Unit & Content Tests
These tests verify metadata, content consistency, and basic component logic.

```bash
npm test
```

### End-to-End Tests
These tests simulate real user interactions, including theme switching, navigation, and mobile menu toggling.

```bash
# Install browsers if needed
npx playwright install chromium

# Run tests
npm run test:e2e
```

## Test Structure

- `tests/basic.test.js`: Assertions for versioning and experience strings.
- `tests/content.test.js`: Verifies file-level content and structure.
- `tests/assistant-reset.test.jsx`: Unit tests for the AI Assistant's reset functionality.
- `tests/e2e/basic.spec.js`: Playwright scenarios for the SPA.

## Adding New Tests

### Adding a Vitest test
Create or modify a `.test.js` file in the `tests/` directory.

### Adding a Playwright test
Add new test cases to `tests/e2e/basic.spec.js`. Use `page.evaluate(() => showSection('your-id-section'))` if you need to verify section visibility, as the SPA uses a custom visibility logic.

## Continuous Integration
Tests are automatically executed on every push to the `main` branch via GitHub Actions. Deployment to GitHub Pages only occurs if all tests pass.

---
© 2026 Darshil Shah
