describe('setting screen res', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');

  });

  it('Navigating to A-Z Navigation', function (done) {
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

    // visiting the A-Z nav component
    cy
      .visit(Cypress.config().baseUrl + '/a-z-nav')

  });


  // checking for class name - nhsuk-c-a-z-nav__list
  it('Checking for class name - nhsuk-c-a-z-nav__list', function () {
    cy
      .get('#nhsuk-c-a-z-nav').children().should('have.class', 'nhsuk-c-a-z-nav__list')

  });

  // checking for class name - nhsuk-c-a-z-nav__list-item-link
  it('Checking for class name - nhsuk-c-a-z-nav__list-item-link', function () {
    cy
      .get('#nhsuk-c-a-z-nav > ul > li').first().children().should('have.class', 'nhsuk-c-a-z-nav__list-item-link')

  });

  // check for aria label - A- Z Navigation
  it('Checking Aria label - A- Z navigation', function () {
    cy
      .get('#nhsuk-c-a-z-nav').should('have.attr', 'aria-label', 'A-Z Navigation')

  });


  // checking for role - navigation
  it('Checking navigation role', function () {
    cy
      .get('#nhsuk-c-a-z-nav').should('have.attr', 'role', 'navigation')

  });

 // it('Checking for Href', function () {
  //  cy
   //   .get('#nhsuk-c-a-z-nav > ul > li:nth-child(1) > a').should('have.attr', 'href').and('match', '#A')

 // });



});

