import{test} from '@playwright/test'
import { DropdownPage } from '../Pages/dropdownpage'

test("verify Title and url",async({page})=>{

    await page.goto('https://automation-practice-theta.vercel.app/dropdown')
    const pagetitle = await page.title()
    const pageurl = page.url()
    console.log(pagetitle);
    console.log(pageurl);
    
 const select =   new DropdownPage(page)

 await select.dropdowns()
 await select.multiselect()
 await page.pause()


    
}) 