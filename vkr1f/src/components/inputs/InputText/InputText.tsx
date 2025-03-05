import React, { useState } from 'react';
import styles from './InputText.module.css';

interface IInputTextProps {
    value?: string;
    // onChange: (value: string) => void;
    placeholder?: string;
    type?: string;
    style?: React.CSSProperties;
}

export const InputText: React.FC<IInputTextProps> = ({
                                                           value = '',
                                                           placeholder = '',
                                                           type = 'text',
                                                          // onChange,
                                                           style,
                                                       }) => {
    const [inputValue, setInputValue] = useState(value);

    // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const newValue = e.target.value;
    //     setInputValue(newValue);
    //     onChange(newValue);
    // };

    return (
        <div className={styles['input-container']} style={style}>
            <input
                className={styles['input-field']}
                type={type}
                value={inputValue}
                // onChange={handleChange}
                placeholder={placeholder}
            />
        </div>
    );
};
