describe('setting screen res', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');

  });

  it('Navigating to Review date Component', function (done) {
    // this event will automatically be unbound when this
    // test ends because it's attached to 'cy'
    cy.on('uncaught:exception', (err, runnable) => {
      // using mocha's async done callback to finish
      // this test so we prove that an uncaught exception
      // was thrown
      done();
      // return false to prevent the error from
      // failing this test
      return false
    });

    // assume this causes an error
    cy
      .visit(Cypress.config().baseUrl + '/review-date')

  });


  it('Checking for review date class', function () {
    cy
      .get('.nhsuk-grid-column-two-thirds').children().should('have.class', 'nhsuk-c-review-date')

  });


  it('Checking for Page last reviewed text', function () {
    cy
      .get('.nhsuk-c-review-date').children().contains('Page last reviewed:').should('have.class', 'nhsuk-body-s')

  });

  it('Checking for Next review due', function () {
    cy
      .get('.nhsuk-c-review-date').children().contains('Next review due:').should('have.class', 'nhsuk-body-s')

  });

});

