Feature: Restofe Testing for login

  Scenario Outline: As a admin user I can log into the restofe application

    Given I am on the restofe login page
    When I login with restofe <username>, <password>
    Then I should see username logged in <username>
    And Logout from application <username>
    Examples:
      | username                     | password    |
      | umar.bheda@gourmetgulf.com   | Staging@123 |

  Scenario Outline: As a admin user I can create Requisitions

    Given I am on the restofe login page
    When I login with restofe <username>, <password>
    Then I should see username logged in <username>
    And I Navigate to Requisitions
    And I Enter Requisitions details <storename>
    Examples:
      | username                    | password    | storename |
      | umar.bheda@gourmetgulf.com | Staging@123 | CPKMOE    |
      
