const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 5000,
  env: {url: "https://rahulshettyacademy.com"},
  retries: {runMode: 1},
  projectId: "u38vc2",
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
