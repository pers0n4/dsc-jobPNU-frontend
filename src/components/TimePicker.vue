<template>
  <v-row>
    <v-col>
      <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        :nudge-right="40"
        :return-value.sync="start_time"
        transition="scale-transition"
        offset-y
        max-width="290px"
        min-width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="start_time"
            label="Start Time"
            prepend-icon="mdi-clock-time-four-outline"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-time-picker
          v-if="menu"
          v-model="start_time"
          full-width
          @click:minute="$refs.menu.save(start_time)"
        ></v-time-picker>
      </v-menu>
    </v-col>
    <v-col>
      <v-menu
        ref="menu2"
        v-model="menu2"
        :close-on-content-click="false"
        :nudge-right="40"
        :return-value.sync="end_time"
        transition="scale-transition"
        offset-y
        max-width="290px"
        min-width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="end_time"
            label="End Time"
            prepend-icon="mdi-clock-time-four-outline"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-time-picker
          v-if="menu2"
          v-model="end_time"
          full-width
          @click:minute="$refs.menu2.save(end_time)"
        ></v-time-picker>
      </v-menu>
    </v-col>
  </v-row>
</template>
<script>
export default {
  data: () => ({
    start_time: null,
    end_time: null,
    menu: false,
    menu2: false,
    modal: false,
    modal2: false
  }),
  methods: {
    update() {
      this.$emit("set-time", this.start_time, this.end_time);
    }
  }
};
</script>
