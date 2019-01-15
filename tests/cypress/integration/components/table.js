describe('Table component tests', function () {
  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Navigating to Table Component', function () {
    cy.visit(Cypress.config().baseUrl + '/tables.html')
  });

  it('To check if there is some text in the table caption', function () {
    cy
      .get('.nhsuk-table').children().should('have.class', 'nhsuk-table__caption')
      .should('not.be.empty');
  });

  it('To check if there is some text in the heading for table', function () {
    cy
      .get('.nhsuk-table').children().should('have.class', 'nhsuk-table__head')
      .should('not.be.empty');
  });

  it('To check if there is some text in the table body', function () {
    cy
      .get('.nhsuk-table').children().should('have.class', 'nhsuk-table__body')
      .should('not.be.empty');
  });
});
