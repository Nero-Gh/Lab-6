const {defineConfig} = require("cypress");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

module.exports = defineConfig({
    basePath: "https://demoqa.com",
    setupNodeEvents(on, config) {
    },

    e2e: {
        setupNodeEvents(on, config) {
            allureWriter(on, config);
            return config;
        },
        baseUrl: "https://demoqa.com",
        video: true,
        screenshotsFolder: "cypress/screenshots",
        defaultCommandTimeout: 6000,
    },
});
