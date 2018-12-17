describe('Details component tests', function () {
  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Navigating to details Component', function () {
    cy.visit(Cypress.config().baseUrl + '/details.html')
  });

  it('Checking nhsuk-details__summaryclass name', function () {
    cy.get('.nhsuk-details').children().should('have.class','nhsuk-details__summary')
  });

  it('Checking nhsuk-details__summary-text class name', function () {
    cy.get('.nhsuk-details__summary').children().should('have.class','nhsuk-details__summary-text')
  });

  it('Checking Aria controls', function () {
    cy.get('.nhsuk-details__summary').should('have.attr','aria-controls', 'details-content-0')
  });

  it('Checking expander default status', function () {
    cy.get('.nhsuk-details__summary').should('have.attr','aria-expanded', 'false')
  });

  it('Checking aria hidden status', function () {
    cy
      .get('.nhsuk-details__text').should('have.attr','aria-hidden', 'true')
  });

  it('Checking expander click status', function () {
    cy
      .get('.nhsuk-details__summary').click()
      .get('.nhsuk-details__summary').should('have.attr','aria-expanded', 'true')
  });

  });

