"use client";

import Spline from "@splinetool/react-spline";
import { container, loading } from "./spline-love.css";
import { useState, useEffect } from "react";

export default function SplineLove() {
  const [loaded, setLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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

  function onLoad() {
    setLoaded(true);
    console.log("Spline loaded");
  }

  return (
    <div className={container}>
      {!loaded && <span className={loading}>불러오는 중</span>}
      <Spline
        scene="https://prod.spline.design/5ZOC7Jegz859We9z/scene.splinecode"
        onLoad={onLoad}
      />
    </div>
  );
}
