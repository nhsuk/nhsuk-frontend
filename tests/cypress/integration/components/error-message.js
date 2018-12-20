describe('Error message component tests', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Navigating to Date Input Component for error', function () {
    cy.visit(Cypress.config().baseUrl + '/error-message/index.html')
  });

  it('To see whether there is some error message', function () {
    cy.get('.nhsuk-error-message');
    expect('span').to.not.be.empty
  });

  it('To check the font colour', function () {
    cy.get('.nhsuk-error-message')
      .should('have.css', 'color')
      .and('eq', 'rgb(218, 41, 28)')
  });

  it('To see the font of the error text', function () {
    cy.get('span')
      .should('have.css', 'font-family').and('eq', '"Frutiger W01", Helvetica, Arial, sans-serif')
  });
});
