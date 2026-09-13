import styles from "./main.module.css";
import Carousel from "../carousel/Carousel";
import { Showcase, Product } from "../showcase/Showcase";

const PRODUCTS: Product[] = [
    {
        id: "prod_1",
        name: "Pro Mechanical Keyboard",
        category: "Electronics",
        price: 129.99,
        description: "Hot-swappable tactile switches with RGB backlighting.",
        badge: "Bestseller",
        img: "/images/keyboard.jpg",
    },
    {
        id: "prod_2",
        name: "Ergonomic Desk Chair",
        category: "Furniture",
        price: 249.50,
        description: "Breathable mesh back with adjustable lumbar support.",
    },
    {
        id: "prod_3",
        name: "Noise-Canceling Earbuds",
        category: "Electronics",
        price: 89.00,
        description: "Compact wireless audio with dynamic ANC controls.",
    },
    {
        id: "prod_4",
        name: "Minimalist Coffee Mug",
        category: "Home & Living",
        price: 18.00,
        description: "Double-wall insulated ceramic mug.",
    },
];

const CATEGORIES = ["Electronics", "Furniture", "Home & Living"];

export default function Main() {
    return (
        <main className={styles.main}>
            <Carousel />
            <Showcase />
        </main>
    );
}