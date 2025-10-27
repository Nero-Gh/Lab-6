
import LoginPage from "../../pages/LoginPage";
import BookStorePage from "../../pages/BookStorePage";
import ProfilePage from "../../pages/ProfilePage";


describe('Book Store - Login and Add Book Using POM', () => {
    beforeEach(function () {
        cy.fixture('testData').as('data');
    });

    it('Should login and add a book to user collection', function () {
        const bookName = 'Git Pocket Guide';


        LoginPage.login(this.data.login.username, this.data.login.password);
        LoginPage.verifyLoginSuccess();


        BookStorePage.visit();
        BookStorePage.openBook(bookName);


        BookStorePage.addToCollection();
        BookStorePage.verifyBookAdded();


        cy.visit('https://demoqa.com/profile');
        // ProfilePage.verifyBookInCollection(bookName);
    });
});
