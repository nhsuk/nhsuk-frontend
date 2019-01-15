describe('Pagination component tests', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Navigating to Pagination Component', function () {
    cy.visit(Cypress.config().baseUrl + '/pagination.html')
  });

  it('To check for pagination aria label', function () {
    cy.get('.nhsuk-pagination').should('have.attr', 'aria-label', 'Pagination')
  });

  it('To check for previous item exists in the list', function () {
    cy
      .get('.nhsuk-list.nhsuk-pagination__list').children().should('have.class', 'nhsuk-pagination-item--previous')
      .should('not.be.empty');
  });

  it('To check for next item exists in the list', function () {
    cy
      .get('.nhsuk-list.nhsuk-pagination__list').children().should('have.class', 'nhsuk-pagination-item--next')
      .should('not.be.empty');
  });

  it('To check if there is some text in previous link', function () {
    cy
      .get('.nhsuk-pagination-item--previous').children().should('have.class', 'nhsuk-pagination__link nhsuk-pagination__link--prev')
      .should('not.be.empty');
  });

  it('To check there is a left arrow for previous link', function () {
    cy
      .get('.nhsuk-pagination__link.nhsuk-pagination__link--prev').children().should('have.class', 'nhsuk-icon nhsuk-icon__arrow-left')
      .should('not.be.empty');
  });

  it('To check if there is some text in the previous link', function () {
    cy.get('.nhsuk-pagination__link.nhsuk-pagination__link--prev').first().children().should('have.class', 'nhsuk-pagination__page')
      .should('not.be.empty');
  });

  it('To check there is some text in previous page link title', function () {
    cy
      .get('.nhsuk-pagination__link.nhsuk-pagination__link--prev').children().should('have.class', 'nhsuk-pagination__title')
      .should('not.be.empty');
  });

  it('To check there is some text in next page link title', function () {
    cy
      .get('.nhsuk-pagination-item--next').children().should('have.class', 'nhsuk-pagination__link nhsuk-pagination__link--next')
      .should('not.be.empty');
  });

  it('To check if there is a right arrow for next page', function () {
    cy
      .get('.nhsuk-pagination__link.nhsuk-pagination__link--next').children().should('have.class', 'nhsuk-icon nhsuk-icon__arrow-right')
      .should('not.be.empty');
  });
  
  it('To check if some text exists in next title link', function () {
    cy
      .get('.nhsuk-pagination__link.nhsuk-pagination__link--next').children().should('have.class', 'nhsuk-pagination__title')
      .should('not.be.empty');
  });

  it('To check if some text exists in next page link', function () {
    cy
      .get('.nhsuk-pagination__link.nhsuk-pagination__link--next').should('have.attr', 'href')
      .should('not.be.empty');
  });

  it('To check if some text exists in previous page link', function () {
    cy
      .get('.nhsuk-pagination__link.nhsuk-pagination__link--prev').should('have.attr', 'href')
      .should('not.be.empty');
  });

  it('Checking for hidden attribute next', function () {
    cy.get('.nhsuk-icon.nhsuk-icon__arrow-right').should('have.attr', 'aria-hidden')
  });

  it('Checking for hidden attribute previous', function () {
    cy.get('.nhsuk-icon.nhsuk-icon__arrow-left').should('have.attr', 'aria-hidden')
  });
});
