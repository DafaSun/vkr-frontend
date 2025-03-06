import React from 'react';
import styles from './Header.module.css'
import Way from "./components/Way/Way.tsx";
import Back from "./components/Back/Back.tsx";

interface IHeaderProps {
    post: string;
    name: string;
    wayItems?: string[];
    wayOnItemClick?: ((item: string, index: number) => void)[];
    backOnClick?: (() => void);
    hasBack?: boolean;
}

export const Header: React.FC<IHeaderProps> = (props) => {

    const {post, name, wayItems=[], wayOnItemClick=[], backOnClick=()=>{}, hasBack=false} = props

    return (
       <>
           <div className={styles['header-container']}>
               <div className={styles['page-info']}>
                   <Way
                       items={wayItems}
                       onItemClick={wayOnItemClick}
                   />
                   <Back onClick={backOnClick} isActive={hasBack}/>
               </div>

               <div className={styles['person-info']}>
                   <div className={styles['text']}>
                       {post}
                   </div>
                   <div className={styles['text']}>
                       {name}
                   </div>
               </div>
           </div>

       </>
    );
};
