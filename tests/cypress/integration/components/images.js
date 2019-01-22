describe('Images component tests', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Navigating to image Component', function () {
    cy.visit(Cypress.config().baseUrl + '/images/index.html')
  });

  it('To check if there is any image', function () {
    cy.get('.nhsuk-image__img').hasOwnProperty('img')
  });

  it('To check if there is a image description', function () {
    cy.get('.nhsuk-image__img');
    expect('alt').to.not.be.empty
  });

  it('To check if there is a image description', function () {
    cy.get('.nhsuk-image__caption').should('not.be.empty');
    expect('figcaption').to.not.be.empty
  });
});
