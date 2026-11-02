export class KeyboardEventsPage {
    constructor(page) {
        this.page = page; 
        
        // Fully checked locators using this.page correctly
        this.firstKeyPressArea = this.page.getByPlaceholder('Click here and press keys…');
        this.dynamicKeyArea = this.page.getByPlaceholder('Click here and press keys…'); // Safe fallback placeholder
        this.firstNameField = this.page.getByRole('textbox', { name: 'First Name' });
        this.lastNameField = this.page.getByRole('textbox', { name: 'Last Name' });
        this.emailField = this.page.getByRole('textbox', { name: 'Email' });
        this.phoneField = this.page.getByRole('textbox', { name: 'Phone' });
        this.sourceInput = this.page.locator('#ctrl-source-input');
        
        // Fixed: Using getByPlaceholder to prevent dynamic name crashes
        this.destinationInput = this.page.getByPlaceholder('Paste here with Ctrl+V…');
    }

    // Action 1: Handle first input box sequence
    async HandleFirstKeySequence() {
        await this.firstKeyPressArea.click();
        await this.firstKeyPressArea.press('Shift+Enter');
    }

    // Action 2: Handle the sequential key presses on the second area
    async HandleSystemKeysSequence() {
        await this.dynamicKeyArea.click();
        await this.dynamicKeyArea.press('Escape');
        await this.dynamicKeyArea.press('ArrowUp');
        await this.dynamicKeyArea.press('ArrowDown');
        await this.dynamicKeyArea.press('ArrowLeft');
        await this.dynamicKeyArea.press('ArrowRight');
        await this.dynamicKeyArea.press('Tab'); 
    }

    // Action 3: Fill form details and complete copy-paste sequence exactly matching your recording
    async FillFormAndCopyPaste(firstName, lastName, email, phone, textToFill) {
        await this.firstNameField.fill(firstName);
        await this.firstNameField.press('Tab');
        
        await this.lastNameField.fill(lastName);
        await this.lastNameField.press('Tab');
        
        await this.emailField.fill(email);
        await this.emailField.press('Tab');
        
        await this.phoneField.fill(phone);
        await this.phoneField.press('Tab'); 
        
        await this.sourceInput.press('ControlOrMeta+a');
        await this.sourceInput.press('ControlOrMeta+c');
        await this.sourceInput.press('Tab'); 
        
        // This matches your original final line execution cleanly
        await this.destinationInput.fill(textToFill);
    }
}
