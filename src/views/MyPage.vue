<template>
  <v-container>
    <v-card>
      <v-card-title>My page</v-card-title>

      <v-list two-line>
        <v-list-item class="px-2 justify-center">
          <v-list-item-avatar size="200">
            <v-img :src="imgsrc"></v-img>
          </v-list-item-avatar>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon> mdi-account </v-icon>
          </v-list-item-icon>
          <v-list-item-content readonly>
            <v-list-item-title> Name </v-list-item-title>
            <v-list-item-subtitle>
              {{ this.$store.state.name }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon> mdi-email </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title> E-mail </v-list-item-title>
            <v-list-item-subtitle>
              {{ this.$store.state.email }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <div class="text-center mt-12">
        <v-rating
          v-model="rating"
          readonly
          color="yellow darken-3"
          background-color="grey darken-1"
          half-increments
          large
        ></v-rating>
      </div>

      <v-card-actions>
        <v-btn @click="signOut">Sign Out</v-btn>
        <v-spacer />
        <v-btn>OK</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "MyPage",
  data: () => ({
    myname: "test",
    email: "example@pusan.ac.kr",
    rating: 4.5,
    imgsrc: "https://randomuser.me/api/portraits/women/85.jpg"
  }),
  methods: {
    signOut() {
      this.$axios
        .delete("https://pers0n4.dev:3000/users/" + this.$store.state.id)
        .then(() => {
          this.$store.commit("CLEAR_INFO");
          sessionStorage.token = null;
          this.$router.push({ name: "Home" });
        });
    }
  }
};
</script>

<style></style>
