describe('Text area component tests', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Navigating to hint component', function () {
    cy.visit(Cypress.config().baseUrl + '/textarea/index.html')
  });

  it('Checking for a class name - nhsuk-label', function () {
    cy.get('.nhsuk-form-group').children().should('have.class','nhsuk-label')
  });

  it('Checking for a class name - nhsuk-hint', function () {
    cy.get('#more-detail-hint').should('have.class','nhsuk-hint')
  });

  it('Checking for a class name - nhsuk-hint', function () {
    cy.get('#more-detail').should('have.class','nhsuk-textarea')
      .should('have.attr','aria-describedby')
  });

});
