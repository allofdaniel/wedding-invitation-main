"use client";

import { useEffect, useState } from "react";
import Spline from "@splinetool/react-spline";
import { container, loading, imageContainer, textContainer } from "./spline-love.css";

export default function SplineLove() {
  const [loaded, setLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState("");

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

  // D-day 및 시간 계산 함수
  useEffect(() => {
    const weddingDate = new Date("2025-05-03T13:00:00"); // 결혼식 날짜 및 시간

    const updateRemainingTime = () => {
      const now = new Date(); // 현재 시간
      const diffInMs = weddingDate.getTime() - now.getTime();

      if (diffInMs <= 0) {
        setTimeRemaining("D-00:00:00:00"); // 이미 결혼식이 지난 경우
        return;
      }

      const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
      const diffInHours = Math.floor((diffInMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const diffInMinutes = Math.floor((diffInMs % (1000 * 60 * 60)) / (1000 * 60));
      const diffInSeconds = Math.floor((diffInMs % (1000 * 60)) / 1000);

      // 남은 시간 포맷을 D-dd.hh:mm:ss 형태로 설정
      const formattedTime = `D-${String(diffInDays).padStart(2, "0")}:${String(diffInHours).padStart(2, "0")}:${String(diffInMinutes).padStart(2, "0")}:${String(diffInSeconds).padStart(2, "0")}`;
      setTimeRemaining(formattedTime);
    };

    // 1초마다 업데이트
    const intervalId = setInterval(updateRemainingTime, 1000);

    // 컴포넌트가 언마운트될 때 인터벌 정리
    return () => clearInterval(intervalId);
  }, []);

  function onLoad() {
    setLoaded(true);
  }

  return (
    <div className={container}>
      <div className={imageContainer}>
        <img
          src="https://pub-0bbf49e88dd74965a39e23f7f2cb868e.r2.dev/KakaoTalk_Photo_2024-10-06-23-39-03%20002.png"
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

      <div className={textContainer} style={{ padding: "0 10px" }}>
        <h1>
          김제희 & 김다니엘 <br />
          {timeRemaining} {/* D-day 시간 표시 */}
        </h1>
        <p>1년의 연애를 마치고, 새로운 시작을 맞이하게 되었습니다...</p>
      </div>

      {/* YouTube 비디오 삽입 및 자동 재생 */}
      <div style={{ display: "none" }}> {/* 화면에 표시되지 않도록 hidden 처리 */}
        <iframe
          width="0"
          height="0"
          src="https://www.youtube.com/embed/CnL56e3ElwI?autoplay=1&loop=1&playlist=CnL56e3ElwI"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="Wedding Song"
        ></iframe>
      </div>
    </div>
  );
}
