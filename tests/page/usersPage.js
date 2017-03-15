'use strict';
let BasePage = require('./basePage'),
  Q = require('q');
function UserPage() {

}
UserPage.prototype = new BasePage();
module.exports = UserPage;
