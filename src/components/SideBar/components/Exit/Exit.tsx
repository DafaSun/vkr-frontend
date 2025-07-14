import React from 'react';
import styles from './Exit.module.css'
import ExitSvg from "../../../../assets/svg/exit.svg?react"

interface IExitProps {
}

export const Exit: React.FC<IExitProps> = () => {

    return (
        <div className={styles['exit-container']}>
            <div className={styles['text']}>Выйти</div>
        </div>
    );
};
