///<reference types="Cypress"/>

describe('Title validation -> section 1', () => {
    it('Test validation title', () => {
        cy.visit('https://demoqa.com/text-box')
        cy.title().should('eq','ToolsQA')
    });
});