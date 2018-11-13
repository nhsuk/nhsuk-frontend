describe('setting screen res', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');

  });

  it('Navigating to emergency_alert Component', function () {

    cy
      .visit(Cypress.config().baseUrl + '/emergency-alert.html')

  });


  //Checking for alert class
  it('Checking for class - nhsuk-global-alert', function () {
    cy
      .get('#nhsuk-global-alert').should('have.class','nhsuk-global-alert')

  });


  // Checking for alert heading class - nhsuk-global-alert__heading
  it('Checking for alert heading class- nhsuk-global-alert__heading', function () {
    cy
      .get('.nhsuk-global-alert__content').children().should('have.class','nhsuk-global-alert__heading')

  });

  // Checking for alert message class - nhsuk-global-alert__message
  it('Checking for alert message class - nhsuk-global-alert__message', function () {
    cy
      .get('.nhsuk-global-alert__content').children().should('have.class','nhsuk-global-alert__message')

  });

  // Checking for alert last updated class
  it('Checking for alert last updated class- nhsuk-global-alert__updated', function () {
    cy
      .get('.nhsuk-global-alert__content').children().should('have.class','nhsuk-global-alert__updated')

  });

  // Checking for visually hidden element - Alert :
  it('Checking for visually hidden element - Alert:', function () {
    cy
      .get('.nhsuk-global-alert__heading').children().should('have.class','nhsuk-u-visually-hidden', 'Alert:')

  });
});
