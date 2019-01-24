describe('Care-card non-urgent component tests', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Navigating to non urgent care card Component', function () {
    cy.visit(Cypress.config().baseUrl + '/care-card/care-card-non-urgent.html')
  });

  it('To see whether the component exists', function () {
    cy.get('.nhsuk-care-card')
  });

  it('To see whether the heading component exists', function () {
    cy
      .get('.nhsuk-care-card').children()
      .should('have.class', 'nhsuk-care-card__heading-container')
      .should('not.be.empty');
  });

  it('To check whether heading exists', function () {
    cy
      .get('.nhsuk-care-card').children().children()
      .should('have.class', 'nhsuk-care-card__heading')
  });

  it('To see the existance of visually hidden element', function () {
    cy
      .get('.nhsuk-u-visually-hidden')
      .should('not.be.empty');
  });

  it('To see whether there is content', function () {
    cy
      .get('.nhsuk-care-card__heading-container').siblings()
      .should('have.class', 'nhsuk-care-card__content')
  });

  it('To see the component ribbon color to be blue ', function () {
    cy
      .get('.nhsuk-care-card__heading-container')
      .should('have.css', 'background-color')
      .and('eq', 'rgb(0, 94, 184)')
  });

  it('To check whether care card has Arial font', function () {
    cy.get('.nhsuk-care-card__content')
      .should('have.css', 'font-family').and('eq', '"Frutiger W01", Helvetica, Arial, sans-serif')
  });

  it('To see whether the attribute has status true', function () {
    cy
      .get('.nhsuk-care-card__arrow')
      .should('have.attr', 'aria-hidden', 'true')
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
