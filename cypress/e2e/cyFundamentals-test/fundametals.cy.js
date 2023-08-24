describe('fundamental test suite ', ()=>
{
  it('visits the homepage for fundamental header', ()=> {
    cy.visit('/fundamentals');  // baseUrl set  in config 
    // cy.get('h1.page_header__oRW75').should('exist').contains('Why Cypress?');
    // cy.get('[data-test = "fundermentals"]').contains(/testing Fundamentals/i); // using contain
    cy.get('[data-test = "fundermentals-header"]').should('contain.text', 'Testing Fundamentals'); // using should.contain
  })
  it(' accordion ', ()=> {
    cy.visit('/fundamentals');  // baseUrl set  in config 
    // cy.get('[data-test = ""]')
    // cy.get('[data-test = "accordion-item-1"]').should('exist');
    cy.dateTest('accordion-item-1').should('be.visible') // using a custom command
  })
})