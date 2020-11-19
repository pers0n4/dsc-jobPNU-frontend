<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="grey" dark v-bind="attrs" text v-on="on">
        Change Password
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">Change Password</span>
      </v-card-title>
      <v-card-text>
        <v-text-field
          v-model="text"
          prepend-icon="mdi-account"
          label="Name"
        ></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="dialog = false">
          NO
        </v-btn>
        <v-btn color="blue darken-1" text @click="dialog = false">
          YES
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "ChangePass",
  data: () => ({
    text: "",
    dialog: false
  })
};
</script>

<style></style>
