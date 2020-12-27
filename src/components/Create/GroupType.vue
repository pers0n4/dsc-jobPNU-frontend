<template>
  <v-container fluid>
    <v-select
      v-model="field"
      :items="items"
      label="Type of Study"
      prepend-icon="mdi-lead-pencil"
      @input="update()"
    ></v-select>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    items: ["취업", "공무원/임용", "임용고시", "어학/회화", "자격증", "기타"],
    field: ""
  }),
  methods: {
    update() {
      this.$emit("set-type", this.field);
    }
  }
};
</script>
