Feature: To validate the login functionality of facebook application

  Background:
    Given To launch the chrome browser and maximize window

  Scenario Outline: To validate login with valid username and invalid password
    When To launch the url of the facebook application
    And To pass valid username "<emaildatas>" in email field
    And To pass invalid password "<passworddatas>" in password field
    And To click the login button
    Then To close the browser

    Examples:
      | emaildatas                   | passworddatas |
      | ajithvijayakumar05@gmail.com | Ajith!123     |
      | abc@gmail.com                | 123445        |

  Scenario Outline: To validate the positive and negative combination of login functionality
    When User has to hit the facebook url
    And User has to pass the data "<emaildatas>" in email field
    And User has to pass the data "<passworddatas>" in password field
    And User has to click the login button
    Then To close the browser

    Examples:
      | emaildatas               | passworddatas |
      | ajithkumarvam1@gmail.com | Ajith!123     |
      | abc@gmail.com            | 123445        |
      | inmakes@gmail.com        | 234567        |
      | framework@gmail.com      | ajith         |
      | nathi@gmail.com          | nathi123      |
      | ajithnathi@gmail.com     | ajith123456   |
