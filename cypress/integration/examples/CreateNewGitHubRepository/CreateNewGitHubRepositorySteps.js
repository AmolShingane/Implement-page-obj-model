/// <reference types="Cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import LogInPage from "../../../Pages/LoginPage"
import HomePage from "../../../Pages/HomePage";
import CreateNewRepoPage from "../../../Pages/CreateNewRepoPage";
import NewRepoPage from "../../../Pages/NewRepositoryHomePage";
import ApiCalls from "../../../Utility/ApiCall";

const logInPage = new LogInPage()
const homePage = new HomePage()
const createNewRepo = new CreateNewRepoPage()
const newRepoPage = new NewRepoPage()
const apiCalls=new ApiCalls()

Given('Visit git hub log in page', () => {
    cy.visit('https://github.com/login')
})

When('I enter username and password and click sign in', () => {
    logInPage.fillLogInInfoAndClickSignInButton()
})

And('I click on crate new repository button', () => {
    homePage.clickOnNewRepositoryButton()
})

And('I enter repository name {string} and click on create repository', (repoName) => {
    createNewRepo.createNewRepo(repoName)
})

Then('I log out', () => {
    newRepoPage.clickOnLogOut()
})

When('I send get request to check server',(dataTable)=>{
apiCalls.getApiCall(dataTable)
})

When ('I send {string} request with {string} to approve claim',(method,endPoint)=>{
    apiCalls.postApiCall(method,endPoint)
    })

Then('Verify {string} and {string} of responce',(message,statusCode)=>{
    apiCalls.verifyResponce(message,statusCode)
})

