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

  it('Checking background colour of the label', function () {
    cy.get('.nhsuk-warning-callout__label')
      .should('have.css', 'background-color')
      .and('eq', 'rgb(255, 235, 59)')
  });
  it('Checking background colour of the callout', function () {
    cy.get('.nhsuk-warning-callout')
      .should('have.css', 'background-color')
      .and('eq', 'rgb(255, 249, 196)')
  });

});
