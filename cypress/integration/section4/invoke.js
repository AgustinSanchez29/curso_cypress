///<reference types="Cypress"/>
require('cypress-xpath')


describe('Invoke', () => {
    it('invoke text', () => {
        cy.visit('https://testpages.herokuapp.com/styled/validation/input-validation.html')
        cy.title().should('eq', 'Input Validation')
        cy.wait(1000)

        cy.get('.page-body > :nth-child(5)').invoke('text').as('info')
        cy.get('@info').should('contain','The information will be submitted to the server if it passes client side validation.')

        cy.xpath()        
    });

    it('invoke styles', () => {
        cy.visit('https://testpages.herokuapp.com/styled/validation/input-validation.html')
        cy.title().should('eq', 'Input Validation')
        cy.wait(1000)

        cy.get('[for="firstname"]').invoke('attr','style','color:blue; font-size: 80px')   
    });

    it('invoke hide/show', () => {
        cy.visit('https://testpages.herokuapp.com/styled/validation/input-validation.html')
        cy.title().should('eq', 'Input Validation')
        cy.wait(1000)

        cy.get('[for="firstname"]').invoke('hide','2s')
        cy.get('#firstname').invoke('hide','4s')   
        cy.get('[for="firstname"]').invoke('show','2s')
        cy.get('#firstname').invoke('show','4s')   

    });

    it('challenge 1, hide and show lastname label', () => {
        cy.visit('https://testpages.herokuapp.com/styled/validation/input-validation.html')
        cy.title().should('eq', 'Input Validation')
        cy.get('[for="surname"]').invoke('hide')
        cy.wait(1000)
        cy.get('#surname').should('be.visible').type('tst').then(()=>{
            cy.wait(2000)
            cy.get('[for="surname"]').invoke('show')
        })  

    });


    it('obteniendo elemento y comparando atributo', () => {
        cy.visit('https://www.seleniumeasy.com/test/bootstrap-modal-demo.html')
        cy.title().should('eq', 'Selenium Easy Demo - Bootstrap Modal Demo to Automate')
        cy.wait(1000)
       
        cy.xpath('//body/div[1]/div[1]/div[2]/a[1]/img[1]').invoke('attr','src').should('include','sponsored-by-CBT.png')

    });

    it.only('target_blank', () => {
        cy.visit('https://dvwa.co.uk/')
        cy.title().should('eq', 'DVWA - Damn Vulnerable Web Application')
        cy.wait(1000)
       
        cy.xpath('//*[@id="pagewidth"]/div/div[5]/a[2]').invoke('removeAttr', 'target').click({force:true})
    });


    
});