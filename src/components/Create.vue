<template>
  <div>
    <v-text-field v-model="writer" label="글쓴이" />
    <v-text-field v-model="title" label="제목" />
    <div id="map" style="width:100%;height:100%;"></div>

    <v-text-field label="시작 일자" prepend-icon="mdi-calendar-month" />
    <v-calendar ref="calendar" :start="start" :type="type"> </v-calendar>
    <v-text-field label="종료 일자" prepend-icon="mdi-calendar-month" />
    <v-textarea v-model="content" label="내용"> </v-textarea>
    <v-btn
      outlined
      color="blue"
      @click="index !== undefined ? update() : write()"
    >
      {{ index !== undefined ? "수정" : "작성" }}
    </v-btn>
  </div>
</template>

<script>
import data from "@/data";
export default {
  name: "Create",

  mounted() {
    if (window.kakao && window.kakao.maps) {
      this.initMap();
    } else {
      const script = document.createElement("script");
      /* global kakao */
      script.onload = () => kakao.maps.load(this.initMap);
      script.src =
        "http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=b2a7a110050fa2f2c563f4ae4eff495c";
      document.head.appendChild(script);
    }
  },

  data() {
    const index = this.$route.params.contentId;
    return {
      data: data,
      index: index,
      writer: index !== undefined ? data[index].writer : "",
      title: index !== undefined ? data[index].title : "",
      content: index !== undefined ? data[index].content : ""
    };
  },
  methods: {
    initMap() {
      var container = document.getElementById("map");
      var options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 3
      };

      var map = new kakao.maps.Map(container, options);
      map.setMapTypeId(kakao.maps.MapTypeId.HYBRID);
    },

    write() {
      this.data.push({
        id: Math.random(),
        writer: this.writer,
        title: this.title,
        content: this.content
      });
      this.$router.push({
        path: "/"
      });
    },
    update() {
      data[this.index].writer = this.writer;
      data[this.index].title = this.title;
      data[this.index].content = this.content;
      this.$router.push({
        path: "/"
      });
    }
  }
};
</script>
