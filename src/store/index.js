import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    login: false,
    id: "",
    email: "",
    name: "",
    token: null
  },
  mutations: {
    GET_TOKEN(state, token) {
      state.login = true;
      state.id = token.id;
      state.email = token.email;
      state.name = token.name;
      state.token = token;
    },
    DEL_TOKEN(state) {
      state.login = false;
      state.id = "";
      state.email = "";
      state.name = "";
      state.token = null;
    }
  },
  actions: {},
  modules: {}
});
