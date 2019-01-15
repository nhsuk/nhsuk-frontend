describe('Text area component tests', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Navigating to text area component', function () {
    cy.visit(Cypress.config().baseUrl + '/textarea/index.html')
  });

  it('To check if there is some text in label', function () {
    cy
      .get('.nhsuk-form-group').children().should('have.class','nhsuk-label')
      .get('.nhsuk-label').should('not.be.empty');
  });

  it('To check if there is some hint text', function () {
    cy
      .get('#more-detail-hint').should('have.class','nhsuk-hint')
      .should('not.be.empty');
  });

  it('To check if there is description attribute', function () {
    cy
      .get('#more-detail').should('have.class','nhsuk-textarea')
      .should('have.attr','aria-describedby')
      .should('not.be.empty');
  });
});
