import { LoginPage } from '../../support/pages';

const loginPage = new LoginPage();

describe('login functionality', () => {
    beforeEach(() => {
        cy.visit(loginPage.url)
    })

     it('login with valid credentials', () => {
        cy.uiLogin(Cypress.env('username'), Cypress.env('password'))
        cy.contains('Swag Labs')
    })
})