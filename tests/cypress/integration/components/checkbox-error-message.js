describe('Checkbox with error message tests', function () {
  
  beforeEach(function () {
    cy.viewport('macbook-15');
  });
  
  it('Navigating to checkbox disabled Component', function () {
    cy.visit(Cypress.config().baseUrl + '/checkboxes/error.html')
  });
  
  it('To check whether there is a description', function () {
    cy.get('.nhsuk-fieldset').should('have.attr', 'aria-describedby')
  });
  
  it('To check is there some text in the label', function () {
    cy
      .get('.nhsuk-label.nhsuk-checkboxes__label').should('not.be.empty');
    expect('label').to.not.be.empty;
  });
  
  it('To check is there some text in the error message', function () {
    cy
      .get('.nhsuk-error-message').should('not.be.empty');
    expect('label').to.not.be.empty;
  });
  
  it('To check is there some text in the legend', function () {
    cy
      .get('.nhsuk-label.nhsuk-checkboxes__label').should('not.be.empty');
    expect('span').to.not.be.empty;
  });
});
