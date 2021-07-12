///<reference types="Cypress"/>

describe('assert test', () => {
    it('something', () => {
        cy.visit('https://demoqa.com/automation-practice-form')
        cy.title().should('eq','ToolsQA')//it is an assert
        cy.get('#firstName').should('be.visible').type('nombre')
        cy.get('#lastName').should('be.visible').type('apellido')
        cy.get('#userEmail').should('be.visible').should('be.enabled').type('sample@sample.com')
    });
});