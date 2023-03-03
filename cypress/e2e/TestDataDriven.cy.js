//Data driven testing with fixtures //parameters & data are defined in example.json
/// <reference types="Cypress" />

import HomePage from "./pagesObjects/HomePage"
import ShopPage from "./pagesObjects/ShopPage"

describe('iFrame Test Suite with POM', function(){

    before(function() {
    //runs once before all test in the blocks
    cy.fixture('example').then(function(data){
    this.data=data

    })  
})

it('Data Driven with POM Test',function() {
//Cypress.config('defaultCommandTimeout',8000)
const homePage=new HomePage()
const shopPage=new ShopPage()

//cy.visit("https://rahulshettyacademy.com/angularpractice/")

//Domain/url is defined in cypress.config.js
cy.visit(Cypress.env('url')+"/angularpractice/")
homePage.getName().type(this.data.name)
homePage.getEmail().type(this.data.email)
homePage.getPassword().type(this.data.password)
homePage.getGender().type(this.data.gender)
homePage.getEntreprenuere().should('be.disabled')
homePage.getDate()
homePage.getSubBtn()
homePage.getShopTab().click()

//ShopPage class
shopPage.getAddToCart().click()
shopPage.getAddToCart2().click()
shopPage.getCheckOut().click()
shopPage.getSumOfProducts()
shopPage.getCompareTotal()
shopPage.getTotalSumCompare()
shopPage.getCheckedOut().click()
shopPage.getCountry().type('India')
//cy.wait(5000)
shopPage.getSelectCountry().click()
shopPage.getCheckbox().click({force: true})
shopPage.getPurchaseBtn().click()
shopPage.getSuccessText()
 
//cy.visit("https://rahulshettyacademy.com/angularpractice/")
//cy.get(':nth-child(1) > .form-control').type(this.data.name)
//cy.get(':nth-child(2) > .form-control').type(this.data.email)
//cy.get('#exampleInputPassword1').type(this.data.password)
//cy.get('#exampleCheck1').check()
//cy.get('#exampleFormControlSelect1').select(this.data.gender)
//cy.get('#inlineRadio2').check()
//cy.get(':nth-child(8) > .form-control').type('2023-03-03')
//cy.get('.btn').click()

//If you want to debug your code you can use pause
//cy.pause()

//Validating attributes properties
//cy.get('.ng-untouched').should('have.value',this.data.name)
//cy.get(':nth-child(1) > .form-control').should('have.attr','minlength','2')
//cy.get('#inlineRadio3').should('be.disabled')

//Building customized Cypress commands for reusing the code //Other codes are defined in commands.json
//cy.get(':nth-child(2) > .nav-link').click()
//cy.selectProduct('Blackberry')
//cy.selectProduct('Nokia Edge')
})
})