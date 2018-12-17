describe('Error message component tests', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Navigating to Date Input Component for error', function () {
    cy.visit(Cypress.config().baseUrl + '/error-message/index.html')
  });

  it('Checking for a class name - nhsuk-error-message', function () {
    cy.get('.nhsuk-error-message')
  });

  it('Checking for a font colour', function () {
    cy.get('.nhsuk-error-message')
      .should('have.css', 'color')
      .and('eq', 'rgb(218, 41, 28)')
  });
});
