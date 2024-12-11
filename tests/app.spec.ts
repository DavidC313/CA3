import { test, expect } from '@playwright/test';

test.use({ ignoreHTTPSErrors: true }); // Add this to allow ignoring SSL errors

test.describe('Player Search Functionality', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://localhost:7163'); // Replace with your app's running URL
  });

  test('Search for a valid player name', async ({ page }) => {
    await page.fill('input[placeholder="Enter player name"]', 'Messi');
    await page.click('button:has-text("Search")');

    await page.waitForSelector('table tbody tr');

    const playerName = await page.locator('table tbody tr td:has-text("Messi")').first();
    await expect(playerName).toHaveText('Lionel Messi'); // Replace with the expected full name
  });

  test('Search with an empty input', async ({ page }) => {
    await page.click('button:has-text("Search")');
    const errorMessage = page.locator('.text-danger');
    await expect(errorMessage).toHaveText('Please enter a search term.');
  });

  test('Search for a non-existent player', async ({ page }) => {
    await page.fill('input[placeholder="Enter player name"]', 'NonExistentPlayer');
    await page.click('button:has-text("Search")');

    await page.waitForSelector('.text-muted:has-text("No players found")');

    const noResultsMessage = page.locator('.text-muted:has-text("No players found")');
    await expect(noResultsMessage).toHaveText('No players found. Try searching for a different name or adjust the filters!');
  });
});
