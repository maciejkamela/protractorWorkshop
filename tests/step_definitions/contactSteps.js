'use strict';
var world = require('../../config/world.js'),
  pages = require('../../config/pageCollection.js'),
  contactPage = pages.ContactPage,
  Q = require('q');

var contactSteps = function() {
  this.When(/^I leave a sample message with the following data:$/, (table) => {
    let data = table.hashes()[0];
    return contactPage.fillContactForm(data);
  });

  this.Then(/^The message should be successfully send$/, () => {
    return Q.all([
      world.expect(contactPage.isSendContactMsgDisplayed()).to.eventually.equal(true, 'The confirmation alert is not displayed'),
      world.expect(contactPage.getContactConfirmationText()).to.eventually.include('Thank you for your message!', 'The confirmation alert is not displayed')
    ]);
  });

};
module.exports = contactSteps;