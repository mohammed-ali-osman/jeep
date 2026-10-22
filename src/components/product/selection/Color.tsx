"use client";
import { useState } from "react";
import styles from "./color.module.css";

export default function ColorSelector({ options, name, value, onChange }: {
    options: {
        label: string;
        value: string;
    }[];
    name: string;
    value?: string;
    onChange?: (value: string) => void;
}) {
    const [colour, setColour] = useState<string | null>(value || null);

    const handleChange = (val: string) => {
        setColour(val);
        onChange?.(val);
    };

    return (
        <fieldset className={styles.fieldset}>
            <legend>{name}</legend>

            <div className={styles.colors}>
                {options.map((option) => {
                    const isSelected = colour === option.value;
                    return (
                        <input
                            key={option.value}
                            type="radio"
                            name={name}
                            value={option.value}
                            title={option.label}
                            aria-label={option.label}
                            aria-pressed={isSelected}
                            checked={isSelected}
                            onChange={() => handleChange(option.value)}
                            className={isSelected ? styles.selected : ""}
                            style={{
                                background: option.value,
                                appearance: "none"
                            }}
                        />
                    );
                })}
            </div>
        </fieldset>
    );
}