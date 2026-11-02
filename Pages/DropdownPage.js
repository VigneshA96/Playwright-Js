export class DropdownPage{
    constructor(page)
    {
        this.page=page
        this.selectcourse = page.getByTestId('simple-course-dropdown')
        this.multiSelectCourses = page.getByTestId('multi-course-dropdown');
        
    }

    // action

    async dropdowns()
    {
        await this.selectcourse.selectOption({index:1})
    }
    async multiselect()
    {  
        await this.multiSelectCourses.selectOption(['Java', 'Python'])
    }
}
