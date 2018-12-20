describe('Do - dont list component tests', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Navigating to Do-Dont list Component', function () {
    cy.visit(Cypress.config().baseUrl + '/do-dont-list.html')
  });

  it('To see whether there is a Do label', function () {
    cy.get('.nhsuk-do-dont-list').children().should('have.class', 'nhsuk-do-dont-list__label','Do')
  });

  it('To see whether there is a Dont label', function () {
    cy.get('.nhsuk-do-dont-list').first().children().should('have.class', 'nhsuk-do-dont-list__label',"Don't")
  });

  it('To see whether there is a tick mark for Do list', function () {
    cy.get('.nhsuk-list.nhsuk-list--tick').first().children().children().should('have.class', 'nhsuk-icon nhsuk-icon__tick')
  });

  it('To see whether there is a cross mark for Dont list', function () {
    cy.get('.nhsuk-do-dont-list').children().children().children().should('have.class', 'nhsuk-icon nhsuk-icon__cross')
  });

  it('To check whether there is a hidden attributes in the tick icon', function () {
    cy.get('.nhsuk-icon.nhsuk-icon__tick').should('have.attr', 'aria-hidden', 'true')
  });

  it('To check whether there is a hidden attribute in the cross icon', function () {
    cy.get('.nhsuk-icon.nhsuk-icon__cross').should('have.attr', 'aria-hidden', 'true')
  });

  it('To see whether there is some text in Do Dont list', function () {
    cy.get('.nhsuk-list.nhsuk-list--tick').contains('li');
    cy.get('.nhsuk-list.nhsuk-list--cross').contains('li');
    expect('li').to.not.be.empty;
  });
});
