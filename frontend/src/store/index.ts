import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    userId: ''
  },
  mutations: {
    setIsLoggedIn: (state, newValue) => {
      state.isLoggedIn = newValue;
    },
    setUserId: (state, newValue) => {
      state.userId = newValue
    }
  },
  actions: {
  }
})
