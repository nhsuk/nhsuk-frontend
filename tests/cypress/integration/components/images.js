describe('setting screen res', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');

  });

  it('Navigating to image Component', function (done) {
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
      .visit(Cypress.config().baseUrl + '/images')

  });

  // checking for class name - nhsuk-c-image__img
  it('Checking for image class - nhsuk-c-image__img', function () {
    cy
      .get('.nhsuk-c-image').first().children().should('have.class', 'nhsuk-c-image__img')

  });



  it('Checking for nhsuk-grid row class', function () {
    cy
      .get('#maincontent').children().should('have.class', 'nhsuk-grid-row')

  });

  it('Checking for image', function () {
    cy
      .get('.nhsuk-c-image').first().find('img').should('have.class', 'nhsuk-c-image__img');

  });


  it('Checking for figcaption', function () {

    cy.get('.nhsuk-c-image').first().find('figcaption').should('have.class', 'nhsuk-c-image__caption')

  });

});

