module.exports = (base_data)=>
`import cn from "./cn";
import en from "./en";
import _in from "./in";
import base_language from "main/language"
import date_cn from "main/language/date_time_cn";
import date_en from "main/language/date_time_en";
import date_in from "main/language/date_time_in";
import locale from "main/public/src/locale.js";

const i18n = new VueI18n({
    locale: locale,
    dateTimeFormats: {
        en: date_en,
        cn: date_cn,
        in: date_in,
    },
    messages: JSON.parse(JSON.stringify({
        cn: Object.assign(base_language.cn, cn),
        en: Object.assign(base_language.en, en),
        in: Object.assign(base_language.in, _in),
    }))
});
window.i18n = i18n;
export default i18n;`;