describe('Date-input Component', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Navigating to Date Input Component', function () {
    cy.visit(Cypress.config().baseUrl + '/date-input/index.html')
  });

  it('Checking for a class name - nhsuk-fieldset', function () {
    cy.get('.nhsuk-form-group').children().should('have.class', 'nhsuk-fieldset')
  });

  it('Checking for a class name - nhsuk-fieldset__legend', function () {
    cy.get('.nhsuk-fieldset').children().should('have.class', 'nhsuk-fieldset__legend')
  });

  it('Checking for a class name - nhsuk-hint', function () {
    cy.get('.nhsuk-hint')
  });

  it('Checking for a class name - nhsuk-date-input__item', function () {
    cy.get('.nhsuk-date-input').children().should('have.class', 'nhsuk-date-input__item')
  });

  it('Checking for a class name - nhsuk-form-group', function () {
    cy.get('.nhsuk-date-input__item').children().should('have.class', 'nhsuk-form-group')
  });

  it('Checking for aria-describedby', function () {
    cy.get('.nhsuk-fieldset').should('have.attr', 'aria-describedby')
  });

  it('Checking for border colour', function () {
    cy.get('.nhsuk-input.nhsuk-date-input__input.nhsuk-input--width-2')
      .should('have.css', 'border-color')
      .and('eq', 'rgb(66, 85, 99)')
  });

});

describe('Date-input Component with errors', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Navigating to Date Input Component for error', function () {
    cy.visit(Cypress.config().baseUrl + '/date-input/multiple-errors.html')
  });

  it('Checking for a class name - nhsuk-form-group nhsuk-form-group--error', function () {
    cy.get('.nhsuk-form-group.nhsuk-form-group--error').children().should('have.class', 'nhsuk-fieldset')
  });

  it('Checking for a aria-describedby', function () {
    cy.get('.nhsuk-fieldset').should('have.attr', 'aria-describedby')
  });

  it('Checking for background colour', function () {
    cy.get('.nhsuk-input.nhsuk-date-input__input.nhsuk-input--width-4.nhsuk-input--error')
      .should('have.css', 'border-color')
      .and('eq', 'rgb(218, 41, 28)')
  });
});

describe('Date-input Component with single error', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Navigating to Date Input Component for error', function () {
    cy.visit(Cypress.config().baseUrl + '/date-input/error.html')
  });

  it('Checking for a class name - nhsuk-form-group nhsuk-form-group--error', function () {
    cy.get('.nhsuk-form-group.nhsuk-form-group--error').children().should('have.class', 'nhsuk-fieldset')
  });

  it('Checking for a aria-describedby', function () {
    cy.get('.nhsuk-fieldset').should('have.attr', 'aria-describedby')
  });

  it('Checking for box border colour', function () {
    cy.get('.nhsuk-error-message')
      .should('have.css', 'border-color')
      .and('eq', 'rgb(218, 41, 28)')
  });
});

