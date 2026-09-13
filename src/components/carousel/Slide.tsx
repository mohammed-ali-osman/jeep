import Link from "next/link";
import styles from "./slide.module.css";

export default function Slide({ activeIndex, totalSlides }: { activeIndex: number, totalSlides: number }) {
  const STEP_SIZE = 1072;
  const isEven = totalSlides % 2 === 0;

  // 1. Find the middle index (for 6 slides -> 3, for 7 slides -> 3)
  const middleIndex = Math.floor(totalSlides / 2);

  // 2. Calculate offset relative to activeIndex
  const indexOffset = middleIndex - activeIndex;

  // 3. For even counts, adjust shift by half a step (536px) to align to the gap
  const shiftX = (indexOffset * STEP_SIZE) - (isEven ? STEP_SIZE / 2 : 0);

  return (
    <div className={styles.window}>
      <div
        className={styles.track}
        style={{ transform: `translateX(${shiftX}px)` }}
      >
        {Array.from({ length: totalSlides }).map((_, i) => (
          <Link
            key={i}
            href="/#"
            className={`${styles.link} ${i === activeIndex ? styles.activeSlide : ""}`}
          >
            {/* <img src="offer-1.jpg" alt="50% off" /> */}
          </Link>
        ))}
      </div>
    </div>
  );
}