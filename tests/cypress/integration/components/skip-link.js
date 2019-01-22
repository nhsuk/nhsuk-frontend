describe('Skip link component tests', function () {
  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Navigating to skip link Component', function () {
    cy.visit(Cypress.config().baseUrl + '/skip-link/index.html')
  });

  it('To check if there is a skip link component', function () {
    cy.get('.nhsuk-skip-link')
  });

  it('TO check if there some text in the link', function () {
    cy
      .get('.nhsuk-skip-link').should('have.attr','href')
      .should('not.be.empty');
  });
});
