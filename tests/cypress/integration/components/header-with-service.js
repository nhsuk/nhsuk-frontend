describe('Header with navigation component tests - 15 inch screen', function () {
  beforeEach(function () {
    cy.viewport('macbook-15');
  });
  
  it('Navigating to header component', function () {
    cy.visit(Cypress.config().baseUrl + '/header/header-transactional-service-name.html')
  });
  
  it('To see if there is a service', function () {
    cy.get('.nhsuk-header__transactional-service-name')
  });
  
  it('To see if there some text in the service name', function () {
    cy
      .get('.nhsuk-header__transactional-service-name--link').should('have.attr','href','/')
      .should('not.be.empty');
  });
});

describe('Header with navigation component tests - iphone 6 screensize', function () {
  beforeEach(function () {
    cy.viewport('iphone-6');
  });
  
  it('Navigating to Header Component', function () {
    cy.visit(Cypress.config().baseUrl + '/header/header-transactional-service-name.html')
  });
  
  it('To see if there is a service', function () {
    cy
      .get('.nhsuk-header__transactional-service-name')
      .should('not.be.empty');
  });
  
  it('To see if there some text in the service name', function () {
    cy.get('.nhsuk-header__transactional-service-name--link').should('have.attr','href','/');
    expect('a').to.not.be.empty
  });
});
