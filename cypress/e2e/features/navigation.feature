Feature: Test Navigation to all header links

Background:
    Given I am on the demoblaze homepage

@smoke @regression
Scenario: Check contact button
    When I click on the contact button
    Then I should be able to see the contact box

@smoke @regression
Scenario: Check about us button
    When I click on the about us button
    Then I should be able to see the about us box

@smoke @sanity @regression
Scenario: Check cart button
    When I click on the cart button
    Then I should be able to see the cart label with text "Products"
    Then The URL should have the endpoint "/cart.html"

@smoke @sanity @regression
Scenario: Check login button
    When I click on the login button
    Then I should be able to see the login box
    
@smoke @sanity @regression
Scenario: Check sign up button
    When I click on the signup button
    Then I should be able to see the signup box

Scenario: Check home button
    When I click on the home button
    Then The URL should have the endpoint "/index.html"
