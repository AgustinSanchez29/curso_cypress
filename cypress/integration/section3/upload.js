///<reference types="Cypress"/>
import 'cypress-file-upload';

const file= 'img.jpg'
describe('Upload files', () => {
    it('uf', () => {
        cy.visit('https://demoqa.com/automation-practice-form')
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)

        cy.get('[type="file"]').should('be.visible').attachFile(file)
    });
});