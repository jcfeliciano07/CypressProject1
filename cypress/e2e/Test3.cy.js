/// <reference types="Cypress" />
 
describe('My 3rd Test Suite', function() 
{
 
it('My 3rd Test case',function() {

//Checkboxes
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
cy.get('input[type="checkbox"]').check(['option2', 'option3'])

//Static dropdown
cy.get('#dropdown-class-example').select('option2').should('have.value','option2')

//dynamic dropdown
cy.get('#autocomplete').type('ind')
cy.get('.ui-menu-item div').each(($e1, index, $list) => {
    if($e1.text()==="India")
    {
        $e1.click()
    }

})
//Compare if the "India" is properly selected
cy.get('#autocomplete').should('have.value','India')

//Handling visible and invisible elements using assertions
cy.get('#displayed-text').should('be.visible')
cy.get('#hide-textbox').click()
cy.get('#displayed-text').should('not.be.visible')
cy.get('#show-textbox').click()
cy.get('#displayed-text').should('be.visible')

//radio buttons
cy.get('[for="radio2"] > .radioButton').check().should('be.checked')



})
})