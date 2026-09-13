"use client";

import { useState, useEffect } from "react";
import Slide from "./Slide";
import styles from "./carousel.module.css";

const slides = [1,2,3,4,5,6,7];

export default function Carousel() {
    const [activeIndex, setActiveIndex] = useState<number>(() => (slides.length - 1) / 2);
    
    // Track auto-play movement direction (1 = forward/right, -1 = backward/left)
    const [direction, setDirection] = useState<1 | -1>(1);
    const [isHovered, setIsHovered] = useState<boolean>(false);

    useEffect(() => {
        // Pause playback if the user hovers over the carousel
        if (isHovered) return;

        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => {
                let nextIndex = prevIndex + direction;

                // Hit the right edge -> reverse direction to left
                if (nextIndex >= slides.length - 1) {
                    setDirection(-1);
                    return slides.length - 1;
                }
                
                // Hit the left edge -> reverse direction to right
                if (nextIndex <= 0) {
                    setDirection(1);
                    return 0;
                }

                return nextIndex;
            });
        }, 3000); // Transitions every 3 seconds

        return () => clearInterval(interval);
    }, [direction, isHovered]);

    const center = (slides.length - 1) / 2;
    const STEP_SIZE = 25;
    const controlsX = -(activeIndex - center) * STEP_SIZE;

    return (
        <section 
            className={styles.carousel}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Slide activeIndex={activeIndex} totalSlides={slides.length} />

            <div className={styles.pagination}>
                <div
                    className={styles.controls}
                    style={{ transform: `translateX(${controlsX}px)` }}
                >
                    {Array.from({ length: slides.length }).map((_, i) => (
                        <button
                            key={i}
                            className={i === activeIndex ? styles.active : ""}
                            onClick={() => setActiveIndex(i)}
                            aria-label={`Go to slide ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}