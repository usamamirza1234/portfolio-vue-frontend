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


Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.component('alert-icon', AlertIcon)

import Index from './pages/Index.vue'
import Resume from './pages/Resume.vue'
// import SideBar from "@/components/SideBar.vue";

const routes = [
  { path: '/resume', component: Resume },
  { path: '/', component: Index }
];

const router = new VueRouter({
  routes: routes,
  mode: 'history'
})
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
