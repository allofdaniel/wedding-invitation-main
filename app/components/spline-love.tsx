"use client";

import { useEffect, useState } from "react";
import Spline from "@splinetool/react-spline";
import { container, loading } from "./spline-love.css";

export default function SplineLove() {
  const [loaded, setLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // 모바일 기기 감지
  useEffect(() => {
    const checkMobile = () => {
      const isMobileDevice = /Mobi|Android/i.test(navigator.userAgent);
      setIsMobile(isMobileDevice);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  function onLoad() {
    setLoaded(true);
  }

  return (
    <div className={container}>
      {!loaded && <span className={loading}>불러오는 중</span>}
      {isMobile ? (
        // 모바일에서는 이미지로 대체
        <img
          src="https://pub-0bbf49e88dd74965a39e23f7f2cb868e.r2.dev/KakaoTalk_Photo_2024-10-06-00-20-21%20001.png"
          alt="대체 이미지"
          style={{ width: "100%", height: "auto" }}
        />
      ) : (
        // 데스크탑에서는 Spline 사용
        <Spline
          scene="https://prod.spline.design/5ZOC7Jegz859We9z/scene.splinecode"
          onLoad={onLoad}
        />
      )}
    </div>
  );
}
