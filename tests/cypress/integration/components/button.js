describe('Button component tests', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Navigating to Button Component', function () {
    cy.visit(Cypress.config().baseUrl + '/button/index.html')
  });

  it('Checking for nhsuk-button class', function () {
    cy.get('.nhsuk-button')
  });

  it('Checking for button type', function () {
    cy.get('[type="submit"]')
  });
});

describe('Button disabled Component - tests', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Navigating to Button Component', function () {
    cy.visit(Cypress.config().baseUrl + '/button/disabled.html')
  });

  it('Checking for button type', function () {
    cy.get('[type="submit"]')
  });

  it('Checking for nhsuk-button class', function () {
    cy.get('.nhsuk-button.nhsuk-button--disabled').should('have.attr', 'aria-disabled', 'true')
  });
});

describe('Secondary button Component - tests', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Navigating to Button Component', function () {
    cy.visit(Cypress.config().baseUrl + '/button/secondary.html')
  });

  it('Checking for button type', function () {
    cy.get('[type="submit"]')
  });

  it('Checking for nhsuk-button class', function () {
    cy.get('.nhsuk-button.nhsuk-button--secondary')
  });
});


describe('Secondary diabled button Component - tests', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Navigating to Button Component', function () {
    cy.visit(Cypress.config().baseUrl + '/button/secondary-disabled.html')
  });


  it('Checking for button type', function () {
    cy.get('[type="submit"]')
  });

  it('Checking for nhsuk-button class', function () {
    cy.get('.nhsuk-button.nhsuk-button--secondary.nhsuk-button--disabled')
  });

});

describe('Button reverse Component - tests', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Navigating to Button Component', function () {
    cy.visit(Cypress.config().baseUrl + '/button/reverse.html')
  });


  it('Checking for button type', function () {
    cy.get('[type="submit"]')
  });

  it('Checking for nhsuk-button class', function () {
    cy.get('.nhsuk-button.nhsuk-button--reverse')
  });

});

describe('Button reverse disabled Component - tests', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Navigating to Button Component', function () {
    cy.visit(Cypress.config().baseUrl + '/button/reverse-disabled.html')
  });

  it('Checking for button type', function () {
    cy.get('[type="submit"]')
  });

  it('Checking for nhsuk-button class', function () {
    cy.get('.nhsuk-button.nhsuk-button--reverse.nhsuk-button--disabled')
  });

});
