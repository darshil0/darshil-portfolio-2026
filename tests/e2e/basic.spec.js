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

test('theme toggle functionality', async ({ page }) => {
  await page.goto('/');

  // Get initial theme (should be light based on class 'light' in index.html,
  // but it might be overridden by system preference in App.jsx)
  const html = page.locator('html');
  const initialClass = await html.getAttribute('class');
  const isInitialDark = initialClass?.includes('dark');

  // Find and click the theme toggle button
  const themeToggle = page.locator('#theme-toggle');
  await themeToggle.click();

  // Verify the class changed
  const newClass = await html.getAttribute('class');
  if (isInitialDark) {
    expect(newClass).not.toContain('dark');
  } else {
    expect(newClass).toContain('dark');
  }
});

test('navigation to sections', async ({ page }) => {
  await page.goto('/');

  // Find a navigation link (Expertise)
  const expertiseLink = page.locator('nav >> text=Expertise').first();
  await expertiseLink.click();

  // Verify that the URL or section is in view
  // Since it's smooth scroll, we might need a small wait or check visibility
  const expertiseSection = page.locator('#expertise-section');
  await expect(expertiseSection).toBeInViewport();
});

test('mobile menu interaction', async ({ page }) => {
  // Set viewport to mobile size
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto('/');

  // Find hamburger menu button
  const menuButton = page.locator('button[aria-label="Toggle menu"]');
  await expect(menuButton).toBeVisible();

  // Click to open
  await menuButton.click();

  // Verify mobile menu is visible
  const mobileMenu = page.locator('#mobile-menu');
  await expect(mobileMenu).toBeVisible();

  const mobileMenuLink = page.locator('#mobile-menu >> text=Expertise');
  await expect(mobileMenuLink).toBeVisible();

  // Click again to close
  await menuButton.click();
  await expect(mobileMenuLink).not.toBeVisible();
});

test('contact form submission', async ({ page }) => {
  await page.goto('/');

  // Fill the form
  await page.fill('#contact-name', 'Test User');
  await page.fill('#contact-email', 'test@example.com');
  await page.fill('#contact-message', 'This is a test message.');

  // Submit the form
  await page.click('button[type="submit"]');

  // Verify success message
  const successMessage = page.locator('text=Message sent! I\'ll be in touch soon.');
  await expect(successMessage).toBeVisible();
});
