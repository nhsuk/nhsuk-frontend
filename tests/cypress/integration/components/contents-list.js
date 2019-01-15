describe('Content-list component tests', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Navigating to content list Component', function () {
    cy.visit(Cypress.config().baseUrl + '/contents-list.html')
  });

  it('To see whether there is a label', function () {
    cy.get('.nhsuk-contents-list').should('have.attr', 'aria-label','Pages in this guide')
  });

  it('To check whether there is a visually hidden element', function () {
    cy.get('.nhsuk-contents-list').children().should('have.class', 'nhsuk-u-visually-hidden', 'Contents')
  });

  it('To see whether there is a link in the content list', function () {
    cy.get('.nhsuk-contents-list__link').should('have.attr', 'href')
  });

  it('To see whether there is a aria current', function () {
    cy.get('.nhsuk-contents-list__item').should('have.attr', 'aria-current','page')
  });

  it('To see whether there is some text in span', function () {
    cy
      .get('.nhsuk-contents-list__current')
      .should('not.be.empty');
    expect('span').to.not.be.empty;
  });

  it('To see whether there is some text in attribute', function () {
    cy
      .get('.nhsuk-contents-list__link')
      .should('not.be.empty');
    expect('a').to.not.be.empty;
  });
});
