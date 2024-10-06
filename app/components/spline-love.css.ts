import { style } from "@vanilla-extract/css";

export const container = style({
  maxWidth: "768px",  // 최대 너비 제한
  minWidth: "320px",
  margin: "0 auto",   // 화면 중앙 정렬
  backgroundColor: "#ffffff",
  display: "flex",
  flexDirection: "column",
  alignItems: "center", // 가운데 정렬 추가
});

export const loading = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: 16,
  color: "white",
  position: "absolute",
  top: "45%",
  left: "45%",
});

export const imageContainer = style({
  width: "100%",
  height: "auto",
  maxWidth: "100%", // 컨테이너 너비를 넘지 않도록 제한
  objectFit: "cover", // 이미지 비율 유지
});
