# Global Conflict Analysis Hana Database Module

This application will deploy a [SAP HANA database](https://www.sap.com/products/hana.html) on [SAP Cloud Platform](https://cloudplatform.sap.com/index.html.) with [Predictive Analytics](https://bit.ly/3ft9QVV) capability with data from the [Armed Conflict Location and Event Data project (ACLED)](https://acleddata.com) as well as the [Fragile States Index](https://fragilestatesindex.org/)

## Requirements

* A currently deployed enterprise instance of SAP HANA

![cockpit1.png](screenshots/cockpit1.png)

* [Cloud Foundry CLI](https://docs.cloudfoundry.org/cf-cli/)

* [Multiapps CF CLI Plugin](https://github.com/cloudfoundry-incubator/multiapps-cli-plugin)

## Deploy

* Make sure the `cli` is connected to your space with this script

```bash
./cf-login.sh
```

* Run the deployment script

```bash
./cf-db.sh
```

## Bugfix workaround

* Currently there is a memory allocation error when attempting to load all the data at once

* The fix is to not load the **ACLED_NOTES_ALL** table by default. `db/src/data/acled_notes_all.hdbtabledata` has this option set 

```json
"no_data_import": true
```

* After running `cf-db.sh`, login into SAP Web IDE Full-Stack and navigate to database explorer.

* Connect to the `gca-db` database, select the **ACLED_NOTES_ALL** table, right-click and select `import data`

* Locally unzip `zip/acled_notes_all.zip` to a csv

* Upload `acled_notes_all.csv`
  * Uncheck `has header`
  * Select the `ACLED_NOTES_ALL` table
  * Map `COLUMN_1` to `data_id` and `COLUMN_2` to `tidy_notes`

* Confirm and run the import


## Access the database

* Get the access configuration from the service keys section of the instance in the cockpit or with the `cli` with the following command

```bash
cf service-key gca-db gca-db-key
```

![cockpit2.png](screenshots/cockpit2.png)