describe('Footer component tests', function () {
  beforeEach(function () {
    cy.viewport('macbook-15');
  });
  it('Navigating to Footer Component', function () {
    cy.visit(Cypress.config().baseUrl + '/footer/index.html')
  });

  it('To check for any visually hidden text', function () {
    cy.get('.nhsuk-u-visually-hidden').hasOwnProperty('Support links')
  });

  it('To check for link in the footer', function () {
    cy
      .get('.nhsuk-footer__list').children().should('have.class','nhsuk-footer__list-item')
      .get('.nhsuk-footer__list-item-link').should('have.attr', 'href').should('not.be.empty');
  });

  it('To check for copyright', function () {
    cy.get('.nhsuk-footer__copyright').hasOwnProperty('© Crown Copyright');
  });
});
