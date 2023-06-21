import { LoginPage, LogoutPage } from './pages';

const loginPage = new LoginPage();

Cypress.Commands.add('Login', (username, password) => {
    cy.get(loginPage.usernameInput).should('be.visible').clear().type(username)
      .get(loginPage.passwordInput).should('be.visible').clear().type(password)
      .get(loginPage.loginButton).should('be.visible').click()
  });