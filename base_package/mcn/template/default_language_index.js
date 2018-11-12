module.exports = (base_data)=>
`import VueI18n from 'vue-i18n'

import '@/i18n/element-ui.js'
import { merge } from 'public/helper/libs'

import base_languages from '@/i18n/languages.json'
import languages from './languages.json'

import locale from "public/libs/locale"

const messages = merge(base_languages,languages)

Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: locale,
  messages: messages
});
window.i18n = i18n;
export default i18n;
`;