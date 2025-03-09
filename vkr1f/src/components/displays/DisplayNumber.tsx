import React from "react";
import styles from "./DisplayNumber.module.css";

interface DisplayNumberProps {
    text: string;
    label: string;
    value: number;
}

export const DisplayNumber: React.FC<DisplayNumberProps> = ({ text, label, value }) => {
    return (
        <div className={styles['input-number-container']}>
            <div className={styles['text']}>{text}</div>
            <input
                className={styles['input-number']}
                type="text"
                value={value}
                placeholder={label}
                readOnly // Запрещаем редактирование
            />
        </div>
    );
};
