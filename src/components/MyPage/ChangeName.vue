<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="grey" dark v-bind="attrs" text v-on="on">
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-text-field
            v-model="myname"
            prepend-icon="mdi-account"
            label="Name"
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Close
          </v-btn>
          <v-btn color="blue darken-1" text @click="edit">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import VueJwtDecode from "vue-jwt-decode";

export default {
  name: "ChangeName",
  data: () => ({
    myname: "",
    dialog: false
  }),
  methods: {
    edit() {
      console.log(this.myname);

      this.$axios
        .patch("https://pers0n4.dev:3000/users/" + this.$store.state.id, {
          name: this.myname
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
          this.$emit("update-name", this.myname);
          this.dialog = false;
        });
    }
  }
};
</script>

<style></style>
