///<reference types="Cypress"/>
require('cypress-plugin-tab')


describe('learning about checkboxes', () => {
    it('checkbox', () => {
        cy.visit('https://www.seleniumeasy.com/test/basic-checkbox-demo.html')
        cy.title().should('eq','Selenium Easy - Checkbox demo for automation using selenium').wait(1500)
        cy.get("[type='checkbox']").check().should('be.checked').wait(1500)
        cy.get("[type='checkbox']").uncheck().should('not.be.checked')
    });
    it('checkbox2', () => {
        cy.visit('https://www.seleniumeasy.com/test/basic-checkbox-demo.html')
        cy.title().should('eq','Selenium Easy - Checkbox demo for automation using selenium').wait(1500)
        cy.get("#isAgeSelected").check().should('be.checked').wait(1500)
        cy.get(":nth-child(3) > label > .cb1-element").check().should('be.checked').wait(1500)
        //we could use click() function, but the should() function will be unavailable
    });

    it.only('Radio Buttons', () => {
        cy.visit('https://www.seleniumeasy.com/test/basic-radiobutton-demo.html')
        cy.title().should('eq','Selenium Easy Demo - Radio buttons demo for Automation').wait(1500)
        cy.get(".panel-body > :nth-child(2) > input").check().should('be.checked').wait(1500)
        cy.get(".panel-body > :nth-child(2) > :nth-child(2) > input").check().should('be.checked').wait(1500)
        cy.get(":nth-child(3) > :nth-child(3) > input").check().should('be.checked').wait(1500)
        cy.get('.panel-body > .btn').click()
    });
});
