describe('Table component tests', function () {
  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Navigating to Table Component', function () {
    cy.visit(Cypress.config().baseUrl + '/tables.html')
  });

  it('Checking for the table caption class', function () {
    cy.get('.nhsuk-table').children().should('have.class', 'nhsuk-table__caption')
  });

  it('Checking for the table heading class', function () {
    cy.get('.nhsuk-table').children().should('have.class', 'nhsuk-table__head')
  });

  it('Checking for the table body class', function () {
    cy.get('.nhsuk-table').children().should('have.class', 'nhsuk-table__body')
  });
});
