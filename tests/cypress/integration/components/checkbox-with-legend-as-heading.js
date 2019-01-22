describe('Checkboxes with legend as page heading tests', function () {
  
  beforeEach(function () {
    cy.viewport('macbook-15');
  });
  
  it('Navigation to checkboxes with hint component', function () {
    cy.visit(Cypress.config().baseUrl + '/checkboxes/hint.html')
  });
  
  it('To check if there is some text in heading', function () {
    cy.get('.nhsuk-fieldset__heading');
    expect('h1').to.not.be.empty;
  });
  
  it('To check if there is some label text', function () {
    cy.get('.nhsuk-label.nhsuk-checkboxes__label');
    expect('label').to.not.be.empty;
  });
  
  it('To check if there is some hint text', function () {
    cy.get('.nhsuk-hint.nhsuk-checkboxes__hint');
    expect('span').to.not.be.empty;
  });
});
