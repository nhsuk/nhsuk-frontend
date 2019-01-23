describe('Header with navigation component tests - 15 inch screen', function () {
  beforeEach(function () {
    cy.viewport('macbook-15');
  });
  
  it('Navigating to header component', function () {
    cy.visit(Cypress.config().baseUrl + '/header/index.html')
  });
  
  it('To see whether there is a search input', function () {
    cy.get('.nhsuk-header__search-toggle').should('have.attr','aria-controls')
  });
  
  it('To see whether there is a link in NHS Logo', function () {
    cy.get('.nhsuk-header__logo').first().children().should('have.class', 'nhsuk-header__link')
  });
  
  it('To see whether there is a decription in the NHS logo', function () {
    cy.get('.nhsuk-header__logo').first().children().should('have.class', 'nhsuk-header__link')
      .should('have.attr', 'aria-label','NHS homepage')
  });
  
  it('To see whether there is a link in the header', function () {
    cy.get('.nhsuk-header__link').should('have.attr', 'href','/')
  });
  
  it('To see whether there is a search term in the search field', function () {
    cy.get('.nhsuk-u-visually-hidden');
    expect('span').to.not.be.empty
  });
  
  it('To check if there is a search hint in the header', function () {
    cy.get('.nhsuk-u-visually-hidden');
    expect('label').to.not.be.empty
  });
  
  it('To check if there is some text in navigation link', function () {
    cy.get('.nhsuk-header__navigation-item');
    expect('a').to.not.be.empty
  });
  
  it('To check if there is a primary navigational label', function () {
    cy.get('.nhsuk-header__navigation').should('have.attr','aria-label', 'Primary navigation');
  });
  
  it('To check for other navigational labels', function () {
    cy.get('.nhsuk-header__navigation').should('have.attr','aria-labelledby', 'label-navigation');
  });
  
  it('To check if there is some text in label', function () {
    cy.get('#label-navigation').should('not.be.empty');
  });
});

describe('Header with navigation component tests - iphone 6 screensize', function () {
  beforeEach(function () {
    cy.viewport('iphone-6');
  });
  
  it('Navigating to Header Component', function () {
    cy.visit(Cypress.config().baseUrl + '/header/index.html')
  });
  
  it('To see header has a toggle menu', function () {
    cy.get('.nhsuk-header__menu-toggle')
  });
  
  it('To see whether the header has a navigation control', function () {
    cy.get('.nhsuk-header__menu-toggle').should('have.attr', 'aria-controls', 'header-navigation')
  });
  
  it('To see header has open menu - description', function () {
    cy.get('.nhsuk-header__menu-toggle').should('have.attr', 'aria-label', 'Open menu')
  });
  
  it('To see whether I can able to click on the menu', function () {
    cy.get('#toggle-menu').click()
  });
  
  it('To see whether the menu opens after clicked', function () {
    cy.get('.nhsuk-header__menu-toggle.is-active').should('have.attr', 'aria-expanded', 'true')
  });
  
  it('To see whether there is an search input field', function () {
    cy.get('.nhsuk-header__search-form').should('has.attr','action','/search/')
  });
  
  it('To see whether there is a link in the header logo', function () {
    cy.get('.nhsuk-header__logo').first().children().should('have.class', 'nhsuk-header__link')
  });
  
  it('To check whether there is a description for NHS logo', function () {
    cy
      .get('.nhsuk-header__logo').first().children().should('have.class', 'nhsuk-header__link')
      .should('have.attr', 'aria-label','NHS homepage')
  });
  
  it('To check for a link to exist in header link', function () {
    cy.get('.nhsuk-header__link').should('have.attr', 'href','/')
  });
  
  it('To see whether there is a search term in the search field', function () {
    cy.get('.nhsuk-u-visually-hidden').hasOwnProperty('Search');
  });
  
  it('To check if there is some text in navigation link', function () {
    cy.get('.nhsuk-header__navigation-item').should('not.be.empty');
    expect('a').to.not.be.empty
  });
  
  it('To check if there is a primary navigational label', function () {
    cy.get('.nhsuk-header__navigation').should('have.attr','aria-label', 'Primary navigation');
  });
  
  it('To check for other navigational labels', function () {
    cy.get('.nhsuk-header__navigation').should('have.attr','aria-labelledby', 'label-navigation');
  });
  
  it('To check if there is some text in label', function () {
    cy.get('#label-navigation').should('not.be.empty');
  });
});
