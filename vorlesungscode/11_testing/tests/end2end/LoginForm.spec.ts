import { test, expect } from '@playwright/test'

test('login flow shows success message', async ({ page }) => {
  await page.goto('/')
  await page.getByLabel('E-Mail').fill('user@example.com')
  await page.getByRole('button', { name: 'Login' }).click()
  await page.screenshot({ path: '1.png' })
  await expect(page.getByText('Hello')).toBeVisible()
})
