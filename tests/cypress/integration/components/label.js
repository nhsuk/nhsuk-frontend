describe('Label component tests', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Navigating to label component', function () {
    cy.visit(Cypress.config().baseUrl + '/label/index.html')
  });

  it('To check if there is any text in the label', function () {
    cy.get('.nhsuk-label');
    expect('label').to.not.be.empty
  });
});
