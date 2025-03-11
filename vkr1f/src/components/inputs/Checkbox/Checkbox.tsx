import { useState } from "react";
import styles from "./Checkbox.module.css"

type CheckboxProps = {
    text: string;
    value?: boolean;
    onChange?: (checked: boolean) => void;
};

export function Checkbox({ text, value = false, onChange }: CheckboxProps) {
    const [isChecked, setIsChecked] = useState(value);

    const handleChange = () => {
        const newChecked = !isChecked;
        setIsChecked(newChecked);
        if (onChange) {
            onChange(newChecked);
        }
    };

    return (
        <div className={styles['checkbox-container']}>
            <input
                type="checkbox"
                className={styles['box']}
                checked={isChecked}
                onChange={handleChange}
            />
            <span className={styles['text']}>{text}</span>
        </div>
    );
}
