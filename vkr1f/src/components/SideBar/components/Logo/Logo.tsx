import React from 'react';
import LogoSvg from "../../../../assets/svg/logo.svg?react"
import styles from "./Logo.module.css";

interface ILogoProps {
}

export const Logo: React.FC<ILogoProps> = () => {

    return (
        <div className={styles['logo-container']}>
            <LogoSvg/>
        </div>
    );
};
