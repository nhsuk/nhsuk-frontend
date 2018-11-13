describe('setting screen res', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');

  });

  it('Navigating to Breadcrumb component', function (done) {
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
      .visit(Cypress.config().baseUrl + '/breadcrumb')

  });


  it('Checking breadcrumb list class', function () {
    cy
      .get('div').children().should('have.class','nhsuk-c-breadcrumb__list')

  });

  it('Checking aria label - breadcrumb', function () {
    cy
      .get('nav').should('have.attr','aria-label','Breadcrumb')

  });

  it('Checking home in the breadcrumb', function () {
    cy
      .get('nav').first().contains('Home')

  });

  it('Checking href in the breadcrumb', function () {
    cy
      .get('.nhsuk-c-breadcrumb__item').first().children().should('have.attr', 'href').and('eq', Cypress.config().liveUrl)

  });
});
