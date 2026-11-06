export class FramePage{
    constructor(page)
    {
        this.page=page
        this.parentFrame = this.page.frameLocator('#nested-parent-frame-iframe')
        this.childframe = this.parentFrame.frameLocator('#nestedChildFrame')
        this.NestedChildInput = this.childframe.locator('#nestedChildInput')

    }

    // Action
    async FillNestedChildFrame(textValue)
    {
        await this.NestedChildInput.fill(textValue)
    }


}