import React, {ReactElement, useState} from 'react';
import styles from './SideBar.module.css'
import {Item} from "./components/Item/Item.tsx";
import {Exit} from "./components/Exit/Exit";
import {Logo} from "./components/Logo/Logo.tsx"

interface ISideBarProps extends React.HTMLAttributes<HTMLButtonElement> {
    activeItem?: string;
}

export const SideBar: React.FC<ISideBarProps> = (props) => {
    const {activeItem} = props
    const [curItem, setCurItem] = useState(activeItem || 'therapy');

    return (
        <div className={styles['side-bar-container']}>

            <Logo/>

            <Item text={'Лечение'} isActive={curItem == "therapy"}
                  onClick={() => setCurItem("therapy")}/>
            <Item text={'Бронирование'} isActive={curItem == "booking"}
                  onClick={() => setCurItem("booking")}/>
            <Item text={'Размещение'} isActive={curItem == "placement"}
                  onClick={() => setCurItem("placement")}/>
            <Item text={'Питание'} isActive={curItem == "nutrition"}
                  onClick={() => setCurItem("nutrition")}/>
            <Item text={'Бухгалтерия'} isActive={curItem == "accounting"}
                  onClick={() => setCurItem("accounting")}/>
            <Item text={'Отчеты'} isActive={curItem == "reports"}
                  onClick={() => setCurItem("reports")}/>
            <Item text={'Сотрудники'} isActive={curItem == "employees"}
                  onClick={() => setCurItem("employees")}/>

            <div className={styles['exit-container']}>
                <Exit/>
            </div>
        </div>
    );
};
