import { test, expect } from "@playwright/test";

test("verify assistant reset and header nav", async ({ page }) => {
  await page.goto("/");
  await page.waitForSelector("#root");

  // Verify Header using more robust role-based locators
  const expertiseLink = page
    .getByRole("button", { name: /^Expertise$/i })
    .first();
  await expect(expertiseLink).toBeVisible();

  const impactLink = page.getByRole("button", { name: /^Impact$/i }).first();
  await expect(impactLink).toBeVisible();

  const moreButton = page.getByRole("button", { name: /More/i });
  await expect(moreButton).toBeVisible();

  // Use click if hover is flaky or if the menu requires interaction
  await moreButton.hover();

  // The dropdown items might take a moment to animate in
  const projectsLink = page.locator("#nav-projects");
  await expect(projectsLink).toBeVisible();

  // Verify Assistant
  const assistantButton = page.getByRole("button", { name: /Open Assistant/i });
  await expect(assistantButton).toBeVisible();
  await assistantButton.click();

  const exploreButton = page.getByRole("button", {
    name: /Explore Repositories/i,
  });
  await expect(exploreButton).toBeVisible();
  await exploreButton.click();

  const backButton = page.getByRole("button", { name: /Back/i });
  await expect(backButton).toBeVisible();

  // Click back and verify reset
  await backButton.click();
  await expect(page.getByText(/How can I help you today\?/i)).toBeVisible();

  await page.screenshot({ path: "verification-result.png", fullPage: true });
});
