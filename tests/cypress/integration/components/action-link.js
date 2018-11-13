describe('setting screen res', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');

  });

  it('Navigating to Action Link Component', function () {

    cy
      .visit(Cypress.config().baseUrl + '/action-link.html')

  });


  // checking for class name - nhsuk-c-action-link
  it('Checking for class name - nhsuk-action-link', function () {

    cy
      .get('.nhsuk-grid-column-two-thirds').first().children().should('have.class','nhsuk-action-link')

  });


  // checking for class name right arrow
  it('Checking for right arrow class', function () {

    cy
      .get('.nhsuk-action-link__link').children().should('have.class','nhsuk-icon nhsuk-icon__arrow-right-circle')

  });

  // checking for aria hidden status -  arrow
  it('Checking for aria hidden status - arrow', function () {

    cy
      .get('.nhsuk-icon.nhsuk-icon__arrow-right-circle').should('have.attr','aria-hidden', 'true')

  });
});

