///<reference types="Cypress"/>
require('cypress-plugin-tab')

describe('Perform the challenge #2', () => {
    it('Challenge 2', () => {
        cy.visit('https://computer-database.gatling.io/computers')
        cy.title().should('eq','Computers database')
        cy.wait(1500)

        cy.get('#searchbox').should('be.visible').type('ACE')
        cy.get('#searchsubmit').should('be.enabled').click()
        cy.get("#add").should('be.visible').click()
        cy.get('#name').should('be.visible').type('agustin')
        cy.get('#introduced').should('be.visible').type('2021-06-01').tab().
        type('2023-06-01')
        cy.get('#company').should('be.visible').select('Sun Microsystems').should('have.value','38').wait(1500)
        cy.get('.primary').should('be.visible').click()
        cy.get('#searchbox').should('be.visible').type('agustin')
        cy.get('#searchsubmit').should('be.enabled').click()
    });
});