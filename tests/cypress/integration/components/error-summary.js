describe('Error summary component tests', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Navigating to Error summary Component for error', function () {
    cy.visit(Cypress.config().baseUrl + '/error-summary/index.html')
  });

  it('To see whether there is an error message', function () {
    cy.get('.nhsuk-error-summary').should('have.attr','aria-labelledby')
  });

  it('To see whether there is list of error messages', function () {
    cy.get('.nhsuk-error-summary__body').children()
      .should('have.class', 'nhsuk-list nhsuk-error-summary__list')
  });

  it('To see whether there is a label for error message', function () {
    cy.get('.nhsuk-error-summary')
      .should('have.attr', 'aria-labelledby')
  });

  it('To see whether there is a error alert', function () {
    cy.get('.nhsuk-error-summary')
      .should('have.attr', 'role', 'alert')
  });

  it('To see whether there is a text in error message', function () {
    expect('p').to.not.be.empty
  });
});
