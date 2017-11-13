module.exports = (base_data)=>
`import cn from "./cn";
import en from "./en";
import base_cn from "base_language/cn";
import base_en from "base_language/en";
import iview_en from "iview/src/locale/lang/en-US.js";
import iview_cn from "iview/src/locale/lang/zh-CN.js";
import date_cn from "base_language/date_time_cn";
import date_en from "base_language/date_time_en";
import locale from "lib/locale";

window.i18n = new VueI18n({
    locale: locale,
    dateTimeFormats: {
        en: date_en,
        cn: date_cn
    },
    messages: JSON.parse(JSON.stringify({
        cn: Object.assign(iview_cn, base_cn, cn),
        en: Object.assign(iview_en, base_en, en)
    }))
});
export default window.i18n;`;