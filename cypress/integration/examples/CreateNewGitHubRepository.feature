Feature: Create new git hub repository

    Background:
        Given Visit git hub log in page
        When I enter username and password and click sign in


    Scenario: Create new git hub repository
        And  I click on crate new repository button
        And I enter repository name "demoRepo" and click on create repository
        Then I log out

    Scenario: Test api
        When I send get request to check server
            | endPoint                                            | serverName | statusCode | method |
            | /users/AmolShingane/feature_preview/indicator_check | GitHub.com | 200        | GET    |
        Then I log out