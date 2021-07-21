///<reference types="Cypress"/>
require('cypress-xpath')

describe('Learniing about asserts', () => {
    it('contains', () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.title().should('eq','My Store')
        cy.wait(1500)

        cy.get('#block_top_menu').contains('Women').click()
    });

    it('find, eq', () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.title().should('eq','My Store')
        cy.wait(1500)

        cy.get('.product-container').find('.product-image-container').eq(2).click()
    });

    it('find, eq', () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.title().should('eq','My Store')
        cy.wait(1500)

        cy.get('.product-container').find('.product-image-container').eq(2).click()
    });

    it('Challenge 1', () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.title().should('eq','My Store')
        cy.wait(1500)

        cy.get('.product-container').find('.product-image-container').eq(2).click().wait(1500)
        cy.get('#product_condition .editable').then((e)=>{
            let status= e.text()
            if(status== 'New'){
                cy.log("The dress is new")
            }
        })

        cy.get('#our_price_display').then((e)=>{
            let price = e.text().slice(1)
            if(price>20){
                cy.log('No alcanza')
                cy.xpath('//*[@id="columns"]/div[1]/a[2]').click()
            }
            else{
                cy.log('tarjetazo')
            }
        })
    });

    it.only('Challenge 1', () => {
        cy.visit('https://demoqa.com/text-box')
        cy.title().should('eq','ToolsQA')
        cy.wait(1500)

        cy.get('#userName').should('be.visible').type('agustin')
        cy.get('#userEmail').should('be.visible').type('agustin@gmail.com')
        cy.get('#submit').should('be.visible').click()
        cy.get('#name').should('have.text','Name:agustin')
        cy.get('#name').should('contain.text', 'agustin')

    });
});