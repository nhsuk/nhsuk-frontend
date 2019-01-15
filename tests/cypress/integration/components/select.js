describe('select component tests', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Navigating to select component', function () {
    cy.visit(Cypress.config().baseUrl + '/select/index.html')
  });
  
  it('To check if there is some text in the label', function () {
    cy
      .get('.nhsuk-form-group').children().should('have.class','nhsuk-label')
      .should('not.be.empty');
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

  it('To check if there is some text in the label', function () {
    cy
      .get('.nhsuk-form-group.nhsuk-form-group--error').children().should('have.class','nhsuk-label')
      .should('not.be.empty');
  });

  it('To check if there is some error message', function () {
    cy.get('.nhsuk-error-message')
      .should('not.be.empty');
  });

  it('To check if there is some text in the hint', function () {
    cy
      .get('.nhsuk-hint')
      .should('not.be.empty');
  });

  it('To check if there is a description attribute', function () {
    cy
      .get('.nhsuk-select.nhsuk-select--error')
      .should('have.attr','aria-describedby')
      .should('not.be.empty');
  });

  it('Checking for a error message colour to red', function () {
    cy.get('.nhsuk-error-message').should('have.css', 'color')
      .and('eq', 'rgb(218, 41, 28)')
  });
});
