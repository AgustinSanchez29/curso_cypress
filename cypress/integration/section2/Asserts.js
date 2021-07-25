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

    it('Challenge 1', () => {
        cy.visit('https://demoqa.com/text-box')
        cy.title().should('eq','ToolsQA')
        cy.wait(1500)

        cy.get('#userName').should('be.visible').type('agustin')
        cy.get('#userEmail').should('be.visible').type('agustin@gmail.com')
        cy.get('#submit').should('be.visible').click()
        cy.get('#name').should('have.text','Name:agustin')
        cy.get('#name').should('contain.text', 'agustin')

    });

    it('Assert have.text mas then', () => {
        cy.visit('https://demoqa.com/text-box')
        cy.title().should('eq','ToolsQA')
        cy.wait(1500)

        cy.get('#userName').should('be.visible').type('agustin')
        cy.get('#userName').should('contain.value','agustin').then(()=>{
            cy.get('#userEmail').should('be.visible').type('agustin.s2966@gmail.com')
            cy.get('#submit').should('be.visible').click()
        })  

    });

    it('Assert have.text mas then', () => {
        cy.visit('https://www.seleniumeasy.com/test/table-pagination-demo.html')
        cy.wait(1500)

        cy.get('#myTable > tr').should('have.length',13)//the table contains 13 rows
        cy.get('#myTable > tr > td').should('have.length',91)//the table contains 91 elements
    });

    it('Asserts', () => {
        cy.visit('https://www.seleniumeasy.com/test/basic-first-form-demo.html')
        cy.wait(1500)

        cy.get('.at-cm-no-button').should('be.visible').click({force:true})
        cy.get('.form-group > #user-message').should('be.visible').type('etc')
        cy.contains('[type="button"]','Show Message').should('be.visible').click({force:true})

    });

    //CHALLENGE #1
    it.only('Challenge 1 Asserts', () => {
        let a = 30
        let b = 40
        cy.visit('https://www.seleniumeasy.com/test/basic-first-form-demo.html')
        cy.wait(1500)

        cy.get('.at-cm-no-button').should('be.visible').click({force:true})
        cy.get('#sum1').should('be.visible').and('have.class', 'form-control').type(a)
        cy.get('#sum2').should('be.visible').and('have.class', 'form-control').type(b)
        cy.contains('[type="button"]', 'Get Total').click()
        cy.get('#displayvalue').should('be.visible').then((e)=>{
            cy.log(e.text())
            let resp = e.text()
            if(resp >50){
                a = a - 10
                b = b -5
                cy.get('#sum1').invoke('attr','placeholder').should('contain','Enter value').then(()=>{
                    cy.get('#sum1').clear().type(a)
                    cy.wait(1000)
                    cy.get('#sum1').invoke('attr','style','color:blue')
                })
                cy.get('#sum2').should('be.visible').and('have.class', 'form-control').clear().type(b)
                cy.contains('[type="button"]', 'Get Total').click()
                cy.get('#displayvalue').invoke('attr', 'style', 'color:yellow')
            }
            else{
                a = a + 5
                b = b + 5
                cy.get('#sum1').should('be.visible').and('have.class', 'form-control').clear().type(a)
                cy.get('#sum2').should('be.visible').and('have.class', 'form-control').clear().type(b)
                cy.contains('[type="button"]', 'Get Total').click()
            }
        })
    });


});