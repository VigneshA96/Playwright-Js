export class PWUtils {

    //element actions

    async clickElement(locator) {
        await locator.click();
    }

    async doubleClick(locator) {
        await locator.dblClick();
    }

    async rightClick(locator) {
        await locator.click({ button: 'right' });
    }

    async fillText(locator, text) {
        await locator.fill(text);
    }

    async clearText(locator) {
        await locator.clear();
    }

    async focus(locator) {
        await locator.focus();
    }

    async getText(locator) {
        return await locator.innerText();
    }

    async getAttribute(locator, attributeName) {
        return await locator.getAttribute(attributeName);
    }

    async getInputValue(locator) {
        return await locator.inputValue();
    }

    async isElementVisible(locator) {
        return await locator.isVisible();
    }

    async isElementEnabled(locator) {
        return await locator.isEnabled();
    }

    async isElementChecked(locator) {
        return await locator.isChecked();
    }

    async checkElement(locator) {
        await locator.check();
    }

    async uncheckElement(locator) {
        await locator.uncheck();
    }

    async selectByIndex(locator, index) {
        await locator.selectOption({ index: index });
    }

    async selectByValue(locator, value) {
        await locator.selectOption({ value: value });
    }

    async selectByLabel(locator, label) {
        await locator.selectOption({ label: label });
    }

    async waitForElementVisible(locator, timeout) {
        await locator.waitFor({ state: 'visible', timeout: timeout });
    }

    async waitForLoadState(locator, state = "load", timeout) {
        await locator.waitForLoadState(state, { timeout: timeout });
    }

    async waitForPageLoad(page = "load", timeout) {
        await page.waitForLoadState(page, { timeout: timeout });
    }

    async waitForPopup(page, action) {
        const popupPromsie = page.waitForEvent('popup');
        await action();
        return await popupPromsie;
    }

    async waitForDialog(page, action) {
        const dialogPromsie = page.waitForEvent('dialog');
        await action();
        return await dialogPromsie;
    }

    async waitForNewPage(context, action) {
        const pagePromsie = context.waitForEvent('page');
        await action();
        return await pagePromsie;
    }

    async acceptAlert(page, action) {
        const dialog = await this.waitForDialog(page, action)
        const message = await dialog.message();
        await dialog.accept();
        return message;
    }

    async dismissAlert(page, action) {
        const dialog = await this.waitForDialog(page, action)
        const message = await dialog.message();
        await dialog.dismiss();
        return message;
    }

    async fillTextInAlert(page, action,text) {
        const dialog = await this.waitForDialog(page, action)
        const message = await dialog.message();
        await dialog.accept(text);
        return message;
    }
}