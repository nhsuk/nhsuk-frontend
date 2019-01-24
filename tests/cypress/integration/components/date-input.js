describe('Date-input component tests', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Navigating to Date Input Component', function () {
    cy.visit(Cypress.config().baseUrl + '/date-input/index.html')
  });

  it('To see whether there is a group of input fields', function () {
    cy.get('.nhsuk-form-group').children().should('have.class', 'nhsuk-fieldset')
  });

  it('To see whether there is a legend of the input fields', function () {
    cy.get('.nhsuk-fieldset').children().should('have.class', 'nhsuk-fieldset__legend')
  });

  it('To see whether there is some text in legend', function () {
    cy
      .get('.nhsuk-fieldset__legend').should('not.be.empty');
    expect('legend').to.not.be.empty;
  });

  it('To check whether there is a hint for the input fields', function () {
    cy
      .get('.nhsuk-hint')
      .should('not.be.empty');
  });

  it('To see whether there is some hint text', function () {
    cy.get('.nhsuk-hint').should('not.be.empty');
    expect('span').to.not.be.empty;
  });

  it('To see if there is a date input item', function () {
    cy
      .get('.nhsuk-date-input').children().should('have.class', 'nhsuk-date-input__item')
      .should('not.be.empty');
  });

  it('To see whether there is some label text for date', function () {
    cy.get('.nhsuk-label.nhsuk-date-input__label').should('not.be.empty');
    expect('label').to.not.be.empty;
  });

  it('To see if there is a date input item in the group', function () {
    cy.get('.nhsuk-date-input__item').children().should('have.class', 'nhsuk-form-group')
  });

  it('To see whether there is a description for input field', function () {
    cy.get('.nhsuk-fieldset').should('have.attr', 'aria-describedby')
  });

  it('To see the colour of the date input boxes', function () {
    cy
      .get('.nhsuk-input.nhsuk-date-input__input.nhsuk-input--width-2')
      .should('have.css', 'border-color')
      .and('eq', 'rgb(66, 85, 99)')
  });
});

describe('Date-input component with errors tests', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Navigating to date input component for error', function () {
    cy.visit(Cypress.config().baseUrl + '/date-input/multiple-errors.html')
  });

  it('To see whether there is a error group in the input field', function () {
    cy.get('.nhsuk-form-group.nhsuk-form-group--error').children().should('have.class', 'nhsuk-fieldset')
  });

  it('To see whether there is a description', function () {
    cy.get('.nhsuk-fieldset').should('have.attr', 'aria-describedby')
  });

  it('To see whether the boxes colour is red when there is an error', function () {
    cy
      .get('.nhsuk-input.nhsuk-date-input__input.nhsuk-input--width-4.nhsuk-input--error')
      .should('have.css', 'border-color')
      .and('eq', 'rgb(218, 41, 28)')
  });

  it('To see whether there is some text in legend', function () {
    cy.get('.nhsuk-fieldset__legend').should('not.be.empty');
    expect('legend').to.not.be.empty;
  });

  it('To check whether there is a hint for the input fields', function () {
    cy.get('.nhsuk-hint')
  });

  it('To see whether there is some hint text', function () {
    cy.get('.nhsuk-hint').should('not.be.empty');
    expect('span').to.not.be.empty;
  });

  it('To check if there is date input item', function () {
    cy.get('.nhsuk-date-input').children().should('have.class', 'nhsuk-date-input__item')
  });

  it('To see whether there is some label text for date', function () {
    cy.get('.nhsuk-label.nhsuk-date-input__label').should('not.be.empty');
    expect('label').to.not.be.empty;
  });

  it('To see whether there is some error hint message', function () {
    cy.get('#dob-errors-hint').should('not.be.empty');
    expect('span').to.not.be.empty;
  });

  it('To whether there is some error text in dob', function () {
    cy
      .get('#dob-errors-error').should('have.class','nhsuk-error-message')
      .should('not.be.empty');
    expect('span').to.not.be.empty;
  });

  it('To see whether there is some text in the label', function () {
    cy.get('.nhsuk-label.nhsuk-date-input__label').should('not.be.empty');
    expect('label').to.not.be.empty;
  });
});

describe('Date-input component with single error tests', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Navigating to date input component for error', function () {
    cy.visit(Cypress.config().baseUrl + '/date-input/error.html')
  });

  it('To see whether there is a error group in the fieldset', function () {
    cy.get('.nhsuk-form-group.nhsuk-form-group--error').children().should('have.class', 'nhsuk-fieldset')
  });

  it('To see whether there is a description', function () {
    cy.get('.nhsuk-fieldset').should('have.attr', 'aria-describedby')
  });

  it('To see red colour for date input box upon error', function () {
    cy
      .get('.nhsuk-error-message')
      .should('have.css', 'border-color')
      .and('eq', 'rgb(218, 41, 28)')
  });

  it('To see if there is any text in the legend', function () {
    cy.get('.nhsuk-fieldset__legend').should('not.be.empty');
    expect('legend').to.not.be.empty;
  });

  it('To see if there is any hint text', function () {
    cy
      .get('#dob-day-error-hint').should('have.class','nhsuk-hint')
      .should('not.be.empty');
    expect('span').to.not.be.empty;
  });

  it('To see if there is an error message', function () {
    cy.get('.nhsuk-label.nhsuk-date-input__label').should('not.be.empty');
    expect('label').to.not.be.empty;
  });
});
