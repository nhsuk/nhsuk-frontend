describe('Expander - group components tests', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Navigating to EXpander - group Component', function () {
    cy.visit(Cypress.config().baseUrl + '/expander-group.html')
  });

  it('To see whether there is a group of expanders', function () {
    cy.get('.nhsuk-expander-group')
  });

  it('To see there is a capability for details in the expander', function () {
    cy.get('.nhsuk-expander-group').first().children().should('have.class', 'nhsuk-details nhsuk-expander')
  });

  it('To see there is a capability for summary in expander', function () {
    cy.get('.nhsuk-expander-group').first().children().first().children().should('have.class', 'nhsuk-details__summary')
  });

  it('To see there is a capability for summary text in expander', function () {
    cy.get('.nhsuk-expander-group').first().children().first().children().first().children().should('have.class', 'nhsuk-details__summary-text')
  });

  it('To see the default status of the expander to closed', function () {
    cy.get('.nhsuk-details__summary').should('have.attr', 'aria-expanded', 'false')
  });

  it('To see the status of the expander', function () {
    cy.get('.nhsuk-details__summary').should('have.attr', 'aria-controls', 'details-content-0')
  });

  it('To see whether expander opens by clicking on it', function () {
    cy.get('.nhsuk-expander-group > .nhsuk-details:first > .nhsuk-details__summary').click()
      .should('have.attr','aria-expanded','true')
  });
});
