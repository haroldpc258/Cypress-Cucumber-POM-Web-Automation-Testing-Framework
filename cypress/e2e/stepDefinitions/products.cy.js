import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import homepage from "../pages/HomePage";
import productPage from "../pages/ProductPage";
import cartPage from "../pages/CartPage";

When('a request is made to the api in the {string} enpoint', (endpoint) => {
	cy.request({
		method: "GET",
		url: "https://api.demoblaze.com" + endpoint,
	}).as("entriesRequest");
});

Then('I should receive the same products that I am seeing in the homepage', () => {
	cy.get('@entriesRequest').then((response) => {
		homepage.getProducts().each((productName) => {
			expect(productName.text()).to.be.oneOf(
				response.body.Items.map((product) => product.title)
			);
		});
	});
});

Given("I want to filter the products by category", () => {
	cy.intercept({
		method: "POST",
		url: "**/bycat",
	}).as("clickRequest");
});

When("I click on the {string} category", (category) => {
	switch (category) {
		case "Phones":
			homepage.clickPhonesButton();
			break;
		case "Laptops":
			homepage.clickLaptopsButton();
			break;
		case "Monitors":
			homepage.clickMonitorsButton();
			break;
	}	
});

Then("I should see the same products that the ones in the response API", () => {
	cy.wait("@clickRequest").then((intercept) => {
		let response = intercept.response;
		homepage.getProducts().each((productName) => {
			expect(productName.text()).to.be.oneOf(
				response.body.Items.map((product) => product.title)
			);
		});
	});
});

When("I click on the product {int}", (productNumber) => {
	homepage
		.getProducts()
		.eq(productNumber - 1)
		.click();
});

Then("Then I should be directed to the product {int} page", (productNumber) => {
	cy.url()
		.should("include", "/prod.html")
		.should("include", `idp_=${productNumber}`);
});

Then("I should see the product image", () => {
	productPage.getProductImage().should("be.visible");
});

When("I click on the Add to cart button", () => {
	cy.intercept({
		method: "POST",
		url: "https://api.demoblaze.com/addtocart",
	}).as("addToCartRequest");

	productPage.getAddToCartButton().click();
});

Then("A should receive a status code {int} from the API", (status) => {
	cy.wait("@addToCartRequest")
		.its("response.statusCode")
		.should("eq", status);
});

Then("I should see {int} product added to the cart", (productsNumber) => {
	cartPage.getProducts().should("have.length", productsNumber);
});

When("I click on the delete button", () => {
	cartPage.clickDeleteProductButton();
});

When("I click on the place order button", () => {
	cartPage.clickPlaceOrderButton();
});

When("I fill the form with the order data", () => {
	cy.fixture("orderData").then((orderData) => {
		cartPage.fillNameInput(orderData.name);
		cartPage.fillCountryInput(orderData.country);
		cartPage.fillCityInput(orderData.city);
		cartPage.fillCreditCardInput(orderData.creditCard);
		cartPage.fillMonthInput(orderData.month);
		cartPage.fillYearInput(orderData.year);
	});
});

When("I click on the purchase button", () => {
	cartPage.clickPurchaseButton();
});

Then("I should be able to see a successful purchase alert", () => {
	cartPage.getSuccessAlert().should("be.visible", { timeout: 10000 });
});

Then("It should have the text {string}", (message) => {
	cartPage.getSuccessAlertMessage().should("be.eq", message);
});
