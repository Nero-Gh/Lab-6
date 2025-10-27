class BookStorePage {
    bookTitleLink = (bookName) => `a[href="/books?book=${bookName}"]`;
    addToCollectionBtn = 'button#addNewRecordButton';

    visit() {
        cy.visit('https://demoqa.com/books');
    }

    openBook(bookName) {
        cy.contains(bookName).click();
    }

    addToCollection() {
        cy.get('#addNewRecordButton')
            .contains('Add To Your Collection')
            .scrollIntoView()
            .should('be.visible')
            .click();
    }


    verifyBookAdded() {
        cy.on('window:alert', (msg) => {
            expect(msg).to.contain('Book added to your collection');
        });
    }
}

export default new BookStorePage();
