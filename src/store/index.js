import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    login: false,
    id: "",
    email: "",
    name: "",
    rating: 0,
    token: null
  },
  mutations: {
    GET_TOKEN(state, token) {
      state.login = true;
      state.id = token.id;
      state.email = token.email;
      state.name = token.name;
      state.rating = Number(token.rating);
      state.token = token;
    },
    DEL_TOKEN(state) {
      state.login = false;
      state.id = "";
      state.email = "";
      state.name = "";
      state.rating = 0;
      state.token = null;
    }
  },
  actions: {},
  modules: {}
});
