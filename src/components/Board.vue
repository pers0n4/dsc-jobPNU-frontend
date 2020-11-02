<template>
  <v-container grid-list-md>
    <v-data-table :headers="headers" :items="data" @click:row="detail">
    </v-data-table>
    <v-row>
      <v-btn outlined color="blue" @click="write">스터디 생성</v-btn>
    </v-row>
  </v-container>
</template>

<script>
import data from "@/data";
export default {
  name: "Board",

  data() {
    return {
      headers: [
        {
          text: "제목",
          value: "title",
          sortable: true
        },
        {
          text: "글쓴이",
          value: "writer",
          sortable: false
        }
      ],
      data: data
    };
  },
  methods: {
    write() {
      this.$router.push({
        path: "create"
      });
    },

    detail({ id }) {
      this.$router.push({
        name: "Detail",
        params: {
          contentId: id
        }
      });
    }
  }
};
</script>
