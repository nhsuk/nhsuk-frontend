describe('Breadcrumb Component', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Navigating to Breadcrumb component', function () {
    cy.visit(Cypress.config().baseUrl + '/breadcrumb.html')
  });

  it('Checking breadcrumb list class', function () {
    cy.get('.nhsuk-width-container').children().should('have.class','nhsuk-breadcrumb__list')
  });

  it('Checking aria label - breadcrumb', function () {
    cy.get('nav').should('have.attr','aria-label','Breadcrumb')
  });

  it('Checking home in the breadcrumb', function () {
    cy.get('nav').first().contains('Home')
  });

  it('Checking href in the breadcrumb', function () {
    cy
      .get('.nhsuk-breadcrumb__item').first().children().should('have.attr', 'href').and('eq', Cypress.config().liveUrl)
  });

  it('Checking nhsuk-breadcrumb__item class', function () {
    cy.get('.nhsuk-breadcrumb__list').first().children().should('have.class','nhsuk-breadcrumb__item')
  });

});
