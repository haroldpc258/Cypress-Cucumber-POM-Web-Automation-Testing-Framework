const pluginsConfig = require("./cypress/plugins/index.js");
const { defineConfig } = require("cypress");

module.exports = defineConfig({
	e2e: {
		async setupNodeEvents(on, config) {
			return pluginsConfig(on, config);
		},
		env: {
			allure: true,
			allureReuseAfterSpec: true,
			allureResultsPath: "cypress/reports/allure-results",
			allureLogCypress: true,
			allureLogGherkin: true,
		},
		defaultCommandTimeout: 10000,
		baseUrl: "https://www.demoblaze.com",
		chromeWebSecurity: false,
		specPattern: "cypress/e2e/**/*.feature",
		reporter: "cypress-multi-reporters",
		reporterOptions: {
			reporterEnabled: "mochawesome",
			mochawesomeReporterOptions: {
				reportDir: "cypress/reports/mochawesome-report",
				quiet: true,
				overwrite: true,
				html: true,
				json: true,
				timestamp: "mmddyyyy_HHMMss",
			},
		},
	},
});
