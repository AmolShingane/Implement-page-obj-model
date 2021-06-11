/// <reference types="Cypress" />

class CreateNewRepoPage {
    createNewRepo(repoName) {
        cy.get('#repository_name').type(repoName)
        cy.get('#repository_auto_init').scrollIntoView().check()
        cy.get('.btn-primary').click()
        cy.get('a[data-pjax="#js-repo-pjax-container"]').should("be.visible").then(text => {
            expect(text.text()).to.equal(repoName)
        })
    }
}
export default CreateNewRepoPage