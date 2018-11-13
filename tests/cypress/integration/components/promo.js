describe('setting screen res', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');

  });

  it('Navigating to Promo Component', function (done) {
    // this event will automatically be unbound when this
    // test ends because it's attached to 'cy'
    cy.on('uncaught:exception', (err, runnable) => {
      // using mocha's async done callback to finish
      // this test so we prove that an uncaught exception
      // was thrown
      done();
      // return false to prevent the error from
      // failing this test
      return false
    });

    // assume this causes an error
    cy
      .visit(Cypress.config().baseUrl + '/promo')

  });


  it('Checking for promo content class', function () {
    cy
      .get('div').should('have.class', 'nhsuk-c-promo__content')

  });

  it('Checking for promo heading class', function () {
    cy
      .get('.nhsuk-c-promo__content').children().should('have.class', 'nhsuk-c-promo__heading')

  });

  it('Checking for promo description class', function () {
    cy
      .get('.nhsuk-c-promo__content').children().should('have.class', 'nhsuk-c-promo__description')

  });

  it('Checking for href', function () {
    cy
      .get('.nhsuk-c-promo__link-wrapper').should('have.attr', 'href').and('eq','https://www.nhs.uk')

  });
});

