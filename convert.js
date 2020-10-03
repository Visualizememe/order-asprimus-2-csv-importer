const fs = require("fs");
const path = require("path");
const csv = require("csv-parser");
const { execSync } = require("child_process");

const CONFIG = require("./config.json");
const DATA_FOLDER_PATH = CONFIG.input_folder_path;
const EXPORTED_DATA_FOLDER_PATH = CONFIG.output_folder_path;
const DATA_FOLDER_ITEMS = fs.readdirSync(DATA_FOLDER_PATH);

const parseCSV = (input, output) => {
    //input = input.replace(/\\/g, "\\\\");
    //output = output.replace(/\\/g, "\\\\");

    console.log();
    console.log();
    console.log(`INPUT: ${input}\nOUTPUT: ${output}`)

    return execSync(`./csv_parser ${input} ${output}`);
}

module.exports = async () => {
    for (let file of DATA_FOLDER_ITEMS) {
        await new Promise(resolve => {
            const new_file_name = path.join(
                EXPORTED_DATA_FOLDER_PATH,
                `${file.split(".")[0]}.txt`
            );
            const read_file_path = path.join(
                DATA_FOLDER_PATH,
                file
            );
            const parsed = parseCSV(`"${read_file_path}"`, `"${new_file_name}"`);
            console.log(parsed.toString("utf8"));

            resolve();
        });
    }
}
