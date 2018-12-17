describe('Footer Component', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Navigating to Footer Component', function () {
    cy.visit(Cypress.config().baseUrl + '/footer.html')
  });

  it('Checking for footer list class', function () {
    cy.get('.nhsuk-width-container').children().should('have.class', 'nhsuk-footer__list')
  });

  it('Checking for footer list item class', function () {
    cy.get('.nhsuk-footer__list').first().children().should('have.class', 'nhsuk-footer__list-item')
  });

  it('Checking for footer for NHS logo', function () {
    cy.get('.global-footer__link').first().children().should('have.class', 'nhsuk-logo')
  });

  it('Checking for aria label - NHS Homepage', function () {
    cy.get('.global-footer__link').should('have.attr','aria-label','NHS homepage')
  });

  it('Checking for href', function () {
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
