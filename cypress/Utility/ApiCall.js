/// <reference types="Cypress" />

before('geting claim id', () => {
    cy.fixture('Claim.txt').then(data => {
        globalThis.claimId = data
    })
})
before('geting jwt  token', () => {
    cy.fixture('JwtToken.txt').then(data => {
        globalThis.token = data
    })
})

class ApiCalls{
    getApiCall(dataTable){
        dataTable.hashes().forEach(elem => {
            cy.request(elem.method, '/' + elem.endPoint).then(resposnce => {
                expect(resposnce.headers.server).to.equal(elem.serverName)
                expect(resposnce.status).to.equal(Number(elem.statusCode))
            })
        })
    }

    postApiCall(method,endPoint){
        
        var claim = 'CLAIM' + Math.floor((Math.random() * 100000000) + 1);
        cy.writeFile('cypress/fixtures/Claim.txt',claim)
        cy.log(claim)
        var body={'claimId': [claimId]}

           cy.request({method:method,url:'/'+endPoint,auth:{bearer:token},body:body,failOnStatusCode: false}).then(resposnce => {
            globalThis.resposnce=resposnce
            })
    }

    verifyResponce(message,statusCode){
        
                expect(resposnce.status).to.equal(Number(statusCode))
                expect(resposnce.body.message).to.equal(message) 
    }

}
export default ApiCalls