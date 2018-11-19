describe('warning call out component tests', function () {
  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Navigating to warning callout Component', function () {
    cy.visit(Cypress.config().baseUrl + '/warning-callout.html')
  });

  it('checking for warning callout class', function () {
    cy.get('.nhsuk-warning-callout')
  });

  it('checking for warning callout label class', function () {
    cy.get('.nhsuk-warning-callout').children().should('have.class', 'nhsuk-warning-callout__label')
  });

});
