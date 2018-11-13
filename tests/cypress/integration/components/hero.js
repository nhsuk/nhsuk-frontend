describe('setting screen res', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');

  });

  it('Navigating to hero Component', function (done) {
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
      .visit(Cypress.config().baseUrl + '/hero')

  });

  // Checking for a class name - nhsuk-c-hero
  it('Checking for a class name - nhsuk-c-hero', function () {
    cy
      .get('body > section').should('have.class', 'nhsuk-c-hero')

  });

  // checking for H1 has a class nhsuk-!-margin-bottom-3
  it('Checking for H1 has a class - nhsuk-!-margin-bottom-3', function () {
    cy
      .get('h1').should('have.class', 'nhsuk-!-margin-bottom-3').should('contain', 'We\'re here for you')

  });

});

