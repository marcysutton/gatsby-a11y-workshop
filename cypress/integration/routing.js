describe('Routing Accessibility', () => {
    it('handles focus on a route change via click', () => {
        cy.visit('http://localhost:8000')
        cy.focused()
          .should('not.have.class', 'routeSkipLink')

        cy.get('#page-navigation').find('a').eq(0).click()

        cy.focused()
            .should('have.class', 'routeSkipLink')
    })
})