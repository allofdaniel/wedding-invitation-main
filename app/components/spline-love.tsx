"use client";

import Spline from "@splinetool/react-spline";
import { container, loading } from "./spline-love.css";
import { Application } from "@splinetool/runtime";
import { useState } from "react";

export default function SplineLove() {
  const [loaded, setLoaded] = useState(false);

  function onLoad(spline: Application) {
    if (spline) {
      setLoaded(true);
      console.log("Spline loaded");

      // 조명 설정을 추가하여 피겨가 검게 보이지 않도록 조정
      const ambientLight = spline.findObjectByName("ambientLight");
      if (ambientLight) {
        ambientLight.intensity = 1.5; // 주변광 밝기를 높여줍니다
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
      <Spline
        scene="https://prod.spline.design/5ZOC7Jegz859We9z/scene.splinecode"
        onLoad={onLoad}
      />
    </div>
  );
}
