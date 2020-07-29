'use strict';

const fs = require('fs');
const path = './src/data';
const csvFiles = [
    `${path}/acled_notes_all.csv`,
    `${path}/lda_parameter_tbl.csv`
];

csvFiles.forEach(csvFile => {
    console.info(`Deleting ${csvFile}`);
    fs.unlinkSync(csvFile);
});