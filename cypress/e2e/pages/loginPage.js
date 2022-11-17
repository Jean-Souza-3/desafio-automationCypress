class LoginPage {

    login(user, password) {
        cy.findById('user-name').type(user);
        cy.findById('password').type(password);
        cy.findById('login-button').click();
    }
}

export default new LoginPage