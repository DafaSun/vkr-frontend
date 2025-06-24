import React from 'react';
import styles from './Button.module.css'

interface IButtonProps{
    text: string
    color?: number|string
    onClick: () => void;
    width?: number | string;
    height?: number | string;
}

export const Button: React.FC<IButtonProps> = ({width, height, text, onClick, color}) => {


    return (
        <button
            style={{width, height}}
            className={color == 'violet' ? styles['violet-btn'] : color == 'orange' ? styles['orange-btn'] : color == 'blue' ? styles['blue-btn'] : styles['green-btn']}
            onClick={onClick}>{text}</button>
    );
};
