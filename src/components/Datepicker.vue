<template>
  <v-row>
    <v-col cols="12" sm="6" md="4">
      <v-menu
        v-model="menu"
        :close-on-content-click="false"
        :nudge-right="40"
        transition="scale-transition"
        offset-y
        min-width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="start_date"
            label="Start Date"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
            @updated="update"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="start_date"
          @input="menu = false"
        ></v-date-picker>
      </v-menu>
    </v-col>
    <v-col cols="12" sm="6" md="4">
      <v-menu
        v-model="menu2"
        :close-on-content-click="false"
        :nudge-right="40"
        transition="scale-transition"
        offset-y
        min-width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="end_date"
            label="End Date"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="end_date"
          @input="menu2 = false"
        ></v-date-picker>
      </v-menu>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    start_date: new Date().toISOString().substr(0, 10),
    end_date: new Date().toISOString().substr(0, 10),
    menu: false,
    menu2: false
  }),
  methods: {
    update() {
      this.$emit("set-date", this.start_date, this.end_date);
    }
  }
};
</script>
