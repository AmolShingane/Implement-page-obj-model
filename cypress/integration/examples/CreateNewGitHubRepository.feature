Feature: Create new git hub repository

    # Background:
    #     Given Visit git hub log in page
    #     When I enter username and password and click sign in


    # Scenario: Create new git hub repository
    #     And  I click on crate new repository button
    #     And I enter repository name "demoRepo" and click on create repository
    #     Then I log out

    # Scenario: Test api
    #     When I send get request to check server
    #         | endPoint                                            | serverName | statusCode | method |
    #         | /users/AmolShingane/feature_preview/indicator_check | GitHub.com | 200        | GET    |
    #     Then I log out

    # Scenario Outline: Verify POST request to approve Claim
    #     When I send "<req>" request with "<endPoint>" to approve claim
    #     Then Verify "<message>" and "<statusCode>" of responce
    #     Examples:
    #         | req  | endPoint                                    | statusCode | message           |
    #         | POST | /api/claimservice/v1/claims/manager/approve | 200        | Claim is Approved |
    #         | POST | /api/claimservice/v1/claims/manager/approv  | 404        |                   |


    Scenario Outline: Verify POST request to reject Claim
        When I send "<req>" request with "<endPoint>" to approve claim
        Then Verify "<message>" and "<statusCode>" of responce
        Examples:
            | req  | endPoint                                   | statusCode | message                     |
            | POST | /api/claimservice/v1/claims/manager/reject | 200        | claim rejected successfully |
            | POST | /api/claimservice/v1/claims/manager/rejec  | 404        |                             |
