import { test, expect } from "@playwright/test";

test.describe.only("PositiveTest", () => {
  test(`Test1`, async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill("standard_user");
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill("secret_sauce");
    await page.locator('[data-test="login-button"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page
      .locator('[data-test="add-to-cart-sauce-labs-bike-light"]')
      .click();
    await page.locator('[data-test="shopping-cart-link"]').click();
    await page.getByText("Sauce Labs Backpackcarry.").click();
    await page.getByText("Sauce Labs Bike LightA red").click();
    await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText(
      "2"
    )
    await page.locator('[data-test="checkout"]').click();
    await page.locator('[data-test="firstName"]').click();
    await page.locator('[data-test="firstName"]').fill("Roman");
    await page.locator('[data-test="lastName"]').click();
    await page.locator('[data-test="lastName"]').fill("Vershinin");
    await page.locator('[data-test="postalCode"]').click();
    await page.locator('[data-test="postalCode"]').fill("1234321");
    await page.locator('[data-test="continue"]').click();
    await page.locator('[data-test="finish"]').click();
    await page.locator('[data-test="complete-header"]').click();
    await page.locator('[data-test="complete-text"]').click();
  });
});

