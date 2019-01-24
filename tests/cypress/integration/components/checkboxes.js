describe('Checkboxes component tests', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Navigation to checkboxes component', function () {
    cy.visit(Cypress.config().baseUrl + '/checkboxes/index.html')
  });

  it('To see whether checkbox field exists', function () {
    cy
      .get('.nhsuk-form-group').children().should('have.class','nhsuk-fieldset')
      .should('not.be.empty');
  });

  it('To check whether there is a descriptive', function () {
    cy
      .get('.nhsuk-fieldset').should('have.attr','aria-describedby')
      .should('not.be.empty');
  });

  it('To check whether there is a legend in the group', function () {
    cy.get('.nhsuk-form-group').children().children().should('have.class','nhsuk-fieldset__legend');
  });

  it('To check there is some text in legend', function () {
    cy
      .get('.nhsuk-fieldset__legend')
      .should('not.be.empty');
    expect('text').to.not.be.empty;
  });

  it('To check whether there is a checkbox in the group ', function () {
    cy.get('.nhsuk-checkboxes').first().children().should('have.class','nhsuk-checkboxes__item')
  });

  it('To check whether you can able to input into checkbox', function () {
    cy.get('.nhsuk-checkboxes__item').children().should('have.class','nhsuk-checkboxes__input');
  });
  
  it('To check the type of checkbox', function () {
    cy.get('.nhsuk-checkboxes__input').should('have.attr', 'type')
  });
  
  it('To check is there a hint text', function () {
    cy
      .get('.nhsuk-hint').should('not.be.empty');
    expect('span').to.not.be.empty;
  });
  
  it('To check is there a text in the label', function () {
    cy
      .get('.nhsuk-label.nhsuk-checkboxes__label').should('not.be.empty');
    expect('label').to.not.be.empty;
  });
});



