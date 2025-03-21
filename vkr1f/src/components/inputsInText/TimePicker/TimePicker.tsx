import React, {useEffect, useState} from "react";
import styles from "./TimePicker.module.css"

interface TimePickerProps {
    text: string;
    onSelect?: (time: string) => void;
    isEdit?: boolean;
    value?: string;
    width?: number;
    height?: number;
}

export const TimePicker: React.FC<TimePickerProps> = ({
                                                          isEdit = true, width, height, text, onSelect = (() => {
    }), value
                                                      }) => {
    const [selectedTime, setSelectedTime] = useState<string>(value || "");

    useEffect(() => {
        if (value) {
            setSelectedTime(value);
        }
    }, [value]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const time = event.target.value;
        if (!isEdit) return;
        setSelectedTime(time);
        onSelect(time);
    };

    return (
        <div className={styles['time-container']}>
            <div className={styles['text']}>{text}</div>
            <input style={{width, height}} className={styles['tp']} type="time" value={selectedTime}
                   onChange={handleChange}/>
        </div>
    );
};
