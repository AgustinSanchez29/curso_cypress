///<reference types='Cypress'/>
require('cypress-xpath')
describe('hooks examples', () => {
    before(()=>{
        cy.visit("https://demoqa.com/checkbox")
        cy.title('ToolsQa')
        cy.wait(2000)
    })
    it('test1', () => {
        cy.get('.rct-option-expand-all > .rct-icon').should('be.visible').click()
        cy.get('[type="checkbox"]').check({force:true})
        cy.wait(2000)
    });

    it('test2', () => {
        cy.get('[type="checkbox"]').uncheck({force:true}).should('not.be.checked')
        cy.wait(2000)
    });

    it('test3', () => {
        cy.get('[type="checkbox"]').eq(5).check({force:true})
        cy.wait(2000)
    });
});