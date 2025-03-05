import React, {ReactElement, useState} from 'react';
import LogoSvg from "../../../../assets/svg/logo.svg?react"
import styles from "./Logo.module.css";

interface ILogoProps extends React.HTMLAttributes<HTMLButtonElement> {
}

export const Logo: React.FC<ILogoProps> = () => {


    return (
        <div className={styles['logo-container']}>
            <LogoSvg/>

        </div>
    );
};
