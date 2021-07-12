describe("Welcome to cypress course",()=>{
    it("First test -> Hello world",()=>{
        cy.log("Hi")
        cy.wait(3000)
    })

    //can add another test inside the same global test
    it("second test", ()=>{ 
        cy.visit("https://demoqa.com/text-box")
        cy.get("#userName").type("agustin")
        cy.wait(4000)
       
    })
})

