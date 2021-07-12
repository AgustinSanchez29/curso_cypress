describe('Type enter test', () => {
    it('test', () => {
        cy.visit("https://www.google.com/")
        cy.title().should('eq', 'Google')
        cy.wait(1500)
        //obtenemos el elemento validando que el tag sea name y el valor luego se escibe y se da Enter
        cy.get("[name='q']").type('cypress io {enter}')
        cy.get('#rso > div:nth-child(1) > div > div > div > div > div > div > div.yuRUbf > a > h3')
        .click()
    });
});
    