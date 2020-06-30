/// <reference types="Cypress" />

context("Nav menu", () => {
    beforeEach(() => {
        cy.visit(`http://localhost:8000`)
        cy.injectAxe()
        cy.wait(100)
    })
    it('has no accessibility violations on load', () => {
        cy.checkA11y()
    })
})