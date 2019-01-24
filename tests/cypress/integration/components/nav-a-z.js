describe('A-Z Navigation component tests', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Navigating to A-Z Navigation', function () {
    cy.visit(Cypress.config().baseUrl + '/nav-a-z/index.html')
  });

  it('To check if there is any A-Z list', function () {
    cy.get('#nhsuk-nav-a-z').children().should('have.class', 'nhsuk-nav-a-z__list');
    expect('#nhsuk-nav-a-z').to.not.be.empty
  });

  it('To check if there is any text in A-Z list', function () {
    cy
      .get('.nhsuk-nav-a-z__item').first().children().should('have.class', 'nhsuk-nav-a-z__link')
      .should('not.be.empty');
  });

  it('To check if there is aria label', function () {
    cy.get('#nhsuk-nav-a-z').should('have.attr', 'aria-label', 'A to Z Navigation')
  });

  it('To check for navigation role', function () {
    cy.get('#nhsuk-nav-a-z').should('have.attr', 'role', 'navigation')
  });

  it('To check if the list has a link', function () {
    cy.get('.nhsuk-nav-a-z__list').children().children().should('have.attr', 'href')
      .should('not.be.empty');
  });
});
