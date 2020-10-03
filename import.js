const mariadb = require("mariadb");

const CONFIG = require("./config.json");

module.exports = async (inputFilePath) => {
    inputFilePath = inputFilePath.replace(/\\/g, "\\\\");
    console.log(`Importing file: ${inputFilePath}`);
    console.log(`Establishing database connection..`);

    const createdConnection = await mariadb.createConnection({
        user: CONFIG.credentials.user,
        password: CONFIG.credentials.password,
        host: "localhost",
        database: CONFIG.database,
        permitLocalInfile: true
    });

    console.log(`Database connection established! Running import command...`);
    const sql_query = `LOAD DATA INFILE '${inputFilePath}' IGNORE INTO TABLE ${CONFIG.table} FIELDS TERMINATED BY ',' LINES TERMINATED BY ${CONFIG.lines_terminated_by} IGNORE 1 LINES;`;
    console.log(`Running query: ${sql_query}`);

    const ran = await createdConnection.query(
        sql_query
    );

    console.log(`Successfully executed import queue!`);
    console.log(ran);
};
