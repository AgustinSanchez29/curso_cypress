///<reference types="Cypress"/>

describe('Challenge 1 section 2', () => {
    it('List box demo challenge', () => {
        cy.visit('https://www.seleniumeasy.com/test/jquery-dual-list-box-demo.html')
        cy.get(':nth-child(1) > .form-control').should('be.visible').select(['Isis','Laura','Valentina']).then(()=>{
            cy.get('.pAdd').should('be.visible').click().then(()=>{
                cy.wait(2000)
                cy.get(':nth-child(3) > .form-control').should('be.visible').select(['Isis','Valentina']).wait(2000).then(()=>{
                    cy.get('.pRemove').should('be.visible').click().then(()=>{
                        cy.wait(2000)
                        cy.get('.pAddAll').should('be.visible').click().then(()=>{
                            cy.wait(2000)
                            cy.get('.pRemoveAll').should('be.visible').click().then(()=>{
                                cy.log('Test ready')
                            })
                        })
                    })
                })
            })
        })        
        
        
    });
});