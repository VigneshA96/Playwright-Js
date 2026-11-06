// import { test, expect } from '@playwright/test';
// import { KeyboardEventsPage } from '../Pages/KeyboardEventsPage';
import {test} from '../fixtures/fixtures.js'

test('test', async ({ page,keyboardeventspage }) => {
    // await page.goto('https://automation-practice-theta.vercel.app/keyboard-events');
    

    
 
    
    await keyboardeventspage.HandleSystemKeysSequence();
    await keyboardeventspage.FillFormAndCopyPaste();

     await page.pause();
});
