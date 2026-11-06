// import{test} from '@playwright/test'
// import { DropdownPage } from '../Pages/DropdownPage.js'
import {test} from '../fixtures/fixtures.js'

test("verify Title and url",async({page,dropdowns})=>{

    // await page.goto('https://automation-practice-theta.vercel.app/dropdown')
    const pagetitle = await page.title()
    const pageurl = page.url()
    console.log(pagetitle);
    console.log(pageurl);
    


await dropdowns.dropdowns1()
await dropdowns.multiselect1()

await page.pause()

    
}) 