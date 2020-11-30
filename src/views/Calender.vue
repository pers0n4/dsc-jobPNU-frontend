<template>
  <v-row>
    <v-col cols="12" sm="8" class="my-2 px-1">
      <v-date-picker
        ref="picker"
        v-model="date"
        :events="arrayEvents"
        event-color="green lighten-1"
        full-width
      ></v-date-picker>
    </v-col>
    <v-col cols="12" sm="4" class="my-2 px-1">
      <div class="title">
        {{ date }} 의 Study
        <!-- 날짜 넣어야함 Month news ({{ pickerDate || '###change month...' }}) -->
      </div>
      <div class="subheading"></div>

      <ul class="ma-4">
        <li>{{ showSchedule() }}</li>
      </ul>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Calender",
  data: () => ({
    myStudy: null,
    date: new Date().toISOString().substr(0, 10),
    pickerDate: null,
    notes: [],
    arrayEvents: null,
    allNotes: [
      "President met with prime minister",
      "New power plant opened",
      "Rocket launch announced",
      "Global warming discussion cancelled",
      "Company changed its location"
    ]
  }),
  // watch: {
  //   pickerDate () {
  //     this.notes = [
  //       this.allNotes[Math.floor(Math.random() * 5)],
  //       this.allNotes[Math.floor(Math.random() * 5)],
  //       this.allNotes[Math.floor(Math.random() * 5)],
  //     ].filter((value, index, self) => self.indexOf(value) === index)
  //   },
  // },
  mounted() {
    this.$axios.get("/studies").then(res => {
      let studies = res.data;
      this.myStudy = studies.filter(e => {
        console.log(
          e.members.find(element => {
            return element === this.$store.state.id;
          })
        );
        return (
          e.user === this.$store.state.id ||
          e.members.find(element => {
            return element === this.$store.state.id;
          }) != undefined
        );
      });
    });

    this.arrayEvents = [...Array(6)].map(() => {
      const day = Math.floor(Math.random() * 30);
      const d = new Date();
      d.setDate(day);
      return d.toISOString().substr(0, 10);
    });
  },
  methods: {
    showSchedule() {
      return "my Schedule";
    }
  }
};
</script>
