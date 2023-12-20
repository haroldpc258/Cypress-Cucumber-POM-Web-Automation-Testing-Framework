const createEsbuildPlugin =
	require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const nodePolyfills =
	require("@esbuild-plugins/node-modules-polyfill").NodeModulesPolyfillPlugin;
const addCucumberPreprocessorPlugin =
	require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;

const allureWriter = require("@shelex/cypress-allure-plugin/writer");
const {
	beforeRunHook,
	afterRunHook,
} = require("cypress-mochawesome-reporter/lib");

module.exports = async (on, config) => {
	await addCucumberPreprocessorPlugin(on, config); // to allow json to be produced
	// To use esBuild for the bundler when preprocessing
	on(
		"file:preprocessor",
		createBundler({
			plugins: [nodePolyfills(), createEsbuildPlugin(config)],
		})
	);

	allureWriter(on, config);
	return config;
};
