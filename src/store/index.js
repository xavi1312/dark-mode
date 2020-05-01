import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isDarkMode: false,
  },
  mutations: {
    changeDarkModeState(state) {
      state.isDarkMode = state.isDarkMode ? false : true;
    },
  },
  actions: {},
  modules: {},
});
