$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./Features/NopCustomers.feature");
formatter.feature({
  "line": 1,
  "name": "nopcommerce Login Customers",
  "description": "",
  "id": "nopcommerce-login-customers",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "Below are the common Steps for each senario",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User Launch chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User open Url \"https://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "ser Enter Email as \"admin@yourstore.com\" and password as \"admin\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click On Login",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user can view dashboard",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user Click on customer menu",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Click On Customers menu item",
  "keyword": "And "
});
formatter.match({
  "location": "nopCommerceLoginSteps_TC_001.user_Launch_chrome_browser()"
});
formatter.result({
  "duration": 13641499300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://admin-demo.nopcommerce.com/login",
      "offset": 15
    }
  ],
  "location": "nopCommerceLoginSteps_TC_001.user_open_Url(String)"
});
formatter.result({
  "duration": 7281865500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@yourstore.com",
      "offset": 20
    },
    {
      "val": "admin",
      "offset": 58
    }
  ],
  "location": "nopCommerceLoginSteps_TC_001.ser_Enter_Email_as_and_password_as(String,String)"
});
formatter.result({
  "duration": 552398400,
  "status": "passed"
});
formatter.match({
  "location": "nopCommerceLoginSteps_TC_001.click_On_Login()"
});
formatter.result({
  "duration": 50925863000,
  "status": "passed"
});
formatter.match({
  "location": "nopCommerceLoginSteps_TC_001.user_can_view_dashboard()"
});
formatter.result({
  "duration": 271772600,
  "status": "passed"
});
formatter.match({
  "location": "nopCommerceLoginSteps_TC_001.user_Click_on_customer_menu()"
});
formatter.result({
  "duration": 3191704100,
  "status": "passed"
});
formatter.match({
  "location": "nopCommerceLoginSteps_TC_001.click_On_Customers_menu_item()"
});
formatter.result({
  "duration": 6391166300,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Add new Customers",
  "description": "",
  "id": "nopcommerce-login-customers;add-new-customers",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "Click on Add new button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User can view add new customer page",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user enter customer info",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Click on Save button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User can view conformation message \"The new customer has been added successfully.\"",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "nopCommerceLoginSteps_TC_001.click_on_Add_new_customer_page()"
});
formatter.result({
  "duration": 9320675400,
  "status": "passed"
});
formatter.match({
  "location": "nopCommerceLoginSteps_TC_001.User_can_view_add_new_customer_page()"
});
formatter.result({
  "duration": 11608700,
  "status": "passed"
});
formatter.match({
  "location": "nopCommerceLoginSteps_TC_001.user_enter_customer_info()"
});
formatter.result({
  "duration": 1656125100,
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d100.0.4896.75)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-2AG5VJ0\u0027, ip: \u0027192.168.129.152\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.13\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 100.0.4896.75, chrome: {chromedriverVersion: 100.0.4896.60 (6a5d10861ce8..., userDataDir: C:\\Users\\nvino\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:52682}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 8f7ed2048a78f1487e8c51ab8c211b46\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy19.click(Unknown Source)\r\n\tat pageObjects.NopAddCustomersPage.setTxtNewsletter(NopAddCustomersPage.java:138)\r\n\tat stepDefinition.nopCommerceLoginSteps_TC_001.user_enter_customer_info(nopCommerceLoginSteps_TC_001.java:103)\r\n\tat ✽.When user enter customer info(./Features/NopCustomers.feature:15)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "nopCommerceLoginSteps_TC_001.click_on_Save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "The new customer has been added successfully.",
      "offset": 36
    }
  ],
  "location": "nopCommerceLoginSteps_TC_001.user_can_view_conformation_message(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "nopCommerceLoginSteps_TC_001.close_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 3,
  "name": "Below are the common Steps for each senario",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User Launch chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User open Url \"https://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "ser Enter Email as \"admin@yourstore.com\" and password as \"admin\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click On Login",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user can view dashboard",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user Click on customer menu",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Click On Customers menu item",
  "keyword": "And "
});
formatter.match({
  "location": "nopCommerceLoginSteps_TC_001.user_Launch_chrome_browser()"
});
formatter.result({
  "duration": 12115133700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://admin-demo.nopcommerce.com/login",
      "offset": 15
    }
  ],
  "location": "nopCommerceLoginSteps_TC_001.user_open_Url(String)"
});
formatter.result({
  "duration": 2646576700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@yourstore.com",
      "offset": 20
    },
    {
      "val": "admin",
      "offset": 58
    }
  ],
  "location": "nopCommerceLoginSteps_TC_001.ser_Enter_Email_as_and_password_as(String,String)"
});
formatter.result({
  "duration": 403807200,
  "status": "passed"
});
formatter.match({
  "location": "nopCommerceLoginSteps_TC_001.click_On_Login()"
});
formatter.result({
  "duration": 10370178100,
  "status": "passed"
});
formatter.match({
  "location": "nopCommerceLoginSteps_TC_001.user_can_view_dashboard()"
});
formatter.result({
  "duration": 9775700,
  "status": "passed"
});
formatter.match({
  "location": "nopCommerceLoginSteps_TC_001.user_Click_on_customer_menu()"
});
formatter.result({
  "duration": 3175062600,
  "status": "passed"
});
formatter.match({
  "location": "nopCommerceLoginSteps_TC_001.click_On_Customers_menu_item()"
});
formatter.result({
  "duration": 8225344200,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Search Customer by Emailid",
  "description": "",
  "id": "nopcommerce-login-customers;search-customer-by-emailid",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 20,
  "name": "Enter Customer email",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "Click on Search Button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User Should Found Email in the Search table",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "nopCommerceLoginSteps_TC_001.enter_Customer_email()"
});
formatter.result({
  "duration": 751956900,
  "status": "passed"
});
formatter.match({
  "location": "nopCommerceLoginSteps_TC_001.click_on_Search_Button()"
});
formatter.result({
  "duration": 3243629800,
  "status": "passed"
});
formatter.match({
  "location": "nopCommerceLoginSteps_TC_001.user_Should_Found_Email_in_the_Search_table()"
});
formatter.result({
  "duration": 210824400,
  "status": "passed"
});
formatter.match({
  "location": "nopCommerceLoginSteps_TC_001.close_browser()"
});
formatter.result({
  "duration": 1019521800,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Below are the common Steps for each senario",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User Launch chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User open Url \"https://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "ser Enter Email as \"admin@yourstore.com\" and password as \"admin\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click On Login",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user can view dashboard",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user Click on customer menu",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Click On Customers menu item",
  "keyword": "And "
});
formatter.match({
  "location": "nopCommerceLoginSteps_TC_001.user_Launch_chrome_browser()"
});
formatter.result({
  "duration": 6901497100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://admin-demo.nopcommerce.com/login",
      "offset": 15
    }
  ],
  "location": "nopCommerceLoginSteps_TC_001.user_open_Url(String)"
});
formatter.result({
  "duration": 3499125100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@yourstore.com",
      "offset": 20
    },
    {
      "val": "admin",
      "offset": 58
    }
  ],
  "location": "nopCommerceLoginSteps_TC_001.ser_Enter_Email_as_and_password_as(String,String)"
});
formatter.result({
  "duration": 464918900,
  "status": "passed"
});
formatter.match({
  "location": "nopCommerceLoginSteps_TC_001.click_On_Login()"
});
formatter.result({
  "duration": 10529503900,
  "status": "passed"
});
formatter.match({
  "location": "nopCommerceLoginSteps_TC_001.user_can_view_dashboard()"
});
formatter.result({
  "duration": 27892800,
  "status": "passed"
});
formatter.match({
  "location": "nopCommerceLoginSteps_TC_001.user_Click_on_customer_menu()"
});
formatter.result({
  "duration": 3148313600,
  "status": "passed"
});
formatter.match({
  "location": "nopCommerceLoginSteps_TC_001.click_On_Customers_menu_item()"
});
formatter.result({
  "duration": 9821332200,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Search customer by First name and Last Name",
  "description": "",
  "id": "nopcommerce-login-customers;search-customer-by-first-name-and-last-name",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 26,
  "name": "Enter customer first name",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Enter customer last Name",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Click on Search Button",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "User Should Found name in the Search table",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "nopCommerceLoginSteps_TC_001.enter_customer_first_name()"
});
formatter.result({
  "duration": 359327800,
  "status": "passed"
});
formatter.match({
  "location": "nopCommerceLoginSteps_TC_001.enter_customer_last_Name()"
});
formatter.result({
  "duration": 218494800,
  "status": "passed"
});
formatter.match({
  "location": "nopCommerceLoginSteps_TC_001.click_on_Search_Button()"
});
formatter.result({
  "duration": 3227770800,
  "status": "passed"
});
formatter.match({
  "location": "nopCommerceLoginSteps_TC_001.user_Should_Found_name_in_the_Search_table()"
});
formatter.result({
  "duration": 133609100,
  "error_message": "java.lang.AssertionError: expected:\u003ctrue\u003e but was:\u003cfalse\u003e\r\n\tat org.junit.Assert.fail(Assert.java:89)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:835)\r\n\tat org.junit.Assert.assertEquals(Assert.java:120)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat stepDefinition.nopCommerceLoginSteps_TC_001.user_Should_Found_name_in_the_Search_table(nopCommerceLoginSteps_TC_001.java:154)\r\n\tat ✽.Then User Should Found name in the Search table(./Features/NopCustomers.feature:29)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "nopCommerceLoginSteps_TC_001.close_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("./Features/NopLogin.feature");
formatter.feature({
  "line": 1,
  "name": "nopcommerce Login",
  "description": "",
  "id": "nopcommerce-login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Successfully Login with valid Credentials",
  "description": "",
  "id": "nopcommerce-login;successfully-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User Launch chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User open Url \"https://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "ser Enter Email as \"admin@yourstore.com\" and password as \"admin\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click On Login",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Page Title Should Be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User Click on Logout link",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Page Title Should Be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "nopCommerceLoginSteps_TC_001.user_Launch_chrome_browser()"
});
formatter.result({
  "duration": 10640250300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://admin-demo.nopcommerce.com/login",
      "offset": 15
    }
  ],
  "location": "nopCommerceLoginSteps_TC_001.user_open_Url(String)"
});
formatter.result({
  "duration": 6183353100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@yourstore.com",
      "offset": 20
    },
    {
      "val": "admin",
      "offset": 58
    }
  ],
  "location": "nopCommerceLoginSteps_TC_001.ser_Enter_Email_as_and_password_as(String,String)"
});
formatter.result({
  "duration": 394407300,
  "status": "passed"
});
formatter.match({
  "location": "nopCommerceLoginSteps_TC_001.click_On_Login()"
});
formatter.result({
  "duration": 47123945000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dashboard / nopCommerce administration",
      "offset": 22
    }
  ],
  "location": "nopCommerceLoginSteps_TC_001.page_Title_Should_Be(String)"
});
formatter.result({
  "duration": 140633000,
  "status": "passed"
});
formatter.match({
  "location": "nopCommerceLoginSteps_TC_001.user_Click_on_Logout_link()"
});
formatter.result({
  "duration": 5342559700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your store. Login",
      "offset": 22
    }
  ],
  "location": "nopCommerceLoginSteps_TC_001.page_Title_Should_Be(String)"
});
formatter.result({
  "duration": 39049700,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenarioOutline({
  "line": 12,
  "name": "Login Data Driven",
  "description": "",
  "id": "nopcommerce-login;login-data-driven",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "User Launch chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "User open Url \"https://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "ser Enter Email as \"\u003cemail\u003e\" and password as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Click On Login",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Page Title Should Be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "User Click on Logout link",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "Page Title Should Be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "nopcommerce-login;login-data-driven;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 22,
      "id": "nopcommerce-login;login-data-driven;;1"
    },
    {
      "cells": [
        "admin@yourstore.com",
        "admin"
      ],
      "line": 23,
      "id": "nopcommerce-login;login-data-driven;;2"
    },
    {
      "cells": [
        "admin@yourstore.com",
        "admin123"
      ],
      "line": 24,
      "id": "nopcommerce-login;login-data-driven;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 23,
  "name": "Login Data Driven",
  "description": "",
  "id": "nopcommerce-login;login-data-driven;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "User Launch chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "User open Url \"https://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "ser Enter Email as \"admin@yourstore.com\" and password as \"admin\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Click On Login",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Page Title Should Be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "User Click on Logout link",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "Page Title Should Be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "nopCommerceLoginSteps_TC_001.user_Launch_chrome_browser()"
});
formatter.result({
  "duration": 7746641500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://admin-demo.nopcommerce.com/login",
      "offset": 15
    }
  ],
  "location": "nopCommerceLoginSteps_TC_001.user_open_Url(String)"
});
formatter.result({
  "duration": 4459700200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@yourstore.com",
      "offset": 20
    },
    {
      "val": "admin",
      "offset": 58
    }
  ],
  "location": "nopCommerceLoginSteps_TC_001.ser_Enter_Email_as_and_password_as(String,String)"
});
formatter.result({
  "duration": 425106200,
  "status": "passed"
});
formatter.match({
  "location": "nopCommerceLoginSteps_TC_001.click_On_Login()"
});
formatter.result({
  "duration": 14228714100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dashboard / nopCommerce administration",
      "offset": 22
    }
  ],
  "location": "nopCommerceLoginSteps_TC_001.page_Title_Should_Be(String)"
});
formatter.result({
  "duration": 118993700,
  "status": "passed"
});
formatter.match({
  "location": "nopCommerceLoginSteps_TC_001.user_Click_on_Logout_link()"
});
formatter.result({
  "duration": 6199214400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your store. Login",
      "offset": 22
    }
  ],
  "location": "nopCommerceLoginSteps_TC_001.page_Title_Should_Be(String)"
});
formatter.result({
  "duration": 43860500,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 24,
  "name": "Login Data Driven",
  "description": "",
  "id": "nopcommerce-login;login-data-driven;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "User Launch chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "User open Url \"https://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "ser Enter Email as \"admin@yourstore.com\" and password as \"admin123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Click On Login",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Page Title Should Be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "User Click on Logout link",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "Page Title Should Be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "nopCommerceLoginSteps_TC_001.user_Launch_chrome_browser()"
});
formatter.result({
  "duration": 7000065300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://admin-demo.nopcommerce.com/login",
      "offset": 15
    }
  ],
  "location": "nopCommerceLoginSteps_TC_001.user_open_Url(String)"
});
formatter.result({
  "duration": 7633272300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@yourstore.com",
      "offset": 20
    },
    {
      "val": "admin123",
      "offset": 58
    }
  ],
  "location": "nopCommerceLoginSteps_TC_001.ser_Enter_Email_as_and_password_as(String,String)"
});
formatter.result({
  "duration": 494833200,
  "status": "passed"
});
formatter.match({
  "location": "nopCommerceLoginSteps_TC_001.click_On_Login()"
});
formatter.result({
  "duration": 960080500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dashboard / nopCommerce administration",
      "offset": 22
    }
  ],
  "location": "nopCommerceLoginSteps_TC_001.page_Title_Should_Be(String)"
});
formatter.result({
  "duration": 460202600,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat org.junit.Assert.assertTrue(Assert.java:53)\r\n\tat stepDefinition.nopCommerceLoginSteps_TC_001.page_Title_Should_Be(nopCommerceLoginSteps_TC_001.java:46)\r\n\tat ✽.Then Page Title Should Be \"Dashboard / nopCommerce administration\"(./Features/NopLogin.feature:17)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "nopCommerceLoginSteps_TC_001.user_Click_on_Logout_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Your store. Login",
      "offset": 22
    }
  ],
  "location": "nopCommerceLoginSteps_TC_001.page_Title_Should_Be(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});