import {test as base} from '@playwright/test'

export const test = base.extend({
    myfixtures:async({},use)=>{
        console.log("fixtures started")
        await use()
        console.log("fixtures Finished")
    },
    my:async({},use)=>{
        console.log("fixtures inside started")
        await use()
        console.log("fixtures inside ended")
    }
})