/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */
import Vue     from 'vue';
import App     from './App.vue';
import router  from './routes';
import store   from './store';
import feather from 'vue-icon';
Vue.use(feather, 'v-icon');

import '@/stylesheets/common.scss';

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
