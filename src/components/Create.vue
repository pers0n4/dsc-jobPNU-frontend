<template>
  <div>
    <v-card>
      <v-card-text>
        <v-text-field v-model="user" label="Name" />
        <v-text-field v-model="title" label="Title" />
        <vdatepicker @set-date="setDate"></vdatepicker>
        <v-textarea v-model="content" label="Content"> </v-textarea>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          @click="index !== undefined ? update() : write()"
        >
          {{ index !== undefined ? "UPDATE" : "CREATE" }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import data from "@/data";
import vdatepicker from "@/components/DatePicker";
export default {
  name: "Create",
  components: {
    vdatepicker
  },
  data() {
    const index = this.$route.params.contentId;

    return {
      data: data,
      index: index,
      user: index !== undefined ? data[index].user : "",
      title: index !== undefined ? data[index].title : "",
      content: index !== undefined ? data[index].content : "",
      start_date: index !== undefined ? data[index].start_date : "",
      end_date: index !== undefined ? data[index].end_date : ""
    };
  },
  methods: {
    setDate(start_date, end_date) {
      (this.start_date = start_date), (this.end_date = end_date);
    },
    write() {
      this.data.push({
        id: Math.random(),
        user: this.user,
        title: this.title,
        content: this.content,
        start_date: this.start_date,
        end_date: this.end_date
      });
      this.$router.push({
        path: "/board"
      });
    },

    update() {
      data[this.index].user = this.user;
      data[this.index].title = this.title;
      data[this.index].content = this.content;
      data[this.index].start_date = this.tart_date;
      data[this.index].end_date = this.end_date;
      this.$router.push({
        path: "/board"
      });
    }
  }
};
</script>
