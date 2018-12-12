describe('Pagination Component', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Navigating to Pagination Component', function () {
    cy.visit(Cypress.config().baseUrl + '/pagination.html')
  });


  it('Checking for aria hidden label', function () {
    cy.get('.nhsuk-pagination').should('have.attr', 'aria-label', 'Pagination')
  });

  it('Checking for nhsuk-pagination-item--previous in list class', function () {
    cy.get('.nhsuk-list.nhsuk-pagination__list').children().should('have.class', 'nhsuk-pagination-item--previous')
  });

  it('Checking for nhsuk-pagination-item--next in list class', function () {
    cy.get('.nhsuk-list.nhsuk-pagination__list').children().should('have.class', 'nhsuk-pagination-item--next')
  });

  it('Checking for pagination prev class', function () {
    cy.get('.nhsuk-pagination-item--previous').children().should('have.class', 'nhsuk-pagination__link nhsuk-pagination__link--prev')
  });

  it('Checking for pagination prev class with left arrow', function () {
    cy.get('.nhsuk-pagination__link.nhsuk-pagination__link--prev').children().should('have.class', 'nhsuk-icon nhsuk-icon__arrow-left')
  });

  it('Checking for pagination page class for previous page', function () {
    cy.get('.nhsuk-pagination__link.nhsuk-pagination__link--prev').first().children().should('have.class', 'nhsuk-pagination__page')
  });

  it('Checking for pagination title class for previous', function () {
    cy.get('.nhsuk-pagination__link.nhsuk-pagination__link--prev').children().should('have.class', 'nhsuk-pagination__title')
  });

  it('Checking for pagination nhsuk-pagination-item--next class', function () {
    cy.get('.nhsuk-pagination-item--next').children().should('have.class', 'nhsuk-pagination__link nhsuk-pagination__link--next')
  });

  it('Checking for pagination next class with right arrow', function () {
    cy.get('.nhsuk-pagination__link.nhsuk-pagination__link--next').children().should('have.class', 'nhsuk-icon nhsuk-icon__arrow-right')
  });

  it('Checking for pagination page class for next', function () {
    cy.get('.nhsuk-pagination__link.nhsuk-pagination__link--next').children().should('have.class', 'nhsuk-pagination__page')
  });

  it('Checking for pagination title class for next', function () {
    cy.get('.nhsuk-pagination__link.nhsuk-pagination__link--next').children().should('have.class', 'nhsuk-pagination__title')
  });

  it('Checking for href in next', function () {
    cy.get('.nhsuk-pagination__link.nhsuk-pagination__link--next').should('have.attr', 'href')
  });

  it('Checking for href in previous', function () {
    cy.get('.nhsuk-pagination__link.nhsuk-pagination__link--prev').should('have.attr', 'href')
  });

  it('Checking for aria hidden in next', function () {
    cy.get('.nhsuk-icon.nhsuk-icon__arrow-right').should('have.attr', 'aria-hidden')
  });

  it('Checking for aria hidden in previous', function () {
    cy.get('.nhsuk-icon.nhsuk-icon__arrow-left').should('have.attr', 'aria-hidden')
  });
});

