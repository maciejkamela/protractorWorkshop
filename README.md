# Automatic tests for cumulocity.

***
# Description
Automatic tests written in [Protractor](https://angular.github.io/protractor/#/tutorial).
For this tests you should have a basic background in [cucumber](https://cucumber.io/) and the Gherkin language,
as well as a basic understanding of Protractor and its locators, and also about the page object pattern. 

# Installation

1.  Install NodeJS and NPM

    Firstly  install nodejs

    Ubuntu
    http://richardhsu.net/2013/10/19/installing-nodejs-npm-on-ubuntu-13-10/

    Mac
    http://coolestguidesontheplanet.com/installing-node-js-on-osx-10-10-yosemite/

    Windows
    http://nodejs.org/

2.  Install webdriver-manager (https://www.npmjs.com/package/webdriver-manager)

       npm install -g webdriver-manager
       webdriver-manager update

3. Install protractor globally
    
       npm install protractor -g 
    
## Running tests locally

First you need to start the selenium webdriver manager. Therefore just do
    
    webdriver-manager start
   
Then just run

    protractor path/to/protractor.cucumber.conf.js