const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

// Enter values here
const FOLDER_PATH = "E:\\PATH\\To\\Folder";


const read = fs.readdirSync(
    path.join(FOLDER_PATH)
);
let total_lines = 0;

read.forEach(file => {
    const thisLinesCount = execSync(
        `line_counter ${path.join(FOLDER_PATH, file)}`
    );
    const this_lines = parseInt(thisLinesCount.toString("utf8"));

    total_lines += this_lines;
})

console.log(total_lines);
