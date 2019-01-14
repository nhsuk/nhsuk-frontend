describe('Expander component tests', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Navigating to Expander component', function () {
    cy.visit(Cypress.config().baseUrl + '/expander.html')
  });

  it('To see whether there is an expander component', function () {
    cy.get('.nhsuk-details.nhsuk-expander')
  });

  it('To see the summary of the expander', function () {
    cy.get('.nhsuk-details__summary').children()
      .should('have.class', 'nhsuk-details__summary-text').should('not.to.empty')
  });

  it('To see whether there is some details', function () {
    cy.get('.nhsuk-details.nhsuk-expander').children()
      .should('have.class', 'nhsuk-details__text').should('not.be.empty')
  });

  it('To see whether there a summary text', function () {
    cy.get('.nhsuk-details__summary').should('have.attr', 'aria-controls', 'details-content-0').should('not.be.empty')
  });

  it('To see whether the expander is closed by default', function () {
    cy.get('.nhsuk-details__summary').should('have.attr', 'aria-expanded', 'false')
  });

  it('To see whether the expander opens when I click', function () {
    cy.get('.nhsuk-details__summary').click()
      .should('have.attr', 'aria-expanded', 'true')
  });
});
