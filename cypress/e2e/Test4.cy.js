/// <reference types="Cypress" />
 
describe('My 4th Test Suite', function() 
{
 
it('My 4th Test case',function() {
 
//Check boxes
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
cy.get('#alertbtn').click()
cy.get('[value="Confirm"]').click()
//window:alert
cy.on('window:alert',(str)=>
{
    //Mocha
    expect(str).to.equal('Hello , share this practice page and share your knowledge')
})
 
cy.on('window:confirm',(str)=>
{
    //Mocha
    expect(str).to.equal('Hello , Are you sure you want to confirm?')
})
 
//Cypress not handle of switching tabs , browser
cy.get('#opentab').invoke('removeAttr','target').click()

//Browser navigating control
cy.url().should('include','rahulshettyacademy')
 
cy.go('back')
 


}  )

}  )