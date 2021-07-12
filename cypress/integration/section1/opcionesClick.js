
///<reference types="Cypress"/>

describe('Click events options', () => {
    it('Basic click', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/auth/login')
        cy.title().should('eq','OrangeHRM')
        cy.get('#txtUsername').should('be.enabled').type('admin')
        cy.get('#txtPassword').should('be.enabled').type('admin123')
        cy.get('#btnLogin').should('be.visible').click()
    });

//Click force
    it('click force true', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/auth/login')
        cy.title().should('eq','OrangeHRM')
        cy.get('#txtUsername').should('be.enabled').type('admin')
        cy.get('#txtPassword').should('be.enabled').type('admin123')
        cy.get('#btnLogin').should('be.visible').click()
        cy.get('#menu_pim_viewMyDetails > b').should('be.visible').click()
        cy.get('#sidenav > :nth-child(2) > a').should('be.visible').click({force:true})//here
    });

//Click a element by coordinates
    it.only('click by coordinates', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/auth/login')
        cy.title().should('eq','OrangeHRM')
        cy.get('#txtUsername').should('be.enabled').type('admin')
        cy.get('#txtPassword').should('be.enabled').type('admin123')
        cy.get('#btnLogin').should('be.visible').click()
        cy.get('#menu_pim_viewMyDetails > b').should('be.visible').click(20,5)

    });
});