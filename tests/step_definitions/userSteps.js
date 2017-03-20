'use strict';
var world = require('../../config/world.js'),
  pages = require('../../config/pageCollection.js'),
  basePage = pages.BasePage,
  userPage = pages.UsersPage,
  Q = require('q');

var usersSteps = function() {
  this.Given(/^I am on the main user page$/, () => {
    return browser.get('http://protractor-workshop.netlify.com');
  });

  this.When(/^I navigate to (contact|home|dashboards|users) tab$/, (tabName) => {
    return basePage.navigateToLocation(tabName)
      .then(() => {
        return browser.sleep(2000);
      });
  });
};
module.exports = usersSteps;
