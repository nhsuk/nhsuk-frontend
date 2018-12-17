describe('Promo Component', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Navigating to Promo Component', function () {
    cy.visit(Cypress.config().baseUrl + '/promo.html')
  });

  it('Checking for promo content class', function () {
    cy.get('div').should('have.class', 'nhsuk-promo__content')
  });

  it('Checking for promo heading class', function () {
    cy.get('.nhsuk-promo__content').children().should('have.class', 'nhsuk-promo__heading')
  });

  it('Checking for promo description class', function () {
    cy.get('.nhsuk-promo__content').children().should('have.class', 'nhsuk-promo__description')
  });

  it('Checking for href', function () {
    cy.get('.nhsuk-promo__link-wrapper').should('have.attr', 'href')
  });

});

describe('Promo Component with image', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Navigating to Promo Component', function () {
    cy.visit(Cypress.config().baseUrl + '/promo-with-image.html')
  });

  it('Checking for promo content class', function () {
    cy.get('div').should('have.class', 'nhsuk-promo__content')
  });

  it('Checking for promo heading class', function () {
    cy.get('.nhsuk-promo__content').children().should('have.class', 'nhsuk-promo__heading')
  });

  it('Checking for promo description class', function () {
    cy.get('.nhsuk-promo__content').children().should('have.class', 'nhsuk-promo__description')
  });

  it('Checking for href', function () {
    cy.get('.nhsuk-promo__link-wrapper').should('have.attr', 'href')
  });

  it('Checking for nhsuk-promo__img', function () {
    cy.get('.nhsuk-promo__link-wrapper').children().should('have.class', 'nhsuk-promo__img')
  });

  it('Checking for image presence', function () {
    cy.get('.nhsuk-promo__img').hasOwnProperty('.png')
  });

});

describe('Small Promo Component', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Navigating to Promo Component', function () {
    cy.visit(Cypress.config().baseUrl + '/promo-small.html')
  });

  it('Checking for nhsuk-promo.nhsuk-promo--small class', function () {
    cy.get('.nhsuk-promo.nhsuk-promo--small')
  });

  it('Checking for nhsuk-promo__link-wrapper class', function () {
    cy.get('.nhsuk-promo__link-wrapper')
  });

});
