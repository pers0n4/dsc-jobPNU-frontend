<template>
  <v-card>
    <v-card-title>
      Sign up
    </v-card-title>
    <v-card-text>
      <v-form v-model="isValid">
        <v-text-field
          v-model="email"
          label="Email"
          prepend-icon="mdi-email"
        ></v-text-field>
        <v-text-field
          v-model="name"
          label="Name"
          prepend-icon="mdi-account-circle"
        ></v-text-field>
        <v-text-field
          v-model="password"
          label="Password"
          prepend-icon="mdi-lock"
          :append-icon="isPasswordHide ? 'mdi-eye-off' : 'mdi-eye'"
          :type="isPasswordHide ? 'password' : 'text'"
          @click:append="isPasswordHide = !isPasswordHide"
        ></v-text-field>
        <v-text-field
          v-model="passwordConfirm"
          label="Confirm Password"
          prepend-icon="mdi-lock"
          type="password"
          :rules="[() => password === passwordConfirm]"
        ></v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn text color="primary" :disabled="!isValid" @click="signUp"
        >Submit</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "SignUp",
  data: () => ({
    isValid: true,
    email: "",
    name: "",
    password: "",
    passwordConfirm: "",
    isPasswordHide: true
  }),
  methods: {
    signUp() {
      if (!this.isValid) return;
      this.$axios
        .post("/users", {
          email: this.email,
          name: this.name,
          password: this.password
        })
        .then(() => {
          this.$router.push({ name: "Home" });
        });
    }
  }
};
</script>
