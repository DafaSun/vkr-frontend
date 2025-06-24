import React from 'react';
import styles from './Item.module.css'
import IconCircle from "../../../../assets/svg/iconCircle.svg?react"

interface IItemProps {
    icon?: string
    text: string
    isActive: boolean
    onClick: () => void;
}

export const Item: React.FC<IItemProps> = (props) => {

    const {text, isActive, onClick} = props

    return (
        <>
            <div className={isActive ? styles['item-container-active'] : styles['item-container']} onClick={onClick}>
                <IconCircle width={20} height={20}/>
                <div className={styles['text']}>{text}</div>
            </div>
        </>
    );
};
