"use client";

import Script from "next/script";
import { container, links, title, link, info, icon } from "./location.css";
import Link from "next/link";
import SectionTitle from "./section-title";
import { FlowerArt } from "./svgs";

declare global {
  interface Window {
    kakao: any;
  }
}

const kakaoMapUrl = "https://place.map.kakao.com/26930205";
const naverMapUrl = "https://naver.me/GXElodqM";
const googleMapUrl = "https://maps.app.goo.gl/91YphbNc1zPZF86Z9";

const maps = [
  {
    name: "카카오맵",
    url: kakaoMapUrl,
  },
  {
    name: "네이버지도",
    url: naverMapUrl,
  },
  {
    name: "구글맵스",
    url: googleMapUrl,
  },
];

export default function Location() {
  return (
    <section className={container}>
      <SectionTitle title="오시는 길" className={title} />
      <div className={links}>
        {maps.map((map) => (
          <Link href={map.url} target="_blank" key={map.name} className={link}>
            {map.name}
          </Link>
        ))}
      </div>

      <Map />

      <div className={info}>
        <b>위치 안내</b>
        <span>대전광역시 서구 탄방동 700 (둔산중로 8) 한국교직원공제회 대전회관</span>
      </div>

      <div className={info}>
        <b>대중교통 이용시</b>
        <span>지하철: 1호선 탄방역 4번 출구 도보 3분, 시청역 8번 출구 도보 5분</span>
        <span>버스: 샤크존 하차 (104, 911), 한우리아파트 하차 (105, 706, 911), 탄방역/대전고용센터 하차 (104, 105, 706)</span>
      </div>

      <div className={info}>
        <b>자가용 이용시</b>
        <span>네비게이션에  &apos;대전광역시 서구 탄방동 700 (둔산중로 8) &apos; 또는  &apos;더케이컨벤션웨딩부페 &apos; 또는  &apos;한국교직원공제회 대전회관 &apos;을 입력하고 오세요</span>
      </div>

      <div className={icon}>
        <FlowerArt />
      </div>
    </section>
  );
}

function Map() {
  return (
    <>
      <Script
        type="text/javascript"
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_JS_KEY}&autoload=false&libraries=services`}
        strategy="afterInteractive"
        onLoad={() => {
          const kakao = window.kakao;
          kakao.maps.load(() => {
            const mapContainer = document.getElementById("map");
            const mapOption = {
              center: new kakao.maps.LatLng(
                36.2050, // 대전광역시의 위도
                127.2314 // 대전광역시의 경도
              ),
              level: 5,
              draggable: false,
            };
            const map = new kakao.maps.Map(mapContainer, mapOption);
            const geocoder = new kakao.maps.services.Geocoder();
            geocoder.addressSearch(
              "대전광역시 서구 탄방동 700",
              (result: any) => {
                const coords = new kakao.maps.LatLng(result[0].y, result[0].x);

                const marker = new kakao.maps.Marker({
                  map: map,
                  position: coords,
                });

                const infowindow = new kakao.maps.InfoWindow({
                  content:
                    '<div style="width:150px;text-align:center;padding:3px 0;font-size:14px;">한국교직원공제회 대전회관</div>',
                });

                infowindow.open(map, marker);

                map.setCenter(coords);

                kakao.maps.event.addListener(marker, "click", function () {
                  window.open(kakaoMapUrl);
                });
              }
            );
          });
        }}
      />
      <div id="map" style={{ width: "100%", height: "200px" }} />
    </>
  );
}
