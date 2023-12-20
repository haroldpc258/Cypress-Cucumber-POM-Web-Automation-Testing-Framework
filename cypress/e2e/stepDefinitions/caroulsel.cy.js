import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import homepage from '../pages/HomePage';

Given("I am on the demoblaze homepage", () => {
    cy.visit('/');
});

When('I click on the {string} button', (button) => {
    if (button === 'next') {
        homepage.clickCarouselNextButton();
        return;
    }
    homepage.clickCarouselPreviousButton();
});

When('I wait for some seconds', () => {
    cy.wait(3000);
});

When('I click on the {int} indicator', (indicator) => {
    homepage.clickCarouselIndicatorByIndex(indicator - 1);
});

Then('I should see the {int} item in the carousel', (itemNumber) => {
    homepage.getImageByIndex(itemNumber - 1).should('be.visible');
});

