'use strict';

const AdmZip = require('adm-zip');

const dataDir = './src/data';
const path = './zip';
const zipFiles = [
    `${path}/acled_notes_all.zip`,
    `${path}/lda_parameter_tbl.zip`
];

zipFiles.forEach(zipFile => {
    console.info(`Extracting ${zipFile} to ${dataDir}`);
    const zip = new AdmZip(zipFile);
    zip.extractAllTo(dataDir, true);
});