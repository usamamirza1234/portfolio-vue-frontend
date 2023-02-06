require('vue-ionicons/ionicons.css')
import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from "bootstrap-vue"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import AlertIcon from 'vue-ionicons/dist/ios-alert.vue'
import "@/assets/styles/base_style.css";
import "swiper/swiper-bundle.css";
import VueRouter from 'vue-router'
import Index from './pages/Index.vue'
import Resume from './pages/Resume.vue'
import Contact from './pages/Contact.vue'
import PageNotFound from "@/pages/PageNotFound.vue";

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.component('alert-icon', AlertIcon)


const routes = [{path: '/contact', component: Contact, name: "Contact me"}, {path: '/resume', component: Resume}, {
  path: '/', component: Index
}, {
  path: '/:catchAll(.*)*', name: "PageNotFound", component: PageNotFound,
},];

const router = new VueRouter({
  routes: routes,
  mode: 'history',
  linkActiveClass: 'active-link',
  linkExactActiveClass: 'exact-active-link',
})
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
