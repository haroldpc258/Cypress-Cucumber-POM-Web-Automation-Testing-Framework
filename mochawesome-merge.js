const { merge } = require("mochawesome-merge");
const marge = require("mochawesome-report-generator");
const fs = require("fs");

// Ruta al directorio donde se guardan los informes JSON de Mochawesome
const reportsDir = "./cypress/reports/mochawesome-report";

// Opciones para mochawesome-merge
const mergeOptions = {
	files: [`${reportsDir}/*.json`],
};

// Opciones para marge
const margeOptions = {
	reportDir: reportsDir,
	reportFilename: "Full Report",
	reportTitle: "Mochawesome Report",
	inlineAssets: true,
};

// Ejecuta mochawesome-merge y genera el informe final con marge
merge(mergeOptions)
	.then((report) => {
		// Crea el informe final con marge
		marge.create(report, margeOptions);
	})
	.catch((err) => {
		console.error("Error al combinar los informes:", err);
	});
