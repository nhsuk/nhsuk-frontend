describe('Care-card immediate component tests', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Navigating to emergency care card Component', function () {
    cy.visit(Cypress.config().baseUrl + '/care-card-immediate.html')
  });

  it('To see whether there ia a container', function () {
    cy.get('.nhsuk-care-card__heading-container')
  });

  it('To see whether the component exists', function () {
    cy.get('.nhsuk-care-card.nhsuk-care-card--immediate')
  });

  it('To see whether it has a heading container', function () {
    cy.get('.nhsuk-care-card.nhsuk-care-card--immediate').children()
      .should('have.class', 'nhsuk-care-card__heading-container')
  });

  it('To see whether it has a content', function () {
    cy.get('.nhsuk-care-card.nhsuk-care-card--immediate').children()
      .should('have.class', 'nhsuk-care-card__content')
  });

  it('To see whether it has heading', function () {
    cy.get('.nhsuk-care-card__heading-container').children()
      .should('have.class', 'nhsuk-care-card__heading')
  });

  it('To see whether there is a visually hidden class', function () {
    cy.get('.nhsuk-care-card__heading').children().children()
      .should('have.class', 'nhsuk-u-visually-hidden')
  });

  it('To see whether the care card title color to be red', function () {
    cy.get('.nhsuk-care-card__heading-container')
      .should('have.css', 'background-color')
      .and('eq', 'rgb(218, 41, 28)')
  });

  it('To see whether the care card background color to be black', function () {
    cy.get('.nhsuk-care-card__content')
      .should('have.css', 'background-color')
      .and('eq', 'rgb(33, 43, 50)')
  });

  it('To see whether content has Arial font', function () {
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
