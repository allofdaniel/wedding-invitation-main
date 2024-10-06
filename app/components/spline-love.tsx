"use client";

import { useEffect, useState } from "react";
import Spline from "@splinetool/react-spline";
import { container, loading, imageContainer, textContainer } from "./spline-love.css";

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
      <div className={imageContainer}>
        <img
          src="https://pub-0bbf49e88dd74965a39e23f7f2cb868e.r2.dev/KakaoTalk_Photo_2024-10-06-00-20-21%20001.png"
          alt="대체 이미지"
          style={{
            width: "100%",
            height: "auto",
            maxWidth: isMobile ? "90%" : "600px", // 모바일에서는 90%로, 데스크탑에서는 최대 600px
            margin: "0 auto", // 중앙 정렬
            display: "block",
            marginBottom: isMobile ? "20px" : "40px", // 이미지와 텍스트 사이의 여백 조정
          }}
        />
      </div>

      <div className={textContainer} style={{ padding: "0 10px" }}> {/* padding을 통해 텍스트와 이미지 간 간격 조정 */}
        <h1>김제희 & 김다니엘</h1>
        <p>1년의 연애를 마치고, 새로운 시작을 맞이하게 되었습니다...</p>
      </div>
    </div>
  );
}
