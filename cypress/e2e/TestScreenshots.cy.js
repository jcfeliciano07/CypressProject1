//Capture screenshots and Videos
/// <reference types="Cypress" />

describe('Capture Screenshots & Videos', ()=> {

it('Capture Screenshots', ()=>
{
cy.visit("https://demo.opencart.com/");
//cy.screenshot("homepage");
//cy.wait(5000);
//cy.get('#logo > a > .img-fluid').screenshot("logo")

//Automatically capture screenshot & video on failure - only when execute thru CLI
cy.get("li:nth-child(7) a:nth-child(1)").click(); //cameras
cy.get("div[id='content'] h2").should('have.text',"Tables"); //Failing assertion

//run below command to get screenshots & video on failure
//npx cypress run --spec cypress/e2e/TestScreenshots.cy.js

})
})