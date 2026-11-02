

import{test} from '@playwright/test'
test("verify Title and url",async({page})=>{

    await page.goto('https://automation-practice-theta.vercel.app/')
    const pagetitle = await page.title()
    const pageurl = page.url()
    console.log(pagetitle);
    console.log(pageurl);
})