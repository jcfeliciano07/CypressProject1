//Pattern to class TestDataDriven.cy.js
class HomePage
{
getName()
{
   return cy.get(':nth-child(1) > .form-control')
}
getEmail()
{
    return cy.get(':nth-child(2) > .form-control')
}
getPassword()
{
    return cy.get('#exampleInputPassword1')
}
getGender()
{
    return cy.get('#exampleCheck1')
}
getEntreprenuere()
{
    return cy.get('#inlineRadio3')
}
getDate()
{
    return cy.get(':nth-child(8) > .form-control').type('2023-03-03')
}
getSubBtn()
{
    return cy.get('.btn').click()
}
getShopTab()
{
    return cy.get(':nth-child(2) > .nav-link')
}
}

export default HomePage