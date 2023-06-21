import { LoginPage } from '../../support/pages'

const loginPage = new LoginPage()

//  standard user
describe('login functionality', () => {
  beforeEach(() => {
    cy.visit(loginPage.url)
  })

  it('login with standard user credentials', () => {
    cy.Login(Cypress.env('username'), Cypress.env('password'))
    cy.contains('Swag Labs')
  })

  it('login with locked user credentials', () => {
    cy.Login(Cypress.env('lockedOutUser'), Cypress.env('password'))
    cy.contains('Sorry, this user has been locked out.')
  })
});