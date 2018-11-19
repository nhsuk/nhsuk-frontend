describe('Feedback-banner component tests', function () {
  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Navigating to details Component', function () {
    cy.visit(Cypress.config().baseUrl + '/feedback-banner.html')
  });

  it('wait for 3 sec to see the feedback banner', function () {
    cy.wait(3000)
      .get('#nhsuk-feedback-banner')
  });

  it('check for nhsuk-feedback-banner__content- class', function () {
    cy.get('#nhsuk-feedback-banner').children().children().children().children()
      .should('have.class', 'nhsuk-feedback-banner__content')
  });

  it('check for nhsuk-feedback-banner__content- class', function () {
    cy.get('.nhsuk-feedback-banner__content').children().should('have.class', 'nhsuk-feedback-banner__heading')
  });

  it('check for nhsuk-feedback-banner__message- class', function () {
    cy.get('.nhsuk-feedback-banner__content').children().should('have.class', 'nhsuk-feedback-banner__message')
  });

  it('check for button close exists', function () {
    cy.get('#nhsuk-feedback-banner-close').should('have.attr', 'type', 'button')
  });

  it('check for visually hidden - feedback invite text', function () {
    cy
      .get('.nhsuk-feedback-banner__content').children().children()
      .should('have.class', 'nhsuk-u-visually-hidden','feedback invite')
  });

 // TODO: aria label and the role
});
