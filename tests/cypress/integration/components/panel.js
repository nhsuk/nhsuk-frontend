describe('Panel component tests', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Navigating to panel Component', function () {
    cy.visit(Cypress.config().baseUrl + '/panel.html')
  });

  it('To check there is panel component', function () {
    cy.get('.nhsuk-grid-column-two-thirds').children().should('have.class', 'nhsuk-panel')
  });
  
  it('To check there is some text in panel heading', function () {
    cy.get('h3').should('not.be.empty');
  });
  
  it('To check there is some text in panel description', function () {
    cy.get('p').should('not.be.empty');
  });
});
