describe('Header component tests - 15 inch screen', function () {
  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Navigating to Header Component', function () {
    cy.visit(Cypress.config().baseUrl + '/header.html')
  });

  it('Checking for search field', function () {
    cy.get('.nhsuk-search__input.tt-input')
  });

  it('Navigating to Header Component', function () {
    cy.visit(Cypress.config().baseUrl + '/header.html')
  });

  it('Checking for search field', function () {
    cy.get('.nhsuk-search__input.tt-input')
  });

  it('Checking NHS Logo', function () {
    cy.get('.nhsuk-header__logo').first().children().should('have.class', 'nhsuk-header__link')
  });

  it('Checking NHS Logo aria label', function () {
    cy.get('.nhsuk-header__logo').first().children().should('have.class', 'nhsuk-header__link')
      .should('have.attr', 'aria-label','NHS homepage')
  });

  it('Checking for Href', function () {
    cy.get('.nhsuk-header__link').should('have.attr', 'href','/')
  });

  it('Checking for class nhsuk-u-visually-hidden', function () {
    cy.get('.nhsuk-u-visually-hidden').hasOwnProperty('Search')
  });
});

describe('Header component tests - iphone 6 screensize', function () {
  beforeEach(function () {
    cy.viewport('iphone-6');
  });

  it('Checking for menu button', function () {
    cy.get('.nhsuk-header__menu-toggle')
  });

  it('Checking for aria controls', function () {
    cy.get('.nhsuk-header__menu-toggle').should('have.attr', 'aria-controls', 'header-navigation')
  });

  it('Checking for aria label', function () {
    cy.get('.nhsuk-header__menu-toggle').should('have.attr', 'aria-label', 'Open menu')
  });

  it('Clicking on menu button', function () {
    cy.get('#toggle-menu').click()
  });

  it('Checking default menu status', function () {
    cy.get('.nhsuk-header__menu-toggle.is-active').should('have.attr', 'aria-expanded', 'true')
  });

  it('Navigating to Header Component', function () {
    cy.visit(Cypress.config().baseUrl + '/header.html')
  });

  it('Checking for search field', function () {
    cy.get('.nhsuk-search__input.tt-input')
  });

  it('Checking NHS Logo', function () {
    cy.get('.nhsuk-header__logo').first().children().should('have.class', 'nhsuk-header__link')
  });

  it('Checking NHS Logo aria label', function () {
    cy.get('.nhsuk-header__logo').first().children().should('have.class', 'nhsuk-header__link')
      .should('have.attr', 'aria-label','NHS homepage')
  });

  it('Checking for Href', function () {
    cy.get('.nhsuk-header__link').should('have.attr', 'href','/')
  });
});

