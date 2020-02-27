import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    civs: [],
    cors: "https://cors-anywhere.herokuapp.com/",
    profileUrl:
      "https://aoe2.net/api/nightbot/rank?leaderboard_id=3&steam_id=76561197983320063",
    civsUrl: "https://aoe2.net/api/strings?game=aoe2de&language=en",
    profileText: null,
    profileObj: {
      name: null,
      elo: null,
      rank: null,
      gamesPlayed: null,
      winrate: null,
      streak: null
    }
  },

  getters: {},

  mutations: {
    fetchCiv(state) {
      fetch(state.cors.concat(state.civsUrl))
        .then(response => {
          return response.json();
        })
        .then(data => {
          state.civs = Array.from(data.civ);
        });
    },
    fetchProfile(state) {
      fetch(state.cors.concat(state.profileUrl)).then(response => {
        response.text().then(text => {
          state.profileText = text;
          state.profileObj.name = text.split(" (", 1)[0];
          state.profileObj.elo = text
            .split("(", 2)[1]
            .split(")", 1)
            .toString();
          state.profileObj.rank = text
            .split("#", 2)[1]
            .split(",", 1)
            .toString();
          state.profileObj.gamesPlayed = text
            .split("played ", 2)[1]
            .split(" games", 1)[0];
          state.profileObj.winrate = text
            .split("with a ", 2)[1]
            .split(" winrate", 1)[0]
            .toString();
          state.profileObj.streak = text
            .split(" winrate, ", 2)[1]
            .split(" streak", 1)
            .toString();
        });
      });
      // .then(data => {
      //   console.log(data);
      //   state.profile = data;
      // });
    }
  },

  actions: {
    setupData(context) {
      context.commit("fetchCiv");
      context.commit("fetchProfile");
    }
  }
});
