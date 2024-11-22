import React, { useEffect } from "react";

const { kakao } = window;

function LocationMap() {
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(37.394726159, 127.111209047), //지도의 중심좌표.
      level: 6, //지도의 레벨(확대, 축소 정도)
    };
    var map = new kakao.maps.Map(container, options);
  }, []);

  return <div id="map" style={{ height: "500px", width: "100%" }}></div>;
}

export default LocationMap;
