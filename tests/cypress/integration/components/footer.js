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
      .should('not.be.empty');
    expect('a').to.not.be.empty
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

  it('To see if there is any message in summary body', function () {
    cy.get('h2').should('have.class','nhsuk-u-visually-hidden').should('not.be.empty');
  });
});

describe('Footer with no logo component test', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Navigating to footer component', function () {
    cy.visit(Cypress.config().baseUrl + '/footer-no-logo.html')
  });

  it('To see whether there is a footer list', function () {
    cy.get('.nhsuk-width-container').children().should('have.class', 'nhsuk-footer__list')
  });

  it('To see whether there is an item in the list', function () {
    cy.get('.nhsuk-footer__list').first().children().should('have.class', 'nhsuk-footer__list-item');
    expect('a').to.not.be.empty
  });

  it('To see whether there is a link', function () {
    cy.get('.nhsuk-footer__list-item').children().should('have.attr','href').should('not.be.empty');
  });

  it('To see whether there is a copy right', function () {
    cy.get('.nhsuk-footer__copyright').hasOwnProperty('© Crown Copyright')
  });

  it('To see if there is any message in summary body', function () {
    cy.get('h2').should('have.class','nhsuk-u-visually-hidden').should('not.be.empty');
    expect('h2').to.not.be.empty
  });
});
