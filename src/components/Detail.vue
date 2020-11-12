<template>
  <v-card>
    <v-card-text>
      <v-form>
        <v-text-field
          v-model="data.title"
          label="Title"
          readonly
        ></v-text-field>
        <v-text-field v-model="data.user" label="Name" readonly></v-text-field>
        <v-text-field
          v-model="data.start_date"
          label="Start Date"
          readonly
        ></v-text-field>
        <v-text-field
          v-model="data.end_date"
          label="End Date"
          readonly
        ></v-text-field>
        <v-text-field
          v-model="data.content"
          label="Content"
          readonly
        ></v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn color="primary">Register</v-btn>
      <v-spacer></v-spacer>
      <v-btn text color="primary" @click="updateData">update</v-btn>
      <v-btn text color="primary" @click="deleteData">delete</v-btn>
      <v-btn text color="primary" @click="listData">list</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import data from "@/data";
export default {
  name: "Detail",

  data() {
    const id = this.$route.params.contentId;

    const index = data.findIndex(data => {
      return data.id == id;
    });

    return {
      data: data[index],
      contentId: id
    };
  },
  methods: {
    deleteData() {
      data.splice(this.index, 1);
      this.$router.push({
        path: "/board"
      });
    },

    updateData() {
      this.$router.push({
        name: "Create",
        params: {
          contentId: this.id
        }
      });
    },

    listData() {
      this.$router.push({
        path: "/board"
      });
    }
  }
};
</script>
