import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import store from './store'
import router from './router'
import Configure from './views/Configure.vue'
import Box from './components/Box.vue'
import draggable from 'vuedraggable'
import VueDraggableResizable from 'vue-draggable-resizable'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Vuex)
Vue.use(BootstrapVue)
Vue.use(VueRouter)

new Vue({
  el: '#app',
  store,
  router,
  components: {
    Configure,
    Box,
    draggable,
    VueDraggableResizable
  },
  render: h => h(App)
})
