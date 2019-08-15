import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    openMenu: true,
    openSocial: true
  },
  mutations: {
    hideMenu(state, payload) {
      state.openMenu = payload
    },
    hideSocial(state, payload) {
      state.openSocial = payload
    }
  },
  actions: {
    hideMenu(context, type) {
      context.commit('hideMenu', type)
    },
    hideSocial(context, type) {
      context.commit('hideSocial', type)
    }
  }
})
