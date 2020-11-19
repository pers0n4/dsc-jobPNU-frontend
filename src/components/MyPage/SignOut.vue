<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="grey" dark v-bind="attrs" text v-on="on">
        Sign out
      </v-btn>
    </template>
    <v-form v-model="isValid">
      <v-card>
        <v-card-title>
          <span class="headline">Sign Out</span>
        </v-card-title>
        <v-card-text>
          <v-text-field
            v-model="text"
            :prepend-icon="isValid ? `mdi-check` : `mdi-alert`"
            :rules="[signOutExp.test(text) ? true : false]"
            label="회원탈퇴"
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="clear">
            NO
          </v-btn>
          <v-btn
            color="blue darken-1"
            :disabled="!isValid"
            text
            @click="signOut"
          >
            YES
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </v-dialog>
</template>

<script>
export default {
  name: "SignOut",
  data: () => ({
    text: "",
    signOutExp: /회원탈퇴/,
    dialog: false,
    isValid: true
  }),
  methods: {
    clear() {
      this.text = "";
      this.dialog = false;
    },
    signOut() {
      this.$axios
        .delete("https://pers0n4.dev:3000/users/" + this.$store.state.id)
        .then(() => {
          this.$store.commit("DEL_TOKEN");
          this.$router.push({ name: `Home` });
        });
    }
  }
};
</script>

<style></style>
