describe('setting screen res', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');

  });

  it('Navigating to content list Component', function (done) {
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
      .visit(Cypress.config().baseUrl + '/contents-list')

  });


  // checking aria label - pages in this guide
  it('Checking aria label - Pages in this guide', function () {
    cy
      .get('nav').should('have.attr', 'aria-label','Pages in this guide')
  });


  // checking visually hidden element - Contents
  it('Checking visually hidden element - Contents', function () {
    cy
      .get('.nhsuk-c-contents-list').children().should('have.class', 'visually-hidden')

  });

  it('Checking for href', function () {
    cy
      .get('.nhsuk-c-contents-list__link').should('have.attr', 'href').and('eq', 'https://www.nhs.uk')

  });

});

