<template>
  <div>
    <v-card>
      <v-card-title>
        Search Study ✏️
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="studies"
        :search="search"
        @click:row="detail"
      >
        <template slot="items" slot-scope="props">
          <td :class="headers[0].class">{{ props.item.title }}</td>
          <td :class="headers[1].class">{{ props.item.user }}</td>
          <td :class="headers[2].class">{{ props.item.createdAt }}</td>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
// import data from "@/data";
export default {
  name: "Board",
  data: () => ({
    id: "",
    search: "",
    studies: [],
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
      },
      {
        text: "Created",
        value: "createdAt",
        sortable: false
      }
    ]
  }),

  mounted() {
    this.$axios.get("/users").then(data => console.log(data));
  },
  created() {
    this.$axios.get("https://pers0n4.dev:3000/studies").then(result => {
      this.studies = result.data;
    });
  },
  methods: {
    write() {
      this.$router.push({
        path: "create"
      });
    },
    detail(item) {
      console.log(item._id);
      this.$router.push({
        name: "Detail",
        params: {
          id: item._id
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
