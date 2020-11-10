<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-spacer></v-spacer>
      <router-link to="/">
        <v-btn icon>
          <v-icon>mdi-home</v-icon>
        </v-btn>
      </router-link>
      <v-btn v-show="!this.$store.state.sign" text color="white" to="signin"
        >Sign in</v-btn
      >
      <v-btn v-show="this.$store.state.sign" text color="white" @click="logOut"
        >Log out</v-btn
      >
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute bottom temporary>
      <v-list nav dense>
        <v-list-item class="px-2 justify-center">
          <v-list-item-avatar size="100">
            <v-img
              src="https://randomuser.me/api/portraits/women/85.jpg"
            ></v-img>
          </v-list-item-avatar>
        </v-list-item>
        <v-list-item class="px-2 justify-center">
          {{ this.$store.state.name }}
        </v-list-item>
      </v-list>

      <v-divider></v-divider>
      <v-list>
        <v-list-item-group
          v-model="group"
          active-class="blue--text text--accent-4"
        >
          <v-list-item :to="this.$store.state.sign ? '/mypage' : '/signin'">
            <v-list-item-title>My Page</v-list-item-title>
          </v-list-item>

          <v-list-item to="/board">
            <v-list-item-title>Board</v-list-item-title>
          </v-list-item>
          <v-list-item to="/status">
            <v-list-item-title>Status</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import VueJwtDecode from "vue-jwt-decode";

export default {
  name: "App",
  data: () => ({
    drawer: false,
    group: null
  }),

  watch: {
    group() {
      this.drawer = false;
    }
  },
  created() {
    if (sessionStorage.token) {
      this.$store.commit(
        "LOAD_TOKEN",
        VueJwtDecode.decode(sessionStorage.token)
      );
      console.log(sessionStorage.token);
    } else {
      this.$store.commit("CLEAR_INFO");
      console.log("clear");
    }
  },
  methods: {
    logOut() {
      this.$store.commit("CLEAR_INFO");
      sessionStorage.token = null;
    }
  }
};
</script>
