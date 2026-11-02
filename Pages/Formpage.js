export class Formpage{
    constructor(page)
    {
        this.page=page
        this.FullNameField = page.getByPlaceholder('Enter full name')
        this.EmailField = page.getByPlaceholder('Enter email')
        this.MobileNumberField = page.getByPlaceholder('Enter phone number')
        this.AutomationTopic = page.getByTestId('practice-topic-dropdown')
        this.Gender = page.getByTestId('practice-gender-male-radio') 
        
    }

    //Actions
    
    async FillTheFormPage(fillname,email,mobile,topic,datevalue)
    {
        await this.FullNameField.fill(fillname)
        await this.EmailField.fill(email)
        await this.MobileNumberField.fill(mobile)
        await this.AutomationTopic.selectOption(topic)
        await this.Gender.click()
        
    }
}

