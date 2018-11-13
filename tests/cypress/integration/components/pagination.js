describe('setting screen res', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');

  });

  it('Navigating to Pagination Component', function (done) {
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
      .visit(Cypress.config().baseUrl + '/pagination')

  });


  it('Checking for aria hidden label', function () {
    cy
      .get('.nhsuk-c-pagination').should('have.attr', 'aria-label', 'Pagination')

  });

  it('Checking for pagination prev class', function () {
    cy
      .get('.nhsuk-c-pagination').children().should('have.class', 'nhsuk-c-pagination-prev')

  });

  it('Checking for pagination prev class with left arrow', function () {
    cy
      .get('.nhsuk-c-pagination-prev').children().should('have.class', 'nhsuk-icon nhsuk-icon__arrow-left')

  });

  it('Checking for pagination link class for previous', function () {
    cy
      .get('.nhsuk-c-pagination-prev').children().should('have.class', 'nhsuk-c-pagination-link')

  });

  it('Checking for pagination title class for previous', function () {
    cy
      .get('.nhsuk-c-pagination-prev').children().should('have.class', 'nhsuk-c-pagination-title')

  });

  it('Checking for pagination next class', function () {
    cy
      .get('.nhsuk-c-pagination').children().should('have.class', 'nhsuk-c-pagination-next')

  });

  it('Checking for pagination next class with right arrow', function () {
    cy
      .get('.nhsuk-c-pagination-next').children().should('have.class', 'nhsuk-icon nhsuk-icon__arrow-right')

  });

  it('Checking for pagination link class for next', function () {
    cy
      .get('.nhsuk-c-pagination-next').children().should('have.class', 'nhsuk-c-pagination-link')

  });

  it('Checking for pagination title class for next', function () {
    cy
      .get('.nhsuk-c-pagination-next').children().should('have.class', 'nhsuk-c-pagination-title')

  });

});

