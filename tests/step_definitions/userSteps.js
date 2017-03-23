'use strict';
var world = require('../../config/world.js'),
  pages = require('../../config/pageCollection.js'),
  userPage = pages.UsersPage;

var usersSteps = function() {
  this.Given(/^I am on the main user page$/, () => {
    return browser.get('http://protractor-workshop.netlify.com');
  });

  this.When(/^I navigate to (contact|home|dashboards|users) tab$/, (tabName) => {
    return userPage.navigateToLocation(tabName);
  });

};
module.exports = usersSteps;
