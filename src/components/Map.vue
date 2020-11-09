<template>
  <div id="Map" style="width:500px; height:400px;"></div>
</template>

<script>
export default {
  name: Map,
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
    }
  }
};
</script>
