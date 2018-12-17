describe('Fieldset component tests', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Navigating to Date Input Component', function () {
    cy.visit(Cypress.config().baseUrl + '/fieldset/index.html')
  });

  it('Checking for a class name - nhsuk-fieldset', function () {
    cy.get('.nhsuk-fieldset')
  });

  it('Checking for a class name - nhsuk-fieldset__legend', function () {
    cy.get('.nhsuk-fieldset__legend')
  });
});

describe('Fieldset as a page heading - Component', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Navigating to Date Input Component', function () {
    cy.visit(Cypress.config().baseUrl + '/fieldset/page-heading.html')
  });

  it('Checking for a class name - nhsuk-fieldset', function () {
    cy.get('.nhsuk-fieldset')
  });

  it('Checking for a class name - nhsuk-fieldset__legend.nhsuk-fieldset__legend--xl', function () {
    cy.get('.nhsuk-fieldset__legend.nhsuk-fieldset__legend--xl')
  });

  it('Checking for a h1', function () {
    cy.get('h1').should('have.class', 'nhsuk-fieldset__heading')
  });
});
