describe('Hint component tests', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Navigating to hint component', function () {
    cy.visit(Cypress.config().baseUrl + '/hint/index.html')
  });

  it('Checking for a class name - nhsuk-hint', function () {
    cy.get('.nhsuk-hint')
  });

  it('To see if there is any message in summary body', function () {
    cy.get('.nhsuk-hint');
    expect('span').to.not.be.empty
  });
});
