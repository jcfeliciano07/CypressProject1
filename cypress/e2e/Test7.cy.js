//Handling iFrames

/// <reference types="Cypress" />
/// <reference types="Cypress-iframe" />
import 'cypress-iframe'
 
describe('Frame Test', function(){

it('iFrame Case 1',function() {
 
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
cy.frameLoaded("#courses-iframe")
cy.iframe().find("a[href*='mentorship']").eq(0).click()
cy.iframe().find("h1[class*='pricing-rule']").should('have.length',0)
})
 
 

it('iFrame Case 2',function() {
 
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy.frameLoaded("#courses-iframe")
    cy.iframe().find("a[href*='mentorship']").eq(0).click()
    cy.iframe().find("h1[class*='pricing-rule']").should('have.length',2)
    })
     
     
    })
 