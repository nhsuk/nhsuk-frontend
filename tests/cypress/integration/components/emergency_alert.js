describe('Emergency alert component tests', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Navigating to emergency_alert Component', function () {
    cy.visit(Cypress.config().baseUrl + '/emergency-alert.html')
  });

  it('To see whether the alert exists', function () {
    cy.get('#nhsuk-global-alert').should('have.class','nhsuk-global-alert')
  });

  it('To see whether there is a alert heading', function () {
    cy.get('.nhsuk-global-alert__content').children().should('have.class','nhsuk-global-alert__heading')
  });

  it('To see whether there is a alert message', function () {
    cy.get('.nhsuk-global-alert__content').children().should('have.class','nhsuk-global-alert__message')
  });

  it('To see whether there is a updated status for the alert', function () {
    cy.get('.nhsuk-global-alert__content').children().should('have.class','nhsuk-global-alert__updated')
  });

  it('To see whether there is a visually hidden text - Alert:', function () {
    cy.get('.nhsuk-global-alert__heading').children().should('have.class','nhsuk-u-visually-hidden', 'Alert:')
  });

  it('To see whether there is some text in alert heading', function () {
    cy
      .get('h2').should('have.class','nhsuk-global-alert__heading')
      .get('.nhsuk-global-alert__heading').should('not.be.empty');
    expect('span').to.not.be.empty;
  });

  it('To see whether there is text in alert message', function () {
    cy.get('.nhsuk-global-alert__message').should('not.be.empty');
    expect('p').to.not.be.empty;
  });

  it('To see whether there is an updated date', function () {
    cy
      .get('p').should('have.class','nhsuk-global-alert__updated')
      .get('.nhsuk-global-alert__updated').should('not.be.empty');
  });
});
