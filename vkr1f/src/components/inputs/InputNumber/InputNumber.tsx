import React, { useState } from "react";
import styles from "./InputNumber.module.css"

interface NumberInputProps {
    text: string;
    label: string;
    onChange: (value: number) => void;
    min?: number;
    max?: number;
}

export const InputNumber: React.FC<NumberInputProps> = ({text, label, onChange, min = 1, max }) => {
    const [value, setValue] = useState<string>("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;

        if (/^\d*$/.test(inputValue)) {
            const num = parseInt(inputValue, 10);

            if (!isNaN(num) && num >= min && (max === undefined || num <= max)) {
                setValue(inputValue);
                onChange(num);
            } else if (inputValue === "") {
                setValue("");
                onChange(0);
            }
        }
    };

    return (
        <div className={styles['input-number-container']}>
            <div className={styles['text']}>{text}</div>
        <input
            className={styles['input-number']}
            type="text"
            value={value}
            onChange={handleChange}
            placeholder={label}
        />
        </div>
    );
};
