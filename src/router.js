import Vue from 'vue'
import Router from 'vue-router' 
import Configure from './views/Configure.vue'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {path: '/', name: 'Home', component: Home},
        {path: '/configure/:id', name: 'Configure', component: Configure }    
    ]
})