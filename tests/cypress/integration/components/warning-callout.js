describe('Warning callout component tests', function () {
  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Navigating to warning callout Component', function () {
    cy.visit(Cypress.config().baseUrl + '/warning-callout/index.html')
  });

  it('To check if there is a warning callout component', function () {
    cy.get('.nhsuk-warning-callout')
  });

  it('To check if there is some text for callout label', function () {
    cy
      .get('.nhsuk-warning-callout').children().should('have.class', 'nhsuk-warning-callout__label')
      .should('not.be.empty');
  });

  it('To check the background colour', function () {
    cy.get('.nhsuk-warning-callout__label')
      .should('have.css', 'background-color')
      .and('eq', 'rgb(255, 235, 59)')
  });

  it('To check the colour of the callout', function () {
    cy.get('.nhsuk-warning-callout')
      .should('have.css', 'background-color')
      .and('eq', 'rgb(255, 249, 196)')
  });
});
