const fs = require("fs-extra");
const dir = "./cypress/reports/cucumber-html-report";

if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
}

const report = require("multiple-cucumber-html-reporter");
const options = {
    theme: "bootstrap",
    jsonDir: "cypress/reports/preprocessor-report/json",
    reportPath: dir,
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: true,
}

report.generate(options);