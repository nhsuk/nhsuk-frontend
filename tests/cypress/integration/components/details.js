describe('Details component tests', function () {
  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Navigating to details Component', function () {
    cy.visit(Cypress.config().baseUrl + '/details/index.html')
  });

  it('To see whether there is a summary', function () {
    cy.get('.nhsuk-details').children().should('have.class','nhsuk-details__summary')
  });

  it('To see whether there is a content in the details components', function () {
    cy.get('.nhsuk-details__summary').should('have.attr','aria-controls', 'details-content-0')
  });

  it('To see whether the details component default status', function () {
    cy.get('.nhsuk-details__summary').should('have.attr','aria-expanded', 'false')
  });

  it('To see whether there is a hidden text attribute', function () {
    cy
      .get('.nhsuk-details__text').should('have.attr','aria-hidden', 'true')
  });

  it('To see whether the status of details component changed after clicking', function () {
    cy
      .get('.nhsuk-details__summary').click()
      .get('.nhsuk-details__summary').should('have.attr','aria-expanded', 'true');
  });

  it('To see whether there is some text after details component expanded', function () {
    cy
      .get('.nhsuk-details__summary').click()
      .get('.nhsuk-details__summary').should('not.be.empty');
    expect('p').to.not.be.empty;
  });

  it('To see if there is any summary text', function () {
    cy.get('.nhsuk-details__summary-text').should('not.be.empty');
    expect('p').to.not.be.empty;
  });

  it('To see if there is any summary text', function () {
    cy.get('.nhsuk-details__text').should('not.be.empty');
    expect('p').to.not.be.empty;
    expect('li').to.not.be.empty;
  });
});
