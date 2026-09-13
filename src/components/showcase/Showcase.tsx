"use client";

import { useState, useMemo } from "react";
import styles from "./showcase.module.css";
import Card from "./Card";

export interface Product {
    id: string;
    name: string;
    category: string;
    price: number;
    description: string;
    img?: string;
    badge?: string;
}

export function Showcase() {
    return (
        <section className={styles.showcase}>
            <div className={styles.toolbar}>

            </div>
            <div className={styles.department}>
                <h2 className={styles.header}>Department</h2>
                <div className={styles.products}>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
            <div className={styles.department}>
                <h2 className={styles.header}>Department</h2>
                <div className={styles.products}>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </section>
    )
}