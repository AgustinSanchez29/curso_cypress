///<reference types="Cypress"/>

const time = 1500
describe('Dates', () => {
    it('first', () => {
        cy.visit('https://www.seleniumeasy.com/test/bootstrap-date-picker-demo.html')
        cy.title("Selenium Easy - Best Demo website for Bootstrap Date picker")
        cy.wait(time)

        cy.get('#sandbox-container1 > .input-group > .input-group-addon').should('be.visible').click()
        cy.get('.today').first().click({force:true})    
    });

    it.only('second', () => {
        cy.visit('https://www.seleniumeasy.com/test/bootstrap-date-picker-demo.html')
        cy.title("Selenium Easy - Best Demo website for Bootstrap Date picker")
        cy.wait(time)
        //Could uses a tab function to jump to next field
        cy.get('[placeholder="Start date"]').should('be.visible').type('29/06/2021 {esc}')
        cy.get('[placeholder="End date"]').should('be.visible').type('29/07/2021 {esc}')

    });
});