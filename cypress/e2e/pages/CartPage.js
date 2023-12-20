import BasePage from './BasePage';

class CartPage extends BasePage {

    elements = {
        cartLabel: () => cy.get('.col-lg-8 > h2'),
        deleteProductButton: () => cy.get('#tbodyid a'),
        products: () => cy.get('#tbodyid > tr'),
        placeOrderButton: () => cy.get('.btn-success'),
        nameInput: () => cy.get('#name'),
        countryInput: () => cy.get('#country'),
        cityInput: () => cy.get('#city'),
        creditCardInput: () => cy.get('#card'),
        monthInput: () => cy.get('#month'),
        yearInput: () => cy.get('#year'),
        purchaseButton: () => cy.get('button').contains('Purchase'),
        successAlert: () => cy.get('.sweet-alert'),
        successAlertMessage: () => cy.get('.sweet-alert h2'),
    }

    getCartLabel() {
        return this.elements.cartLabel().invoke('text');
    }

    getProducts() {
        return this.elements.products();
    }

    clickDeleteProductButton() {
        this.elements.deleteProductButton().click();
    }

    clickPlaceOrderButton() {
        this.elements.placeOrderButton().click();
    }

    fillNameInput(name) {
        this.elements.nameInput().type(name);
    }

    fillCountryInput(country) {
        this.elements.countryInput().type(country);
    }

    fillCityInput(city) {
        this.elements.cityInput().type(city);
    };

    fillCreditCardInput(creditCard) {
        this.elements.creditCardInput().type(creditCard);
    }

    fillMonthInput(month) {
        this.elements.monthInput().type(month);
    }

    fillYearInput(year) {
        this.elements.yearInput().type(year);
    }

    clickPurchaseButton() {
        this.elements.purchaseButton().click();
    }

    getSuccessAlert() {
        return this.elements.successAlert();
    }

    getSuccessAlertMessage() {
        return this.elements.successAlertMessage().invoke('text');
    }
}

module.exports = new CartPage();