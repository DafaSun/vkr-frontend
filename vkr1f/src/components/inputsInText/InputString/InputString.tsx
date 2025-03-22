import React, {useEffect, useState} from "react";
import styles from "./InputString.module.css";

interface TextInputProps {
    isHidden?: boolean;
    text?: string;
    label?: string;
    value?: string;
    isEdit?: boolean;
    width?: number;
    height?: number;
    onChange?: (value: string) => void;
}

export const InputString: React.FC<TextInputProps> = ({
                                                          text = '',
                                                          label = '',
                                                          value = "",
                                                          isEdit = true,
                                                          width,
                                                          height,
                                                          isHidden = false,
                                                          onChange = (() => {
                                                          })
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
        <div className={!isHidden?  styles['input-text-container']:styles['hidden']}>
            <div className={styles['text']}>{text}</div>
            <input
                style={{width, height}}
                className={styles['input-text']}
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder={label}
            />
        </div>
    );
};
