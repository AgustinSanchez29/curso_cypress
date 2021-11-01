///<reference types='Cypress'/>
require('cypress-xpath')
describe('argumento', () => {
     before(()=>{
        cy.visit('https://demoqa.com/automation-practice-form')
        cy.title('ToolsQA')
        cy.wait(2000)
    })
    it('test1', () => {
        cy.f_toolsqa("agustin", "sanchez", "test@test.com")
    });
});