describe('Hero Image Component', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Navigating to hero Component', function () {
    cy.visit(Cypress.config().baseUrl + '/hero.html')
  });

  it('Checking for a class name - nhsuk-c-hero', function () {
    cy.get('body > section').should('have.class', 'nhsuk-hero')
  });

  it('Checking for H1 has a class - nhsuk-!-margin-bottom-3', function () {
    cy.get('h1').should('have.class', 'nhsuk-!-margin-bottom-3','We’re here for you')
  });

});


describe('Hero with Image and content Component', function () {

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
    cy.get('.nhsuk-hero-content').children().should('have.class', 'nhsuk-!-margin-bottom-3','We’re here for you')
  });

  it('Checking for a class - nhsuk-!-margin-bottom-3', function () {
    cy.get('.nhsuk-hero-content').children().should('have.class', 'nhsuk-body-l nhsuk-!-margin-bottom-0','nhsuk-body-l nhsuk-!-margin-bottom-0')
  });

  it('Checking for a class - nhsuk-hero nhsuk-hero--image nhsuk-hero--image-description', function () {
    cy.get('.nhsuk-hero.nhsuk-hero--image.nhsuk-hero--image-description')
  });

});
