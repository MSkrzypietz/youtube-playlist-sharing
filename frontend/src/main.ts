import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { Auth0Plugin } from './auth'
import { authConfig } from './config'

Vue.config.productionTip = false

Vue.use(Auth0Plugin, {
  domain: authConfig.domain,
  clientId: authConfig.clientId,
  // eslint-disable-next-line
  onRedirectCallback: (appState: any) => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
