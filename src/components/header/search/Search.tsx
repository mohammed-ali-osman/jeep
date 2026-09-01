'use client';
import { useState, useRef, useEffect } from "react";
import styles from "./search.module.css";
import style from "../../layout/header.module.css"
import { Dropdown } from "@/components/Dropdown";

export interface Product {
    id: string;
    name: string;
    department: string;
    trending: boolean;
}

export interface Search {
    tag?: { id: string; name: string; count: number };
    products: Product[];
}

export default function Search() {
    const [filter, setFilter] = useState("All");
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<Search>({ tag: undefined, products: [] });
    const [isLoading, setIsLoading] = useState(false);
    // const [error, setError] = useState<string | null>(null);
    const [keybind, setKeybind] = useState("Ctrl + K");
    const [isOpen, setIsOpen] = useState(false);

    const inputRef = useRef<HTMLInputElement | null>(null);
    const searchRef = useRef<HTMLDivElement | null>(null);

    const filters = [
        { label: "All" },
        { label: "Electronics" },
        { label: "Fashion" },
        { label: "Home & Garden" },
        { label: "Sports" },
        { label: "Toys" },
        { label: "Personal Care" },
        { label: "Health & Wellness" },
        { label: "Automotive" },
        { label: "Books" },
        { label: "Movies & TV" },
        { label: "Music" },
        { label: "Gaming" },
        { label: "Computers" },
        { label: "Phones" },
        { label: "Office Supplies" },
        { label: "Pet Supplies" },
        { label: "Baby & Kids" },
        { label: "Jewelry" },
        { label: "Watches" },
        { label: "Shoes" },
        { label: "Bags & Luggage" },
        { label: "Furniture" },
        { label: "Kitchen & Dining" },
        { label: "Appliances" },
        { label: "Tools & Hardware" },
        { label: "Arts & Crafts" },
        { label: "Collectibles" },
        { label: "Groceries" },
        { label: "Outdoor & Camping" },
        { label: "Fitness" },
        { label: "Industrial" },
        { label: "Gift Cards" },
        { label: "Luxury" },
        { label: "Handmade" },
        { label: "Digital Products" },
    ];

    useEffect(() => {
        const trimmedQuery = query.trim();

        if (!trimmedQuery) {
            setResults({ tag: undefined, products: [] });
            // setError(null);
            setIsOpen(false);
            return;
        }

        const controller = new AbortController();

        const handler = setTimeout(async () => {
            setIsLoading(true);
            // setError(null);

            try {
                const params = new URLSearchParams({
                    q: trimmedQuery,
                    department: filter,
                });

                const res = await fetch(`/api/search?${params.toString()}`, {
                    signal: controller.signal,
                });

                if (!res.ok) {
                    throw new Error(`Server returned status ${res.status}`);
                }

                const data = await res.json();

                if (Array.isArray(data)) {
                    setResults({ tag: undefined, products: data });
                } else {
                    setResults({
                        tag: data.tag,
                        products: data.products || [],
                    });
                }
                setIsOpen(true);
            } catch (err: any) {
                if (err.name === "AbortError") return;

                console.error("Search API Error:", err.message);
                // setError("Unable to connect to search service");
                setResults({ tag: undefined, products: [] });
                setIsOpen(false);
            } finally {
                setIsLoading(false);
            }
        }, 150);

        return () => {
            clearTimeout(handler);
            controller.abort();
        };
    }, [query, filter]);

    // Close menu when clicking outside of the search wrapper
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (
                searchRef.current &&
                !searchRef.current.contains(e.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    useEffect(() => {
        const isMac = /Mac/i.test(navigator.platform) || /Macintosh/i.test(navigator.userAgent);

        if (isMac) {
            setKeybind("⌘ + K");
        }

        const keyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
                e.preventDefault();
                inputRef.current?.focus();
            }
        };

        window.addEventListener("keydown", keyDown);
        return () => window.removeEventListener("keydown", keyDown);
    }, []);

    const hasResults = Boolean(results.tag || results.products.length > 0);

    return (
        <div ref={searchRef} className={styles.search} role="search" style={{ position: "relative" }}>
            <Dropdown
                options={filters}
                value={filter}
                onChange={setFilter}
                showArrow={true}
                styles={{
                    container: undefined,
                    button: styles.filter,
                    menu: styles.filterMenu,
                    menuOpen: styles.open,
                    list: style.list,
                    option: style.option,
                    selectedOption: styles.selected
                }}
            />

            <input
                ref={inputRef}
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => {
                    if (query.trim().length > 0 && hasResults) {
                        setIsOpen(true);
                    }
                }}
                placeholder="Search products..."
                name="search"
                className={styles.form}
                aria-label="Search product"
                autoComplete="off"
            />

            <span className={styles.keybind} aria-hidden="true">
                {keybind}
            </span>

            <button type="button" className={styles.submit} aria-label="Submit search">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M20.0802 20L16.2224 16.1422" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M11.1111 18.2223C15.0385 18.2223 18.2223 15.0385 18.2223 11.1111C18.2223 7.18377 15.0385 4 11.1111 4C7.18377 4 4 7.18377 4 11.1111C4 15.0385 7.18377 18.2223 11.1111 18.2223Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>

            {/* Reactive Dropdown Menu - Only renders when open and not loading */}
            {isOpen && !isLoading && hasResults && (
                <div className={styles.menu}>
                    <ul className={styles.list} role="listbox">
                        {/* Render matching tag */}
                        {results.tag && (
                            <li
                                tabIndex={0}
                                key={results.tag.id}
                                className={styles.tags}
                                role="option"
                                aria-label={results.tag!.name}
                                onClick={() => {
                                    setQuery(results.tag!.name);
                                    setIsOpen(false);
                                }}
                            >
                                <div>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.1191 2C14.6028 2.0002 18.2373 5.63539 18.2373 10.1191C18.2372 11.9502 17.6301 13.639 16.6074 14.9971C16.7184 15.0528 16.8229 15.1267 16.915 15.2197L20.7852 19.1279C21.2411 19.5883 21.2368 20.3302 20.7754 20.7852C20.3138 21.2401 19.5693 21.2359 19.1133 20.7754L15.2432 16.8672C15.1568 16.78 15.0866 16.6827 15.0332 16.5791C13.6689 17.6185 11.9667 18.2372 10.1191 18.2373C5.63539 18.2373 2.0002 14.6028 2 10.1191C2 5.63527 5.63527 2 10.1191 2ZM10.1279 4.15137C6.82735 4.15137 4.15137 6.82735 4.15137 10.1279C4.1516 13.4283 6.82749 16.1035 10.1279 16.1035C13.4283 16.1035 16.1043 13.4283 16.1045 10.1279C16.1045 6.82737 13.4285 4.15139 10.1279 4.15137Z" fill="#6C6C6C" />
                                    </svg>
                                    <span>{results.tag.name}</span>
                                </div>
                                <span>{results.tag.count}</span>
                            </li>
                        )}

                        {/* Render matching products */}
                        {results.products.map((product) => (
                            <li
                                tabIndex={0}
                                key={product.id}
                                className={styles.item}
                                role="option"
                                aria-label={product.name}
                                onClick={() => {
                                    setQuery(product.name);
                                    setIsOpen(false);
                                }}
                            >
                                <div>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.1191 2C14.6028 2.0002 18.2373 5.63539 18.2373 10.1191C18.2372 11.9502 17.6301 13.639 16.6074 14.9971C16.7184 15.0528 16.8229 15.1267 16.915 15.2197L20.7852 19.1279C21.2411 19.5883 21.2368 20.3302 20.7754 20.7852C20.3138 21.2401 19.5693 21.2359 19.1133 20.7754L15.2432 16.8672C15.1568 16.78 15.0866 16.6827 15.0332 16.5791C13.6689 17.6185 11.9667 18.2372 10.1191 18.2373C5.63539 18.2373 2.0002 14.6028 2 10.1191C2 5.63527 5.63527 2 10.1191 2ZM10.1279 4.15137C6.82735 4.15137 4.15137 6.82735 4.15137 10.1279C4.1516 13.4283 6.82749 16.1035 10.1279 16.1035C13.4283 16.1035 16.1043 13.4283 16.1045 10.1279C16.1045 6.82737 13.4285 4.15139 10.1279 4.15137Z" fill="#6C6C6C" />
                                    </svg>
                                    <span>{product.name}</span>
                                </div>

                                {product.trending ? (
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.9479 4.5H22.449V14.2221M22.449 4.5L18.7146 8.85417L14.9132 13.4451C14.7767 13.61 14.7077 13.6927 14.6468 13.7574C13.6637 14.8052 12.2248 14.7628 11.305 13.6588C11.2481 13.5906 11.1835 13.5041 11.0569 13.3314C10.9302 13.1586 10.8669 13.0721 10.81 13.0039C9.8902 11.9 8.45081 11.8576 7.46758 12.9053C7.40686 12.9699 7.33873 13.0522 7.20278 13.2164L2 19.5" stroke="#6C6C6C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                ) : (
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19 4C19.5522 4.00004 20 4.44774 20 5V14C20 14.5523 19.5522 15 19 15C18.4477 15 18 14.5523 18 14V7.41406L6.70703 18.707C6.31652 19.0975 5.6835 19.0975 5.29297 18.707C4.90244 18.3165 4.90244 17.6835 5.29297 17.293L16.5859 6H10C9.44772 6 9 5.55228 9 5C9 4.44772 9.44772 4 10 4H19Z" fill="#6C6C6C" />
                                    </svg>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}