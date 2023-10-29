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

  it('login with locked out user credentials', () => {
    cy.Login(Cypress.env('lockedOutUser'), Cypress.env('password'))
    cy.contains('Sorry, this user has been locked out.')
  })

  it('login with problem user credentials', () => {
    cy.Login(Cypress.env('problemUser'), Cypress.env('password'))
    cy.contains('Products')
  })

  it('performance glitch user login attempt', () => {
    cy.Login(Cypress.env('performanceGlitchUser'), Cypress.env('password'))
    cy.contains('Products')
  })
});