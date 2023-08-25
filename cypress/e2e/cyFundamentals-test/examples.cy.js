describe('new', () => {
    beforeEach(() => {
        cy.visit('/examples');
    })
    it('click and got to the correct page ', () => {
        cy.location('pathname').should('equal', '/examples');

        cy.dateTest('nav-why-cypress').click();
        cy.location("pathname").should('eq', '/')

        cy.dateTest('nav-fundamentals').click();
        cy.location("pathname").should('eq', '/fundamentals')

        cy.dateTest('nav-component').click();
        cy.location("pathname").should('eq', '/component')

    })

    it('intercept ',()=>{
        cy.intercept('POST', '/examples',{
            // body: {
            //     message: 'test message',
            //     Error: 'test error',
            //     status: '200'
            // }
            fixture: 'example.json' // using a fixture object
        }
       )
       cy.dateTest('post-button').click();
    })
})