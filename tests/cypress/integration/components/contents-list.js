describe('Content-list Component', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Navigating to content list Component', function () {
    cy.visit(Cypress.config().baseUrl + '/contents-list.html')
  });

  it('Checking aria label - Pages in this guide', function () {
    cy.get('.nhsuk-contents-list').should('have.attr', 'aria-label','Pages in this guide')
  });

  it('Checking visually hidden class - Contents', function () {
    cy.get('.nhsuk-contents-list').children().should('have.class', 'nhsuk-u-visually-hidden')
  });

  it('Checking for href', function () {
    cy.get('.nhsuk-contents-list__link').should('have.attr', 'href')
  });

});

