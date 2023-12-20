import BasePage from './BasePage';

class ProductPage extends BasePage {

    elements = {
        ... this.elements,
        productImage: () => cy.get('#imgp img',),
        addToCartButton: () => cy.get('#tbodyid a')
    }

    getProductImage() {
        return this.elements.productImage();
    }

    getAddToCartButton() {
        return this.elements.addToCartButton();
    }
}

module.exports = new ProductPage();