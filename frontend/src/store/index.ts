import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: false
  },
  mutations: {
    setIsLoggedIn: (state, newValue) => {
      state.isLoggedIn = newValue;
    }
  },
  actions: {
  },
  modules: {
  }
})
