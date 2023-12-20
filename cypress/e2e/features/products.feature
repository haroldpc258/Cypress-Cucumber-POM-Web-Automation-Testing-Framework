Feature: Test the categories selection, product selection, adding product to cart, buying cart, removing element from cart

    Background:
        Given I am on the demoblaze homepage

    Scenario: See the products
        When a request is made to the api in the "/entries" enpoint
        Then I should receive the same products that I am seeing in the homepage

    @UAT @regression @smoke
    Scenario: Select the different categories
        Given I want to filter the products by category
        When I click on the "<category>" category
        Then I should see the same products that the ones in the response API

        Examples:
            | category |
            | Phones   |
            | Laptops  |
            | Monitors |

    @smoke @regression
    Scenario: Select a product
        When I click on the product 1
        Then Then I should be directed to the product 1 page
        Then I should see the product image

    @smoke @regression
    Scenario: Add product to cart
        When I click on the product 1
        When I click on the Add to cart button
        Then A should receive a status code 200 from the API
        When I click on the cart button
        Then I should see 1 product added to the cart

    @smoke @regression
    Scenario: Remove a product from cart
        When I click on the product 1
        When I click on the Add to cart button
        When I click on the cart button
        When I click on the delete button
        Then I should see 0 product added to the cart

    @smoke @regression @sanity
    Scenario: Buy products cart
        When I click on the product 1
        When I click on the Add to cart button
        When I click on the cart button
        When I click on the place order button
        When I fill the form with the order data
        When I click on the purchase button
        Then I should be able to see a successful purchase alert
        Then It should have the text "Thank you for your purchase!"