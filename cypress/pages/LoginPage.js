class LoginPage {
    usernameInput = '#userName';
    passwordInput = '#password';
    loginBtn = '#login';
    logoutBtn = '#submit';

    visit() {
        cy.visit('https://demoqa.com/login');
    }

    fillUsername(username) {
        cy.get(this.usernameInput).type(username);
    }

    fillPassword(password) {
        cy.get(this.passwordInput).type(password);
    }

    clickLogin() {
        cy.get(this.loginBtn).click();
    }

    login(username, password) {
        this.visit();
        this.fillUsername(username);
        this.fillPassword(password);
        this.clickLogin();
    }

    verifyLoginSuccess() {
        cy.contains('Profile').should('be.visible');
    }

    logout() {
        cy.get(this.logoutBtn).click();
    }
}

export default new LoginPage();
