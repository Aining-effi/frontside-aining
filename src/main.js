import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import { Button, Table, Container, Main, Footer, Header, Aside, TableColumn, Row, Menu, MenuItem } from 'element-ui'

Vue.use(Table)
Vue.use(Button)
Vue.use(Container)
Vue.use(Main)
Vue.use(Footer)
Vue.use(Header)
Vue.use(Aside)
Vue.use(TableColumn)
Vue.use(Row)
Vue.use(Menu)
Vue.use(MenuItem)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
