describe('Expander component tests', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Navigating to Expander component', function () {
    cy.visit(Cypress.config().baseUrl + '/expander.html')
  });

  it('Checking for a class name -nhsuk-details nhsuk-expander', function () {
    cy.get('.nhsuk-details.nhsuk-expander')
  });

  it('Checking for a class name nhsuk-details__summary', function () {
    cy.get('.nhsuk-details__summary').children()
      .should('have.class', 'nhsuk-details__summary-text')
  });

  it('Checking for a class name nhsuk-details__text', function () {
    cy.get('.nhsuk-details.nhsuk-expander').children()
      .should('have.class', 'nhsuk-details__text')
  });

  it('Checking aria controls', function () {
    cy.get('.nhsuk-details__summary').should('have.attr', 'aria-controls', 'details-content-0')
  });

  it('Checking default expander status', function () {
    cy.get('.nhsuk-details__summary').should('have.attr', 'aria-expanded', 'false')
  });

  it('Checking expander status after clicking', function () {
    cy.get('.nhsuk-details__summary').click()
      .should('have.attr', 'aria-expanded', 'true')
  });
});
