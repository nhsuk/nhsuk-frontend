describe('Care-card urgent component tests', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Navigating to urgent care card Component', function () {
    cy.visit(Cypress.config().baseUrl + '/care-card-urgent.html')
  });

  it('To see whether the component exists', function () {
    cy.get('.nhsuk-care-card.nhsuk-care-card--urgent')
  });

  it('To see whether the heading container exists', function () {
    cy.get('.nhsuk-care-card.nhsuk-care-card--urgent').children()
      .should('have.class', 'nhsuk-care-card__heading-container')
  });

  it('To see whether there is content', function () {
    cy.get('.nhsuk-care-card.nhsuk-care-card--urgent').children()
      .should('have.class', 'nhsuk-care-card__content')
  });

  it('To see whether there is a heading ', function () {
    cy.get('.nhsuk-care-card__heading-container').children()
      .should('have.class', 'nhsuk-care-card__heading')
  });

  it('To see whether there is a visaully hidden text', function () {
    cy.get('.nhsuk-care-card__heading').children().children()
      .should('have.class', 'nhsuk-u-visually-hidden', 'Urgent advice:')
  });

  it('To see the care card ribbon color to be red', function () {
    cy.get('.nhsuk-care-card__heading-container')
      .should('have.css', 'background-color')
      .and('eq', 'rgb(218, 41, 28)')
  });

  it('To check the font', function () {
    cy.get('.nhsuk-care-card__content')
      .should('have.css', 'font-family').and('eq', '"Frutiger W01", Helvetica, Arial, sans-serif')
  });

  it('To see if there is some text in the heading ribbon', function () {
    cy
      .get('.nhsuk-care-card__heading').should('not.be.empty');
    expect('span').to.not.be.empty;
    expect('text').to.not.be.empty;
  });

  it('To see if there is some description', function () {
    cy
      .get('.nhsuk-care-card__content').should('not.be.empty');
    expect('li').to.not.be.empty;
  });
});
