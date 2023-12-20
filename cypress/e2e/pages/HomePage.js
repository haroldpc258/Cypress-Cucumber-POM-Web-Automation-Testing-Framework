import BasePage from './BasePage';

class HomePage extends BasePage {

    elements = {
        ...this.elements,
        carouselNextButton: () => cy.get('[data-slide="next"]'),
        carouselPreviousButton: () => cy.get('[data-slide="prev"]'),
        caroulselImages: () => cy.get('#contcar img'),
        carouselIndicators: () => cy.get('#contcar li'),
        phonesButton: () => cy.get('#cat').siblings().contains('Phones'),
        laptopsButton: () => cy.get('#cat').siblings().contains('Laptops'),
        monitorsButton: () => cy.get('#cat').siblings().contains('Monitors'),
        products: () => cy.get('.hrefch'),
    }

    clickCarouselNextButton() {
        this.elements.carouselNextButton().click();
    }

    clickCarouselPreviousButton() {
        this.elements.carouselPreviousButton().click();
    }

    getImageByIndex(index) {
        return this.elements.caroulselImages().eq(index);
    }

    clickCarouselIndicatorByIndex(index) {
        this.elements.carouselIndicators().eq(index).click();
    }

    clickPhonesButton() {
        this.elements.phonesButton().click();
    }

    clickLaptopsButton() {
        this.elements.laptopsButton().click();
    }

    clickMonitorsButton() {
        this.elements.monitorsButton().click();
    }

    getProducts() {
        return this.elements.products();
    }
}

module.exports = new HomePage();