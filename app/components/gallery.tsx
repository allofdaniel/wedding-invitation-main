import {
  container,
  description,
  icon,
  image,
  imageContainer,
} from "./gallery.css";
import SectionTitle from "./section-title";
import { SmallLeavesArt } from "./svgs";

export const r2 = "https://pub-0bbf49e88dd74965a39e23f7f2cb868e.r2.dev";

export const images = [
  "IMG_2003.JPG",
  "IMG_2005.JPG",
  "IMG_2368.JPG",
  "IMG_2901.JPG",
  "IMG_3413.JPG",
  "IMG_3585.JPG",
];

export default function Gallery() {
  return (
    <section className={container}>
      <SectionTitle title="사진첩" />

      <span className={description}>
        여행을 좋아하는 저희는 스튜디오 대신 캠핑장에서 사진을 찍었어요.
      </span>
      <div className={imageContainer}>
        {images.map((img) => (
          <img
            className={image}
            key={img}
            src={`${r2}/${img}`}
            alt="웨딩 사진"
            loading="lazy"
          />
        ))}
      </div>

      <div className={icon}>
        <SmallLeavesArt />
      </div>
    </section>
  );
}
