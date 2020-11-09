<template>
  <v-container>
    <v-text-field v-model="data.title" label=" 제목" readonly></v-text-field>
    <v-text-field v-model="data.user" label="작성자" readonly></v-text-field>
    <v-text-field v-model="data.content" label="내용" readonly></v-text-field>
    <v-row>
      <v-btn outlined color="blue" @click="updateData">수정</v-btn>
      <v-btn outlined color="blue" @click="deleteData">삭제</v-btn>
      <v-btn outlined color="blue" @click="listData">목록</v-btn>
    </v-row>
  </v-container>
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
    // const item = this.$route.params.item;

    console.log(id, index);
    return {
      data: data[index],
      contentId: id
    };
  },
  methods: {
    deleteData() {
      data.splice(this.index, 1);
      this.$router.push({
        path: "/"
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
        path: "/"
      });
    }
  }
};
</script>
