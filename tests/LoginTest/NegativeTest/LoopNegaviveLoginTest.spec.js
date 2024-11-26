import {test, expect} from '@playwright/test'
import {users} from '../../utility/testData'

test.describe(`Positive Login Scenarios`, () => {
    test.beforeEach(async ({page}) => {
        await page.goto('https://example.com')
    })
    for (const user of users) {
        test(`username correct + password incorrect ${
            user.username || 'empty user'
        }, ${user.password || 'empty password'}`, async ({page}) => {
            await page.locator('[data-test="username"]').click()
            await page.locator('[data-test="username"]').fill(user.username)
            await page.locator('[data-test="password"]').click()
            await page.locator('[data-test="password"]').fill(user.password)
            await page.locator('[data-test="login-button"]').click()
            await expect(page.locator('[data-test="error"]')).toHaveText(
                user.errorMessage,
            )
        })
    }
})
