{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import App from './App'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{#router}}
import router from './router'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/router}}

{{#vuex}} //vuex为true的时候就会写入这些
  import Vuex from 'vuex'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  import store from './store'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  Vue.use(Vuex){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/vuex}}
{{#iview}}
  import iView from 'iView'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  import 'iview/dist/styles/iview.css'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  Vue.use(iView){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/iview}}




Vue.config.productionTip = false{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  {{#router}}
  router,
  {{/router}}
  {{#vuex}}
     store,
   {{/vuex}}
  {{#if_eq build "runtime"}}
  render: h => h(App){{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  template: '<App/>',
  components: { App }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  {{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
