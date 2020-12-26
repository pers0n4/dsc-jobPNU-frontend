<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="grey" dark v-bind="attrs" text v-on="on">
        TEST
      </v-btn>
    </template>
    <v-form v-model="isValid">
      <v-card>
        <v-card-title>
          <span class="headline">유저 평가</span>
        </v-card-title>
        <v-card-text>
          <v-text-field
            v-model="userName"
            prepend-icon="mdi-account"
            label="User Name"
            readonly
          ></v-text-field>
        </v-card-text>

        <div class="text-center mt-12">
          <v-rating
            v-model="rating"
            color="yellow darken-3"
            background-color="grey darken-1"
            half-increments
            large
          ></v-rating>
        </div>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="clear">
            NO
          </v-btn>
          <v-btn color="blue darken-1" text :disabled="!isValid" @click="clear">
            YES
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </v-dialog>
</template>

<script>
// import VueJwtDecode from "vue-jwt-decode";

export default {
  name: "Evaluate",
  data: () => ({
    userName: "test",
    rating: 2.5,
    isValid: true,
    dialog: false
  }),
  methods: {
    clear() {
      this.dialog = false;
    }
  }
};
</script>

<style></style>
