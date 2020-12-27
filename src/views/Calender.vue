<template>
  <v-card class="mt-5">
    <v-row>
      <v-col cols="10" sm="6" class="mx-4 my-4 px-1">
        <v-date-picker
          ref="picker"
          v-model="date"
          :events="arrayEvents"
          :event-color="date => (date[9] % 2 ? 'red' : 'yellow')"
          full-width
        ></v-date-picker>
      </v-col>
      <v-col cols="14" sm="4" class="mx-4 my-4 px-1">
        <div class="title">
          {{ date }} 의 Study
          <!-- 날짜 넣어야함 Month news ({{ pickerDate || '###change month...' }}) -->
        </div>
        <div class="subheading"></div>

        <ul class="ma-4">
          <li v-for="sche in schedules" :key="sche.index">{{ sche }}</li>
        </ul>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "Calender",
  data: () => ({
    myStudy: null,
    date: new Date().toISOString().substr(0, 10),
    pickerDate: null,
    notes: [],
    arrayEvents: [],
    schedules: []
  }),
  watch: {
    date() {
      let sche = [];

      console.log(this.myStudy);
      for (var i = 0; i < this.myStudy.length; i++) {
        if (this.date == this.myStudy[i].start_date.substr(0, 10))
          sche.push(this.myStudy[i].title);
        if (this.date == this.myStudy[i].end_date.substr(0, 10))
          sche.push(this.myStudy[i].title);
      }
      this.schedules = sche;
    }
  },
  mounted() {
    this.$axios.get("/studies").then(res => {
      let studies = res.data;
      this.myStudy = studies.filter(e => {
        e.members.find(element => {
          return element === this.$store.state.id;
        });
        return (
          e.user === this.$store.state.id ||
          e.members.find(element => {
            return element === this.$store.state.id;
          }) != undefined
        );
      });

      for (var i = 0; i < this.myStudy.length; i++) {
        this.arrayEvents.push(this.myStudy[i].start_date.substr(0, 10));
        this.arrayEvents.push(this.myStudy[i].end_date.substr(0, 10));
      }
    });
  },
  methods: {}
};
</script>
