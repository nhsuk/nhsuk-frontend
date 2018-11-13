describe('A-Z Navigation Component', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Navigating to A-Z Navigation', function () {
    cy.visit(Cypress.config().baseUrl + '/nav-a-z.html')
  });

  it('Checking for class name - nhsuk-c-a-z-nav__list', function () {
    cy.get('#nhsuk-nav-a-z').children().should('have.class', 'nhsuk-nav-a-z__list')
  });

  it('Checking for class name - nhsuk-nav-a-z__link', function () {
    cy.get('.nhsuk-nav-a-z__item').first().children().should('have.class', 'nhsuk-nav-a-z__link')
  });

  it('Checking Aria label - A- Z navigation', function () {
    cy.get('#nhsuk-nav-a-z').should('have.attr', 'aria-label', 'A-Z Navigation')
  });

  it('Checking navigation role', function () {
    cy.get('#nhsuk-nav-a-z').should('have.attr', 'role', 'navigation')
  });

});

