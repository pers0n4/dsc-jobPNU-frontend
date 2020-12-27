<template>
  <div>
    <v-card>
      <v-card-text>
        <v-text-field v-model="title" label="Title" />
        <v-row>
          <v-col class="pl-0" cols="12" sm="6" md="4">
            <vgrouptype @set-type="setType"></vgrouptype>
          </v-col>
          <v-col class="pl-0" cols="12" sm="6" md="4">
            <v-container fluid>
              <v-text-field
                v-model="num"
                prepend-icon="mdi-account-multiple"
                label="Number of Members"
                type="number"
                placeholder="Only positive integers can be entered"
                :rules="rules"
              ></v-text-field>
            </v-container>
          </v-col>
        </v-row>
        <vdatepicker @set-date="setDate"></vdatepicker>
        <kakaomap @set-location="setLocate"></kakaomap>
        <v-textarea
          v-model="content"
          label="Content"
          auto-grow
          clearable
          clear-icon="mdi-close-circle"
        ></v-textarea>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" @click="write">{{ "CREATE" }}</v-btn>
        <v-snackbar v-model="snackbar" color="error">
          {{ text }}
          <template v-slot:action="{ attrs }">
            <v-btn text v-bind="attrs" @click="snackbar = false"> Close </v-btn>
          </template>
        </v-snackbar>
        <!-- <v-btn color="primary" @click="index !== undefined ? update() : write()">{{ index !== undefined ? "UPDATE" : "CREATE" }}</v-btn>-->
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import vdatepicker from "@/components/Create/DatePicker";
import vgrouptype from "@/components/Create/GroupType";
import kakaomap from "@/components/Create/Map";

export default {
  name: "Create",
  components: {
    vdatepicker,
    vgrouptype,
    kakaomap
  },
  data() {
    return {
      user: "",
      title: "",
      content: "",
      num: "",
      start_date: "",
      end_date: "",
      location: [],
      field: "",
      place: "",
      snackbar: false,
      text: "Please make sure you have completed all the fields correctly.",
      rules: [
        v => !!v || "Please enter a number.",
        v => (v && v > 0) || "Number of members should be greater than 0."
      ]
    };
  },
  created() {
    this.user = this.$store.state.id;
  },
  methods: {
    write() {
      if (
        this.title &&
        this.field &&
        this.content &&
        !isNaN(this.num) &&
        this.num > 0 &&
        this.location &&
        this.start_date &&
        this.end_date
      ) {
        this.$axios
          .post("https://pers0n4.dev:3000/studies", {
            user: this.user,
            title: this.title,
            field: this.field,
            location: {
              type: "Point",
              coordinates: this.location,
              title: this.place
            },
            num: this.num,
            content: this.content,
            start_date: this.start_date,
            end_date: this.end_date
          })
          .then(() => {
            this.$router.push({ name: "Board" });
          });
      } else {
        this.snackbar = true;
      }
    },

    update() {
      this.$router.push({
        path: "/board"
      });
    },
    setDate(start_date, end_date) {
      this.start_date = start_date;
      this.end_date = end_date;
    },
    setType(field) {
      this.field = field;
    },
    setLocate(lat, lng, place) {
      this.location = [lat, lng];
      this.place = place;
    }
  }
};
</script>
