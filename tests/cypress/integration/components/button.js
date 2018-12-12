describe('Button Component tests', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Navigating to Button Component', function () {
    cy.visit(Cypress.config().baseUrl + '/button/index.html')
  });


  it('Checking for nhsuk-button class', function () {
    cy.get('.nhsuk-button')
  });


  it('Checking for button type', function () {
    cy.get('[type="submit"]')
  });

});

