describe('Hero Image Component', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Navigating to hero Component', function () {
    cy.visit(Cypress.config().baseUrl + '/hero.html')
  });

  it('Checking for a class name - nhsuk-c-hero', function () {
    cy.get('body > section').should('have.class', 'nhsuk-hero')
  });

  it('Checking for H1 has a class - nhsuk-!-margin-bottom-3', function () {
    cy.get('h1').should('have.class', 'nhsuk-!-margin-bottom-3','We’re here for you')
  });

});

