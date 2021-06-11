/// <reference types="Cypress" />


class HomePage {

    clickOnNewRepositoryButton() {
        cy.get('.js-sticky > #dashboard-repos-container > #repos-container > .f4 > .btn').click()
        cy.get('auto-check > .form-group > .input-label > label').should('be.visible')
    }
}
export default HomePage