import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    socialMedia: [
      {
        id: 1,
        name: "facebook",
        nickName: "MyNickName",
        totalFollowers: 2000,
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
    overview: [
      {
        id: 1,
        title: "Page Views",
        name: "facebook",
        total: 87,
        improvement: 3,
      },
      {
        id: 2,
        title: "Likes",
        name: "twitter",
        total: 52,
        improvement: -2,
      },
      {
        id: 3,
        title: "Likes",
        name: "instagram",
        total: 5462,
        improvement: 2257,
      },
      {
        id: 4,
        title: "Profile Views",
        name: "instagram",
        total: 5200,
        improvement: 1375,
      },
      {
        id: 5,
        title: "Retweets",
        name: "twitter",
        total: 117,
        improvement: 303,
      },
      {
        id: 6,
        title: "Likes",
        name: "twitter",
        total: 507,
        improvement: 553,
      },
      {
        id: 7,
        title: "Likes",
        name: "youtube",
        total: 107,
        improvement: -19,
      },
      {
        id: 8,
        title: "Total Views",
        name: "youtube",
        total: 1407,
        improvement: -12,
      },
    ],
  },
  getters: {
    socialMediaFollowers: (state) => {
      return state.socialMedia;
    },
    totalFollowers: (state) => {
      let totalFollowers = state.socialMedia.reduce((acc, crr) => {
        return { totalFollowers: acc.totalFollowers + crr.totalFollowers };
      });
      return totalFollowers.totalFollowers;
    },
    overview: (state) => {
      return state.overview;
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
