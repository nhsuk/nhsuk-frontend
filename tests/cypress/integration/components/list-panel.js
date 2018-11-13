describe('setting screen res', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');

  });

  it('Navigating to List panel Component', function (done) {
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
      .visit(Cypress.config().baseUrl + '/list-panel')

  });


  it('Checking for class name', function () {
    cy
      .get('.nhsuk-c-list-panel.nhsuk-c-list-panel--mobile').first().children().should('have.class', 'nhsuk-c-list-panel__label')

  });

  it('Checking for href - back_to_top', function () {
    cy
      .get('.nhsuk-c-back-to-top__link').should('have.attr', 'href').and('eq', '#nhsuk-c-a-z-nav')



  });

  it('checking for arrow in the Back to top', function () {
    cy
      .get('.nhsuk-c-back-to-top__link').first().children().should('have.class', 'nhsuk-icon nhsuk-icon__arrow-right')

  });

});

