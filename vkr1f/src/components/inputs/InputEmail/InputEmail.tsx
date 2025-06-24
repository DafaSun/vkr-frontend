import React, {useEffect, useState} from "react";
import styles from "./InputEmail.module.css";

interface EmailInputProps {
    text: string;
    label?: string;
    isEdit?: boolean;
    value?: string;
    width?: number;
    height?: number;
    onChange?: (value: string) => void;
}

export const InputEmail: React.FC<EmailInputProps> = ({
                                                          text,
                                                          label = '',
                                                          value = "",
                                                          width,
                                                          height,
                                                          onChange = (() => {
                                                          }),
                                                          isEdit = true
                                                      }) => {

    const [inputValue, setInputValue] = useState<string>(value);

    useEffect(() => {
        setInputValue(value);
    }, [value]); // Следим за изменением value и обновляем inputValue

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        if (!isEdit) return;

        setInputValue(inputValue);
        onChange(inputValue);
    };

    return (
        <div className={styles['input-text-container']}>
            <div className={styles['text']}>{text}</div>
            <input
                style={{width, height}}
                className={styles['input-text']}
                type="email"
                value={inputValue}
                onChange={handleChange}
                placeholder={label}
            />
        </div>
    );
};
