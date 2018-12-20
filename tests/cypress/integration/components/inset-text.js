describe('Inset text component', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Navigating to inset text Component', function () {
    cy.visit(Cypress.config().baseUrl + '/inset-text.html')
  });

  it('Checking for visually hidden text', function () {
    cy.get('.nhsuk-inset-text').children().should('have.class', 'nhsuk-u-visually-hidden', 'Information: ')
  });
});
