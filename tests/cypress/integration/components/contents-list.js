describe('Content-list component tests', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Navigating to content list Component', function () {
    cy.visit(Cypress.config().baseUrl + '/contents-list.html')
  });

  it('To see whether there is a label', function () {
    cy.get('.nhsuk-contents-list').should('have.attr', 'aria-label','Pages in this guide')
  });

  it('To check whether there is a visually hidden element', function () {
    cy.get('.nhsuk-contents-list').children().should('have.class', 'nhsuk-u-visually-hidden')
  });

  it('To see whether there is a link in the content list', function () {
    cy.get('.nhsuk-contents-list__link').should('have.attr', 'href')
  });
});
