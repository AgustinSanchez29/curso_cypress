///<reference types="Cypress"/>

describe('windows reference', () => {
    it('charset property', () => {
        cy.visit('https://testsheepnz.github.io/random-number.html')
        cy.title().should('eq','The Number Game')
        cy.wait(2000)

        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
    });

    it.only('charset property', () => {
        cy.visit('https://testsheepnz.github.io/random-number.html')
        cy.title().should('eq','The Number Game')
        cy.wait(2000)

        cy.url().should('include', 'random-number.html')
    });
});