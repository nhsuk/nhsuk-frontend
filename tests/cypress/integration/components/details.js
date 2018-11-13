describe('setting screen res', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');

  });

  it('Navigating to details Component', function (done) {
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
      .visit(Cypress.config().baseUrl + '/details')

  });


  // checking for class name - nhsuk-details__summary-text
  it('Checking class name', function () {
    cy
      .get('.nhsuk-details__summary').children().should('have.class','nhsuk-details__summary-text')

  });

  // checking for Aria controls
  it('Checking Aria controls', function () {
    cy
      .get('.nhsuk-details__summary').should('have.attr','aria-controls','details-content-0')

  });


  // checking for expander default status
  it('Checking expander default status', function () {
    cy
      .get('.nhsuk-details__summary').should('have.attr','aria-expanded', 'false')

  });

  // checking for expander status after expanding
  it('Checking expander click status', function () {
    cy
      .get('.nhsuk-details__summary').click()
      .get('.nhsuk-details__summary').should('have.attr','aria-expanded', 'true')

  });

  });

