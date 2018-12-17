describe('Care-card non-urgent component tests', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Navigating to non urgent care card Component', function () {
    cy.visit(Cypress.config().baseUrl + '/care-card-non-urgent.html')
  });

  it('Checking for nhsuk-care-card class', function () {
    cy.get('.nhsuk-care-card')
  });

  it('Checking for nhsuk-care-card__heading-container class', function () {
    cy.get('.nhsuk-care-card').children()
      .should('have.class', 'nhsuk-care-card__heading-container')
  });

  it('Checking for nhsuk-care-card__heading class', function () {
    cy.get('.nhsuk-care-card').children().children()
      .should('have.class', 'nhsuk-care-card__heading')
  });

  it('Checking for visually hidden class', function () {
    cy.get('.nhsuk-u-visually-hidden')
  });

  it('Checking for nhsuk-care-card__content class ', function () {
    cy.get('.nhsuk-care-card__heading-container').siblings()
      .should('have.class', 'nhsuk-care-card__content')
  });

  it('Checking care card title color', function () {
    cy.get('.nhsuk-care-card__heading-container')
      .should('have.css', 'background-color')
      .and('eq', 'rgb(0, 94, 184)')
  });

  it('Checking font', function () {
    cy.get('.nhsuk-care-card__content')
      .should('have.css', 'font-family').and('eq', '"Frutiger W01", Helvetica, Arial, sans-serif')
  });

  it('checking for nhsuk-care-card__arrow and aria status', function () {
    cy.get('.nhsuk-care-card__arrow')
      .should('have.attr', 'aria-hidden', 'true')
  });
});

