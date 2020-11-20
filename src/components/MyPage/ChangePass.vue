<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="grey" dark v-bind="attrs" text v-on="on">
        Change Password
      </v-btn>
    </template>
    <v-form v-model="isValid">
      <v-card>
        <v-card-title>
          <span class="headline">Change Password</span>
        </v-card-title>
        <v-card-text>
          <v-text-field
            v-model="password"
            :type="isPasswordHide ? 'password' : 'text'"
            :append-icon="isPasswordHide ? 'mdi-eye-off' : 'mdi-eye'"
            prepend-icon="mdi-lock-outline"
            label="New Password (8자리 이상)"
            :rules="[passwordExp.test(password) ? true : '잘못된 양식입니다.']"
            @click:append="isPasswordHide = !isPasswordHide"
          ></v-text-field>
          <v-text-field
            v-model="confirm"
            prepend-icon="mdi-lock"
            type="password"
            label="Confirm"
            :rules="[
              password === confirm ? true : '비밀번호가 일치하지 않습니다.'
            ]"
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="clear">
            NO
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            :disabled="!isValid"
            @click="changePass"
          >
            YES
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </v-dialog>
</template>

<script>
import VueJwtDecode from "vue-jwt-decode";

export default {
  name: "ChangePass",
  data: () => ({
    password: "",
    confirm: "",
    isPasswordHide: true,
    passwordExp: /[a-zA-Z0-9]{8,}/,
    isValid: true,
    dialog: false
  }),
  methods: {
    clear() {
      this.password = "";
      this.confirm = "";
      this.dialog = false;
    },
    changePass() {
      this.$axios
        .patch("https://pers0n4.dev:3000/users/" + this.$store.state.id, {
          password: this.password
        })
        .then(() => {
          this.$axios
            .post("https://pers0n4.dev:3000/auth/refresh")
            .then(res => {
              sessionStorage.token = res.data.token;
            });

          this.$store.commit(
            "GET_TOKEN",
            VueJwtDecode.decode(sessionStorage.token)
          );
          this.$axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${sessionStorage.token}`;
          this.dialog = false;
        });
    }
  }
};
</script>

<style></style>
