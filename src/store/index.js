import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isDarkMode: false,
    socialMedia: [
      {
        id: 1,
        name: "facebook",
        nickName: "MyNickName",
        totalFollowers: 5500,
        followersToday: 12,
      },
      {
        id: 2,
        name: "twitter",
        nickName: "MyNickName",
        totalFollowers: 100,
        followersToday: 12,
      },
      {
        id: 3,
        name: "instagram",
        nickName: "MyNickName",
        totalFollowers: 3500,
        followersToday: -5,
      },
      {
        id: 4,
        name: "youtube",
        nickName: "MyNickName ",
        totalFollowers: 5000,
        followersToday: 12,
      },
    ],
  },
  getters: {
    cards: (state) => {
      return state.socialMedia;
    },
    totalFollowers: (state) => {
      let totalFollowers = 0;
      state.socialMedia.map((sm) => {
        totalFollowers += sm.totalFollowers;
      });

      return totalFollowers;
    },
  },
  mutations: {
    changeDarkModeState(state) {
      state.isDarkMode = state.isDarkMode ? false : true;
    },
  },
  actions: {},
  modules: {},
});
