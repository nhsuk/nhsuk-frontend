describe('Radio component tests', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Navigating to List panel Component', function () {
    cy.visit(Cypress.config().baseUrl + '/radios/index.html')
  });

  it('Checking for href - back_to_top', function () {
    cy.get('.nhsuk-fieldset').should('have.attr', 'aria-describedby')
  });

  it('Checking for nhsuk-radios class', function () {
    cy.get('.nhsuk-radios').first().children().should('have.class', 'nhsuk-radios__item')
  });

  it('Checking for nhsuk-radios__input class', function () {
    cy.get('.nhsuk-radios__item').children().should('have.class', 'nhsuk-radios__input')
  });

  it('Checking for nhsuk-label nhsuk-radios__label class', function () {
    cy.get('.nhsuk-radios__item').children().should('have.class', 'nhsuk-label nhsuk-radios__label')
  });

  it('Checking for radio button type', function () {
    cy.get('[type="radio"]')
  });
});
