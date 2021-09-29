///<reference types="Cypress"/>
require('cypress-xpath')


describe('Alias', () => {
    it('alias1', () => {
        cy.visit('https://testpages.herokuapp.com/styled/validation/input-validation.html')
        cy.title().should('eq', 'Input Validation')
        cy.wait(1000)

        cy.get('#firstname').should('be.visible').as('nom')
        cy.get('@nom').type('anything')
    });
});