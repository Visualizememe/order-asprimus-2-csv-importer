const mariadb = require("mariadb");
const fs = require("fs");
const path = require("path");

/**
 * Retrieves records based on the values in the inputFilePath in the given field (column) names
 * @param {string} inputFilePath The input .txt file that should be read
 * @param {string} outputFolderPath The output folder where the CSV file should be placed
 * @param {string} fieldName The name of the field / column to matched against the input file
 * @param {any} credentials Credentials
 * @returns {Promise<any[]>}
 */
module.exports = async (inputFilePath, outputFolderPath, fieldName, credentials) => {
	const connection = await mariadb.createConnection({
		user: credentials.user,
		password: credentials.password,
		database: credentials.database,
		host: "localhost"
	}).catch(error => {
		throw new Error(`Failed to create a connection with the database: ${error}`);
	});
	const resolvedInputPath = path.join(inputFilePath),
		resolvedOutputPath = path.join(outputFolderPath);


	console.log(`Creating output folder...`);
	if (!fs.existsSync(resolvedOutputPath)) {
		try {
			fs.mkdirSync(
				resolvedOutputPath
			);
		} catch (e) {
			throw new Error(`Failed to create the output folder!`);
		}
	}

	console.log(`Created output folder!`);
	console.log(`Reading input file!`);

	const readInputFile = fs.readFileSync(resolvedInputPath, "utf8");

	console.log(`Successfully read input file! Parsing...`);

	// Values of the fields to be checked
	const inputValues = [];
	// Retrieves records
	const retrievedRecords = [];


	// Reading the lines and adding to inputValues variable
	(() => {
		const lines = readInputFile.split("\n");

		for (let line of lines) {
			line = line.trim();
			inputValues.push(line);
		}
	})();

	console.log(`File has been parsed, executing queries...`);

	for (let valueToCheck of inputValues) {
		const retrievedData = await connection.query(
			`SELECT * FROM ${credentials.table} WHERE ? = ? LIMIT 1`,
			fieldName,
			valueToCheck
		);

		if (retrievedData && retrievedData[0]) {
			retrievedRecords.push(retrievedData);
		}
	}

	console.log(`All queries have been executed, logging results`);
	console.log(retrievedRecords);

	return retrievedRecords;
};
