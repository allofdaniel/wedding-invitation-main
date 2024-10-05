import {
  container,
  icon,
  phrase,
  title,
  wedding,
  weddingRow,
} from "./info.css";
import { LeavesArt } from "./svgs";

export default function Info() {
  return (
    <section className={container}>
      <div className={icon}>
        <LeavesArt />
      </div>

      <h2 className={title}>초대합니다</h2>
      <p className={phrase}>
        <b>1년의 연애를 마치고, 새로운 시작을 맞이하게 되었습니다.</b>
        <br />
        서로의 소중함을 더욱 깨닫고, 행복하게 살아가겠습니다.
        <br />
        따뜻하게 격려해 주시면 큰 힘이 되겠습니다.
      </p>

      <p className={wedding}>
        <time dateTime="2024-05-03 13:00">
          <b>2025년 5월 3일</b> 토요일 오후 <b>13시 00분</b>
        </time>
        <span>
          <b>대전 더 케이 웨딩홀</b>, 
        </span>
      </p>

      <p className={wedding}>
        <span className={weddingRow}>
          김원주 · 현한나의 아들 <b>김다니엘</b>
        </span>
        <span className={weddingRow}>
          김영종 · 조경아의 딸 <b>김제희</b>
        </span>
      </p>
    </section>
  );
}
