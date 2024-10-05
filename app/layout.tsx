import type { Metadata } from "next";
import { gowunBatang } from "./style/fonts/gowunBatang";
import "./global.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={gowunBatang.className}>
      <body>{children}</body>
    </html>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const title = "김제희, 김다니엘 결혼합니다";
  const description = "25년 5월 3일 13시 00분, 대전 더 케이 웨딩홀";
  // 기존의 이미지를 새 이미지 URL로 교체
  const images = "https://pub-0bbf49e88dd74965a39e23f7f2cb868e.r2.dev/KakaoTalk_Photo_2024-10-06-00-20-21%20002.png"; 
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images,
      locale: "ko_KR",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images,
    },
    other: {
      ["twitter:label1"]: "날짜",
      ["twitter:data1"]: "2024.05.03 13:00",
      ["twitter:label2"]: "장소",
      ["twitter:data2"]: "대전 더 케이 웨딩홀",
    },
  };
}
