describe('Back link component tests', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Navigating to Back Link Component', function () {
    cy.visit(Cypress.config().baseUrl + '/back-link/index.html')
  });

  it('Checking for class name - nhsuk-action-link', function () {
    cy.get('.nhsuk-back-link')
  });

  it('Checking for nhsuk-back-link__link class', function () {
    cy.get('.nhsuk-back-link').children().should('have.class','nhsuk-back-link__link')
  });

  it('Checking for nhsuk-icon nhsuk-icon__chevron-left class', function () {
    cy.get('.nhsuk-back-link__link').children().should('have.class','nhsuk-icon nhsuk-icon__chevron-left')
  });

  it('Checking for aria hidden status - true', function () {
    cy.get('.nhsuk-icon.nhsuk-icon__chevron-left').should('have.attr','aria-hidden','true')
  });

  it('Checking for href', function () {
    cy.get('.nhsuk-back-link__link').should('have.attr','href')
  });
});

