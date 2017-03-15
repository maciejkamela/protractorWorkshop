'use strict';
const world = (function() {
  const chai = require('chai'),
    chaiAsPromised = require('chai-as-promised');
  chai.use(chaiAsPromised);

  const expect = chai.expect,
    EC = require('protractor').ExpectedConditions,
    pages = require('../config/pageCollection.js'),
    config = require('../config/protractor.cucumber.conf.js');

  return {
    expect: expect,
    EC: EC,
    pages: pages,
    config: config
  };
}());
module.exports = world;
