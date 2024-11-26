import {test, expect} from '@playwright/test'

test.describe(`Positive Login Scenarios`, () => {
    test('Check Scenario for standard_user + secret_sauce ', async ({page}) => {
        await page.goto('https://www.saucedemo.com/')
        await page.locator('[data-test="username"]').click()
        await page.locator('[data-test="username"]').fill('standard_user')
        await page.locator('[data-test="password"]').click()
        await page.locator('[data-test="password"]').fill('secret_sauce')
        await page.locator('[data-test="login-button"]').click()
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
    })

    test('Check Scenario for problem_user + secret_sauce ', async ({page}) => {
        await page.goto('https://www.saucedemo.com/')
        await page.locator('[data-test="username"]').click()
        await page.locator('[data-test="username"]').fill('problem_user')
        await page.locator('[data-test="password"]').click()
        await page.locator('[data-test="password"]').fill('secret_sauce')
        await page.locator('[data-test="login-button"]').click()
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
    })

    test(`Check Scenario for performance_glitch_user + secret_sauce  `, async ({
        page,
    }) => {
        await page.goto('https://www.saucedemo.com/')
        await page.locator('[data-test="username"]').click()
        await page
            .locator('[data-test="username"]')
            .fill('performance_glitch_user')
        await page.locator('[data-test="password"]').click()
        await page.locator('[data-test="password"]').fill('secret_sauce')
        await page.locator('[data-test="login-button"]').click()
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
    })

    test(`Check Scenario for error_user + secret_sauce `, async ({page}) => {
        await page.goto('https://www.saucedemo.com/')
        await page.locator('[data-test="username"]').click()
        await page.locator('[data-test="username"]').fill('error_user')
        await page.locator('[data-test="password"]').click()
        await page.locator('[data-test="password"]').fill('secret_sauce')
        await page.locator('[data-test="login-button"]').click()
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
    })

    test(`Check Scenario for visual_user + secret_sauce`, async ({page}) => {
        await page.goto('https://www.saucedemo.com/')
        await page.locator('[data-test="username"]').click()
        await page.locator('[data-test="username"]').fill('visual_user')
        await page.locator('[data-test="password"]').click()
        await page.locator('[data-test="password"]').fill('secret_sauce')
        await page.locator('[data-test="login-button"]').click()
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
    })
})
