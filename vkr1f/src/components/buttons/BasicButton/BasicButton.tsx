import React, {ReactElement} from 'react';
import styles from './BasicButton.module.css'

interface IBasicButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    text?: string
    this_style?: number
    // onClick: () => void;
}

export const BasicButton: React.FC<IBasicButtonProps> = (props) => {

    const {text, onClick, this_style} = props

    return (
        <button
            className={this_style == 1 ? styles['btn1'] : this_style == 2 ? styles['btn2'] : this_style == 3 ? styles['btn3'] : this_style == 4 ?styles['btn4']:styles['btn5']}
            onClick={onClick}>{text}</button>
    );
};
