<template>
  <v-container fluid>
    <v-text-field
      prepend-icon="mdi-account-multiple"
      label="Number of Members"
      type="number"
    ></v-text-field>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
  })
};
</script>
