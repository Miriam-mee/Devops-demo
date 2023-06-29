const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 120000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/**/*.spec.js',
  },
});