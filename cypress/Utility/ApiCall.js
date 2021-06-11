/// <reference types="Cypress" />

class ApiCalls{
    getApiCall(dataTable){
        dataTable.hashes().forEach(elem => {
            cy.request(elem.method, '/' + elem.endPoint).then(resposnce => {
                expect(resposnce.headers.server).to.equal(elem.serverName)
                expect(resposnce.status).to.equal(Number(elem.statusCode))
            })
        })
    }
}
export default ApiCalls