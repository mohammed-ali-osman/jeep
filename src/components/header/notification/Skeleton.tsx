import styles from "./skeleton.module.css"

export function Loading() {
    return (
        <div className={styles.message}>
            <div className={styles.left}>
                <div className={`${styles.icon} ${styles.skeleton}`}></div>
            </div>

            <div className={styles.right}>
                <div className={styles.header}>
                    <div className={`${styles.title} ${styles.skeleton}`}></div>
                    <div className={`${styles.timestamp} ${styles.skeleton}`}></div>
                </div>

                <div className={`${styles.line1} ${styles.skeleton}`}></div>
                <div className={`${styles.line2} ${styles.skeleton}`}></div>
            </div>
        </div>
    )
}