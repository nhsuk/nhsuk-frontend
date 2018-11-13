describe('setting screen res', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');

  });

  it('Navigating to emergency_alert Component', function (done) {
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
      .visit(Cypress.config().baseUrl + '/emergency-alert')

  });


  //Checking for alert class
  it('Checking for class - nhsuk-c-global-alert', function () {
    cy
      .get('#nhsuk-global-alert').should('have.class','nhsuk-c-global-alert')

  });


  // Checking for alert heading class - nhsuk-c-global-alert__heading
  it('Checking for alert heading class- nhsuk-c-global-alert__heading', function () {
    cy
      .get('.nhsuk-c-global-alert__content').children().should('have.class','nhsuk-c-global-alert__heading')

  });

  // Checking for alert message class - nhsuk-c-global-alert__message
  it('Checking for alert message class - nhsuk-c-global-alert__message', function () {
    cy
      .get('.nhsuk-c-global-alert__content').children().should('have.class','nhsuk-c-global-alert__message')

  });

  // Checking for alert last updated class
  it('Checking for alert last updated class- nhsuk-c-global-alert__updated', function () {
    cy
      .get('.nhsuk-c-global-alert__content').children().should('have.class','nhsuk-c-global-alert__updated')

  });

  // Checking for visually hidden element - Alert :
  it('Checking for visually hidden element - Alert:', function () {
    cy
      .get('.nhsuk-c-global-alert__heading').children().should('have.class','visually-hidden', 'Alert: ')

  });
});
