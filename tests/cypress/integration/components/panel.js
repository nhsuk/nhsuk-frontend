describe('setting screen res', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');

  });

  it('Navigating to panel Component', function () {
    cy
      .visit(Cypress.config().baseUrl + '/panel.html')

  });

  it('Checking panel class-nhsuk_c_panel', function () {
    cy
      .get('.nhsuk-grid-column-two-thirds').children().should('have.class', 'nhsuk-panel')

  });


});

