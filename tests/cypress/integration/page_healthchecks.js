describe('Verify that the individual component pages are working', function() {
  it('Visits the Homepage', function() {
    cy.visit('/')
  })
  it('Visits the Layout page', function() {
    cy.get('a').contains('Layout').click()
    cy.url().should('include', '/styles/layout')
    cy.get('h1').contains('Layout')
  })
})
