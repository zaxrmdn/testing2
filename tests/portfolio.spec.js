import { test, expect } from '@playwright/test';

test.describe('CV Portfolio Website', () => {
  test('homepage dapat dibuka', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Zakaria Ramadan/);
  });

  test('menampilkan nama pemilik website', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { name: /Zakaria.*Ramadan/ }).first()).toBeVisible();
  });

  test('menampilkan bagian About Me', async ({ page }) => {
    await page.goto('/#about');
    await expect(page.getByRole('heading', { name: /Technology works best/ })).toBeVisible();
  });

  test('navigasi projects tersedia', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('link', { name: 'Projects', exact: true })).toBeVisible();
  });

  test('bagian kontak memiliki email link', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('a[href^="mailto:"]')).toHaveCount(1);
  });
});
