describe('setting screen res', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');

  });

  it('Navigating to Promo Component', function () {


    cy
      .visit(Cypress.config().baseUrl + '/promo.html')

  });


  it('Checking for promo content class', function () {
    cy
      .get('div').should('have.class', 'nhsuk-promo__content')

  });

  it('Checking for promo heading class', function () {
    cy
      .get('.nhsuk-promo__content').children().should('have.class', 'nhsuk-promo__heading')

  });

  it('Checking for promo description class', function () {
    cy
      .get('.nhsuk-promo__content').children().should('have.class', 'nhsuk-promo__description')

  });

  it('Checking for href', function () {
    cy
      .get('.nhsuk-promo__link-wrapper').should('have.attr', 'href').and('eq','https://www.nhs.uk')

  });
});

