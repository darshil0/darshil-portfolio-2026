import { test, expect } from "@playwright/test";

test("homepage loads and displays correct title", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/QA Leadership/);
});

test("navigation interactions", async ({ page }) => {
  await page.goto("/");
  // Wait for the app to be hydrated
  await page.waitForSelector("#root");

  // Use a more specific locator to avoid strict mode violations
  const logoText = page.getByRole('navigation').getByText(/The Clinical Architect/i);
  await expect(logoText).toBeVisible({ timeout: 10000 });
});

test("theme toggle functionality", async ({ page }) => {
  await page.goto("/");
  await page.waitForSelector("#root");

  const html = page.locator("html");
  const initialClass = await html.getAttribute("class");
  const isInitialDark = initialClass?.includes("dark");

  const themeToggle = page.locator("#theme-toggle");
  await expect(themeToggle).toBeVisible();
  await themeToggle.click();

  const newClass = await html.getAttribute("class");
  if (isInitialDark) {
    expect(newClass).not.toContain("dark");
  } else {
    expect(newClass).toContain("dark");
  }
});

test("navigation to sections", async ({ page }) => {
  await page.goto("/");
  await page.waitForSelector("#root");

  // Use getByRole for better accessibility and robustness
  const expertiseLink = page.getByRole("button", { name: /^Expertise$/i }).first();
  await expect(expertiseLink).toBeVisible();
  await expertiseLink.click();

  const expertiseSection = page.locator("#expertise-section");
  await expect(expertiseSection).toBeInViewport();
});

test("mobile menu interaction", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto("/");
  await page.waitForSelector("#root");

  const menuButton = page.getByRole("button", { name: /toggle menu/i });
  await expect(menuButton).toBeVisible();
  await menuButton.click();

  const mobileMenu = page.locator("#mobile-menu");
  await expect(mobileMenu).toBeVisible();

  const mobileMenuLink = mobileMenu.getByRole("button", { name: /^Expertise$/i });
  await expect(mobileMenuLink).toBeVisible();

  await menuButton.click();
  await expect(mobileMenu).not.toBeVisible();
});

test("contact form submission", async ({ page }) => {
  await page.goto("/");
  await page.waitForSelector("#root");

  // Ensure contact section is in view or interactable
  const nameInput = page.locator("#contact-name");
  await expect(nameInput).toBeVisible();

  await nameInput.fill("Test User");
  await page.fill("#contact-email", "test@example.com");
  await page.fill("#contact-message", "This is a test message.");

  // The button text is "Secure Submit" or "Initiating..."
  const submitButton = page.getByRole("button", { name: /Submit/i });
  await expect(submitButton).toBeVisible();
  await submitButton.click();

  const successMessage = page.getByText(/Message sent! I'll be in touch soon\./i);
  await expect(successMessage).toBeVisible();
});
