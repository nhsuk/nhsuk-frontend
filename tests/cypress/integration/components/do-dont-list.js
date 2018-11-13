describe('setting screen res', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');

  });

  it('Navigating to Do-Dont list Component', function () {
    cy
      .visit(Cypress.config().baseUrl + '/do-dont-list.html')

  });


  // checking for DO class
  it('Checking Do class', function () {
    cy
      .get('.nhsuk-do-dont-list').children().should('have.class', 'nhsuk-do-dont-list__label','Do')
  });

  // checking for DONT class
  it('Checking Dont class', function () {
    cy
      .get('.nhsuk-do-dont-list').children().should('have.class', 'nhsuk-do-dont-list__label',"Don't")
  });



  // Checking for tick mark in DO list
  it('Checking for tick mark in to Do list', function () {
    cy
      .get('.nhsuk-list.nhsuk-list--check').first().children().first().children().should('have.class', 'nhsuk-icon nhsuk-icon__tick')

  });

  // Checking for cross mark in DONT list
  it('Checking for cross mark in Dont list', function () {
    cy
      .get('.nhsuk-do-dont-list').children().children().children().should('have.class', 'nhsuk-icon nhsuk-icon__cross')

  });


});

