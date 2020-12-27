<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-spacer></v-spacer>
      <!-- <Evaluate/> -->
      <router-link to="/">
        <v-btn icon>
          <v-icon>mdi-home</v-icon>
        </v-btn>
      </router-link>
      <v-btn v-if="!this.$store.state.login" text color="white" to="/signin"
        >SIGN IN</v-btn
      >
      <v-btn v-if="this.$store.state.login" text color="white" @click="logOut"
        >LOG OUT</v-btn
      >
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute bottom temporary>
      <v-list nav dense>
        <v-list-item class="px-2 justify-center">
          <v-list-item-avatar size="100">
            <v-img src="https://i.ibb.co/ggZNT02/default-profile.png"></v-img>
          </v-list-item-avatar>
        </v-list-item>
        <v-list-item class="pr-6 justify-center">
          {{ name }}
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list>
        <v-list-item-group
          v-model="group"
          active-class="blue--text text--accent-4"
        >
          <v-list-item :to="this.$store.state.login ? '/mypage' : '/signin'">
            <v-list-item-title>My Page</v-list-item-title>
          </v-list-item>
          <v-list-item to="/status">
            <v-list-item-title>Status</v-list-item-title>
          </v-list-item>
          <v-list-item :to="this.$store.state.login ? '/create' : '/signin'">
            <v-list-item-title>Make Study</v-list-item-title>
          </v-list-item>

          <v-list-item to="/board">
            <v-list-item-title
              :to="this.$store.state.login ? '/board' : '/signin'"
              >Search Study</v-list-item-title
            >
          </v-list-item>

          <v-list-item to="/calender">
            <v-list-item-title>Calender</v-list-item-title>
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
// import Evaluate from "@/components/Evaluate"

export default {
  name: "App",

  components: {
    // Evaluate
  },
  data: () => ({
    drawer: false,
    group: null,
    name: ""
  }),
  computed: {
    newname() {
      return this.$store.state.name;
    }
  },

  watch: {
    group() {
      this.drawer = false;
    }
  },
  created() {
    if (sessionStorage.token === undefined) {
      this.$store.commit("DEL_TOKEN");
    } else {
      const jwt = require("jsonwebtoken");
      this.$store.commit("GET_TOKEN", jwt.decode(sessionStorage.token));
      this.$axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${sessionStorage.token}`;
      this.name = this.$store.state.name;
    }
  },
  mounted() {
    if (!(window.kakao && window.kakao.maps)) {
      const script = document.createElement("script");
      /* global kakao */
      script.onload = () => kakao.maps.load(this.initMap);
      script.id = "kakao";
      script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.VUE_APP_KAKAO_APP_KEY}&libraries=services,clusterer,drawing&autoload=false`;
      document.head.appendChild(script);
    }
  },
  updated() {
    this.name = this.$store.state.name;
  },
  methods: {
    logOut() {
      this.$store.commit("DEL_TOKEN");
      sessionStorage.clear();
      if (this.$router.currentRoute.name != "Home") {
        this.$router.push({ name: "Home" });
      }
    }
  }
};
</script>
