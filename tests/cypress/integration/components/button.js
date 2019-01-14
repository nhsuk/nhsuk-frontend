describe('Button component tests', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Navigating to Button Component', function () {
    cy.visit(Cypress.config().baseUrl + '/button/index.html')
  });

  it('To see whether button exists', function () {
    cy.get('.nhsuk-button')
  });

  it('To see the type of button to be submit', function () {
    cy.get('[type="submit"]')
  });

  it('To see if there is some text in the button', function () {
    cy
      .get('.nhsuk-button')
      .get('.nhsuk-button').should('not.be.empty');
    expect('text').to.not.be.empty;
  });
});

describe('Button disabled Component tests', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Navigating to Button Component', function () {
    cy.visit(Cypress.config().baseUrl + '/button/disabled.html')
  });

  it('To see the type of button to be submit', function () {
    cy.get('[type="submit"]')
  });

  it('To see whether the button is diabled', function () {
    cy.get('.nhsuk-button.nhsuk-button--disabled').should('have.attr', 'aria-disabled', 'true')
  });

  it('To see if there is some text in the button', function () {
    cy
      .get('.nhsuk-button.nhsuk-button--disabled')
      .get('.nhsuk-button.nhsuk-button--disabled').should('not.be.empty');
    expect('text').to.not.be.empty;
  });
});

describe('Secondary button Component tests', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Navigating to Button Component', function () {
    cy.visit(Cypress.config().baseUrl + '/button/secondary.html')
  });

  it('To see the type of button to be submit', function () {
    cy.get('[type="submit"]')
  });

  it('To see whether secondary button exists', function () {
    cy.get('.nhsuk-button.nhsuk-button--secondary')
  });

  it('To see if there is some text in the button', function () {
    cy
      .get('.nhsuk-button.nhsuk-button--secondary')
      .get('.nhsuk-button.nhsuk-button--secondary').should('not.be.empty');
    expect('text').to.not.be.empty;
  });
});

describe('Secondary diabled button Component tests', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Navigating to Secondary diabled button Component', function () {
    cy.visit(Cypress.config().baseUrl + '/button/secondary-disabled.html')
  });


  it('To see the type of button to be submit', function () {
    cy.get('[type="submit"]')
  });

  it('To check whether there is a disabled button', function () {
    cy.get('.nhsuk-button.nhsuk-button--secondary.nhsuk-button--disabled')
  });

  it('To see if there is some text in the button', function () {
    cy
      .get('.nhsuk-button.nhsuk-button--secondary.nhsuk-button--disabled')
      .get('.nhsuk-button.nhsuk-button--secondary.nhsuk-button--disabled').should('not.be.empty');
    expect('text').to.not.be.empty;
  });
});

describe('Button reverse Component tests', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Navigating to button reverse component', function () {
    cy.visit(Cypress.config().baseUrl + '/button/reverse.html')
  });

  it('To see the button type to be submit', function () {
    cy.get('[type="submit"]')
  });

  it('To see whether button exists', function () {
    cy.get('.nhsuk-button.nhsuk-button--reverse')
  });

  it('To see if there is some text in the button', function () {
    cy
      .get('.nhsuk-button.nhsuk-button--reverse')
      .get('.nhsuk-button.nhsuk-button--reverse').should('not.be.empty');
    expect('text').to.not.be.empty;
  });
});

describe('Button reverse disabled Component tests', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Navigating to Button Component', function () {
    cy.visit(Cypress.config().baseUrl + '/button/reverse-disabled.html')
  });

  it('For checking the type of button', function () {
    cy.get('[type="submit"]')
  });

  it('Checking for a diabled button', function () {
    cy.get('.nhsuk-button.nhsuk-button--reverse.nhsuk-button--disabled')
  });

  it('To see if there is some text in the button', function () {
    cy
      .get('.nhsuk-button.nhsuk-button--reverse.nhsuk-button--disabled').should('not.be.empty');
    expect('text').to.not.be.empty;
  });
});
