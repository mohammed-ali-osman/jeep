"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./gallery.module.css";

type Image = {
    src: string;
    alt: string;
};

type Props = {
    images: Image[];
};

export default function Gallery({ images, }: Props) {
    const [activeIndex, setActiveIndex] = useState(0);

    if (images.length === 0) {
        return null;
    }

    const activeImage = images[activeIndex];

    return (
        <div className={styles.gallery}>
            <div
                className={styles.thumbnails}
                aria-label="Product images"
            >
                {images.map((image, index) => (
                    <button
                        key={`${image.src}-${index}`}
                        type="button"
                        className={`${styles.thumbnail} ${index === activeIndex ? styles.active : ""
                            }`}
                        onClick={() => setActiveIndex(index)}
                        aria-label={`View image ${index + 1}`}
                        aria-pressed={index === activeIndex}
                    >
                        {/* <Image
                            src={image.src}
                            alt={image.alt}
                            width={100}
                            height={100}
                            sizes="100px"
                        /> */}
                    </button>
                ))}
            </div>

            <div className={styles.preview}>
                {/* <Image
                    key={activeImage.src}
                    src={activeImage.src}
                    alt={activeImage.alt}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className={styles.previewImage}
                /> */}
            </div>
        </div>
    );
}