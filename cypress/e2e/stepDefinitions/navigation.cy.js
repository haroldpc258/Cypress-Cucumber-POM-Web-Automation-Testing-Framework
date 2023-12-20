import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import homepage from '../pages/HomePage';
import cartPage from '../pages/CartPage';

When('I click on the contact button', () => {
    homepage.clickContactButton();
});

Then('I should be able to see the contact box', () => {
    homepage.getContactBoxLabel().should('be.visible');
});

When('I click on the about us button', () => {
    homepage.clickAboutButton();
});

Then('I should be able to see the about us box', () => {
    homepage.getAboutBoxLabel().should('be.visible');
});

When('I click on the cart button', () => {
    homepage.clickCartButton();
});

Then('I should be able to see the cart label with text {string}', (text) => {
    cartPage.getCartLabel().should('eq', text);
});

Then('The URL should have the endpoint {string}', (endpoint) => {
    cy.url().should('include', endpoint);
});

When('I click on the login button', () => {
    homepage.clickLoginButton();
});

Then('I should be able to see the login box', () => {
    homepage.getLoginBoxLabel().should('be.visible');
});

When('I click on the signup button', () => {
    homepage.clickSignupButton();
});

Then('I should be able to see the signup box', () => {
    homepage.getSignupBoxLabel().should('be.visible');
});

When('I click on the home button', () => {
    homepage.clickHomeButton();
});