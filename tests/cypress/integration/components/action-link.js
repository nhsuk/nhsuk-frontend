describe('Action link component test ', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Navigating to Action Link Component', function () {
    cy.visit(Cypress.config().baseUrl + '/action-link.html')
  });

  it('To see whether it has action link class', function () {
    cy.get('.nhsuk-grid-column-two-thirds').first().children().should('have.class','nhsuk-action-link')
  });

  it('To see whether it has a circle with right arrow', function () {
    cy.get('.nhsuk-action-link__link').children().should('have.class','nhsuk-icon nhsuk-icon__arrow-right-circle')
  });

  it('Check for the aria hidden status', function () {
    cy.get('.nhsuk-icon.nhsuk-icon__arrow-right-circle').should('have.attr','aria-hidden', 'true')
  });

  it('To see whether there is some text in the Link', function () {
    cy
      .get('.nhsuk-action-link__text').should('not.be.empty');
      expect('span').to.not.be.empty;
  });

  it('To see whether there is a link', function () {
    cy
      .get('.nhsuk-action-link__link').should('have.attr','href');
  });
});
