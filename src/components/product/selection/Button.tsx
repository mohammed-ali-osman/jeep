"use client";
import { useState } from "react";
import styles from "./button.module.css";

export default function ButtonSelector({ options, name, value, onChange }: {
    options: {
        label: string;
        value: string;
    }[];
    name: string;
    value?: string;
    onChange?: (value: string) => void;
}) {
    const [selected, setSelected] = useState<string | null>(value || null);

    const handleChange = (val: string) => {
        setSelected(val);
        onChange?.(val);
    };

    return (
        <fieldset className={styles.fieldset}>
            <legend>{name}</legend>

            <div className={styles.group}>
                {options.map((s) => (
                    <label
                        key={s.value}
                        className={`${styles.label} ${selected === s.value ? styles.active : ""}`}
                    >
                        <input
                            type="radio"
                            name={name}
                            value={s.value}
                            title={s.label}
                            checked={selected === s.value}
                            onChange={() => handleChange(s.value)}
                            className={styles.hidden}
                        />
                        {s.label}
                    </label>
                ))}
            </div>
        </fieldset>
    );
}