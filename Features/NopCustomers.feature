Feature: nopcommerce Login Customers

  Background:Below are the common Steps for each senario
    Given User Launch chrome browser
    When User open Url "https://admin-demo.nopcommerce.com/login"
    And ser Enter Email as "admin@yourstore.com" and password as "admin"
    And Click On Login
    Then user can view dashboard
    When user Click on customer menu
    And Click On Customers menu item

  Scenario: Add new Customers
    And Click on Add new button
    Then User can view add new customer page
    When user enter customer info
    And Click on Save button
    Then User can view conformation message "The new customer has been added successfully."
    And close browser
    Scenario: Search Customer by Emailid
      When Enter Customer email
      And Click on Search Button
      Then User Should Found Email in the Search table
      And close browser

      Scenario:Search customer by First name and Last Name
        And  Enter customer first name
        And Enter customer last Name
        When Click on Search Button
        Then User Should Found name in the Search table
        And close browser