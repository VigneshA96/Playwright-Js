import { test, expect } from '@playwright/test';
import { KeyboardEventsPage } from '../Pages/KeyboardEventsPage';

test('test', async ({ page }) => {
    await page.goto('https://automation-practice-theta.vercel.app/keyboard-events');
    
    const keyboardPage = new KeyboardEventsPage(page);
    
    await keyboardPage.HandleFirstKeySequence();
    
    await page.pause(); // Kept exactly where you paused your recorder
    
    await keyboardPage.HandleSystemKeysSequence();
    await keyboardPage.FillFormAndCopyPaste(
        'vignesh', 
        'angamuthu', 
        'vignesh@mail', 
        '9764395769', 
        'Select all and copy this text!'
    );
});
