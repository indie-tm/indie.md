/**
 * Shared helpers for Playwright-based capture scripts.
 *
 * - dismissCookieBanner: best-effort cookie banner dismissal. Only clicks
 *   elements actually on-screen so we never accidentally open a "Manage
 *   cookies" modal by clicking a footer link.
 */

const COOKIE_BUTTON_SELECTORS = [
  'button:has-text("Accept all")',
  'button:has-text("Accept All")',
  'button:has-text("Accept")',
  'button:has-text("Agree")',
  'button:has-text("I agree")',
  'button:has-text("Got it")',
  'button:has-text("OK")',
  'button:has-text("Allow all")',
  'button:has-text("Reject all")',
  'button:has-text("Reject non-essential")',
  'button:has-text("Save changes")',
  'button:has-text("Save preferences")',
  '[id*="cookie" i] button',
  '[class*="cookie" i] button',
  '[aria-label*="accept" i]',
  '[role="dialog"] [aria-label="Close"]',
  'dialog [aria-label="Close"]',
  'button[aria-label="Close"]',
  '[aria-label*="dismiss" i]',
];

async function isInViewport(locator, viewportHeight) {
  try {
    const box = await locator.boundingBox();
    if (!box) return false;
    return box.y >= 0 && box.y + box.height <= viewportHeight;
  } catch {
    return false;
  }
}

export async function dismissCookieBanner(page) {
  const viewportHeight = page.viewportSize()?.height ?? 800;

  for (const selector of COOKIE_BUTTON_SELECTORS) {
    const btn = page.locator(selector).first();
    try {
      if (!(await btn.isVisible({ timeout: 500 }))) continue;
      if (!(await isInViewport(btn, viewportHeight))) continue;
      await btn.click({ timeout: 1000 });
      await page.waitForTimeout(400);
      return true;
    } catch {
      // Try the next selector.
    }
  }
  return false;
}
