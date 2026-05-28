# Testing Guide

This project maintains high quality through a comprehensive testing strategy that includes unit, integration, and end-to-end (E2E) tests.

## Testing Strategy

Our strategy ensures that:
1. **Business Logic**: Core utilities and data constants are accurate.
2. **Component Integrity**: React components render correctly and handle state changes.
3. **User Experience**: Critical paths (navigation, forms, theme toggling) work across different browsers and devices.

## Tools

- **[Vitest](https://vitest.dev/)**: Fast unit and integration testing.
- **[Playwright](https://playwright.dev/)**: Reliable E2E testing for modern web apps.
- **[React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)**: Testing React components from the user's perspective.

## How to Run Tests Locally

### Unit and Integration Tests
```bash
npm test
```
To run tests in watch mode:
```bash
npx vitest
```

### End-to-End Tests
Ensure the development server is running or the project is built before running E2E tests.
```bash
# Install browsers (required once)
npx playwright install chromium

# Run tests
npm run test:e2e
```
To open the Playwright UI for debugging:
```bash
npx playwright test --ui
```

## How to Write and Organize Tests

### File Naming Conventions
- **Unit/Integration Tests**: `tests/*.test.js` or `tests/*.test.jsx`.
- **E2E Tests**: `tests/e2e/*.spec.js`.

### Organization
- Store unit tests for specific features or components in the `tests/` directory.
- Store E2E user flow scenarios in the `tests/e2e/` directory.

### Mocking and Coverage
- Use Vitest's mocking capabilities for external dependencies if necessary.
- To check code coverage:
  ```bash
  npx vitest run --coverage
  ```

## Common Test Commands

| Command | Description |
| --- | --- |
| `npm test` | Runs all Vitest unit and integration tests. |
| `npm run test:e2e` | Runs all Playwright E2E tests. |
| `npx vitest --ui` | Opens the Vitest UI. |
| `npx playwright show-report` | Shows the last Playwright test report. |

## Troubleshooting

- **Failing E2E Tests**: Ensure no other process is using port `5173`. Check if browser binaries are installed via `npx playwright install`.
- **Content Mismatch**: Content tests often check for specific version strings or metrics. Verify that `metadata.json` and components are synchronized.
- **Hydration Errors**: Ensure tests are not failing due to subtle differences between server and client rendering (though this is a pure SPA).

---
© 2026 Darshil Shah
