describe('List Panel Component', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Navigating to List panel Component', function () {
    cy.visit(Cypress.config().baseUrl + '/list-panel.html')
  });

  it('Checking for class name', function () {
    cy.get('.nhsuk-list-panel.nhsuk-list-panel--mobile').first().children().should('have.class', 'nhsuk-list-panel__label')
  });

  it('Checking for href - back_to_top', function () {
    cy.get('.nhsuk-back-to-top__link').should('have.attr', 'href').and('eq', '#nhsuk-nav-a-z')
  });

  it('checking for arrow in the Back to top', function () {
    cy.get('.nhsuk-back-to-top__link').first().children().should('have.class', 'nhsuk-icon nhsuk-icon__arrow-right')
  });

});

