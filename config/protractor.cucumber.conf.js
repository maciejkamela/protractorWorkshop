exports.config = {
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
  jsonReportsDirOutput: '../reports/json',
  allScriptsTimeout: 90000,
  getPageTimeout: 30000,
  verbose: true,

  onPrepare: function() {
    browser.driver.manage().window().maximize();
    browser.manage().timeouts().pageLoadTimeout(40000);
    browser.manage().timeouts().implicitlyWait(25000);
    // return browser.get('http://localhost:8080/#/users');
  },
  specs: ['../tests/features/*.feature'],
  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      'args': ['--test-type', '--no-sandbox']
    }
  },
  cucumberOpts: {
    format: 'pretty',
    tags: ['@demo'],
    require: ['../tests/step_definitions/*.js']
  },
  rootElement: 'body'
};
