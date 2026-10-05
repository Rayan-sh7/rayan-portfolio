import { test, expect } from "@playwright/test";

test("الصفحة تفتح بدون أخطاء JavaScript", async ({ page }) => {
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  await page.goto("/");
  await expect(page.locator("header")).toBeVisible();
  expect(errors).toEqual([]);
});

test("الـ navbar يبقى ظاهر بعد التمرير", async ({ page }) => {
  await page.goto("/");
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await expect(page.locator("header")).toBeInViewport();
});

test("نموذج التواصل يرسل بنجاح (بدون إرسال حقيقي)", async ({ page }) => {
  await page.route("https://api.web3forms.com/submit", (route) =>
    route.fulfill({ json: { success: true } }),
  );
  await page.goto("/#contact");
  await page.locator('input[name="name"]').fill("Test");
  await page.locator('input[name="email"]').fill("test@example.com");
  await page.locator('textarea[name="message"]').fill("Hello");
  await page.locator('form button[type="submit"]').click();
  await expect(page.getByRole("status")).toBeVisible();
});

test("النموذج يعرض رسالة خطأ عند الفشل", async ({ page }) => {
  await page.route("https://api.web3forms.com/submit", (route) =>
    route.fulfill({ json: { success: false } }),
  );
  await page.goto("/#contact");
  await page.locator('input[name="name"]').fill("Test");
  await page.locator('input[name="email"]').fill("test@example.com");
  await page.locator('textarea[name="message"]').fill("Hello");
  await page.locator('form button[type="submit"]').click();
  await expect(page.getByRole("alert")).toBeVisible();
});
