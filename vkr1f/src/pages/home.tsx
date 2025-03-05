import React, {useState} from "react";
import styles from './home.module.css'
import {SideBar} from "../components/SideBar/SideBar.tsx";
import {Header} from "../components/Header/Header.tsx"
import {Button1} from "../components/buttons/Button1/Button1.tsx";
import {Button2} from "../components/buttons/Button2/Button2.tsx";
import {Button3} from "../components/buttons/Button3/Button3.tsx";
import {Button4} from "../components/buttons/Button4/Button4.tsx";
import {Button5} from "../components/buttons/Button5/Button5.tsx";
import {InputText} from "../components/inputs/InputText/InputText.tsx";

const Home = () => {
    return (
        <div className={styles['page-style']}>
            <SideBar/>
            <div className={styles['content-container']}>

                <Header name={'Иванова Анастасия Сергеевна'} post={'Главная медсестра'}/>

                <div className={styles['main-container']}>

                    <Button1 text={'Button1'}/>
                    <Button2 text={'Button2'}/>
                    <Button3 text={'Button3'}/>
                    <Button4 text={'Button4'}/>
                    <Button5 text={'Button5'}/>
                    <InputText/>

                </div>

            </div>


        </div>
    );
};

export default Home;