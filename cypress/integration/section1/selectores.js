///<reference types="Cypress"/>
require('cypress-xpath')
require('cypress-plugin-tab')


describe('Tipos de selectores', () => {
    it('selector por id', () => {
        cy.visit('https://demoqa.com/text-box')
        cy.title().should('eq', 'ToolsQA')
        cy.wait(1000)

        cy.get('#userName').should('be.visible').type('Agustin')
        cy.get('#userEmail').should('be.visible').type('agustin@gmail.com')
    });

//Select a element by atribute
    it('selector por atributo', () => {
        cy.visit('https://demoqa.com/text-box')
        cy.title().should('eq', 'ToolsQA')
        cy.wait(1000)

        cy.get("[placeholder='Full Name']").should('be.visible').type('some')
    });

//XPATH
    it('selector por atributo', () => {
        cy.visit('https://demoqa.com/text-box')
        cy.title().should('eq', 'ToolsQA')
        cy.wait(1000)

        //byxpath
        cy.xpath("//*[@id='userName']").should('be.visible').type('somexpath')
        //bytruePath
        cy.xpath("//input[contains(@placeholder,'name@example.com')]").should('be.visible').type('correo')
    });    

//CONTAINS
    it('selector por atributo', () => {
        cy.visit('https://demoqa.com/automation-practice-form')
        cy.title().should('eq', 'ToolsQA')
        cy.wait(1000)

        cy.get('.custom-control-label').contains('Female').click()
        cy.wait(1000)
        cy.get('.custom-control-label').contains('Other').click()

    });   

//COPY SELECTOR
    it.only('selector por atributo', () => {
        cy.visit('https://demoqa.com/automation-practice-form')
        cy.title().should('eq', 'ToolsQA')
        cy.wait(1000)

        cy.get('#firstName').should('be.visible').type('copy selector').tab().
        type('2023-06-01')

    });   
});