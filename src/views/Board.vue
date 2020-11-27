<template>
  <div>
    <h2 class="text-h2">Search Study ✏️</h2>
    <v-container grid-list-md>
      <v-data-table :headers="headers" :items="data" @click:row="detail">
      </v-data-table>
    </v-container>
  </div>
</template>

<script>
import data from "@/data";
export default {
  name: "Board",

  data() {
    return {
      headers: [
        {
          text: "Title",
          value: "title",
          sortable: true
        },
        {
          text: "Name",
          value: "user",
          sortable: false
        }
      ],
      data: data
    };
  },
  mounted() {
    this.$axios.get("/users").then(data => console.log(data));
  },
  methods: {
    write() {
      this.$router.push({
        path: "create"
      });
    },
    detail(item) {
      this.$router.push({
        name: "Detail",
        params: {
          contentId: item.id
        }
      });
    }
  }
};
</script>

<style>
h1 {
  text-align: center;
  margin-top: 1em;
}
</style>
