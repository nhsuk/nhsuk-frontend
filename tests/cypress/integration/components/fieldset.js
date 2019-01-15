describe('Fieldset component tests', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Navigating to field set Component', function () {
    cy.visit(Cypress.config().baseUrl + '/fieldset/index.html')
  });

  it('To see whether the component exists', function () {
    cy.get('.nhsuk-fieldset')
  });

  it('To see whether there is a legend in it', function () {
    cy.get('.nhsuk-fieldset__legend')
  });

  it('To see there is some text in the legend', function () {
    cy.get('.nhsuk-fieldset__legend').should('not.be.empty');
    expect('legend').to.not.be.empty
  });
});

describe('Fieldset as a page heading - Component tests', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Navigating to field set component', function () {
    cy.visit(Cypress.config().baseUrl + '/fieldset/page-heading.html')
  });

  it('To see whether there is a field set', function () {
    cy.get('.nhsuk-fieldset')
  });

  it('To see whether there is a legend in the field set', function () {
    cy.get('.nhsuk-fieldset__legend.nhsuk-fieldset__legend--xl')
  });

  it('To see whether there is a heading for field set', function () {
    cy.get('h1').should('have.class', 'nhsuk-fieldset__heading').should('not.be.empty');
  });

  it('To see there is some text in the heading', function () {
    cy.get('h1');
    expect('h1').to.not.be.empty
  });
});
