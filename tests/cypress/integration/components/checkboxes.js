describe('Checkboxes component tests', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Navigation to checkboxes component', function () {
    cy.visit(Cypress.config().baseUrl + '/checkboxes')
  });

  it('To see whether checkbox field exists', function () {
    cy.get('.nhsuk-form-group').children().should('have.class','nhsuk-fieldset')
  });

  it('To check whether there is a descriptive', function () {
    cy.get('.nhsuk-fieldset').should('have.attr','aria-describedby')
  });

  it('To check whether there is a legend in the group', function () {
    cy.get('.nhsuk-form-group').children().children().should('have.class','nhsuk-fieldset__legend')
  });

  it('To check wherether there are checkboxes', function () {
    cy.get('.nhsuk-checkboxes')
  });

  it('To check whether there is a checkbox in the group ', function () {
    cy.get('.nhsuk-checkboxes').first().children().should('have.class','nhsuk-checkboxes__item')
  });

  it('To check whether you can able to input into checkbox', function () {
    cy.get('.nhsuk-checkboxes__item').children().should('have.class','nhsuk-checkboxes__input')
  });

  it('To check the type of checkbox', function () {
    cy.get('.nhsuk-checkboxes__input').should('have.attr', 'type')
  });

  it('To check that the checkbox has a label', function () {
    cy.get('.nhsuk-checkboxes__item').children().should('have.class','nhsuk-label nhsuk-checkboxes__label')

  });
});

describe('Checkbox disbled component tests', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Navigating to checkbox disabled component', function () {
    cy.visit(Cypress.config().baseUrl + '/checkboxes/disabled.html')
  });

  it('To check there is a disabled checkbox', function () {
    cy.get('.nhsuk-checkboxes__input').should('be.disabled')
  });
});

describe('Checkbox with error message tests', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Navigating to checkbox disabled Component', function () {
    cy.visit(Cypress.config().baseUrl + '/checkboxes/error.html')
  });

  it('To check whether there is a error message', function () {
    cy.get('.nhsuk-error-message')
  });

  it('To check whether there is a description', function () {
    cy.get('.nhsuk-fieldset').should('have.attr', 'aria-describedby')
  });
});
