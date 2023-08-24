describe('form test', () => {
    beforeEach(() => {
        cy.visit('/forms'); //baseUrl set in config
    })
    it('should do something', () => {
        cy.contains(/testing forms/i);
        const mail = 'me@gmail.com';// creating a variable to store the mail address
        // cy.dateTest('subscribe').find('input').type(`${mail}`, {delay: 100});
        cy.dateTest('subscribe').find('input').as('inputTest');
        cy.get('@inputTest').type(`${mail}`, {delay: 100}); //used alias @inputTest
        cy.contains(`Successfully subbed: ${mail}`).should('not.exist');
        cy.dateTest('subscribe-button').click();
        cy.contains(`Successfully subbed: ${mail}`).should('exist');
        cy.wait(3000);
        cy.contains(`Successfully subbed: ${mail}`).should('not.exist');


        /*different ways of waiting 
        1. using an alias
        2. wait (explicit)
        */
    })
})