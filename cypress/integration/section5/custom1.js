///<reference types='Cypress'/>
require('cypress-xpath')
describe('custom commands', () => {
     before(()=>{
        cy.visit('https://demoqa.com/text-box')
        cy.title('ToolsQa')
        cy.wait(2000)
    })
    it('Filling a form with custom commands', () => {
       cy.f_type("#userName","anything",1000)
       cy.f_type("#userEmail","anything@any.com",1000)
       cy.f_type("#currentAddress","anywhere",1000)
       cy.f_type("#permanentAddress","also anywhere",1000)
       cy.f_click("#submit",2000)
    });
});