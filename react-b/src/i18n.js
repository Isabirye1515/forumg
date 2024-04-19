import i18n from "i18next";
import { initReactI18next } from "react-i18next"; 
import LanguageLocator from 'i18next-browser-languagedetector';
import backEnd from "i18next-http-backend";

const translations = {
  lug: {
    translation: {
      "main": {
        "id": "Enamba Yo Eyenjawulo",
        "firstName": "Erinya Eryeekika",
        "lastName": "Erinya Eryeediini",
        "amount": "Omuweendo",
        "category": "Omutendera"
      }
    }
  },
  en:{
    translation:{
        "main":{
        "id":"identification Number",
        "firstName":"Sur Name",
        "lastName":"Christian Name",
        "amount":"Costs",
        "category":"Diversity"
        }
    }
  }
};

i18n
  .use(initReactI18next)
  .use(backEnd)
  .use(LanguageLocator)
  .init({
    debug: true,
    fallbackLng: "en",
    resources: translations
  });

i18n.changeLanguage('lug')

export default i18n;
