'use strict';
var pageCollection = (function() {
  var BasePage = require('../tests/page/basePage'),
    UsersPage = require('../tests/page/usersPage'),
    ContactPage = require('../tests/page/contactPage');
  return {
    BasePage: new BasePage(),
    UsersPage: new UsersPage(),
    ContactPage: new ContactPage()
  };
}());
module.exports = pageCollection;
