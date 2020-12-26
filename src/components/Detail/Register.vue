<template>
  <v-row>
    <v-dialog v-model="dialog" persistent max-width="320">
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-if="isShow" color="primary" dark v-bind="attrs" v-on="on">
          Register</v-btn
        >
      </template>
      <v-card>
        <v-card-title class="headline"
          >Would you like to register for this study?</v-card-title
        >
        <v-card-text
          >If you apply for this study group, you will be able to participate in
          the study if the group leader approves.</v-card-text
        >
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false"
            >Disagree</v-btn
          >
          <v-btn
            color="green darken-1"
            text
            @click="[register(), (snackbar = true), (dialog = false)]"
            >Agree</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-snackbar v-model="snackbar" color="primary">
      {{ text }}
      <template v-slot:action="{ attrs }">
        <v-btn color="white" text v-bind="attrs" @click="snackbar = false"
          >Close</v-btn
        >
      </template>
    </v-snackbar>
  </v-row>
</template>
<script>
export default {
  props: ["id", "user"],
  data() {
    return {
      dialog: false,
      snackbar: false,
      text: "applied successfully",
      isShow: this.user != this.$store.state.id
    };
  },
  methods: {
    register() {
      this.$axios
        .post("https://pers0n4.dev:3000/studies/" + this.id + "/members", {
          members: this.$store.state.id
        })
        .then(() => {
          console.log(this.isShow);
        });
    }
  }
};
</script>
