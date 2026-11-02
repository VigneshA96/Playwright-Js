import { chromium, test } from "@playwright/test";
import { FramePage } from "../Pages/FramesPage";

test("verify page", async () => {
  let browser = await chromium.launch({
    channel: "chrome",
    headless: false,
  });

  let context = await browser.newContext({});

  let page = await context.newPage();
  await page.goto("https://automation-practice-theta.vercel.app/frames");
  let pageTitle = await page.title();
  let pageUrl = await page.url();


  await page.waitForTimeout(4000);
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))

  let framepages = new FramePage(page)
  let count = framepages.GetTotalFrameCount()
  console.log("Total Frame found:", count)
  await framepages.FillNestedChildFrame('Vicky')

  await page.pause()


});
