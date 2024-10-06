"use client";

import { useEffect, useState } from "react";
import { container, loading } from "./spline-love.css";
import { Application } from "@splinetool/runtime";
import Spline from "@splinetool/react-spline";

export default function SplineLove() {
  const [isMobile, setIsMobile] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // 모바일 기기 감지
    const checkMobile = () => {
      const isMobileDevice = /Mobi|Android/i.test(navigator.userAgent);
      setIsMobile(isMobileDevice);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  function onLoad(spline: Application) {
    if (spline) {
      setLoaded(true);
      console.log("Spline loaded");

      // 조명 설정 (피규어가 검게 나오지 않도록 조정)
      const ambientLight = spline.findObjectByName("ambientLight");
      if (ambientLight) {
        ambientLight.intensity = 1.5; // 조명 밝기를 조정
      }

      const directionalLight = spline.findObjectByName("directionalLight");
      if (directionalLight) {
        directionalLight.intensity = 1.5; // 방향성 조명 밝기 조정
      }
    }
  }

  return (
    <div className={container}>
      {!loaded && <span className={loading}>불러오는 중</span>}
      {isMobile ? (
        <img
          src="https://pub-0bbf49e88dd74965a39e23f7f2cb868e.r2.dev/KakaoTalk_Photo_2024-10-06-00-20-21%20001.png"
          alt="Wedding Invitation"
          onLoad={() => setLoaded(true)}
          style={{
            display: loaded ? "block" : "none",
            width: "100%", // 부모 컨테이너에 맞게 크기 제한
            height: "auto", // 비율을 유지하며 크기 조정
            maxWidth: "600px", // 최대 크기 설정
            margin: "0 auto", // 중앙 정렬
          }}
        />
      ) : (
        <Spline
          scene="https://prod.spline.design/5ZOC7Jegz859We9z/scene.splinecode"
          onLoad={onLoad}
        />
      )}
    </div>
  );
}
