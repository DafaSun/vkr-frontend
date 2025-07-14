import React, {useEffect, useState} from "react";
import styles from "./InputNumber.module.css";

interface NumberInputProps {
    text: string;
    label?: string;
    value?: number;
    onChange?: (value: number) => void;
    isEdit?: boolean;
    width?: number;
    height?: number;
    min?: number;
    max?: number;
}

export const InputNumber: React.FC<NumberInputProps> = ({
                                                            text,
                                                            label = '',
                                                            value = '',
                                                            width,
                                                            height,
                                                            isEdit = true,
                                                            onChange = (() => {
                                                            }),
                                                            min = 1,
                                                            max
                                                        }) => {
    const [inputValue, setInputValue] = useState<string>(value?.toString() ?? "");

    useEffect(() => {
        if (value) {
            setInputValue(value.toString());
        }
    }, [value]); // Следим за изменением value и обновляем inputValue

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        if (!isEdit) return;

        if (/^\d*$/.test(inputValue)) {
            const num = parseInt(inputValue, 10);

            if (!isNaN(num) && num >= min && (max === undefined || num <= max)) {
                setInputValue(inputValue);
                onChange(num);
            } else if (inputValue === "") {
                setInputValue("");
                onChange(0);
            }
        }
    };

    return (
        <div className={styles['input-number-container']}>
            <div className={styles['text']}>{text}</div>
            <input
                style={{width, height}}
                className={styles['input-number']}
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder={label}
            />
        </div>
    );
};
