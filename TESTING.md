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

Make sure you are using Node.js `22.x` or `24.x`. Node `18.x` is incompatible with Vitest 4/Rolldown dependencies (due to missing `styleText` in the native `node:util` module).

### Unit and Integration Tests

Our unit and component tests run via **Vitest** (excluding E2E tests). Run the following to run tests once:

```bash
npm test
```

To run tests in watch mode:

```bash
npx vitest
```

### End-to-End Tests

Our E2E tests run via **Playwright**. Ensure the local development server is running or the project has been built before running E2E tests.

```bash
# Install browsers (required once)
npx playwright install chromium

# Run tests
npm run test:e2e
```

### E2E Testing in CI/CD

Our automated CI/CD pipeline contains specific enhancements to make E2E test runs fast, reliable, and debuggable:

1. **Playwright Browser Caching**: To prevent downloading the ~180MB browser binary on every single commit, the pipeline caches the `~/.cache/ms-playwright` directory using `actions/cache@v4` with a key derived from `package-lock.json`. 
   - On a **cache miss**, it runs `npx playwright install --with-deps chromium`.
   - On a **cache hit**, it bypasses browser downloading and only runs `npx playwright install-deps chromium` to ensure system-level library dependencies are installed on the runner.
2. **Playwright Report Artifacts**: If any E2E test fails or succeeds, Playwright compiles an HTML report of the run. The pipeline automatically uploads this folder (`playwright-report/`) using `actions/upload-artifact@v4` with a 30-day retention period. This allows developers to download and inspect traces, screenshots, and logs from the CI run directly.

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

| Command                      | Description                                 |
| ---------------------------- | ------------------------------------------- |
| `npm test`                   | Runs all Vitest unit and integration tests. |
| `npm run test:e2e`           | Runs all Playwright E2E tests.              |
| `npx vitest --ui`            | Opens the Vitest UI.                        |
| `npx playwright show-report` | Shows the last Playwright test report.      |

## Troubleshooting

- **Failing E2E Tests**: Ensure no other process is using port `5173`. Check if browser binaries are installed via `npx playwright install`.
- **Content Mismatch**: Content tests often check for specific version strings or metrics. Verify that `metadata.json` and components are synchronized.
- **Hydration Errors**: Ensure tests are not failing due to subtle differences between server and client rendering (though this is a pure SPA).

---

© 2026 Darshil Shah
