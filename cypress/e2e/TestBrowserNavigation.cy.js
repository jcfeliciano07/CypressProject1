//
/// <reference types="Cypress" />

describe('Browser Navigation Suite', ()=> {

    it('Browser Navigation', ()=>
    {
    cy.visit("https://demo.opencart.com/");
    cy.title().should('eq',"Your Store"); // Verifying title of Home page
    cy.get("li:nth-child(7) a:nth-child(1)").click();
    cy.get("div[id='content'] h2").should('have.text',"Cameras"); //assertion to verify if the correct text exist

    cy.go('back'); // go back to home page
    cy.title().should('eq',"Your Store"); // Home Page
    cy.go('forward'); // go to Cameras page
    cy.get("div[id='content'] h2").should('have.text',"Cameras"); //assertion to verify if the correct text exist

    cy.go(-1); //Home
    cy.title().should('eq',"Your Store");

    cy.go(1); //Cameras page
    cy.get("div[id='content'] h2").should('have.text',"Cameras");

    cy.reload();

    //npx cypress open => execute to open test runner

    })
    })
