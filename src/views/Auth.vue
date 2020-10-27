<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="10" md="8" lg="6" xl="4">
        <component :is="component"></component>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Auth",
  data: () => ({
    component: null
  }),
  watch: {
    $route: "loadComponent"
  },
  created() {
    this.loadComponent();
  },
  methods: {
    loadComponent() {
      switch (this.$route.path) {
        case "/signin":
          this.component = () => import("@/components/Auth/SignIn");
          break;
        case "/signup":
          this.component = () => import("@/components/Auth/SignUp");
          break;
        default:
          this.component = null;
      }
    }
  }
};
</script>
