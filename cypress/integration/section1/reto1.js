///<reference types="Cypress"/>
require('cypress-plugin-tab')

describe('Challenge', () => {
    it('First Challenge', () => {
        //Navigate until webtables section
        cy.visit('https://demoqa.com/')
        cy.title().should('eq', 'ToolsQA')
        cy.get('#app > div > div > div.home-body > div > div:nth-child(1)').click()
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-3').click()
        cy.url().should('include','/webtables')
        cy.wait(2000)

        //Adding a new record
        cy.get('#addNewRecordButton').click()
        cy.get('#firstName').click().type('Agustin').tab().
        type('Sanchez').tab().
        type('agustin@gmail.com').tab().
        type('24').tab().
        type('1100').tab().
        type('Quality Assurance')
        cy.get('#submit').should('be.enabled').click()

        //Looking for the record
        cy.get('#searchBox').should('be.visible').type('agustin@gmail.com')
        cy.wait(2000)

        //Editing the new record
        cy.get('#edit-record-4').should('be.visible').click()
        cy.get('#salary').should('be.visible').clear().type('1500')
        cy.get('#userEmail').should('be.visible').clear().type('agustin.s2966@gmail.com')
        cy.get('#submit').should('be.enabled').click()
        cy.wait(3000)

        //Deleting the record
        cy.get('#searchBox').clear().type('agustin.s2966@gmail.com')
        cy.get('#delete-record-4').should('be.visible').click()
        cy.wait(2000)
        cy.get('#searchBox').clear()
    });
});