///<reference types='Cypress'/>
describe('Navegation', () => {
    it('demo1', () => {
        cy.visit('https://demoqa.com/')
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)

        cy.get(':nth-child(1) > :nth-child(1) > .avatar > svg').should('be.visible').click({force:true})
        cy.wait(1000)
        cy.go('back')
        cy.wait(2000)
        cy.go('forward')
    });


    it.only('reload', () => {
        cy.visit('https://demoqa.com/')
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)

        cy.get(':nth-child(1) > :nth-child(1) > .avatar > svg').should('be.visible').click({force:true})
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').should('be.visible').click({force:true})
        cy.wait(1000)
        cy.get('#userName').should('be.visible').type('texto')
        cy.get('#userEmail').should('be.visible').type('text@texto.com')
        cy.wait(1000)
        cy.reload()
    });


});

