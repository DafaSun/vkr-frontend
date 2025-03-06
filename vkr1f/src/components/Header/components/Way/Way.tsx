import React from "react";
import styles from './Way.module.css'
import RightSvg from "../../../../assets/svg/right.svg?react"

interface IWayProps {
    items: string[];
    onItemClick?: ((item: string, index: number) => void)[];
};

const Way: React.FC<IWayProps> = ({ items, onItemClick = [] }) => {
    return (
        <div className={styles['way-container']}>
            {items.map((text, index) => (
                <React.Fragment key={index}>
          <div onClick={() => onItemClick[index]?.(text, index)} className={styles['text']}>
            {text}
          </div>
                    {index < items.length - 1 && <RightSvg width="15" height="15" />}
                </React.Fragment>
            ))}
        </div>
    );
};

export default Way;
