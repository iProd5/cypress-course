describe('Fundamental test suite ', () => {
  beforeEach(() => {
    cy.visit('/fundamentals');
  });
  it('visits the homepage for fundamental header', () => {
    // cy.visit('/fundamentals');  // baseUrl set  in config 
    // cy.get('h1.page_header__oRW75').should('exist').contains('Why Cypress?');
    // cy.get('[data-test = "fundermentals"]').contains(/testing Fundamentals/i); // using contain
    cy.dateTest('fundermentals-header').should('contain.text', 'Testing Fundamentals'); // using should.contain
  });


  it('accordion works correctly', () => { // use it.only to focus on the acordion works corretly test
    // cy.visit('/fundamentals');  // baseUrl set  in config  //use .pause() to pause the test suite
    // cy.get('[data-test = ""]')
    // cy.get('[data-test = "accordion-item-1"]').should('exist');
    cy.contains('Your tests will exist in a describe block.').should('not.be.visible');
    // cy.dateTest('accordion-item-1').should('be.visible') // using a custom command from commad.js in support folder
    cy.dateTest('accordion-item-1').click();
    cy.contains('Your tests will exist in a describe block.').should('be.visible');
    cy.get('[data-test = "accordion-item-1"] div[role="button"]').click();
    cy.contains('Your tests will exist in a describe block.').should('be.not.visible');
  })
})