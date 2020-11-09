import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    id: "",
    email: "",
    name: "",
    sign: false
  },
  mutations: {
    LOAD_TOKEN(state, data) {
      state.id = data.id;
      state.email = data.email;
      state.name = data.name;
      state.sign = true;
    },
    CLEAR_INFO(state) {
      state.id = "";
      state.email = "";
      state.name = "";
      state.sign = false;
    }
  },
  actions: {},
  modules: {},
  plugins: [createPersistedState()]
});
