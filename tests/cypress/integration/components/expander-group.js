describe('Expander - group components tests', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Navigating to EXpander - group Component', function () {
    cy.visit(Cypress.config().baseUrl + '/expander-group.html')
  });

  it('Checking for nhsuk-expander-group - class', function () {
    cy.get('.nhsuk-expander-group')
  });

  it('Checking for nhsuk-details nhsuk-expander - class', function () {
    cy.get('.nhsuk-expander-group').first().children().should('have.class', 'nhsuk-details nhsuk-expander')
  });

  it('Checking for nhsuk-details__summary - class', function () {
    cy.get('.nhsuk-expander-group').first().children().first().children().should('have.class', 'nhsuk-details__summary')
  });

  it('Checking for nhsuk-details__summary-text - class', function () {
    cy.get('.nhsuk-expander-group').first().children().first().children().first().children().should('have.class', 'nhsuk-details__summary-text')
  });

  it('Checking for expander status', function () {
    cy.get('.nhsuk-details__summary').should('have.attr', 'aria-expanded', 'false')
  });

  it('Checking for aria controls', function () {
    cy.get('.nhsuk-details__summary').should('have.attr', 'aria-controls', 'details-content-0')
  });

  it('Checking for expander status after clicking', function () {
    cy.get('.nhsuk-expander-group').should('have.class', 'nhsuk-details__summary').click()
      .should('have.attr', 'aria-expanded', 'true')
  });

});
