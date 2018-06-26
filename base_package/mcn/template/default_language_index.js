module.exports = (base_data)=>
`import cn from "./cn";
import en from "./en";
import base_language from "main/language"
import date_cn from "main/language/date_time_cn";
import date_en from "main/language/date_time_en";
import locale from "main/public/src/locale.js";

const i18n = new VueI18n({
    locale: locale,
    dateTimeFormats: {
        en: date_en,
        cn: date_cn
    },
    messages: JSON.parse(JSON.stringify({
        cn: Object.assign(base_language.cn, cn),
        en: Object.assign(base_language.en, en)
    }))
});
window.i18n = i18n;
export default i18n;`;