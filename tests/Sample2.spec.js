

import{test} from '@playwright/test'
test("verify Title and url",async({page})=>{

    await page.goto('https://www.google.com/')
    const pagetitle = await page.title()
    const pageurl = page.url()
    console.log(pagetitle);
  
  console.log(pageurl);


})



