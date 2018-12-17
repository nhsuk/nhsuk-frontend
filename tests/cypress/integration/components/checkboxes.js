describe('Checkboxes component tests', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Navigation to checkboxes component', function () {
    cy.visit(Cypress.config().baseUrl + '/checkboxes')
  });

  it('checking for nhsuk-fieldset class', function () {
    cy.get('.nhsuk-form-group').children().should('have.class','nhsuk-fieldset')
  });

  it('checking for aria-describedby', function () {
    cy.get('.nhsuk-fieldset').should('have.attr','aria-describedby')
  });

  it('checking for nhsuk-fieldset__legend class', function () {
    cy.get('.nhsuk-form-group').children().children().should('have.class','nhsuk-fieldset__legend')
  });

  it('checking for nhsuk-checkboxes class', function () {
    cy.get('.nhsuk-checkboxes')
  });

  it('checking for nhsuk-checkboxes__item class', function () {
    cy.get('.nhsuk-checkboxes').first().children().should('have.class','nhsuk-checkboxes__item')
  });

  it('checking for nhsuk-checkboxes__input class', function () {
    cy.get('.nhsuk-checkboxes__item').children().should('have.class','nhsuk-checkboxes__input')
  });

  it('checking for type', function () {
    cy.get('.nhsuk-checkboxes__input').should('have.attr', 'type')
  });

  it('checking for nhsuk-label nhsuk-checkboxes__label class', function () {
    cy.get('.nhsuk-checkboxes__item').children().should('have.class','nhsuk-label nhsuk-checkboxes__label')

  });

  it('checking for nhsuk-label nhsuk-checkboxes__label class', function () {
    cy.get('.nhsuk-checkboxes__item').children().should('have.class','nhsuk-label nhsuk-checkboxes__label')

  });
});

describe('Checkbox disbled component tests', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('navigating to checkbox disabled Component', function () {
    cy.visit(Cypress.config().baseUrl + '/checkboxes/disabled.html')
  });

  it('Checking for checkbox diabled', function () {
    cy.get('.nhsuk-checkboxes__input').should('be.disabled')
  });

});

describe('Checkbox with error message tests', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('navigating to checkbox disabled Component', function () {
    cy.visit(Cypress.config().baseUrl + '/checkboxes/error.html')
  });

  it('Checking for nhsuk-error-message class', function () {
    cy.get('.nhsuk-error-message')
  });

  it('Checking for nhsuk-error-message class', function () {
    cy.get('.nhsuk-fieldset').should('have.attr', 'aria-describedby')
  });

});
