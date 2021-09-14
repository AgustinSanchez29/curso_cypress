///<reference types="Cypress"/>
require('cypress-xpath')


describe('Invoke', () => {
    it('invoke text', () => {
        cy.visit('https://testpages.herokuapp.com/styled/validation/input-validation.html')
        cy.title().should('eq', 'Input Validation')
        cy.wait(1000)

        cy.get('.page-body > :nth-child(5)').invoke('text').as('info')
        cy.get('@info').should('contain','The information will be submitted to the server if it passes client side validation.')

        cy.xpath()        
    });

    it('invoke styles', () => {
        cy.visit('https://testpages.herokuapp.com/styled/validation/input-validation.html')
        cy.title().should('eq', 'Input Validation')
        cy.wait(1000)

        cy.get('[for="firstname"]').invoke('attr','style','color:blue; font-size: 80px')   
    });

    it.only('invoke hide/show', () => {
        cy.visit('https://testpages.herokuapp.com/styled/validation/input-validation.html')
        cy.title().should('eq', 'Input Validation')
        cy.wait(1000)

        cy.get('[for="firstname"]').invoke('hide','2s')
        cy.get('#firstname').invoke('hide','4s')   
        cy.get('[for="firstname"]').invoke('show','2s')
        cy.get('#firstname').invoke('show','4s')   

    });

    
});