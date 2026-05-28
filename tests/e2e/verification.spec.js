import { test, expect } from '@playwright/test';

test('verify assistant reset and header nav', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  // Verify Header
  const expertiseLink = page.locator('header nav button:has-text("Expertise")');
  await expect(expertiseLink).toBeVisible();

  const impactLink = page.locator('header nav button:has-text("Impact")');
  await expect(impactLink).toBeVisible();

  const moreButton = page.locator('header nav button:has-text("More")');
  await expect(moreButton).toBeVisible();
  await moreButton.hover();

  const projectsLink = page.locator('#nav-projects');
  await expect(projectsLink).toBeVisible();

  // Verify Assistant
  const assistantButton = page.getByLabel('Open Assistant');
  await assistantButton.click();

  const exploreButton = page.getByText('Explore Repositories');
  await expect(exploreButton).toBeVisible();
  await exploreButton.click();

  const backButton = page.getByRole('button', { name: 'Back' });
  await expect(backButton).toBeVisible();

  // Click back and verify reset
  await backButton.click();
  await expect(page.getByText('How can I help you today?')).toBeVisible();

  await page.screenshot({ path: 'verification-result.png', fullPage: true });
});
