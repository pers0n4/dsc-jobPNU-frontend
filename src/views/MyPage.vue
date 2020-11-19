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
          <v-list-item-content>
            <v-list-item-title> Name </v-list-item-title>
            <v-list-item-subtitle>
              {{ myname }}
            </v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <ChangeName @update-name="updateName"></ChangeName>
          </v-list-item-action>
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

      <v-card-text>
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
      </v-card-text>

      <v-card-actions>
        <SignOut />
        <v-spacer />
        <ChangePass />
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import ChangeName from "@/components/MyPage/ChangeName";
import ChangePass from "@/components/MyPage/ChangePass";
import SignOut from "@/components/MyPage/SignOut";

export default {
  name: "MyPage",
  components: {
    ChangeName,
    ChangePass,
    SignOut
  },
  data: () => ({
    myname: "",
    rating: 4.5,
    imgsrc: "https://randomuser.me/api/portraits/women/85.jpg"
  }),
  created() {
    this.myname = this.$store.state.name;
    this.rating = this.$store.state.rating;
  },
  methods: {
    signOut() {
      this.$axios
        .delete("https://pers0n4.dev:3000/users/" + this.$store.state.id)
        .then(() => {
          this.$store.commit("DEL_TOKEN");
          sessionStorage.clear();
          this.$router.push({ name: "Home" });
        });
    },
    updateName(name) {
      this.myname = name;
    }
  }
};
</script>

<style></style>
