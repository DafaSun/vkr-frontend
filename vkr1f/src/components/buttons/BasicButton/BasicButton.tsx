import React from 'react';
import styles from './BasicButton.module.css'

interface IBasicButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    text: string
    this_style?: number
    onClick: () => void;
    width?: number;
    height?: number;
}

export const BasicButton: React.FC<IBasicButtonProps> = (props) => {

    const {width, height, text, onClick, this_style} = props

    return (
        <button
            style={{width, height}}
            className={this_style == 1 ? styles['btn1'] : this_style == 2 ? styles['btn2'] : styles['btn3']}
            onClick={onClick}>{text}</button>
    );
};
