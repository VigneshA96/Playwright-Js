// import { chromium, test } from "@playwright/test";
// import { FramePage } from "../Pages/FramesPage";
import {test} from '../fixtures/fixtures.js'

test("verify page", async ({page,framepage}) => {


  // await page.goto("https://automation-practice-theta.vercel.app/frames");
  let pageTitle = await page.title();
  let pageUrl =  page.url();


  await page.waitForTimeout(4000);
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))


  await framepage.FillNestedChildFrame('Vicky')

  await page.pause()


});
