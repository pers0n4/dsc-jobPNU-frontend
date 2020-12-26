<template>
  <v-card>
    <v-card-text>
      <v-form>
        <v-text-field
          v-model="data.title"
          label="Title"
          readonly
        ></v-text-field>
        <v-row>
          <v-col cols="12" sm="6" md="4">
            <v-text-field
              v-model="data.field"
              label="Type of Study"
              prepend-icon="mdi-lead-pencil"
              readonly
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field
              v-model="data.num"
              label="Number of Members"
              prepend-icon="mdi-account-multiple"
              readonly
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row class="pt-3">
          <v-col cols="12" sm="6" md="4">
            <v-text-field
              v-model="start_date"
              label="Start Date"
              prepend-icon="mdi-calendar"
              readonly
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field
              v-model="end_date"
              label="End Date"
              prepend-icon="mdi-calendar"
              readonly
            ></v-text-field>
          </v-col>
        </v-row>
        <kakaomap :location="data.location.coordinates"></kakaomap>
        <v-text-field
          v-model="data.content"
          class="pt-8"
          label="Content"
          readonly
        ></v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <vregister :id="id" class="pl-4"></vregister>
      <v-spacer></v-spacer>
      <v-btn text color="primary" @click="updateData">update</v-btn>
      <v-btn text color="primary" @click="deleteData">delete</v-btn>
      <v-btn text color="primary" @click="listData">list</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import vregister from "@/components/Detail/Register";
import kakaomap from "@/components/Detail/Location";
export default {
  name: "Detail",
  components: {
    vregister,
    kakaomap
  },

  data() {
    const id = this.$route.params.id;

    return {
      data: [],
      id: id,
      start_date: "",
      end_date: ""
    };
  },
  created() {
    this.$axios
      .get("https://pers0n4.dev:3000/studies/" + this.id)
      .then(result => {
        this.data = result.data;
        this.start_date = this.data.start_date.toString().substr(0, 10);
        this.end_date = this.data.end_date.toString().substr(0, 10);
      });
  },
  methods: {
    deleteData() {
      // data.splice(this.index, 1);
      // this.$router.push({
      //   path: "/board",
      // });
    },
    updateData() {
      this.$router.push({
        name: "Create",
        params: {
          id: this.id
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
