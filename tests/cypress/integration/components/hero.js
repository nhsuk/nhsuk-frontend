describe('Hero image component tests', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Navigating to hero Component', function () {
    cy.visit(Cypress.config().baseUrl + '/hero/index.html')
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
    cy.visit(Cypress.config().baseUrl + '/hero/hero-image.html')
  });

  it('To check if there is a hero image', function () {
    cy.get('.nhsuk-hero.nhsuk-hero--image').children().should('have.class', 'nhsuk-hero__overlay')
  });

  it('To check for the heading text', function () {
    cy.get('.nhsuk-hero.nhsuk-hero--image').should('have.attr', 'style')
  });
});
