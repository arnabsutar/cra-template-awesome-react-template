/* eslint-disable  */
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import { enLang, frLang } from './languages';
import { setLocale } from '../util/NumberFormatter';

i18n
  .use(Backend)
  .use(initReactI18next)
  .init(
    {
      // resources,
      lng: 'en',
      fallbackLng: 'en',
      preload: ['en', 'fr'],
      ns: ['translation'],
      defaultNS: 'translation',
      backend: {
        loadPath: 'http://localhost:3000/locales/{{lng}}/{{ns}}.json',
      },
    },
    (err, t) => {
      if (err) {
        console.error(err);
      }
      console.log('Adding additional resource');
      i18n.addResources('en', 'static', enLang.static);
      i18n.addResources('fr', 'static', frLang.static);
      console.log('Resources updated');
      console.log(window.SERVER_DATA);
    },
  );

const setCurrentLocale = (locale) => {
  setLocale(locale);
  i18n.changeLanguage(locale);
}

export default i18n;
export { setCurrentLocale };
