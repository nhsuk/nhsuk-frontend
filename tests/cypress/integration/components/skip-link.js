describe('Skip link component tests', function () {
  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Navigating to skip link Component', function () {
    cy.visit(Cypress.config().baseUrl + '/skip-link.html')
  });

  it('Checking for nhsuk-skip-link class', function () {
    cy.get('.nhsuk-skip-link')
  });

  it('Checking for href', function () {
    cy.get('.nhsuk-skip-link').should('have.attr','href')
  });
});
