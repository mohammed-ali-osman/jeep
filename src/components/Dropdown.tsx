"use client"
import { useState, useRef, useEffect, useId, ReactNode } from "react"

export interface DropdownOption {
    label: string
    value?: string
}

export interface DropdownStyles {
    container?: string
    button?: string
    menu?: string
    menuOpen?: string
    list?: string
    option?: string
    selectedOption?: string
    arrowIcon?: string
    arrowOpen?: string
}

interface DropdownProps {
    options: DropdownOption[]
    value: string
    onChange: (value: string) => void
    label?: string
    startIcon?: ReactNode
    endIcon?: ReactNode
    showArrow?: boolean
    styles?: DropdownStyles
}

export function Dropdown({
    options,
    value,
    onChange,
    label = "Select option",
    startIcon,
    endIcon,
    showArrow = false,
    styles = {}
}: DropdownProps) {
    const [isOpen, setIsOpen] = useState(false)
    const menuId = useId()

    const activeContainerRef = useRef<HTMLDivElement | null>(null)
    const menuListRef = useRef<HTMLUListElement | null>(null)

    const selectedOption = options.find((opt) => opt.value === value)

    // 1. Focus & scroll to selected option when opened
    useEffect(() => {
        if (isOpen && menuListRef.current) {
            const activeElement =
                menuListRef.current.querySelector<HTMLElement>('[aria-selected="true"]') ||
                menuListRef.current.querySelector<HTMLElement>('li[tabindex="0"]')

            if (activeElement) {
                activeElement.focus()
                activeElement.scrollIntoView({ block: "center" })
            }
        }
    }, [isOpen])

    // 2. Click outside listener
    useEffect(() => {
        if (!isOpen) return

        const handleClickOutside = (event: MouseEvent) => {
            if (
                activeContainerRef.current &&
                !activeContainerRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [isOpen])

    // 3. Typeahead & Keyboard Navigation
    const handleKeyDown = (e: React.KeyboardEvent<HTMLLIElement>, optValue: string) => {
        const key = e.key.toLowerCase()

        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault()
            onChange(optValue)
            setIsOpen(false)
            return
        }

        if (e.key === "Escape") {
            setIsOpen(false)
            return
        }

        if (key.length === 1 && key >= "a" && key <= "z" && menuListRef.current) {
            e.preventDefault()

            const items = Array.from(
                menuListRef.current.querySelectorAll<HTMLElement>('li[tabindex="0"]')
            )

            const matchingItem = items.find((item) =>
                item.textContent?.trim().toLowerCase().startsWith(key)
            )

            if (matchingItem) {
                matchingItem.focus()
                matchingItem.scrollIntoView({ behavior: "smooth", block: "nearest" })
            }
        }
    }

    const menuClassName = [
        styles.menu,
        isOpen && styles.menuOpen
    ].filter(Boolean).join(" ");

    return (
        <div
            ref={isOpen ? activeContainerRef : null}
            className={styles.container}
            style={{ position: "relative", display: "inline-block" }}
        >
            {/* TRIGGER BUTTON */}
            <button
                type="button"
                className={styles.button}
                onClick={() => setIsOpen((prev) => !prev)}
                aria-haspopup="listbox"
                aria-expanded={isOpen}
                aria-controls={menuId}
                aria-label={`${label}: ${selectedOption?.label ?? value}`}
            >
                {startIcon}
                <span>{selectedOption?.label ?? value}</span>
                {endIcon}

                {showArrow && (
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        className={`${styles.arrowIcon || ""} ${isOpen ? styles.arrowOpen || "" : ""}`}
                        style={{
                            transition: "transform 150ms ease",
                            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)"
                        }}
                    >
                        <path
                            d="M11.1809 15.8297L8.64209 12.2028C7.99257 11.275 8.65638 10 9.78902 10L14.2112 10C15.3438 10 16.0076 11.275 15.3581 12.2028L12.8193 15.8297C12.4212 16.3984 11.579 16.3984 11.1809 15.8297Z"
                            fill="#6C6C6C"
                        />
                    </svg>
                )}
            </button>

            <div className={menuClassName} hidden={!isOpen}>
                <ul
                    id={menuId}
                    ref={menuListRef}
                    role="listbox"
                    className={styles.list}
                    aria-label={label}
                >
                    {options.map((opt) => {
                        const optionValue = opt.value ?? opt.label // Fall back to label if value is omitted
                        const isSelected = optionValue === value

                        return (
                            <li
                                key={optionValue}
                                tabIndex={isOpen ? 0 : -1}
                                role="option"
                                aria-selected={isSelected}
                                className={`${styles.option || ""} ${isSelected ? styles.selectedOption || "" : ""}`}
                                onClick={() => {
                                    onChange(optionValue)
                                    setIsOpen(false)
                                }}
                                onKeyDown={(e) => handleKeyDown(e, optionValue)}
                            >
                                {opt.label}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}