/// <reference types="Cypress" />


before('geting data', () => {
    cy.fixture('example').then(data => {
        globalThis.data = data
    })
})

class LogInPage {


    fillLogInInfoAndClickSignInButton() {
        cy.get('#login_field').type(data.userName)
        cy.get('#password').type(data.password)
        cy.get('.btn').click()
    }
}
export default LogInPage
