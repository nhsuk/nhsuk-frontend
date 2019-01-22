describe('Promo component tests', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Navigating to Promo Component', function () {
    cy.visit(Cypress.config().baseUrl + '/promo/index.html')
  });

  it('Checking for promo content class', function () {
    cy.get('div').should('have.class', 'nhsuk-promo__content')
  });

  it('To check there is some text in promo heading', function () {
    cy
      .get('.nhsuk-promo__content').children().should('have.class', 'nhsuk-promo__heading')
      .should('not.be.empty');
    });

  it('To check there is some text in promo description', function () {
    cy
      .get('.nhsuk-promo__content').children().should('have.class', 'nhsuk-promo__description')
      .should('not.be.empty');
  });

  it('To check there is some text in the promo link', function () {
    cy
      .get('.nhsuk-promo__link-wrapper').should('have.attr', 'href')
      .should('not.be.empty');
  });
});

describe('Promo component with image tests', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Navigating to Promo Component', function () {
    cy.visit(Cypress.config().baseUrl + '/promo/promo-with-image.html')
  });

  it('To check there is a promo component', function () {
    cy.get('div').should('have.class', 'nhsuk-promo__content')
  });

  it('To check if there is some text in promo heading', function () {
    cy
      .get('.nhsuk-promo__content').children().should('have.class', 'nhsuk-promo__heading')
      .should('not.be.empty');
  });

  it('To check if there is some text in promo description', function () {
    cy
      .get('.nhsuk-promo__content').children().should('have.class', 'nhsuk-promo__description')
      .should('not.be.empty');
  });

  it('To check if there is some text in promo link', function () {
    cy
      .get('.nhsuk-promo__link-wrapper').should('have.attr', 'href')
      .should('not.be.empty');
  });

  it('To check if there is an image in promo', function () {
    cy.get('.nhsuk-promo__img').hasOwnProperty('img')
  });

  it('To check the image format', function () {
    cy.get('.nhsuk-promo__img').hasOwnProperty('.png')
  });
});

describe('Small promo component tests', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Navigating to Promo Component', function () {
    cy.visit(Cypress.config().baseUrl + '/promo/promo-small.html')
  });

  it('To check if there is a promo component', function () {
    cy.get('.nhsuk-promo.nhsuk-promo--small')
  });

  it('To check link is not empty', function () {
    cy.get('.nhsuk-promo__link-wrapper').should('not.be.empty');
  });
});
