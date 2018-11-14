module.exports = (base_data)=>
`import { merge } from 'public/helper/libs'

import base_languages from '@/i18n/languages.json'
import languages from './languages.json'

import locale from "public/libs/locale"

const messages = merge(element_languages,base_languages,languages)

Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: locale,
  messages: messages
});
Vue.use(ELEMENT, {
  i18n: (key, value) => i18n.t(key, value)
});
window.i18n = i18n;
export default i18n;
`;