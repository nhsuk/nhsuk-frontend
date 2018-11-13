describe('setting screen res', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');

  });

  it('Navigating to Action Link Component', function (done) {
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
      .visit(Cypress.config().baseUrl + '/action-link')

  });


  // checking for class name - nhsuk-c-action-link
  it('Checking for class name - nhsuk-c-action-link', function () {

    cy
      .get('.nhsuk-page-content').children().should('have.class','nhsuk-c-action-link')

  });


  // checking for class name right arrow
  it('Checking for right arrow class', function () {

    cy
      .get('.nhsuk-c-action-link').children().should('have.class','nhsuk-icon nhsuk-icon__arrow-right-circle')

  });

  // checking for aria hidden status -  arrow
  it('Checking for aria hidden status - arrow', function () {

    cy
      .get('.nhsuk-icon.nhsuk-icon__arrow-right-circle').should('have.attr','aria-hidden', 'true')

  });
});

