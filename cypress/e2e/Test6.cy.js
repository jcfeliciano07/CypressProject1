/// <reference types="Cypress" />
 
describe('My 6th Test Suite', function() 
{
 
it('My 6th Test case',function() {
 
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
 
//Handling mouse hover using jquery
//cy.get('div.mouse-hover-content').invoke('show')
cy.contains('Top').click({force:true})
cy.url().should('include','top')
 
})
 
 
})
 