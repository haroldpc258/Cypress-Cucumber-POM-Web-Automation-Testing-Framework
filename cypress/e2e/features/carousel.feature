Feature: Test the featured items carousel
    
Background:
    Given I am on the demoblaze homepage

@sanity @smoke @regression
Scenario: Check carousel buttons
    Then I should see the 1 item in the carousel
    When I click on the '<button>' button
    Then I should see the <item> item in the carousel
    
    Examples:
        | button  | item |
        | next    | 2    |
        | prev    | 3    |

@smoke @regression
Scenario: Check carousel sliding
    When I wait for some seconds
    Then I should see the 2 item in the carousel
    When I wait for some seconds
    Then I should see the 3 item in the carousel
    When I wait for some seconds
    Then I should see the 1 item in the carousel

@sanity @smoke @regression
Scenario Outline: Check the carousel indicators
    When I click on the <indicator> indicator
    Then I should see the <item> item in the carousel

    Examples:
        | indicator | item |
        | 1         | 1    |
        | 2         | 2    |
        | 3         | 3    |