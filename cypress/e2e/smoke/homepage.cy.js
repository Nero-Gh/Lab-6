describe('DemoQA Smoke Test', () => {
    it('should open the DemoQA homepage and verify title and logo', () => {
        cy.visit('https://demoqa.com');

        cy.title().should('eq', 'DEMOQA');

        cy.get('.banner-image').should('be.visible');
    });
});
