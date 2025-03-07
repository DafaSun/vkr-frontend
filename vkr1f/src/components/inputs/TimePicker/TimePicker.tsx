import React, { useState } from "react";
import styles from "./TimePicker.module.css"

interface TimePickerProps {
    text: string;
    onSelect: (time: string) => void;
}

export const TimePicker: React.FC<TimePickerProps> = ({ text, onSelect }) => {
    const [selectedTime, setSelectedTime] = useState<string>("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const time = event.target.value;
        setSelectedTime(time);
        onSelect(time);
    };

    return (
        <div className={styles['time-container']}>
            <div className={styles['text']}>{text}</div>
        <input className={styles['tp']} type="time" value={selectedTime} onChange={handleChange} />
</div>
    );
};
