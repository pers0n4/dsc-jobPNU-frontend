<template>
  <v-card>
    <v-card-title>SignUp</v-card-title>
    <v-card-text>
      <v-form v-model="isValid">
        <v-text-field
          v-model="email"
          label="E-mail (example@pusan.ac.kr)"
          prepend-icon="mdi-email"
          :rules="[emailExp.test(email) ? true : '잘못된 양식입니다.']"
        >
        </v-text-field>
        <v-text-field
          v-model="name"
          label="Name"
          prepend-icon="mdi-account-circle"
          :rules="[nameExp.test(name) ? true : '잘못된 양식입니다.']"
        >
        </v-text-field>
        <v-text-field
          v-model="password"
          label="Password(8자리 이상)"
          :type="isPasswordHide ? 'password' : 'text'"
          prepend-icon="mdi-lock-outline"
          :append-icon="isPasswordHide ? 'mdi-eye-off' : 'mdi-eye'"
          :rules="[passwordExp.test(password) ? true : '잘못된 양식입니다.']"
          @click:append="isPasswordHide = !isPasswordHide"
        >
        </v-text-field>
        <v-text-field
          v-model="passwordConfirm"
          label="Confirm"
          type="password"
          prepend-icon="mdi-lock"
          :rules="[
            password === passwordConfirm
              ? true
              : '비밀번호가 일치하지 않습니다.'
          ]"
        >
        </v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn :disabled="!isValid" @click="signUp">
        Submit
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "SignUp",
  data: () => ({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
    isValid: true,
    isPasswordHide: true,
    emailExp: /[a-zA-Z0-9]@pusan.ac.kr/,
    nameExp: /[a-zA-z가-힣]{2,}/,
    passwordExp: /[a-zA-Z0-9]{8,}/
  }),
  methods: {
    signUp() {
      this.$axios
        .post("https://pers0n4.dev:3000/users", {
          email: this.email,
          password: this.password,
          name: this.name
        })
        .then(() => {
          this.$router.push({ name: "Home" });
        });
    }
  }
};
</script>
