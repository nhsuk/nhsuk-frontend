describe('Review date component tests', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Navigating to Review date Component', function () {
    cy.visit(Cypress.config().baseUrl + '/review-date.html')
  });

  it('Checking for review date class', function () {
    cy.get('.nhsuk-grid-column-two-thirds').children().should('have.class', 'nhsuk-review-date')
  });

  it('To check if there is last review date', function () {
    cy
      .get('.nhsuk-review-date').children().contains('Page last reviewed:').should('have.class', 'nhsuk-body-s')
      .should('not.be.empty');
  });

  it('To check if there review due date', function () {
    cy
      .get('.nhsuk-review-date').children().contains('Next review due:').should('have.class', 'nhsuk-body-s')
      .should('not.be.empty');
  });
});
