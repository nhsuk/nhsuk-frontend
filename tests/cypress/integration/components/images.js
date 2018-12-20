describe('Images component tests', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Navigating to image Component', function () {
    cy.visit(Cypress.config().baseUrl + '/images.html')
  });

  it('Checking for image class - nhsuk-c-image__img', function () {
    cy.get('.nhsuk-image').first().children().should('have.class', 'nhsuk-image__img')
  });

  it('Checking for nhsuk-grid row class', function () {
    cy.get('#maincontent').children().should('have.class', 'nhsuk-grid-row')
  });

  it('Checking for image', function () {
    cy.get('.nhsuk-image').first().find('img').should('have.class', 'nhsuk-image__img');
  });

  it('Checking for figcaption', function () {
    cy.get('.nhsuk-image').first().find('figcaption').should('have.class', 'nhsuk-image__caption')
  });
});
