import React, { useState } from "react";
import styles from "./DatePicker.module.css"

interface DatePickerProps {
    text: string;
    onSelect: (date: string) => void;
}

export const DatePicker: React.FC<DatePickerProps> = ({ text, onSelect }) => {
    const [selectedDate, setSelectedDate] = useState<string>("");

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
