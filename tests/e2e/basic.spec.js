import { test, expect } from '@playwright/test';

test('homepage loads and displays correct title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/QA Leadership/);
});

test('navigation interactions', async ({ page }) => {
  await page.goto('/');
  // Basic check that our React app loads and the layout header exists
  const headerText = page.locator('span', { hasText: 'The Clinical Architect' }).first();
  await expect(headerText).toBeVisible();
});
