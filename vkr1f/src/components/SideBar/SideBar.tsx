import React, {useState} from 'react';
import styles from './SideBar.module.css';
import {Item} from "./components/Item/Item.tsx";
import {Exit} from "./components/Exit/Exit.tsx";
import {Logo} from "./components/Logo/Logo.tsx";

type OneItem = {
    onClick: () => void;
    text: string;
    label: string;
}

interface ISideBarProps {
    activeItem?: string;
    items: OneItem[];
}

export const SideBar: React.FC<ISideBarProps> = (props) => {
    const {activeItem = "", items = []} = props;
    const [curItem, setCurItem] = useState(activeItem);

    return (
        <div className={styles['side-bar-container']}>

            <Logo/>

            {items.map((dataItem) => (
                <Item text={dataItem?.text} isActive={curItem == dataItem?.label}
                      onClick={() => {
                          setCurItem(dataItem?.label);
                          dataItem?.onClick();
                      }}/>
            ))}

            <div className={styles['exit-container']}>
                <Exit/>
            </div>
        </div>
    );
}
