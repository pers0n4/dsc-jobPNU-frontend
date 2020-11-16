<template>
  <v-container fluid>
    <v-select
      prepend-icon="mdi-account-multiple"
      :items="items"
      label="Number of Members"
    ></v-select>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
  })
};
</script>
