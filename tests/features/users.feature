@demo
Feature: As a newbie in Protractor I want to create some sample tests

  Scenario: Add sample message on contact page - imperative
    Given I am on the main user page
    When I navigate to contact tab
    And I leave a sample message with the following data:
      | user   | phone   | email            | msg         |
      | maciej | 1234567 | sample@email.com | hello world |
    Then The message should be successfully send
