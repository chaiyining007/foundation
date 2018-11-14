module.exports = (base_data) =>`import i18n from './i18n'
import App from './main'

window.page = new Vue({
  el: '#app',
  i18n,
  render: h => h(App)
})

`