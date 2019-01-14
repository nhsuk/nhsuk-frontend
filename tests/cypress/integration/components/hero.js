describe('Hero image component tests', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Navigating to hero Component', function () {
    cy.visit(Cypress.config().baseUrl + '/hero.html')
  });

  it('Checking for a class name - nhsuk-c-hero', function () {
    cy.get('body > section').should('have.class', 'nhsuk-hero')
  });

  it('Checking for H1 has a class - nhsuk-u-margin-bottom-3', function () {
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

  it('Checking for a class name - nhsuk-c-hero', function () {
    cy.get('.nhsuk-hero__overlay').children().should('have.class', 'nhsuk-width-container nhsuk-hero--border')
  });

  it('Checking for a class - nhsuk-!-margin-bottom-3', function () {
    cy.get('.nhsuk-hero-content').children().should('have.class', 'nhsuk-u-margin-bottom-3','We’re here for you')
  });

  it('Checking for a class -nhsuk-body-l nhsuk-u-margin-bottom-0', function () {
    cy.get('.nhsuk-hero-content').children().should('have.class', 'nhsuk-body-l nhsuk-u-margin-bottom-0', 'Helping you take control of your health and wellbeing')
  });

  it('Checking for a class - nhsuk-hero nhsuk-hero--image nhsuk-hero--image-description', function () {
    cy.get('.nhsuk-hero.nhsuk-hero--image.nhsuk-hero--image-description').should('not.be.empty')
  });
});
