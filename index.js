const importer = require("./import")
const converter = require("./convert");
const path = require("path");
const fs = require("fs");

const CONFIG = require("./config.json");

(async () => {
    console.log(`Starting up CSV converter and database importer..`);
    console.log(`Chosen path for input: ${CONFIG.input_folder_path}`)
    console.log(`Chosen path for output: ${CONFIG.output_folder_path}`)
    console.log(`Chosen database username: ${CONFIG.credentials.user}`)
    console.log(`Chosen database: ${CONFIG.database}`)
    console.log(`Chosen table: ${CONFIG.table}`)

    console.log(`Converting all CSV files to TXT files...`);
    await converter();

    console.log(`All files converted. Importing to database...`);
    const exported_txt_files = fs.readdirSync(CONFIG.output_folder_path);

    for (let file of exported_txt_files) {
        const filePath = path.join(CONFIG.output_folder_path, file);
        await importer(filePath);
    }

    console.log(`Successfully imported to database!`);
})();
