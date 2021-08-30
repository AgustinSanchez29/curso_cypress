///<reference types="Cypress"/>
require('cypress-xpath')

describe('Table', () => {
    it('children', () => {
        cy.visit('https://www.seleniumeasy.com/test/table-records-filter-demo.html')
        cy.title().should('eq', 'Selenium Easy - Table Data Filter Demo')
        cy.wait(2000)

        cy.get('.btn-group').children('.btn-success').should('contain','Green').click()
        cy.wait(2000)

        cy.get('.btn-group').children('.btn-danger').should('contain','Red').click()
        cy.wait(2000)

        cy.get('.btn-group').children('.btn-warning').should('contain','Orange').click()
    });

    //eq() This function look for a element when fetch more than a result
    it('EQ', () => {
        cy.visit('https://www.seleniumeasy.com/test/table-records-filter-demo.html')
        cy.title().should('eq', 'Selenium Easy - Table Data Filter Demo')
        cy.wait(2000)

        cy.get('[type="button"]').eq(2).should('contain','Orange').click()
    });


    //filter() This function look for a element within it's father
    it('filter', () => {
        cy.visit('https://www.seleniumeasy.com/test/table-records-filter-demo.html')
        cy.title().should('eq', 'Selenium Easy - Table Data Filter Demo')
        cy.wait(2000)

        cy.get('[type="button"]').filter('.btn-warning').click()
    });

    //
    it('find', () => {
        cy.visit('https://www.seleniumeasy.com/test/table-records-filter-demo.html')
        cy.title().should('eq', 'Selenium Easy - Table Data Filter Demo')
        cy.wait(2000)

        cy.get('.btn-group').find('.btn-danger').should('contain', 'Red').click()
    });

    //first() last() This is how can use the first function, that return the firt element founded
    it('first and last', () => {
        cy.visit('https://www.seleniumeasy.com/test/table-records-filter-demo.html')
        cy.title().should('eq', 'Selenium Easy - Table Data Filter Demo')
        cy.wait(2000)
        cy.get('.btn-group').find('button').first().click({force:true})
        cy.wait(2000)
        cy.get('.btn-group').find('button').last().click({force:true})

    });

    //nextAll(), selects all the next elements
    it('next all', () => {
        cy.visit('https://www.seleniumeasy.com/test/table-records-filter-demo.html')
        cy.title().should('eq', 'Selenium Easy - Table Data Filter Demo')
        cy.wait(2000)
        
        cy.get('[type="button"]').should('contain','Green')
        cy.wait(2000)
        cy.get('[type="button"]').should('contain','Green').nextAll().should('have.length', 4)

    });

    //parent(), to validate the father
    it('parent', () => {
        cy.visit('https://www.seleniumeasy.com/test/table-records-filter-demo.html')
        cy.title().should('eq', 'Selenium Easy - Table Data Filter Demo')
        cy.wait(2000)
        
        cy.get('[type="button"]').parent().should('have.class','btn-group')
    });

    //Challenge, find the checkboxes and select all
    it('challenge', () => {
        cy.visit('https://www.seleniumeasy.com/test/table-records-filter-demo.html')
        cy.title().should('eq', 'Selenium Easy - Table Data Filter Demo')
        cy.wait(2000)
        
        cy.get('.btn-group').find('button').first().click().then(()=>{
            cy.get('[type="checkbox"]').check({force:true})
        })
        cy.wait(2000)

        cy.get('.btn-group').find('.btn-warning').click().then(()=>{
            cy.get('[type="checkbox"]').check({force:true})
        })
        cy.wait(2000)

        cy.get('.btn-group').find('.btn-danger').click().then(()=>{
            cy.get('[type="checkbox"]').check({force:true})
        })
        cy.wait(2000)

        cy.get('.btn-group').find('button').last().click().then(()=>{
            cy.get('[type="checkbox"]').check({force:true})
        })
    });


    //Challenge, find the checkboxes and select all, **updated**
    it('challenge', () => {
        cy.visit('https://www.seleniumeasy.com/test/table-records-filter-demo.html')
        cy.title().should('eq', 'Selenium Easy - Table Data Filter Demo')
        cy.wait(2000)
        let temp=""

        for(let x=1; x<=4; x++){
            if(x==1){temp='Green'}
            else if(x==2){temp='Orange'}
            else if(x==3){temp='Red'}
            else if(x==4){temp='All'}

            cy.get('[type="button"]').eq(x).should('contain', temp).click({force:true})
            cy.wait(2000)
            cy.get('[type="checkbox"]').check({force:true})
        }
    });

    it('Obtaining the table values', () => {
        cy.visit('https://www.seleniumeasy.com/test/table-sort-search-demo.html')
        cy.title().should('eq', 'Selenium Easy - Tabel Sort and Search Demo')
        cy.wait(2000)
        
        const datos =[]
        cy.get('.odd td, .even td').each(($el, index, $list)=>{
            datos[index]= $el.text()
        }).then(()=>{
            for(let i=0; i<=datos.length; i++){
                cy.log(datos[i])
            }
        })

        
    });


    it('obtaining the odd class values numbers', () => {
        cy.visit('https://www.seleniumeasy.com/test/table-sort-search-demo.html')
        cy.title().should('eq', 'Selenium Easy - Tabel Sort and Search Demo')
        cy.wait(2000)
        
        const datos =[]
        let cantidadOdd= 0

        cy.get('[role="row"] td').each(($el, index, $list)=>{
            datos[index]= $el.text()
        }).then(()=>{
            for(let i=0; i<=datos.length; i++){
                cy.log(datos[i])
                if(Number(datos[i])){
                    cantidadOdd+=Number(datos[i])
                }
            }
            cy.log(`La cantidad total es: ${cantidadOdd}`)
            expect(cantidadOdd).eq(394)
        })
        
    });


    it.only('obtaining the specific value', () => {
        cy.visit('https://www.seleniumeasy.com/test/table-sort-search-demo.html')
        cy.title().should('eq', 'Selenium Easy - Tabel Sort and Search Demo')
        cy.wait(2000)
        
        const campo = cy.get('tbody > :nth-child(7) > :nth-child(2)')        
        campo.each(($el, index, $item)=>{
            const dato= $el.text()
            cy.log(dato)
            if(dato.includes('Javascript Developer')){
                campo.eq(index).next().next().then((age)=>{
                    const edad= age.text()
                    cy.log(`La edad es: ${edad}`)
                    expect(edad).to.equal('39')
                })
            }
        })
    });

});