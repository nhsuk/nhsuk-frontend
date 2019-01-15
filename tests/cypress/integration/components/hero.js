describe('Hero image component tests', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Navigating to hero Component', function () {
    cy.visit(Cypress.config().baseUrl + '/hero.html')
  });

  it('To check if there a hero image section', function () {
    cy.get('body > section').should('have.class', 'nhsuk-hero')
  });

  it('To check for heading', function () {
    cy.get('h1').should('have.class', 'nhsuk-u-margin-bottom-3','We’re here for you')
  });
});

describe('Hero with image and content component tests', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Navigating to hero Component', function () {
    cy.visit(Cypress.config().baseUrl + '/hero-image-content.html')
  });

  it('To check if there is a hero image', function () {
    cy.get('.nhsuk-hero__overlay').children().should('have.class', 'nhsuk-width-container nhsuk-hero--border')
  });

  it('To check for the heading text', function () {
    cy.get('.nhsuk-hero-content').children().should('have.class', 'nhsuk-u-margin-bottom-3','We’re here for you')
  });

  it('To check for secondary text', function () {
    cy.get('.nhsuk-hero-content').children().should('have.class', 'nhsuk-body-l nhsuk-u-margin-bottom-0', 'Helping you take control of your health and wellbeing')
  });

  it('To check if hero image has some text', function () {
    cy.get('.nhsuk-hero.nhsuk-hero--image.nhsuk-hero--image-description').should('not.be.empty')
  });
});
