<template>
  <div id="map" style="width: 750px; height: 350px"></div>
</template>
<script>
export default {
  props: ["location", "place"],
  mounted() {
    if (window.kakao && window.kakao.maps) {
      this.initMap();
    } else {
      const script = document.getElementById("kakao");
      script.onload = () => window.kakao.maps.load(this.initMap);
    }
  },
  methods: {
    initMap() {
      const kakao = window.kakao;
      var mapContainer = document.getElementById("map"), // 지도를 표시할 div
        mapOption = {
          center: new kakao.maps.LatLng(this.location[0], this.location[1]), // 지도의 중심좌표
          level: 3 // 지도의 확대 레벨
        };

      // NOTE
      // alert(this.location);
      var map = new kakao.maps.Map(mapContainer, mapOption);

      // 마커가 표시될 위치입니다
      var markerPosition = new kakao.maps.LatLng(
        this.location[0],
        this.location[1]
      );

      // 마커를 생성합니다
      var marker = new kakao.maps.Marker({
        position: markerPosition
      });

      // 마커가 지도 위에 표시되도록 설정합니다
      marker.setMap(map);
      // var title = marker.getTitle();
      // TODO add title, link
      var link =
        "https://map.kakao.com/link/map/" +
        this.place +
        "," +
        this.location[0] +
        "," +
        this.location[1];

      var link_to =
        "https://map.kakao.com/link/to/" +
        this.place +
        "," +
        this.location[0] +
        "," +
        this.location[1];

      var iwContent =
          '<div style="padding:5px;">' +
          this.place +
          "<br><a href= " +
          link +
          ' style="color:blue" target="_blank">큰지도보기</a> <a href=' +
          link_to +
          ' style="color:blue" target="_blank">길찾기</a></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
        iwPosition = new kakao.maps.LatLng(this.location[0], this.location[1]); //인포윈도우 표시 위치입니다

      // 인포윈도우를 생성합니다
      var infowindow = new kakao.maps.InfoWindow({
        position: iwPosition,
        content: iwContent
      });

      // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
      infowindow.open(map, marker);
    }
  }
};
</script>
