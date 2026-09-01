"use client"
import { useState, useRef, useEffect, ReactNode } from "react"
import styles from "./Theme.module.css"

type ThemeMode = "light" | "dark" | "system"

interface ThemeOption {
    id: ThemeMode
    label: string
    icon: ReactNode
}

const THEMES: ThemeOption[] = [
    {
        id: "dark", label: "Dark Theme", icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M20.985 12.4859C20.8912 14.2221 20.2966 15.8939 19.273 17.2993C18.2494 18.7047 16.8407 19.7836 15.217 20.4054C13.5933 21.0273 11.8243 21.1655 10.1237 20.8034C8.42319 20.4414 6.86392 19.5944 5.63442 18.3651C4.40493 17.1357 3.55785 15.5765 3.19558 13.876C2.83331 12.1755 2.97136 10.4065 3.59304 8.78273C4.21472 7.159 5.29342 5.7501 6.69874 4.72635C8.10406 3.70259 9.77583 3.10782 11.512 3.01391C11.917 2.99191 12.129 3.47391 11.914 3.81691C11.1949 4.96746 10.8869 6.32778 11.0405 7.67586C11.194 9.02394 11.7999 10.2802 12.7593 11.2396C13.7187 12.199 14.9749 12.8049 16.323 12.9584C17.6711 13.1119 19.0314 12.804 20.182 12.0849C20.526 11.8699 21.007 12.0809 20.985 12.4859Z" stroke="#6C6C6C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        )
    },
    {
        id: "light", label: "Light Theme", icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M11.9999 15.5999C13.9881 15.5999 15.5999 13.9881 15.5999 11.9999C15.5999 10.0117 13.9881 8.3999 11.9999 8.3999C10.0117 8.3999 8.3999 10.0117 8.3999 11.9999C8.3999 13.9881 10.0117 15.5999 11.9999 15.5999Z" stroke="#6C6C6C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 3V4.8" stroke="#6C6C6C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 19.2V21" stroke="#6C6C6C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5.63721 5.63696L6.90621 6.90596" stroke="#6C6C6C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M17.094 17.0941L18.363 18.3631" stroke="#6C6C6C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3 12H4.8" stroke="#6C6C6C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M19.2002 12H21.0002" stroke="#6C6C6C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.90621 17.0941L5.63721 18.3631" stroke="#6C6C6C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M18.363 5.63696L17.094 6.90596" stroke="#6C6C6C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>)
    },
    {
        id: "system", label: "System Theme", icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M12 16.176V20M8.4 20H15.6M7.552 4H16.44C19.288 4 20 4.712 20 7.552V12.616C20 15.464 19.288 16.168 16.448 16.168H7.552C4.712 16.176 4 15.464 4 12.624V7.552C4 4.712 4.712 4 7.552 4Z" stroke="#6C6C6C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        )
    }
]

export default function Theme() {
    const [activeTheme, setActiveTheme] = useState<ThemeMode>("light");
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [isOpen, setIsOpen] = useState(false);

    const containerRef = useRef<HTMLDivElement>(null);

    // 2. Derive active and highlight indices for snapping
    const activeIndex = THEMES.findIndex((t) => t.id === activeTheme)
    const currentIndex = hoveredIndex ?? (activeIndex !== -1 ? activeIndex : 0)
    const activeIcon = THEMES[activeIndex]?.icon ?? THEMES[0].icon

    // 3. Close outside click
    useEffect(() => {
        if (!isOpen) return

        const handleClickOutside = (e: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
                setIsOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [isOpen])

    return (
        <div className={styles.container} ref={containerRef}>
            {/* Trigger Button showing active theme SVG */}
            <button
                type="button"
                className={styles.actions}
                aria-label="Toggle light and dark theme"
                aria-expanded={isOpen}
                onClick={() => setIsOpen((prev) => !prev)}
            >
                {activeIcon}
            </button>

            <div
                className={`${styles.themeMenu} ${isOpen ? styles.open : ""}`}
                onMouseLeave={() => setHoveredIndex(null)}
                role="radiogroup"
                aria-label="theme choices"
            >
                {/* Animated Snapping Indicator */}
                <div
                    className={styles.indicator}
                    style={{
                        transform: `translateX(${currentIndex * 100}%)`
                    }}
                />

                {/* SVG Option Buttons */}
                {THEMES.map((t, index) => {
                    const isActive = activeTheme === t.id

                    return (
                        <button
                            key={t.id}
                            type="button"
                            className={`${styles.themeOption} ${activeTheme === t.id ? styles.active : ""}`}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onClick={() => {
                                setActiveTheme(t.id)
                                setIsOpen(false)
                            }}
                            tabIndex={isOpen ? 0 : -1}
                            aria-label={t.label}
                            role="radio"
                            aria-checked={activeTheme === t.id}
                        >
                            {t.icon}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}