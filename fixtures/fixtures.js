import { test as base } from '@playwright/test'
import { Formpage } from '../Pages/Formpage.js'
import {DropdownPage} from '../Pages/DropdownPage.js' 
import { FramePage } from '../Pages/FramesPage.js'
import { KeyboardEventsPage } from '../Pages/KeyboardEventsPage.js'

export const test = base.extend({
  formpage: async ({ page }, use) => {
    const formpage = new Formpage(page)
    await page.goto('https://automation-practice-theta.vercel.app/forms')
    await use(formpage)
  },
  dropdowns: async({page},use)=>{
    const dropdowns = new DropdownPage(page)
    await page.goto('https://automation-practice-theta.vercel.app/dropdown')
    await use (dropdowns)

  },
  framepage: async({page},use)=>{
    const framepage = new FramePage(page)
    await page.goto("https://automation-practice-theta.vercel.app/frames");
    await use(framepage)

  },
  keyboardeventspage: async({page},use)=>{
    const keyboardeventspage = new KeyboardEventsPage(page)
    await page.goto('https://automation-practice-theta.vercel.app/keyboard-events');
    await use(keyboardeventspage)
  }
})