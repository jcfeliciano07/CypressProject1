//Pattern to class TestDataDriven.cy.js
class ShopPage
{
getAddToCart()
{
    return cy.get(':nth-child(1) > .card > .card-footer > .btn')
}
getAddToCart2()
{
    return cy.get(':nth-child(2) > .card > .card-footer > .btn')
}
getCheckOut()
{
    return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link')
}

getSumOfProducts() //Implementing the sum of products functionality
{
    var sum=0
    cy.get('td:nth-child(4) > strong:nth-child(1)').each(($e1, index, $list) => {
    const amount=$e1.text()
    var res=amount.split(" ")
    res= res[1].trim()
    //converting string to number
    sum=Number(sum)+Number(res)
    }).then(function(){
    cy.log(sum) 
})
}
getCompareTotal() 
{ 
    var sum=185000
    cy.get('h3 > strong').then(function(element){
    const amount=element.text()
    var res=amount.split(" ")
    var total= res[1].trim()
    expect(Number(total)).to.equal(sum)
    
})
}

getTotalSumCompare()
{
    return cy.get('h3 > strong').then(function(element)
    {
        const actualSum=element.text()
        expect(actualSum.includes("185000")).to.be.true
 
    })
}

getCheckedOut()
{
   // return cy.get(':nth-child(3) > :nth-child(5) > .btn')
   return cy.contains('Checkout')
}
getCountry()
{
    return cy.get('#country')
}
getSelectCountry()
{
    return cy.get('.suggestions > ul > li > a')
}
getCheckbox()
{
    return cy.get('#checkbox2')
}
getPurchaseBtn()
{
    return cy.get('.ng-untouched > .btn')
}
getSuccessText()
{
    //return cy.get('.alert').should('have.text','Success! Thank you! Your order will be delivered in next few weeks :-)')
    return cy.get('.alert').then(function(element)
    {
        const actualText=element.text()
        expect(actualText.includes("Success")).to.be.true
 
    })

}
}



export default ShopPage