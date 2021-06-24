/// <reference types="Cypress" />

before('geting claim id', () => {
    var claim = 'CLAIM' + Math.floor((Math.random() * 100000000) + 1);
    cy.writeFile('cypress/fixtures/Claim.txt', claim)
    cy.fixture('Claim.txt').then(data => {
        globalThis.claimIdFromTxt = data
    })
})

before('geting jwt  token', () => {
    cy.fixture('JwtToken.txt').then(data => {
        globalThis.jwtToken = data
    })
})

globalThis.storeResponce = null

class ApiCalls {

    getApiCall(dataTable) {
        dataTable.hashes().forEach(elem => {
            cy.request(elem.method, '/' + elem.endPoint).then(resposnce => {
                expect(resposnce.headers.server).to.equal(elem.serverName)
                expect(resposnce.status).to.equal(Number(elem.statusCode))
            })
        })
    }

    postApiCall(method, endPoint, claimId) {
        if (claimId == 'Claim.txt') {
            var token = jwtToken.split('.')
            token = '.' + token[1] + '.'
            cy.log(token)
            var body = { 'claimId': [claimIdFromTxt] }
            cy.request({ method: method, url: '/' + endPoint, auth: { bearer: token }, body: body, failOnStatusCode: false }).then(response => {
                storeResponce = response
            })
        }
        else if (claimId == 'null') {
            var body = null
            cy.request({ method: method, url: '/' + endPoint, auth: { bearer: jwtToken }, body: body, failOnStatusCode: false }).then(response => {
                storeResponce = response
                // expect(response.body).to.have.property('message')
            })
        }
        else {
            var body = { 'claimId': [claimId] }
            cy.request({ method: method, url: '/' + endPoint, auth: { bearer: jwtToken }, body: body, failOnStatusCode: false }).then(response => {
                storeResponce = response
            })
        }
    }

    verifyResponce(message, statusCode) {
        expect(storeResponce.status).to.equal(Number(statusCode))
        expect(storeResponce.body.message).to.equal(message)
    }

    getApiCall(method,endPoint){
        cy.request({ method: method, url: '/' +endPoint, auth: { bearer: jwtToken }, failOnStatusCode: false }).then(response => {
            storeResponce = response
            expect(response.body).not.to.be.empty
            expect(storeResponce.status).to.equal(200)
            expect(response.body[0]).to.have.property('name')
            expect(response.body[0]).to.have.property('user_id')
            expect(response.body[0]).to.have.property('tenant_id')
            expect(response.body[0]).to.have.property('email')
            expect(response.body[0]).to.have.property('role_id')
            
        }) 
    }

}
export default ApiCalls