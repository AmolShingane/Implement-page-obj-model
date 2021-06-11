/// <reference types="Cypress" />

class NewRepoPage {
    clickOnLogOut() {
        cy.get('.mr-0.d-none > .details-overlay > .Header-link').click()
        cy.get('.dropdown-item.dropdown-signout').should('be.visible').click()
    }
}
export default NewRepoPage