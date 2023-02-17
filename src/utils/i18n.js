import i18n from "i18next";

import { initReactI18next } from "react-i18next"

import enTranslations from "./en.json"
import ptTranslations from "./pt.json"
import esTranslations from "./es.json"

i18n.use(initReactI18next).init({
    resources:{
        en: {...enTranslations},
        pt: {...ptTranslations},
        es: {...esTranslations}
    },
    compatibilityJSON : 'v3',
    lng: 'en',
    react:{
        useSuspense: false,
    },
    interpolation:{
        escapeValue: false,
    }
})

export default i18n;