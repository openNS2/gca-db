#!/usr/bin/env bash

multiapps=$(cf plugins | grep multiapps)
if [[ -z "$multiapps" ]]; then
  echo "multiapps plugin is required: 'cf install-plugin multiapps'"
  exit 1
fi

nm="./db/node_modules"
if [ -d "$nm" ]; then
  echo "Deleting $nm"
  rm -rf $nm
fi

echo "Creating temporary mtad.yaml from mta.yaml"
cp mta.yaml mtad.yaml

cf deploy ./ -f

cf create-service-key gca-db gca-db-key

rm mtad.yaml
rm gca-hdb.mtar