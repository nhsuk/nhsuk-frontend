describe('Do - Dont List Component', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Navigating to Do-Dont list Component', function () {
    cy.visit(Cypress.config().baseUrl + '/do-dont-list.html')
  });

  it('Checking Do class', function () {
    cy.get('.nhsuk-do-dont-list').children().should('have.class', 'nhsuk-do-dont-list__label','Do')
  });

  it('Checking Dont class', function () {
    cy.get('.nhsuk-do-dont-list').children().should('have.class', 'nhsuk-do-dont-list__label',"Don't")
  });

  it('Checking for tick mark in to Do list', function () {
    cy.get('.nhsuk-list.nhsuk-list--check').first().children().first().children().should('have.class', 'nhsuk-icon nhsuk-icon__tick')
  });

  it('Checking for cross mark in Dont list', function () {
    cy.get('.nhsuk-do-dont-list').children().children().children().should('have.class', 'nhsuk-icon nhsuk-icon__cross')
  });

});

