describe('Back-link component tests', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Navigating to back-link Component', function () {
    cy.visit(Cypress.config().baseUrl + '/back-link/')
  });

  it('To see whether there is a back-link class', function () {
    cy.get('.nhsuk-back-link').should('not.be.empty');
  });

  it('To see whether there is a link in the component', function () {
    cy.get('.nhsuk-back-link').children().should('have.class','nhsuk-back-link__link').should('not.be.empty')
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

  it('To see whether there is some text in the Link', function () {
    cy
      .get('.nhsuk-icon.nhsuk-icon__chevron-left').should('not.be.empty');
    expect('a').to.not.be.empty;
  });
});
