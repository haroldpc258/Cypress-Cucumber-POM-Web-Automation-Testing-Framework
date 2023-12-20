# **Cypress-Cucumber-Web-Automation-Testing-Framework**

This repository contains the development of a Cypress and Cucumber project for testing a web page. The application implements a framework from scratch to automate the process of testing various functionalities of the website.

## Features

The application has the following features:

- Testing of the featured items carousel.
- Testing navigation to all header links.
- Testing categories selection, product selection, adding product to cart, buying cart, removing element from cart.
- Multiple reports generation

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You will need:

- Node.js and npm
- Cypress
- Cucumber

### Running the Tests

To run the tests, firstable you need to navigate to the project root and execute the next command in the terminal in order to install all the necessary dependencies:

    npm install
Then you can execute the following command to execute the scenarios of the feature files:

    npm run test

Note: The npm scripts are designed for windows OS.

Note: In order to generate the Allure Report it's necessary to downgrade the cypress project version to @12.14.0 due to compatibility issues.
