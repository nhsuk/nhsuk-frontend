describe('Checkbox disbled component tests', function () {
  beforeEach(function () {
    cy.viewport('macbook-15');
  });
  it('Navigating to checkbox disabled component', function () {
    cy.visit(Cypress.config().baseUrl + '/checkboxes/disabled.html')
  });
  it('To check there is a disabled checkbox', function () {
    cy.get('.nhsuk-checkboxes__input').should('be.disabled')
  });
  it('To check is there some text in the label', function () {
    cy
      .get('.nhsuk-label.nhsuk-checkboxes__label').should('not.be.empty');
    expect('label').to.not.be.empty;
  });
});
