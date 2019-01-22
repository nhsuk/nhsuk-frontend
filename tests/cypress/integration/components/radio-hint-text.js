describe('Radio button with hint component tests', function () {
  
  beforeEach(function () {
    cy.viewport('macbook-15');
  });
  
  it('Navigating to List panel Component', function () {
    cy.visit(Cypress.config().baseUrl + '/radios/hint.html')
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
  
  it('To check if there is hint text', function () {
    cy.get('.nhsuk-hint.nhsuk-radios__hint').should('not.be.empty');
    expect('span').to.not.be.empty;
  });
});
