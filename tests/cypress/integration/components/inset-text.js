describe('Inset text component', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Navigating to inset text Component', function () {
    cy.visit(Cypress.config().baseUrl + '/inset-text/index.html')
  });

  it('Checking for visually hidden text', function () {
    cy.get('.nhsuk-inset-text').children().should('have.class', 'nhsuk-u-visually-hidden', 'Information: ')
  });

  it('To check if there is some description', function () {
    cy.get('.nhsuk-u-visually-hidden').should('not.be.empty');
    expect('p').to.not.be.empty;
    expect('a').to.not.be.empty
  });
});
