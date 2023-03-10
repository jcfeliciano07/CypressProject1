/// <reference types="Cypress" />
//Need to install plugin = npm install -D cypress-xpath
/// <reference types="Cypress-xpath" />

describe('Navigation Suite', ()=> {

    it('Navigation Pages & Mouse-hover', ()=>
    {
    cy.visit("https://demo.opencart.com/");
    cy.contains("Wish").click();
    cy.contains("Software").click();
    cy.get('.list-group-item.active').click();
    cy.get('.form-control.form-control-lg').type("notebook")
    cy.get('.btn.btn-light.btn-lg').click();
    cy.go('back'); // go back to home page
    cy.contains('MP3').click({force:true}) //Mouse hover
    cy.get("ul:nth-child(3) > li:nth-child(1) > a:nth-child(1)").click();

    cy.contains('Components').click({force:true}) //Mouse hover
    cy.get('li:nth-child(3) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(5) > a:nth-child(1)').click();

    //cy.get("li:nth-child(9) > a:nth-child(1) > div:nth-child(1)");
    
  

    })
    })
