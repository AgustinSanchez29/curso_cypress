///<reference types='Cypress'/>
require('cypress-xpath')
describe('hooks practice 1', () => {
     beforeEach(()=>{
        cy.visit('https://demoqa.com/')
        cy.title('ToolsQa')
        cy.wait(1000)
    })

    it('test1', () => {
        cy.get('#app > div > div > div.home-body > div > div:nth-child(1) > div > div.avatar.mx-auto.white').should('be.visible').click()
        cy.wait(1000)
        cy.get(':nth-child(2) > .group-header > .header-wrapper').should('be.visible').click()
        cy.get(':nth-child(2) > .element-list > .menu-list > #item-0').should('be.visible').click()
        cy.get('#firstName').should('be.visible').type('agustin')
        cy.get('#lastName').should('be.visible').type('sanchez')
        cy.get('#userEmail').should('be.visible').type('agustin@sanchez.com')
        cy.get('.custom-control-input').eq(0).check({force:true})
        cy.get('#userNumber').should('be.visible').type('1234567890')
        cy.get('.subjects-auto-complete__value-container').should('be.visible').type('test')
        cy.get('.custom-control-input').eq(3).check({force:true})
        cy.get('#currentAddress').should('be.visible').type('test')
        cy.get('#submit').click()
        cy.wait(1500)
        cy.get('#closeLargeModal').should('be.visible').click()

    });

    it('test2', () => {
        cy.get('#app > div > div > div.home-body > div > div:nth-child(1) > div > div.avatar.mx-auto.white').should('be.visible').click()
        cy.wait(1000)
        cy.get(':nth-child(2) > .group-header > .header-wrapper').should('be.visible').click()
        cy.get(':nth-child(2) > .element-list > .menu-list > #item-0').should('be.visible').click()
        cy.get('#firstName').should('be.visible').type('test')
        cy.get('#lastName').should('be.visible').type('test')
        cy.get('#userEmail').should('be.visible').type('test@test.com')
        cy.get('.custom-control-input').eq(2).check({force:true})
        cy.get('#userNumber').should('be.visible').type('1234567890')
        cy.get('.subjects-auto-complete__value-container').should('be.visible').type('test')
        cy.get('.custom-control-input').eq(4).check({force:true})
        cy.get('#currentAddress').should('be.visible').type('test')
        cy.get('#submit').click()
        cy.wait(1500)
        cy.get('#closeLargeModal').should('be.visible').click()

    });

    afterEach(()=>{
        cy.get('header > a > img').should('be.visible').click()
        cy.wait(2000)
    })
});