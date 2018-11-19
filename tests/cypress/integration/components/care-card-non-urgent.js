// TODO: need to add aria expander status and aria label

describe('care-card non-urgent component tests', function () {
  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Navigating to non urgent care card Component', function () {
    cy.visit(Cypress.config().baseUrl + '/care-card-non-urgent.html')
  });

  it('Checking for nhsuk-care-card class', function () {
    cy.get('.nhsuk-care-card.nhsuk-care-card--primary')
  });

  it('Checking for nhsuk-care-card__heading-container class', function () {
    cy.get('.nhsuk-care-card.nhsuk-care-card--primary').children()
      .should('have.class', 'nhsuk-care-card__heading-container')
  });

  it('Checking for nhsuk-care-card__heading class', function () {
    cy.get('.nhsuk-care-card.nhsuk-care-card--primary').children().children()
      .should('have.class', 'nhsuk-care-card__heading')
  });

  it('Checking for visually hidden class', function () {
    cy.get('.nhsuk-care-card__heading').children()
      .should('have.class', 'nhsuk-u-visually-hidden', 'Non-urgent advice: ')
  });

  it('Checking for nhsuk-care-card__content class ', function () {
    cy.get('.nhsuk-care-card.nhsuk-care-card--primary').children()
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
});

