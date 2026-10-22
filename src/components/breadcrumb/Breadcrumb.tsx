import React from "react";
import Link from "next/link";
import styles from "./breadcrumb.module.css";

export default function Breadcrumb() {
    const data = [
        {
            name: "Men",
            href: "/department/men"
        },
        {
            name: "Clothes",
            href: "/department/men/clothes"
        },
        {
            name: "Clothes",
            href: "/department/men/clothers"
        }
    ]

    return (
        <nav
            aria-label="Breadcrumb"
            className={styles.breadcrumb}
        >
            {data.map((cat, i) => (
                <React.Fragment key={cat.href}>
                    {i > 0 && <span>&gt;</span>}
                    <span key={i}>
                        <Link href={cat.href} className={styles.link}>{cat.name}</Link>
                    </span>
                </React.Fragment>
            ))}
        </nav>
    )
}