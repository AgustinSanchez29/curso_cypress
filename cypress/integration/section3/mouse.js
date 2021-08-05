///<reference types="Cypress"/>
import '@4tw/cypress-drag-drop'

describe('Cypress, mouse events', () => {
    it('Drag and drop', () => {
       cy.visit('https://the-internet.herokuapp.com/drag_and_drop')
       cy.title("The Internet")

       cy.get('#column-a').drag('#column-b', {force:true})  
    });

    it('Drag and drop 2', () => {
        cy.visit('https://www.seleniumeasy.com/test/drag-and-drop-demo.html')
        cy.title("Selenium Easy Demo - Drag and Drop Demo")
        cy.wait(1500)

        cy.get('#todrag > :nth-child(2)').drag('#mydropzone')
        cy.get('#todrag > :nth-child(3)').drag('#mydropzone')
        cy.get('#todrag > :nth-child(4)').drag('#mydropzone')
        cy.get('#todrag > :nth-child(5)').drag('#mydropzone')
     });

     it('Drag and drop 3 mouse over', () => {
        cy.visit('http://www.way2automation.com/')
        cy.title("eq","Online Selenium Certification Course | Selenium Online Training | Selenium Tutorial")
        cy.wait(1500)

        cy.contains('Selenium').trigger('mouseover')
        cy.wait(1500)
        cy.contains('Selenium Python Video Tutorials').invoke('removeAttr','target').click()
     });


     it.only('Drag and drop 3 mouse over', () => {
        cy.visit('https://www.seleniumeasy.com/test/drag-drop-range-sliders-demo.html')
        cy.title("eq","Selenium Easy - Drag and Drop Range Sliders")
        cy.wait(1500)

        cy.get('#slider1 > .range > input').invoke('attr','value','80')
     });
});