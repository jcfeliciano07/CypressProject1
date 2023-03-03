/// <reference types="Cypress" />
 
describe('My 5th Test Suite', function() 
{
 
it('My 5th Test case',function() {
 
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
 
//Handling web table
cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {
 
    const text=$e1.text()
    if(text.includes("Python"))
    {
 
        cy.get("tr td:nth-child(2)").eq(index).next().then(function(price)
        {
         const priceText=   price.text()
         expect(priceText).to.equal('25')
        })
    }
 
})
 
 
})
 
 
})