import React, { useEffect, useState } from "react";
import styles from "./DatePicker.module.css";

interface DatePickerProps {
    text: string;
    value?: string;
    onSelect: (date: string) => void;
}

export const DatePicker: React.FC<DatePickerProps> = ({ text, value, onSelect }) => {
    const [selectedDate, setSelectedDate] = useState<string>(value || ""); // Используем value как начальное значение

    useEffect(() => {
        if (value) {
            setSelectedDate(value);
        }
    }, [value]); // Следим за изменением value и обновляем состояние

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const date = event.target.value;
        setSelectedDate(date);
        onSelect(date);
    };

    return (
        <div className={styles['date-container']}>
            <div className={styles['text']}>
                {text}
            </div>
            <input className={styles['dp']} type="date" value={selectedDate} onChange={handleChange} />
        </div>
    );
};
