describe('List panel component tests', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Navigating to List panel Component', function () {
    cy.visit(Cypress.config().baseUrl + '/list-panel.html')
  });

  it('Checking for href - back_to_top', function () {
    cy.get('.nhsuk-back-to-top__link').should('have.attr', 'href').and('eq', '#nhsuk-nav-a-z')
  });

  it('Checking for href - back_to_top', function () {
    cy.get('.nhsuk-back-to-top')
  });

  it('Checking for arrow in the Back to top', function () {
    cy.get('.nhsuk-back-to-top__link').first().children().should('have.class', 'nhsuk-icon nhsuk-icon__arrow-right')
  });

  it('Checking for .nhsuk-list-panel__list.nhsuk-list-panel__list--with-label class ', function () {
    cy.get('.nhsuk-list-panel__list.nhsuk-list-panel__list--with-label')
  });

  it('Checking for href ', function () {
    cy.get('.nhsuk-list-panel__list.nhsuk-list-panel__list--with-label').first().children().children().should('have.attr','href')
  });

  it('Checking for aria hidden ', function () {
    cy.get('.nhsuk-icon.nhsuk-icon__arrow-right').should('have.attr','aria-hidden','true')
  });
});

