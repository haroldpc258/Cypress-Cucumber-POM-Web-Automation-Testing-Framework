class BasePage {

    elements = {
        homeButton: () => cy.get('.navbar-collapse').contains('Home'),
        contactButton: () => cy.get('.navbar-collapse').contains('Contact'),
        aboutButton: () => cy.get('.navbar-collapse').contains('About'),
        cartButton: () => cy.get('#cartur'),
        loginButton: () => cy.get('#login2'),
        signupButton: () => cy.get('#signin2'),
        contactBoxLabel: () => cy.get('#exampleModalLabel'),
        aboutBoxLabel: () => cy.get('#videoModalLabel'),
        loginBoxLabel: () => cy.get('#logInModalLabel'),
        signupBoxLabel: () => cy.get('#signInModalLabel'),
    }

    clickHomeButton() {
        this.elements.homeButton().click();
    }

    clickContactButton() {
        this.elements.contactButton().click();
    }

    clickAboutButton() {
        this.elements.aboutButton().click();
    }

    clickCartButton() {
        this.elements.cartButton().click();
    }

    clickLoginButton() {
        this.elements.loginButton().click();
    }

    clickSignupButton() {
        this.elements.signupButton().click();
    }

    getContactBoxLabel() {
        return this.elements.contactBoxLabel();
    }

    getAboutBoxLabel() {
        return this.elements.aboutBoxLabel();
    }

    getLoginBoxLabel() {
        return this.elements.loginBoxLabel();
    }

    getSignupBoxLabel() {
        return this.elements.signupBoxLabel();
    }
}

module.exports = BasePage;