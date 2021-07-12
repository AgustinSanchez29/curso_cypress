///<reference types="Cypress"/>
require('cypress-plugin-tab')


//We will use the tab function to simulate a tab key to move to the next field
//With it the asserts doesn't show
//We will use a plugin to use a tab
describe('', () => {
    it('', () => {
        cy.visit('https://demoqa.com/automation-practice-form')
        cy.title().should('eq','ToolsQA')
        cy.get('#firstName').type('Agustin').tab().
        type('Sanchez').tab().
        type('agustin.s299@gmail.com')
    });
});