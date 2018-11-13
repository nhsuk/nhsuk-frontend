describe('setting screen res', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');

  });

  it('Navigating to inset text Component', function (done) {
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
      .visit(Cypress.config().baseUrl + '/inset-text')

  });


  it('Checking for visually hidden text', function () {
    cy
      .get('.nhsuk-c-inset-text').children().should('have.class', 'visually-hidden', 'Information: ')

  });

});

