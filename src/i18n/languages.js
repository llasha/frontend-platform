/* eslint-disable import/extensions */
import LANGUAGES, { langs as languageLangs } from '@llasha/i18n-iso-languages';

// import arLocale from '@llasha/i18n-iso-languages/langs/ar.json';
import enLocale from '@llasha/i18n-iso-languages/langs/en.json';
import esLocale from '@llasha/i18n-iso-languages/langs/es.json';
import frLocale from '@llasha/i18n-iso-languages/langs/fr.json';
// import zhLocale from '@llasha/i18n-iso-languages/langs/zh.json';
// import caLocale from '@llasha/i18n-iso-languages/langs/ca.json';
// import heLocale from '@llasha/i18n-iso-languages/langs/he.json';
// import idLocale from '@llasha/i18n-iso-languages/langs/id.json';
// import koLocale from '@llasha/i18n-iso-languages/langs/ko.json';
import plLocale from '@llasha/i18n-iso-languages/langs/pl.json';
import ptLocale from '@llasha/i18n-iso-languages/langs/pt.json';
// import ruLocale from '@llasha/i18n-iso-languages/langs/ru.json';
// import thLocale from '@llasha/i18n-iso-languages/langs/th.json';
// import ukLocale from '@llasha/i18n-iso-languages/langs/uk.json';
import kaLocale from '@llasha/i18n-iso-languages/langs/ka.json';

import { getPrimaryLanguageSubtag } from './lib';

/*
 * LANGUAGE LISTS
 *
 * Lists of language names localized in supported languages.
 *
 * TODO: When we start dynamically loading translations only for the current locale, change this.
 * TODO: Also note that a bunch of languages are missing here. They're present but commented out
 * for reference. That's because they're not implemented in this library.  If you read this and it's
 * been a while, go check and see if that's changed!
 */

// LANGUAGES.registerLocale(arLocale);
LANGUAGES.registerLocale(enLocale);
LANGUAGES.registerLocale(esLocale);
LANGUAGES.registerLocale(frLocale);
// LANGUAGES.registerLocale(zhLocale);
// LANGUAGES.registerLocale(caLocale);
// LANGUAGES.registerLocale(heLocale);
// LANGUAGES.registerLocale(idLocale);
// LANGUAGES.registerLocale(koLocale);
LANGUAGES.registerLocale(plLocale);
LANGUAGES.registerLocale(ptLocale);
// LANGUAGES.registerLocale(ruLocale);
// LANGUAGES.registerLocale(thLocale);
// LANGUAGES.registerLocale(ukLocale);
LANGUAGES.registerLocale(kaLocale);

/**
 * Provides a lookup table of language IDs to language names for the current locale.
 *
 * @memberof I18n
 */
export const getLanguageMessages = (locale) => {
  const primaryLanguageSubtag = getPrimaryLanguageSubtag(locale);
  const languageCode = languageLangs().includes(primaryLanguageSubtag) ? primaryLanguageSubtag : 'en';

  return LANGUAGES.getNames(languageCode);
};

/**
 * Provides a list of languages represented as objects of the following shape:
 *
 * {
 *   key, // The ID of the language
 *   name // The localized name of the language
 * }
 *
 * TODO: ARCH-878: The list should be sorted alphabetically in the current locale.
 * This is useful for populating dropdowns.
 *
 * @memberof I18n
 */
export const getLanguageList = (locale) => {
  const languageMessages = getLanguageMessages(locale);
  return Object.entries(languageMessages).map(([code, name]) => ({ code, name }));
};
