import Vue from 'vue';
import App from './app.vue';
import axios from 'axios';

import Iview from 'iview';
Vue.use(Iview);

import 'iview/dist/styles/iview.css';

// import 'vue-beauty/package/style/vue-beauty.min.css';
// https://fontawesome.com/?from=io
import '@fortawesome/fontawesome-free/css/all.css';

Vue.prototype.$axios = axios;

new Vue({
    el: '#app',
    render: h => h(App)
});
