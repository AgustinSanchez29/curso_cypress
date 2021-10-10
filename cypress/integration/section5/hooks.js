///<reference types="Cypress"/>

describe('hooks', () => {
    before(()=>{
        cy.log('kick off before the functions')
    })
    beforeEach(()=>{
        cy.log('iterate before all the functions')
    })
    afterEach(()=>{
        cy.log('iterate after all the functions')
    })
    after(()=>{
        cy.log('kick off after the functions')
    })
    it('demo1', () => {
        cy.log('test1')
    });
    it('demo2', () => {
        cy.log('test2')
    });
});