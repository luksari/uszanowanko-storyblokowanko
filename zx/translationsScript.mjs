#!/usr/bin/env zx

/* eslint-disable no-console */

import { chalk, fs } from 'zx';
import axios from 'axios';
import * as dotenv from 'dotenv';

dotenv.config({
  path: '.env.production.local',
});

const languageCodes = JSON.parse(
    await fs.readFile(
        new URL('../../src/i18n/locales.json', import.meta.url)
    )
);


/** We use REST API as it is easier to trigger regular request than consuming GQL api */
const baseApi = 'https://api.storyblok.com/v2/cdn';
const token = process.env.NEXT_PUBLIC_SB_PUBLISHED_TOKEN;

const getCVToken = async () => {
  let cv;
  try {
    const res = await axios.get(`${baseApi}/spaces/me/?token=${token}`);
    cv = res?.data?.space?.version;
  } catch (err) {
    throw new Error(`Getting CV token failed because of ${err}`);
  }
  return cv;
};

// We can retrieve max 100 of records in one paginated call
// In order to fetch all records we are incrementing page query parameters
// until the no. of records is bigger or equals than total value returned in headers
const getTranslationsForDimension = async (lang, cv) => {
  let results = [],
    page = 1,
    total = 0;

  do {
    try {
      console.log(chalk.yellow(`Fetching translations for language code ${lang} and page ${page}...`));
      const res = await axios.get(
        `${baseApi}/datasource_entries?datasource=translations&dimension=${lang}&per_page=100&page=${page}&token=${token}&cv=${cv}`,
      );

      const newEntries = res.data.datasource_entries;
      total = Number(res?.headers.total);

      if (isNaN(total) || typeof newEntries === 'undefined') {
        throw new Error('Total value or fetched translations are undefined');
      }

      results = results.concat(newEntries);
      page += 1;
    } catch (err) {
      throw new Error(`Fetching translations for ${lang} failed because of ${err}`);
    }
  } while (results.length < total);

  console.log(chalk.green(`Fetched total of ${results.length} translations`));

  return results;
};

const saveTranslationToJSON = async (fileName, content) => {
  const translationsDir = 'src/i18n/translations';
  const filePath = `${translationsDir}/${fileName}.json`;

  await fs.ensureDir(translationsDir);

  console.log(chalk.yellow(`Saving translations  in ${filePath}...`));
  try {
    await fs.outputJson(filePath, content, { spaces: 2, replacer: null });
    console.log(chalk.green(`Translations saved in ${filePath}`));
  } catch (err) {
    throw new Error(`Could not save file ${filePath} because of ${err}`);
  }
};

const reduceEntriesArrToObj = (lang) => (initialObj, entry) => {
  let value;

  if (lang === 'default') {
    value = entry.value;
  } else {
    value = entry.dimension_value || entry.name;
  }

  const key = entry.name;
  initialObj[key] = value;
  return initialObj;
};

const buildTranslations = async () => {
  const cv = await getCVToken();

  for (const lang of languageCodes) {
    const entries = await getTranslationsForDimension(lang, cv);
    const mappedEntries = entries.reduce(reduceEntriesArrToObj(lang), {});
    await saveTranslationToJSON(lang, mappedEntries);
  }
};

await buildTranslations();
