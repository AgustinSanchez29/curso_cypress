///<reference types="Cypress"/>

describe('Select function', () => {
    it('Select', () => {
        cy.visit('https://www.seleniumeasy.com/test/basic-select-dropdown-demo.html')
        cy.title().should('eq','Selenium Easy Demo - Automate All Scenarios')
        cy.wait(1500)
        cy.get('#select-demo').should('be.visible').select('Wednesday').should('have.value','Wednesday').wait(3000)
        cy.get('#select-demo').should('be.visible').select('Sunday').should('have.value','Sunday')

    });

    it.only('Multi-Select', () => {
        cy.visit('https://www.seleniumeasy.com/test/basic-select-dropdown-demo.html')
        cy.title().should('eq','Selenium Easy Demo - Automate All Scenarios')
        cy.wait(1500)
        //using the 'Then' function
        cy.get('#multi-select').should('be.visible').select(['California','New York','Pennsylvania']).then(()=>{
            cy.get('#printMe').should('be.visible').click()
        })

    });
});