import React, {ReactElement} from 'react';
import styles from './Header.module.css'
import Way from "./components/Way/Way.tsx";
import Back from "./components/Back/Back.tsx";

interface IHeaderProps extends React.HTMLAttributes<HTMLButtonElement>{
    post?: string;
    name?: string;
}

export const Header: React.FC<IHeaderProps> = (props) => {

    const {post, name} = props

    return (
       <>
           <div className={styles['header-container']}>
               <div className={styles['page-info']}>
                   <Way
                       items={["Один", "Два", "Три"]}
                       onItemClick={[
                           () => console.log("Клик по Один"),
                           () => console.log("Клик по Два"),
                           () => console.log("Клик по Три"),
                       ]}
                   />
                   <Back/>
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
