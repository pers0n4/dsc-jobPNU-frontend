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
            <v-list-item-subtitle> {{ myname }} </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon> mdi-email </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title> E-mail </v-list-item-title>
            <v-list-item-subtitle> {{ email }} </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-card-text>
        <div class="text-center mt-12">
          <v-rating
            v-model="rating"
            readonly="true"
            color="yellow darken-3"
            background-color="grey darken-1"
            half-increments
            large
          ></v-rating>
        </div>
      </v-card-text>

      <v-card-actions>
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
  })
};
</script>

<style></style>
