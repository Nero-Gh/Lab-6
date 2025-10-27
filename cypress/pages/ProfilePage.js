 class ProfilePage {
    verifyBookInCollection(bookName) {
        cy.contains(bookName).should('be.visible');
    }
}

export default new ProfilePage();

