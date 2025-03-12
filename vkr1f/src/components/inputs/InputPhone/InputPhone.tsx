import React, { useEffect, useState } from "react";
import styles from "./InputPhone.module.css";

interface PhoneInputProps {
    text: string;
    label: string;
    value?: string; // Исправил тип на строку
    onChange: (value: string) => void;
}

export const InputPhone: React.FC<PhoneInputProps> = ({ text, label, value = "", onChange }) => {
    const [inputValue, setInputValue] = useState<string>(value);

    useEffect(() => {
        setInputValue(value);
    }, [value]); // Следим за изменением value и обновляем inputValue

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;

        if (/^[0-9+\s]*$/.test(inputValue)) { // Разрешаем только буквы и пробел
            setInputValue(inputValue);
            onChange(inputValue);
        }
    };

    return (
        <div className={styles['input-text-container']}>
            <div className={styles['text']}>{text}</div>
            <input
                className={styles['input-text']}
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder={label}
            />
        </div>
    );
};
