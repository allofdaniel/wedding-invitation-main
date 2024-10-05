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
  const images = "https://r2.wedding.beomyeong.miryang.dev/_BKK6901-2.jpg";
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
