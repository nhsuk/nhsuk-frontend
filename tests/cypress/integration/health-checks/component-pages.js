describe('Verify that the individual component pages are working', function() {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Visits the Homepage', function() {
  })

  it('Visits the Layout page', function() {
    cy.get('a').contains('Layout').click()
    cy.get('h1').contains('Layout')
  })

  it('Visits the Typography page', function() {
    cy.get('a').contains('Typography').click()
    cy.get('h1').contains('Typography')
  })

  it('Visits the Icons page', function() {
    cy.get('a').contains('Icons').click()
    cy.get('h1').contains('Icons')
  })

  it('Visits the Header & Footer page', function() {
    cy.get('a').contains('Header & Footer').click()
    cy.get('h1').contains('Header & Footer')
  })

  it('Visits the Breadcrumbs page', function() {
    cy.get('a').contains('Breadcrumbs').click()
    cy.get('h1').contains('Breadcrumbs')
  })
  it('Visits the Callouts page', function() {
    cy.get('a').contains('Callouts').click()
    cy.get('h1').contains('Callouts')
  })

  it('Visits the Care Cards page', function() {
    cy.get('a').contains('Care Cards').click()
    cy.get('h1').contains('Care Cards')
  })

  it('Visits the Do & Don\'t lists page', function() {
    cy.get('a').contains('Do & Don\'t lists').click()
    cy.get('h1').contains('Do & Don\'t lists')
  })

  it('Visits the Action links page', function() {
    cy.get('a').contains('Action links').click()
    cy.get('h1').contains('Action link')
  })

  it('Visits the Images page', function() {
    cy.get('a').contains('Images').click()
    cy.get('h1').contains('Images')
  })

  it('Visits the Tables page', function() {
    cy.get('a').contains('Tables').click()
    cy.get('h1').contains('Tables')
  })

  it('Visits the Reveals page', function() {
    cy.get('a').contains('Reveals').click()
    cy.get('h1').contains('Reveals')
  })

  it('Visits the Video page', function() {
    cy.get('a').contains('Video').click()
    cy.get('h1').contains('Video')
  })
  
  it('Visits the Review dates page', function() {
    cy.get('a').contains('Page review').click()
    cy.get('h1').contains('Review dates')
  })
  
  it('Visits the Multi-page nav page', function() {
    cy.get('a').contains('Multi-page nav').click()
    cy.get('h1').contains('Multi-page nav')
  }) 

})
