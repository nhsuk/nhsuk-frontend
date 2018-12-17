describe('Action link component test ', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Navigating to Action Link Component', function () {
    cy.visit(Cypress.config().baseUrl + '/action-link.html')
  });

  it('Checking for class name - nhsuk-action-link', function () {
    cy.get('.nhsuk-grid-column-two-thirds').first().children().should('have.class','nhsuk-action-link')
  });

  it('Checking for right arrow class', function () {
    cy.get('.nhsuk-action-link__link').children().should('have.class','nhsuk-icon nhsuk-icon__arrow-right-circle')
  });

  it('Checking for aria hidden status - arrow', function () {
    cy.get('.nhsuk-icon.nhsuk-icon__arrow-right-circle').should('have.attr','aria-hidden', 'true')
  });
});

