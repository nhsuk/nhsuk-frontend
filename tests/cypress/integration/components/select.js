describe('select component tests', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Navigating to select component', function () {
    cy.visit(Cypress.config().baseUrl + '/select/index.html')
  });

  it('Checking for a class name - nhsuk-form-group', function () {
    cy.get('.nhsuk-form-group')
  });

  it('Checking for a class name - nhsuk-label', function () {
    cy.get('.nhsuk-form-group').children().should('have.class','nhsuk-label')
  });


});

describe('select component with hint text and error message tests', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Navigating to select component', function () {
    cy.visit(Cypress.config().baseUrl + '/select/hint-error.html')
  });

  it('Checking for a class name - nhsuk-form-group nhsuk-form-group--error', function () {
    cy.get('.nhsuk-form-group.nhsuk-form-group--error')
  });

  it('Checking for a class name - nhsuk-label', function () {
    cy.get('.nhsuk-form-group.nhsuk-form-group--error').children().should('have.class','nhsuk-label')
  });

  it('Checking for a class name - nhsuk-error-message', function () {
    cy.get('.nhsuk-error-message')
  });

  it('Checking for a class name - nhsuk-hint', function () {
    cy.get('.nhsuk-hint')
  });

  it('Checking for a aria describeby', function () {
    cy.get('.nhsuk-select.nhsuk-select--error').should('have.attr','aria-describedby')
  });

  it('Checking for a error message colour to red', function () {
    cy.get('.nhsuk-error-message').should('have.css', 'color')
      .and('eq', 'rgb(218, 41, 28)')
  });
});
