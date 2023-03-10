/// <reference types="Cypress" />
//Need to install plugin = npm install -D cypress-xpath
//Below command should be defined in command.js file as well
/// <reference types="Cypress-xpath" />
//require('cypress-xpath') => should be defined in e2e.js file

describe('XPath Suite', ()=> {

    it('Find number of products', ()=>  {
   
    cy.visit("https://demo.opencart.com/");
    cy.xpath('//*[@class="description"]').should('have.length', 4)
    cy.xpath('//*[@class="form-control form-control-lg"]').type("Testing");
    cy.xpath('//*[@class="btn btn-light btn-lg"]').click();
    cy.go('back')

    cy.contains('Desktop').click({force:true}) //Mouse hover
    cy.xpath("//a[normalize-space()='Show All Desktops']").click() //xpath captured from selectorHub plugin
    cy.xpath('//*[@id="input-sort"]').select('Rating (Lowest)');
    cy.xpath('//*[@id="input-sort"]').should('have.value','https://demo.opencart.com/index.php?route=product/category&language=en-gb&path=20&sort=rating&order=ASC')

    //cy.get('#dropdown-class-example').select('option2').should('have.value','option2')

        

    })
    })
