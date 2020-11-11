<template>
  <v-card>
    <v-card-title>
      Sign in
    </v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field
          v-model="email"
          label="Email"
          prepend-icon="mdi-email"
        ></v-text-field>
        <v-text-field
          v-model="password"
          label="Password"
          prepend-icon="mdi-lock"
          :append-icon="isPasswordHide ? 'mdi-eye-off' : 'mdi-eye'"
          :type="isPasswordHide ? 'password' : 'text'"
          @click:append="isPasswordHide = !isPasswordHide"
        ></v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn text to="/signup">SignUp</v-btn>
      <v-spacer></v-spacer>
      <v-btn text color="primary" @click="signIn">Submit</v-btn>
      <v-snackbar v-model="snackbar" :color="result">
        {{ message }}
      </v-snackbar>
    </v-card-actions>
  </v-card>
</template>

<script>
import VueJwtDecode from "vue-jwt-decode";

export default {
  name: "SignIn",
  data: () => ({
    email: "",
    password: "",
    isPasswordHide: true,
    snackbar: false,
    result: "",
    message: "",
    token: "",
    id: "",
    decoded: ""
  }),
  methods: {
    signIn() {
      this.$axios
        .post("https://pers0n4.dev:3000/auth", {
          email: this.email,
          password: this.password
        })
        .then(result => {
          this.message = result.data.token;
          this.result = "success";
          this.snackbar = true;
          this.token = result.data.token;

          sessionStorage.token = this.token;

          this.decoded = VueJwtDecode.decode(this.token);

          this.$store.commit("GET_TOKEN", VueJwtDecode.decode(this.token));

          this.$axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${this.token}`;

          this.$router.push({ name: "Home" });
        })
        .catch(error => {
          this.message = error.response.data;
          this.result = "error";
          this.snackbar = true;
        });
    }
  }
};
</script>
