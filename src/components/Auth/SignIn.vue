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
      <v-spacer></v-spacer>
      <v-btn text color="primary">Submit</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "SignIn",
  data: () => ({
    email: "",
    password: "",
    isPasswordHide: true
  })
};
</script>
