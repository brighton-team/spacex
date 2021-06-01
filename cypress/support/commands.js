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
import { SIGN_IN_URL, GET_USER_URL, LOG_OUT_URL } from '../../src/consts/routes';

Cypress.Commands.add('login', (username, password) => {
  cy.log(`Logging in as ${username}`);

  cy.visit('/');

  cy.request({
    url: GET_USER_URL,
    method: 'GET',
    failOnStatusCode: false,
  }).then((response) => {
    if (!response.isOkStatusCode) {
      cy.request({
        url: SIGN_IN_URL,
        method: 'POST',
        failOnStatusCode: false,
        body: {
          login: username,
          password,
        },
      });
    }
  });
});

Cypress.Commands.add('logout', () => {
  cy.log('Logging out');

  cy.request({
    url: LOG_OUT_URL,
    method: 'POST',
    failOnStatusCode: false,
  }).then(({ status }) => {
    cy.log(status);
  });
});
