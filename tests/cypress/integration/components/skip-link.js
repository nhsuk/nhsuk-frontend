describe('Skip link component tests', function () {
  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Navigating to skip link Component', function () {
    cy.visit(Cypress.config().baseUrl + '/skip-link.html')
  });


  // TODO: aria label and the role
});
