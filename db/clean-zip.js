'use strict';

const fs = require('fs');
const path = './zip';
const zipFiles = [
    `${path}/acled_notes_all.zip`,
    `${path}/lda_parameter_tbl.zip`,
    `${path}/acled_param_tbl.zip`,
    `${path}/acled_full.zip`,
    `${path}/fsi_final.zip`
];

zipFiles.forEach(zipFile => {
    console.info(`Deleting ${zipFile}`);
    fs.unlinkSync(zipFile);
});