'use strict';

const fs = require('fs');
const StreamZip = require('node-stream-zip');

const dataDir = './src/data';
const path = './zip';
const zipFiles = [
    `${path}/acled_notes_all.zip`,
    `${path}/lda_parameter_tbl.zip`,
    `${path}/acled_param_tbl.zip`,
    `${path}/acled_full.zip`,
    `${path}/fsi_final.zip`
];

zipFiles.forEach(zipFile => {
    const zip = new StreamZip({
        file: zipFile,
        storeEntries: true
    });
    zip.on('ready', () => {
        zip.extract(null, dataDir, (err, count) => {
            console.log(err ? 'Extract error' : `Extracted ${count} file from ${zipFile} to ${dataDir}`);
            zip.close();
        });
    });
});