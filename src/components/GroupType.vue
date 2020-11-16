<template>
  <v-container fluid>
    <v-select
      :items="items"
      label="Type of Study"
      prepend-icon="mdi-lead-pencil"
    ></v-select>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    items: ["취업", "공무원/임용", "임용고시", "어학/회화", "자격증", "기타"]
  })
};
</script>
