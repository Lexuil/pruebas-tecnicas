import { test, expect } from '@playwright/test'

test.describe('UI', () => {
  test('has heading', async ({ page }) => {
    await page.goto('/')

    await expect(
      page.getByRole(
        'heading',
        { name: 'Lista de lectura' }
      )
    ).toBeVisible()
  })
})
