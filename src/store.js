import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    openMenu: true,
    openSocial: true
  },
  mutations: {
    hideMenu(state) {
      state.openMenu = !state.openMenu
    },
    hideSocial(state) {
      state.openSocial = !state.openSocial
    }
  },
  actions: {

  }
})
