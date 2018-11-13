describe('setting screen res', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');

  });

  it('Navigating to Pagination Component', function () {

    cy
      .visit(Cypress.config().baseUrl + '/pagination.html')

  });


  it('Checking for aria hidden label', function () {
    cy
      .get('.nhsuk-pagination').should('have.attr', 'aria-label', 'Pagination')

  });

  it('Checking for pagination prev class', function () {
    cy
      .get('.nhsuk-pagination').children().should('have.class', 'nhsuk-pagination__link nhsuk-pagination__link--prev')

  });

  it('Checking for pagination prev class with left arrow', function () {
    cy
      .get('.nhsuk-pagination__link.nhsuk-pagination__link--prev').children().should('have.class', 'nhsuk-icon nhsuk-icon__arrow-left')

  });

  it('Checking for pagination page class for previous page', function () {
    cy
      .get('.nhsuk-pagination__link.nhsuk-pagination__link--prev').first().children().should('have.class', 'nhsuk-pagination__page')

  });

  it('Checking for pagination title class for previous', function () {
    cy
      .get('.nhsuk-pagination__link.nhsuk-pagination__link--prev').children().should('have.class', 'nhsuk-pagination__title')

  });

  it('Checking for pagination next class', function () {
    cy
      .get('.nhsuk-pagination').children().should('have.class', 'nhsuk-pagination__link nhsuk-pagination__link--next')

  });

  it('Checking for pagination next class with right arrow', function () {
    cy
      .get('.nhsuk-pagination__link.nhsuk-pagination__link--next').children().should('have.class', 'nhsuk-icon nhsuk-icon__arrow-right')

  });

  it('Checking for pagination page class for next', function () {
    cy
      .get('.nhsuk-pagination__link.nhsuk-pagination__link--next').children().should('have.class', 'nhsuk-pagination__page')

  });

  it('Checking for pagination title class for next', function () {
    cy
      .get('.nhsuk-pagination__link.nhsuk-pagination__link--next').children().should('have.class', 'nhsuk-pagination__title')

  });

});

