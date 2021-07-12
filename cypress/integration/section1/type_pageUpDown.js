///<reference types="Cypress"/>

describe('Page up and Page Down', () => {
    it('Page up', () => {
       cy.visit('https://demoqa.com/text-box')
       cy.title().should('eq','ToolsQA')
       cy.get('#userName').type('{pageup}') 
       cy.wait(1500)
    });

    //The "only" function works to select the test that you want to run
    it.only('Page down', () => {
        cy.visit('https://demoqa.com/text-box')
        cy.title().should('eq','ToolsQA')
        cy.get('#userName').type('{pagedown}') 
        cy.wait(1500)
     });
});