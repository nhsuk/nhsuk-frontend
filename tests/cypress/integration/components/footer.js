describe('Footer component tests', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Navigating to Footer Component', function () {
    cy.visit(Cypress.config().baseUrl + '/footer.html')
  });

  it('To see whether there is a list in the footer', function () {
    cy.get('.nhsuk-width-container').children().should('have.class', 'nhsuk-footer__list')
  });

  it('To see whether there atleast an item in the list', function () {
    cy.get('.nhsuk-footer__list').first().children().should('have.class', 'nhsuk-footer__list-item')
  });

  it('To see whether there is a logo in the link', function () {
    cy.get('.global-footer__link').first().children().should('have.class', 'nhsuk-logo')
  });

  it('To see whether there is a NHS homepage label', function () {
    cy.get('.global-footer__link').should('have.attr','aria-label','NHS homepage')
  });

  it('To see whether there is a link in the footer', function () {
    cy.get('.global-footer__link').should('have.attr','href','/')
  });
});

describe('Footer with no logo - Component', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Navigating to Footer Component', function () {
    cy.visit(Cypress.config().baseUrl + '/footer-no-logo.html')
  });

  it('Checking for footer list class', function () {
    cy.get('.nhsuk-width-container').children().should('have.class', 'nhsuk-footer__list')
  });

  it('Checking for footer list item class', function () {
    cy.get('.nhsuk-footer__list').first().children().should('have.class', 'nhsuk-footer__list-item')
  });

  it('Checking for href', function () {
    cy.get('.nhsuk-footer__list-item').children().should('have.attr','href')
  });

  it('Checking for copy right', function () {
    cy.get('.nhsuk-footer__copyright').hasOwnProperty('© Crown Copyright')
  });
});
