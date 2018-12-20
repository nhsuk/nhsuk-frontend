describe('Back link component tests', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Navigating to Back Link Component', function () {
    cy.visit(Cypress.config().baseUrl + '/back-link/index.html')
  });

  it('To see whether there is a backlink class', function () {
    cy.get('.nhsuk-back-link')
  });

  it('To see whether there is a link in the component', function () {
    cy.get('.nhsuk-back-link').children().should('have.class','nhsuk-back-link__link')
  });

  it('To see whether there is a arrow in the component', function () {
    cy.get('.nhsuk-back-link__link').children().should('have.class','nhsuk-icon nhsuk-icon__chevron-left')
  });

  it('To see the attribute hidden status', function () {
    cy.get('.nhsuk-icon.nhsuk-icon__chevron-left').should('have.attr','aria-hidden','true')
  });

  it('To see a href in the component', function () {
    cy.get('.nhsuk-back-link__link').should('have.attr','href')
  });
});
