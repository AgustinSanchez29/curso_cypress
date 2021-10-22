// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('f_type', (a, b,t) => {
    cy.get(a).should('be.visible').type(b)
    cy.wait(t)
}),

Cypress.Commands.add('f_click', (a,t) => {
    cy.get(a).should('be.visible').click()
    cy.wait(t)
}),


Cypress.Commands.add('force_click', (a,t) => {
    cy.get(a).should('be.visible').click({force:true})
    cy.wait(t)
}),


Cypress.Commands.add('f_type_xpath', (a, b,t) => {
    cy.xpath(a).should('be.visible').type(b)
    cy.wait(t)
}),

Cypress.Commands.add('f_click_xpath', (a,t) => {
    cy.xpath(a).should('be.visible').click()
    cy.wait(t)
})