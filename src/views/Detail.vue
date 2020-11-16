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
              v-model="data.grouptype"
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
              v-model="data.start_date"
              label="Start Date"
              prepend-icon="mdi-calendar"
              readonly
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field
              v-model="data.end_date"
              label="End Date"
              prepend-icon="mdi-calendar"
              readonly
            ></v-text-field>
          </v-col>
        </v-row>
        <kakaomap></kakaomap>
        <v-text-field
          v-model="data.content"
          class="pt-8"
          label="Content"
          readonly
        ></v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <vregister class="pl-4"></vregister>
      <v-spacer></v-spacer>
      <v-btn text color="primary" @click="updateData">update</v-btn>
      <v-btn text color="primary" @click="deleteData">delete</v-btn>
      <v-btn text color="primary" @click="listData">list</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import data from "@/data";
import vregister from "@/components/Register";
import kakaomap from "@/components/Location";
export default {
  name: "Detail",
  components: {
    vregister,
    kakaomap
  },
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
