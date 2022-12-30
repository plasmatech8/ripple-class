import { expect, test } from '@playwright/test';

test('index page has expected h1', async ({ page }) => {
	await page.goto('/');
	expect(await page.textContent('h1')).toBe('Ripple Class Demo');
});

test('default ripple upon click', async ({ page }) => {
	await page.goto('/');

	const defaultRippleButton = page.locator('button.ripple').first();
	const rippleObjects = page.locator('.ripple-object');

	// 1 click
	await expect(rippleObjects).toHaveCount(0, { timeout: 1 });
	await defaultRippleButton.click();
	await expect(rippleObjects).toHaveCount(1, { timeout: 1 });
	(await rippleObjects.all()).forEach((item) => {
		expect(item).toHaveCSS('background-color', 'rgba(255, 255, 255, 0.6)');
		expect(item).toHaveCSS('animation-name', 'ripple');
		expect(item).toHaveCSS('animation-duration', '0.6s');
		expect(item).toHaveCSS('animation-timing-function', 'linear');
	});
	await expect(rippleObjects).toHaveCount(0, { timeout: 1000 });

	// 3 clicks
	await expect(rippleObjects).toHaveCount(0, { timeout: 1 });
	await defaultRippleButton.click({ clickCount: 3 });
	await expect(rippleObjects).toHaveCount(3, { timeout: 1 });
	(await rippleObjects.all()).forEach((item) => {
		expect(item).toHaveCSS('background-color', 'rgba(255, 255, 255, 0.6)');
		expect(item).toHaveCSS('animation-name', 'ripple');
		expect(item).toHaveCSS('animation-duration', '0.6s');
		expect(item).toHaveCSS('animation-timing-function', 'linear');
	});
	await expect(rippleObjects).toHaveCount(0, { timeout: 1000 });
});

test('custom ripple upon click', async ({ page }) => {
	await page.goto('/');

	const defaultRippleButton = page.locator('button.custom-ripple');
	const rippleObjects = page.locator('.ripple-object');

	// 1 click
	await expect(rippleObjects).toHaveCount(0, { timeout: 1 });
	await defaultRippleButton.click();
	await expect(rippleObjects).toHaveCount(1, { timeout: 1 });
	(await rippleObjects.all()).forEach((item) => {
		expect(item).toHaveCSS('background-color', 'rgba(255, 0, 0, 0.8)');
		expect(item).toHaveCSS('animation-name', 'ripple');
		expect(item).toHaveCSS('animation-duration', '1.2s');
		expect(item).toHaveCSS('animation-timing-function', 'linear');
	});
	await expect(rippleObjects).toHaveCount(0, { timeout: 2000 });

	// 3 clicks
	await expect(rippleObjects).toHaveCount(0, { timeout: 1 });
	await defaultRippleButton.click({ clickCount: 3 });
	await expect(rippleObjects).toHaveCount(3, { timeout: 1 });
	(await rippleObjects.all()).forEach((item) => {
		expect(item).toHaveCSS('background-color', 'rgba(255, 0, 0, 0.8)');
		expect(item).toHaveCSS('animation-name', 'ripple');
		expect(item).toHaveCSS('animation-duration', '1.2s');
		expect(item).toHaveCSS('animation-timing-function', 'linear');
	});
	await expect(rippleObjects).toHaveCount(0, { timeout: 2000 });
});
