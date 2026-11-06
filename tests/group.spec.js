import test from '@playwright/test'
test.describe.only("group1",()=>{
test("Test1",async()=>{
    console.log("this is test1")
})
test("Test2",async()=>{
    console.log("this is test2")
})
})



 test.describe.skip("Group1",async()=>{

    test("Test3",async()=>{
    console.log("this is test3")
})
test("Test4",async()=>{
    console.log("this is test4")
})
test("Test5",async()=>{
    console.log("this is test5")
})
 })
