import React, { useEffect, useRef, useState } from "react";
import ContentTitleBox from "../../component/common/ContentTitleBox";
import ContentBox from "../../component/common/ContentBox";
import { kcisaApi } from "../../api/KcisaApi";
import "./locationMap.scss";

const { kakao } = window;

function LocationMap() {
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [positions, setPositions] = useState([]);
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const apiData = async () => {
      await kcisaApi
        .get("", {
          params: {
            serviceKey: process.env.REACT_APP_KCISA_API_KEY,
            numOfRows: 500,
            pageNo: 1,
          },
        })
        .then((res) => {
          const settingData = [];
          res.data.response.body.items.item.map((e) => {
            const [lat, lng] = e.coordinates.replace(/N|E/g, "").trim().split(", ");
            const nData = parseFloat(lat); // 위도
            const eData = parseFloat(lng); // 경도
            settingData.push({ ...e, latlng: new window.kakao.maps.LatLng(nData, eData) });
          });
          setPositions(settingData);
        });
    };
    apiData();
  }, []);

  useEffect(() => {
    const mapContainer = mapContainerRef.current;

    // 지도 옵션 설정
    const mapOption = {
      center: new window.kakao.maps.LatLng(37.566666, 126.978255),
      level: 3,
    };

    // 지도 생성
    const map = new window.kakao.maps.Map(mapContainer, mapOption);

    // 마커와 인포윈도우 생성
    positions.forEach((position) => {
      const marker = new window.kakao.maps.Marker({
        map: map,
        position: position.latlng,
      });
      // 마커에 click 이벤트를 등록합니다
      kakao.maps.event.addListener(marker, "click", function () {
        setSelectedMarker(position);
      });
    });
  }, [positions]);

  return (
    <div className="has-head">
      <div className="map-content-wrap">
        <ContentTitleBox title="지도에서 둘러보기" subTitle="나의 반려동물과 갈 수 있는 장소를 지도에서 둘러보아요!" image="map" />
        {selectedMarker ? (
          <ContentBox
            item={{
              title: selectedMarker.title,
              category1: selectedMarker.category1,
              address: selectedMarker.address,
              description: selectedMarker.description,
              charge: selectedMarker.charge,
              tel: selectedMarker.tel,
            }}
          />
        ) : (
          ""
        )}
      </div>

      <div id="map" ref={mapContainerRef} style={{ height: "calc(100vh - 160px)", width: "100%" }}></div>
    </div>
  );
}

export default LocationMap;
