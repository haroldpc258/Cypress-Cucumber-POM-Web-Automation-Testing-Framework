// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/**
 * Handles uncaught exceptions in Cypress tests.
 * If the exception message includes "Carousel is sliding", it returns false to prevent the exception from failing the test.
 * Otherwise, it returns true to allow the exception to fail the test.
 *
 * @param {Error} err - The uncaught exception object.
 * @returns {boolean} - Whether to allow the exception to fail the test.
 */
Cypress.on("uncaught:exception", (err) => {
    if (err.message.includes("Carousel is sliding")) {
        return false;
    }
    return true;
});