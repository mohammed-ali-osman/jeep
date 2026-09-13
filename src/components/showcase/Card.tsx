import Link from "next/link";
import styles from "./card.module.css";

export default function Card() {
    return (
        <div className={styles.card}>
            <Link href="/#" className={styles.link}>
                <div className={styles.img}></div>
                <div className={styles.body}>
                    <div className={styles.brand}>
                        <span>Nike</span>
                    </div>
                    <p className={styles.title}>Pro Mechanical Keyboard</p>

                    <div className={styles.description}>
                        <p>Compact, stylish keyboard with responsive keys, perfect for work, gaming, and everyday use.</p>

                        <div className={styles.ratings}>
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.63088 0.888478C5.76752 0.559961 6.23252 0.559961 6.36916 0.888478L7.49318 3.58965C7.55073 3.728 7.68078 3.82262 7.8301 3.83477L10.7481 4.06914C11.1024 4.09786 11.2457 4.53991 10.9756 4.77129L8.75295 6.67559C8.63928 6.77316 8.58932 6.92633 8.62404 7.07207L9.30373 9.91875C9.38617 10.2647 9.00964 10.5384 8.70607 10.3533L6.20803 8.82695C6.08011 8.7491 5.91886 8.74888 5.79104 8.82695L3.29397 10.3533C2.99039 10.5385 2.61385 10.2647 2.69631 9.91875L3.37502 7.07207C3.40982 6.92617 3.36003 6.77317 3.24611 6.67559L1.02443 4.77129C0.754299 4.53989 0.89754 4.09781 1.25197 4.06914L4.16897 3.83477C4.31848 3.82278 4.44925 3.72814 4.50686 3.58965L5.63088 0.888478Z" fill="#F3DF04" />
                            </svg>

                            <span>4.9</span>
                        </div>
                    </div>
                    <span className={styles.cost}>$33.99</span>

                </div>
            </Link>

            <div className={styles.actions}>
                <button className={styles.add}>Add to Cart</button>
                <button className={styles.wishlist}><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.5972 1.875C16.6791 1.875 18.75 4.90157 18.75 7.725C18.75 12.4274 10.1556 18.1249 10 18.1249C9.84445 18.1249 1.25 12.4274 1.25 7.725C1.25 4.90157 3.32083 1.875 6.40277 1.875C8.17223 1.875 9.32917 2.79923 10 3.61172C10.6708 2.79923 11.8278 1.875 13.5972 1.875Z" fill="white" stroke="#6C6C6C" strokeLinecap="round" />
                </svg>
                </button>
            </div>
        </div>

    )
}