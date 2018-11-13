describe('setting screen res', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');

  });

  it('Navigating to Review date Component', function () {

    cy
      .visit(Cypress.config().baseUrl + '/review-date.html')

  });


  it('Checking for review date class', function () {
    cy
      .get('.nhsuk-grid-column-two-thirds').children().should('have.class', 'nhsuk-review-date')

  });


  it('Checking for Page last reviewed text', function () {
    cy
      .get('.nhsuk-review-date').children().contains('Page last reviewed:').should('have.class', 'nhsuk-body-s')

  });

  it('Checking for Next review due', function () {
    cy
      .get('.nhsuk-review-date').children().contains('Next review due:').should('have.class', 'nhsuk-body-s')

  });

});

