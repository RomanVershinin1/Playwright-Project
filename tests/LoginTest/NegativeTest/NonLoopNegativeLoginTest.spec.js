import { test, expect } from "@playwright/test";

test.describe.only(`Possitive Login Scenarios`, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://example.com");

    test("username correct + password incorrect", async ({ page }) => {
      await page.locator('[data-test="username"]').click();
      await page.locator('[data-test="username"]').fill("standard_user");
      await page.locator('[data-test="password"]').click();
      await page.locator('[data-test="password"]').fill("password_incorrect");
      await page.locator('[data-test="login-button"]').click();
      await expect(page.locator('[data-test="error"]')).toHaveText(
        `Epic sadface: Username and password do not match any user in this service`
      );
    });

    test("username incorrect + password correct", async ({ page }) => {
      await page.locator('[data-test="username"]').click();
      await page.locator('[data-test="username"]').fill("username_incorrect");
      await page.locator('[data-test="password"]').click();
      await page.locator('[data-test="password"]').fill("secret_sauce");
      await page.locator('[data-test="login-button"]').click();
      await expect(page.locator('[data-test="error"]')).toHaveText(
        `Epic sadface: Username and password do not match any user in this service`
      );
    });
    test("username incorrect + password incorrect", async ({ page }) => {  
      await page.locator('[data-test="username"]').click();
      await page.locator('[data-test="username"]').fill("username_incorrect");
      await page.locator('[data-test="password"]').click();
      await page.locator('[data-test="password"]').fill("password_incorrect");
      await page.locator('[data-test="login-button"]').click();
      await expect(page.locator('[data-test="error"]')).toHaveText(
        `Epic sadface: Username and password do not match any user in this service`
      );
    });
    test("username empty + password correct", async ({ page }) => {
      await page.locator('[data-test="username"]').click();
      await page.locator('[data-test="username"]').fill("");
      await page.locator('[data-test="password"]').click();
      await page.locator('[data-test="password"]').fill("secret_sauce");
      await page.locator('[data-test="login-button"]').click();
      await expect(page.locator('[data-test="error"]')).toHaveText(
        `Epic sadface: Username is required`
      );
    });
    test("username correct + password empty", async ({ page }) => {
      await page.locator('[data-test="username"]').click();
      await page.locator('[data-test="username"]').fill("standard_user");
      await page.locator('[data-test="password"]').click();
      await page.locator('[data-test="password"]').fill("");
      await page.locator('[data-test="login-button"]').click();
      await expect(page.locator('[data-test="error"]')).toHaveText(
        `Epic sadface: Password is required`
      );
    });
    test("username empty + password empty", async ({ page }) => {
      await page.locator('[data-test="username"]').click();
      await page.locator('[data-test="username"]').fill(``);
      await page.locator('[data-test="password"]').click();
      await page.locator('[data-test="password"]').fill("");
      await page.locator('[data-test="login-button"]').click();
      await expect(page.locator('[data-test="error"]')).toHaveText(
        `Epic sadface: Username is required`
      );
    });
  });
});
