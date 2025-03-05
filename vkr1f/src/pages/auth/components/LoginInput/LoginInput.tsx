import React from 'react';
import styles from './LoginInput.module.css';

interface ILoginInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const LoginInput: React.FC<ILoginInputProps> = ({ value, onChange }) => {

    return (
        <input
            type="text"
            className={styles['login-input']}
            value={value}
            onChange={onChange}
            placeholder="Введите логин"
        />
    );
};
