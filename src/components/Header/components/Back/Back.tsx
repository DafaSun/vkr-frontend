import React from "react";
import styles from './Back.module.css'
import BackSvg from "../../../../assets/svg/back.svg?react"

interface IBackProps {
    onClick: (() => void);
    isActive: boolean;
}

const Back: React.FC<IBackProps> = ({onClick, isActive}) => {
    return (
        <div className={isActive ? styles['back-container'] : styles['hidden']} onClick={onClick}>
            <BackSvg width={20} height={20}/>
            <div className={styles['text']}>
                Назад
            </div>
        </div>
    );
};

export default Back;
