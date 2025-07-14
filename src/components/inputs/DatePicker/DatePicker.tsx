import React, {useEffect, useState} from "react";
import styles from "./DatePicker.module.css";

interface DatePickerProps {
    text?: string;
    value?: string;
    onSelect?: (date: string) => void;
    width?: number;
    height?: number;
    isEdit?: boolean;
    minDate?: string;
    maxDate?: string;
    required?: boolean;
}

export const DatePicker: React.FC<DatePickerProps> = ({
                                                          isEdit = true, text, value, width, height,
                                                          minDate, maxDate, onSelect = (() => {
    })
                                                      }) => {
    const [selectedDate, setSelectedDate] = useState<string>(value || "");

    useEffect(() => {
        if (value) {
            setSelectedDate(value);
        }
    }, [value]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const date = event.target.value;
        if (!isEdit) return;
        setSelectedDate(date);
        onSelect(date);
    };

    return (
        <div className={styles['date-container']}>
            <div className={styles['text']}>
                {text}
            </div>
            <input style={{width, height}} className={styles['dp']} type="date" value={selectedDate}
                   onChange={handleChange} min={minDate} max={maxDate}/>
        </div>
    );
};
