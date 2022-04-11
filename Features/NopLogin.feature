Feature: nopcommerce Login

  Scenario: Successfully Login with valid Credentials
    Given User Launch chrome browser
    When User open Url "https://admin-demo.nopcommerce.com/login"
    And ser Enter Email as "admin@yourstore.com" and password as "admin"
    And Click On Login
    Then Page Title Should Be "Dashboard / nopCommerce administration"
    When User Click on Logout link
    Then Page Title Should Be "Your store. Login"
    And close browser
  Scenario Outline: Login Data Driven
      Given User Launch chrome browser
      When User open Url "https://admin-demo.nopcommerce.com/login"
      And ser Enter Email as "<email>" and password as "<password>"
      And Click On Login
      Then Page Title Should Be "Dashboard / nopCommerce administration"
      When User Click on Logout link
      Then Page Title Should Be "Your store. Login"
      And close browser
    Examples:
      | email  |  password |
      | admin@yourstore.com | admin |
      | admin@yourstore.com | admin123 |