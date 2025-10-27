describe('Text Box Tests with Fixtures & Commands', () => {
    beforeEach(function () {
        cy.fixture('testData').as('data');
    });

    it('Should submit Text Box form successfully', function () {
        cy.fillTextBoxForm(this.data.textBox);

        cy.get('#name').should('contain', this.data.textBox.fullName);
        cy.get('#email').should('contain', this.data.textBox.email);
    });
});
