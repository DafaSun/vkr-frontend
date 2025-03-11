import React, { useEffect, useState } from "react";
import styles from "./InputNumber.module.css";

interface NumberInputProps {
    text: string;
    label: string;
    value?: number; // Добавил пропс для начального значения
    onChange: (value: number) => void;
    min?: number;
    max?: number;
}

export const InputNumber: React.FC<NumberInputProps> = ({ text, label, value, onChange, min = 1, max }) => {
    const [inputValue, setInputValue] = useState<string>(value?.toString() ?? "");

    useEffect(() => {
        if (value !== undefined) {
            setInputValue(value.toString());
        }
    }, [value]); // Следим за изменением value и обновляем inputValue

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;

        if (/^\d*$/.test(inputValue)) {
            const num = parseInt(inputValue, 10);

            if (!isNaN(num) && num >= min && (max === undefined || num <= max)) {
                setInputValue(inputValue);
                onChange(num);
            } else if (inputValue === "") {
                setInputValue("");
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
                value={inputValue}
                onChange={handleChange}
                placeholder={label}
            />
        </div>
    );
};
