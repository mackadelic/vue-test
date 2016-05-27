import 'babel-polyfill';
import Vue from 'vue';
import VueRouter from 'vue-router';
import { configRouter } from './route-config';
import App from './components/app.vue';
import Navbar from './components/navbar.vue';
import Login from './components/login.vue';
import AppFooter from './components/footer.vue';
import Resource from 'vue-resource';

Vue.use(Resource); 
Vue.use(VueRouter);

Vue.component('navbar', Navbar);
Vue.component('login', Login);
Vue.component('app-footer', AppFooter);

// create router 
const router = new VueRouter({
  history: true,
  saveScrollPosition: true
});

// configure router
configRouter(router);

// boostrap the app
router.start(Vue.extend(App), '#app');

// just for debugging
window.router = router;