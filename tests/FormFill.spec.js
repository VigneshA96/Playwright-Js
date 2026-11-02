import{test} from '@playwright/test'
import { Formpage } from '../Pages/Formpage'


test("verify Title and url",async({page})=>{

    await page.goto('https://automation-practice-theta.vercel.app/forms')
    const pagetitle = await page.title()
    const pageurl = page.url()
    console.log(pagetitle);
    console.log(pageurl);
    
    const formpage = new Formpage(page);
    await formpage.FillTheFormPage("vignesh","vicky@mail","74584365725","Selenium WebDriver","India","01-02-2026");
    
    await page.pause()

    
}) 