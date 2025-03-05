import React from "react";
import styles from './Back.module.css'
import BackSvg from "../../../../assets/svg/back.svg?react"

type IWayProps = {
    onClick?: (() => void);
};

const Way: React.FC<IWayProps> = ({ onClick }) => {
    return (
        <div className={styles['back-container']} onClick={onClick}>
        <BackSvg width={20} height={20} />
            <div className={styles['text']}>
                 Назад
            </div>
        </div>
    );
};

export default Way;
