describe('Breadcrumb component tests', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Navigating to Breadcrumb component', function () {
    cy.visit(Cypress.config().baseUrl + '/breadcrumb.html')
  });

  it('To see whether there is a list in the breadcrumb', function () {
    cy.get('.nhsuk-width-container').children().should('have.class','nhsuk-breadcrumb__list')
  });

  it('To see the attribute label in the breadcrumb', function () {
    cy.get('nav').should('have.attr','aria-label','Breadcrumb')
  });

  it('To check whether the breadcrumb list has atleast one item', function () {
    cy.get('.nhsuk-breadcrumb__list').first().children().should('have.class','nhsuk-breadcrumb__item')
  });

  it('To check whether there is some missing text breadcrumb', function () {
    cy
      .get('.nhsuk-breadcrumb__item')
      .should('not.be.empty');
    expect('a').to.not.be.empty;
  });
});
