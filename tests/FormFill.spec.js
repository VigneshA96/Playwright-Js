import{test} from '../fixtures/fixtures.js'

test("verify Title and url",async({page,formpage})=>{

    const pagetitle = await page.title()
    const pageurl = page.url()
    console.log(pagetitle);
    console.log(pageurl);
    
  
    await formpage.FillTheFormPage("vignesh","vicky@mail","74584365725","Selenium WebDriver","India","2026-11-03");
    
    await page.pause()


}) 