<template>
  <div>
    <v-card>
      <v-card-text>
        <v-text-field v-model="title" label="Title" />
        <v-row>
          <v-col class="pl-0" cols="12" sm="6" md="4">
            <vgrouptype></vgrouptype>
          </v-col>
          <v-col class="pl-0" cols="12" sm="6" md="4">
            <vpersons></vpersons>
          </v-col>
        </v-row>
        <vdatepicker @set-date="setDate"></vdatepicker>
        <kakaomap></kakaomap>
        <v-textarea v-model="content" label="Content"></v-textarea>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          @click="index !== undefined ? update() : write()"
          >{{ index !== undefined ? "UPDATE" : "CREATE" }}</v-btn
        >
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import data from "@/data";
import vdatepicker from "@/components/DatePicker";
import vgrouptype from "@/components/GroupType";
import vpersons from "@/components/Persons";

import kakaomap from "@/components/Map";

export default {
  name: "Create",
  components: {
    vdatepicker,
    vgrouptype,
    vpersons,
    kakaomap
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
      data[this.index].start_date = this.start_date;
      data[this.index].end_date = this.end_date;
      this.$router.push({
        path: "/board"
      });
    }
  }
};
</script>
