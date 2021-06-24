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
    #     When I send "<req>" request to "<endPoint>" with body "<ClaimId>" to approve claim
    #     Then Verify "<message>" and "<statusCode>" of responce
    #     Examples:
    #         | req  | endPoint                                    | statusCode | message           | ClaimId       |
    #         | POST | /api/claimservice/v1/claims/manager/approve | 401        | UNAUTHORIZED      | Claim.txt     |
    #         | POST | /api/claimservice/v1/claims/manager/approve | 200        | Claim is Approved | CLAIM56823568 |
    #         | POST | /api/claimservice/v1/claims/manager/approve | 200        | Claim is Approved |               |
    #         | POST | /api/claimservice/v1/claims/manager/approve | 400        | Invalid Inputs    | null          |

    # Scenario Outline: Verify POST request to reject Claim
    #     When I send "<req>" request to "<endPoint>" with body "<ClaimId>" to reject claim
    #     Then Verify "<message>" and "<statusCode>" of responce
    #     Examples:
    #         | req  | endPoint                                   | statusCode | message                     | ClaimId       |
    #         | POST | /api/claimservice/v1/claims/manager/reject | 401        | UNAUTHORIZED                | Claim.txt     |
    #         | POST | /api/claimservice/v1/claims/manager/reject | 200        | claim rejected successfully | CLAIM56823568 |
    #         | POST | /api/claimservice/v1/claims/manager/reject | 200        | claim rejected successfully |               |
    #         | POST | /api/claimservice/v1/claims/manager/reject | 500        | Internal Server Error       | null          |

    # Scenario Outline: Verify POST request to send claim approvel request
    #     When I send "<req>" request to "<endPoint>" with body "<ClaimId>" to send claim approvel request
    #     Then Verify "<message>" and "<statusCode>" of responce
    #     Examples:
    #         | req  | endPoint                                     | statusCode | message                 | ClaimId       |
    #         | POST | /api/claimservice/v1/claims/approval/request | 401        | UNAUTHORIZED            | Claim.txt     |
    #         | POST | /api/claimservice/v1/claims/approval/request | 200        | Request sent to manager | CLAIM56823568 |
    #         | POST | /api/claimservice/v1/claims/approval/request | 200        | Request sent to manager |               |
    #         | POST | /api/claimservice/v1/claims/approval/request | 400        | Invalid Inputs          | null          |

    Scenario: Verify GET request to get all users
        When I send "GET" request to "/api/umgmt/v1/users" for get all user to allocat claim
        #Then Verify response

