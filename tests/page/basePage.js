'use strict';

function BasePage() {

  this.navigateToLocation = (location) => {
    return browser.setLocation(location);
  };
}

module.exports = BasePage;
