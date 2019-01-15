describe('Radio component tests', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Navigating to List panel Component', function () {
    cy.visit(Cypress.config().baseUrl + '/radios/index.html')
  });

  it('To check if there is aria description', function () {
    cy
      .get('.nhsuk-fieldset').should('have.attr', 'aria-describedby')
      .should('not.be.empty');
  });

  it('To check there is an item in radio group', function () {
    cy.get('.nhsuk-radios').first().children().should('have.class', 'nhsuk-radios__item')
  });

  it('To check if there is radio input', function () {
    cy.get('.nhsuk-radios__item').children().should('have.class', 'nhsuk-radios__input')
  });

  it('To check if there is some text in radio label', function () {
    cy
      .get('.nhsuk-label nhsuk-radios__label')
      .should('not.be.empty');
  });

  it('To check the button type', function () {
    cy.get('[type="radio"]')
  });
});
