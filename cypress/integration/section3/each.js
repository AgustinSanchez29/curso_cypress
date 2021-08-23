///<reference types="Cypress"/>
require('cypress-xpath')

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
        const datos = []

        cy.get('#center_column .product-name').each(($el, index, $list)=>{
            datos[index]= $el.text()

        }).then(()=>{
            
            for(let x = 0 ; x<=datos.length ; x++){
                cy.get('#center_column .product-name').eq(x).click({force:true})
                cy.wait(2000)
                cy.get('#quantity_wanted').clear().type('2')
                cy.get('#group_1').select('M').should('have.value','2')
                cy.get('.exclusive > span').should('be.visible').click()
                cy.xpath('//header/div[3]/div[1]/div[1]/div[4]/div[1]/div[2]/div[4]/a[1]/span[1]').click()
                cy.wait(2000)
                cy.get('.icon-home').should('be.visible').click()
            }
        })

    });

});