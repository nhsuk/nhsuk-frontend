describe('Feedback-banner component tests', function () {
  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Navigating to details Component', function () {
    cy.visit(Cypress.config().baseUrl + '/feedback-banner/index.html')
  });

  it('Wait for 3 sec to see the feedback banner', function () {
    cy.wait(3000)
      .get('#nhsuk-feedback-banner')
  });

  it('To see whether there is a capability to have some content', function () {
    cy.get('#nhsuk-feedback-banner').children().children().children().children()
      .should('have.class', 'nhsuk-feedback-banner__content')
  });

  it('To see whether there is a capability to have some heading', function () {
    cy.get('.nhsuk-feedback-banner__content').children().should('have.class', 'nhsuk-feedback-banner__heading')
  });

  it('To see whether there is a capbility to have some message', function () {
    cy.get('.nhsuk-feedback-banner__content').children().should('have.class', 'nhsuk-feedback-banner__message')
  });

  it('To see whether there is a button in the banner', function () {
    cy.get('#nhsuk-feedback-banner-close').should('have.attr', 'type', 'button')
  });

  it('To check for a hidden text - feedback invite', function () {
    cy
      .get('.nhsuk-feedback-banner__content').children().children()
      .should('have.class', 'nhsuk-u-visually-hidden','feedback invite')
  });

  it('To see there is some text in header', function () {
    cy
      .get('h2').should('have.class','nhsuk-feedback-banner__heading')
      .get('.nhsuk-feedback-banner__heading').should('not.be.empty');
    expect('h2').to.not.be.empty
  });

  it('To see there is some text in banner', function () {
    cy.get('.nhsuk-feedback-banner__message').should('not.be.empty');
    expect('p').to.not.be.empty
  });

  it('To see there is some text to close the banner', function () {
    cy.get('.nhsuk-feedback-banner__close').should('not.be.empty');
    expect('span').to.not.be.empty
  });
});
