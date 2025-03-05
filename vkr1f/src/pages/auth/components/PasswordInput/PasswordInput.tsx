import React from 'react';
import styles from './PasswordInput.module.css';

interface IPasswordInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const PasswordInput: React.FC<IPasswordInputProps> = ({value, onChange}) => {

    return (
        <input
            type="password"
            className={styles['password-input']}
            value={value}
            onChange={onChange}
            placeholder="Введите пароль"
        />
    );
};
