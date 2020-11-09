<template>
  <div>
    <v-text-field v-model="user" label="작성자" />
    <v-text-field v-model="title" label="제목" />
    <vdatepicker></vdatepicker>
    <h3>지도 자리</h3>
    <div id="map" style="width:500px; height:400px;"></div>
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
import vdatepicker from "@/components/Datepicker";
//import kakaomap from "@/components/Map";
export default {
  name: "Create",
  components: {
    vdatepicker
  },
  data() {
    const index = this.$route.params.contentId;
    // const index = data.findIndex(data => {
    //     return data.id == id;
    // });
    return {
      data: data,
      index: index,
      //index: index,
      user: index !== undefined ? data[index].user : "",
      title: index !== undefined ? data[index].title : "",
      content: index !== undefined ? data[index].content : ""
    };
  },
  mounted() {
    window.kakao && window.kakao.maps
      ? this.initMap()
      : this.addKakaoMapScript();
  },
  methods: {
    addKakaoMapScript() {
      const script = document.createElement("script");
      /* global kakao */
      script.onload = () => kakao.maps.load(this.initMap);
      script.src =
        "http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey==9e48203b28fbca3105377d7d0450165d&libraries=services,clusterer,drawing";
      document.head.appendChild(script);
    },
    initMap() {
      var mapContainer = document.getElementById("map"), // 지도를 표시할 div
        mapOption = {
          center: new kakao.maps.LatLng(37.566826, 126.9786567), // 지도의 중심좌표
          level: 3 // 지도의 확대 레벨
        };
      var map = new kakao.maps.Map(mapContainer, mapOption);
      //마커추가하려면 객체를 아래와 같이 하나 만든다.
      var marker = new kakao.maps.Marker({
        position: map.getCenter()
      });
      marker.setMap(map);
    },
    write() {
      this.data.push({
        id: Math.random(),
        user: this.user,
        title: this.title,
        content: this.content
      });
      this.$router.push({
        path: "/"
      });
    },

    update() {
      data[this.index].user = this.user;
      data[this.index].title = this.title;
      data[this.index].content = this.content;
      this.$router.push({
        path: "/"
      });
    }
  }
};
</script>
