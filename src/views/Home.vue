<template>
  <v-container class="ma-0 pa-0">
    <h2 class="text-h2">Users</h2>
    <v-simple-table v-if="users">
      <thead>
        <tr>
          <th>Email</th>
          <th>Name</th>
          <th>Created</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in users" :key="item.email">
          <td>{{ item.email }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.created_at }}</td>
        </tr>
      </tbody>
    </v-simple-table>
    <template v-else> Empty users </template>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  data: () => ({
    users: null
  }),
  created() {
    this.$axios.get("/users").then(result => {
      this.users = result.data;
    });
  }
};
</script>
