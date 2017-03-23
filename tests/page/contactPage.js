'use strict';
let BasePage = require('./basePage');

function ContactPage() {
  const openFormLink = element(by.css('[ng-click="toggleOpen()"]')),
    nameInput = element(by.model('vm.contactMessage.name')),
    phoneInput = element(by.model('vm.contactMessage.phone')),
    emailInput = element(by.model('vm.contactMessage.email')),
    msg = element(by.model('vm.contactMessage.msg')),
    submitBtn = element(by.buttonText('Submit')),
    confirmationAlert = element(by.css('.alert-success'));

  this.fillContactForm = (contactData) => {
    return openFormLink.click()
      .then(() => {
        return nameInput.clear().sendKeys(contactData.user);
      })
      .then(() => {
        return phoneInput.clear().sendKeys(contactData.phone);
      })
      .then(() => {
        return emailInput.clear().sendKeys(contactData.email);
      })
      .then(() => {
        return msg.clear().sendKeys(contactData.msg);
      })
      .then(() => {
        return submitBtn.click();
      });
  };

  this.getContactConfirmationText = () => {
    return confirmationAlert.getText();
  };

  this.isSendContactMsgDisplayed = () => {
    return confirmationAlert.isDisplayed();
  };

}
ContactPage.prototype = new BasePage();
module.exports = ContactPage;
