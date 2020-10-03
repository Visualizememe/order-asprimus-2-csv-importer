const mariadb = require("mariadb");


module.exports = async credentials => {
	const connection = await mariadb.createConnection({
		user: credentials.user,
		password: credentials.password,
		database: credentials.database,
		host: "localhost"
	}).catch(error => {
		throw new Error(`Failed to create a connection with the database: ${error}`);
	});

	const retrievedColumnsData = await connection.query(`SHOW COLUMNS FROM ${credentials.table}`);

	return retrievedColumnsData.map(row => row.Field);
};
