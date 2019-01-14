describe('List panel component tests', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Navigating to List panel Component', function () {
    cy.visit(Cypress.config().baseUrl + '/list-panel.html')
  });

  it('To check if there are list of Alphabets', function () {
    cy.get('.nhsuk-list-panel__label');
    expect('a').to.not.be.empty;
    cy.get('h2');
    expect('h2').to.be.not.empty
  });

  it('To check if there is a back to top link', function () {
    cy.get('.nhsuk-back-to-top__link').should('have.attr', 'href').and('eq', '#nhsuk-nav-a-z');
    expect('a').to.not.be.empty
  });

  it('To check if there is any text in each condition', function () {
    expect('.nhsuk-list-panel__item').to.not.be.empty
  });

  it('To check if there is a text in label', function () {
    cy.get('.nhsuk-list-panel__list.nhsuk-list-panel__list--with-label').should('not.be.empty');
    expect('.nhsuk-list-panel__label').to.not.be.empty
  });

  it('To check if there is a href ', function () {
    cy.get('.nhsuk-list-panel__list.nhsuk-list-panel__list--with-label').first().children().children().should('have.attr','href')
      .should('not.be.empty');
    expect('.nhsuk-list-panel__link').to.not.be.empty
  });

  it('To check the aria hidden status', function () {
    cy.get('.nhsuk-icon.nhsuk-icon__arrow-right').should('have.attr','aria-hidden','true')
  });
});
