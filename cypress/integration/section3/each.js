///<reference types="Cypress"/>

describe('Loops, for statement', () => {
    it('each', () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.title().should('eq','My Store')
        cy.wait(1500)

        cy.get('.product-name').should('be.visible').each(($el, index, $list)=>{
            let nombre= $el.text()
            if(nombre.includes('Blouse')){
                cy.wrap($el).click()
            }
        })
    });

    //CHALLENGE
    it.only('each', () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.title().should('eq','My Store')
        cy.wait(1500)


    });

});