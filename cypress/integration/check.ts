/// <reference types="Cypress" />
describe("intuit data by", () => {

    it("login website", () => {
        cy.visit('https://demo.seleniumeasy.com/jquery-dropdown-search-demo.html')
        cy.get('[aria-labelledby="select2-country-container"]').click()
        cy.contains('li', 'India').click()
    })
})