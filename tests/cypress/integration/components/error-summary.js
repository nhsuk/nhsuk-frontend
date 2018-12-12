describe('Error summary Component tests', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Navigating to Error summary Component for error', function () {
    cy.visit(Cypress.config().baseUrl + '/error-summary/index.html')
  });

  it('Checking for a class name - nhsuk-error-message', function () {
    cy.get('.nhsuk-error-summary').should('have.attr','aria-labelledby')
  });

  it('Checking for a class name nhsuk-error-summary__body', function () {
    cy.get('.nhsuk-error-summary__body').children()
      .should('have.class', 'nhsuk-list nhsuk-error-summary__list')
  });

  it('Checking for aria label', function () {
    cy.get('.nhsuk-error-summary')
      .should('have.attr', 'aria-labelledby')
  });

  it('Checking for role', function () {
    cy.get('.nhsuk-error-summary')
      .should('have.attr', 'role', 'alert')
  });

});
