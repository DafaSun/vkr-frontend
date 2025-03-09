import React, {useState} from "react";
import styles from '../css/Index.module.css'
import {SideBar} from "../../components/SideBar/SideBar.tsx";
import {Header} from "../../components/Header/Header.tsx"
import {Button1} from "../../components/buttons/Button1/Button1.tsx";
import {Button2} from "../../components/buttons/Button2/Button2.tsx";
import {Button3} from "../../components/buttons/Button3/Button3.tsx";
import {Button4} from "../../components/buttons/Button4/Button4.tsx";
import {Button5} from "../../components/buttons/Button5/Button5.tsx";
import {InputText} from "../../components/inputs/InputText/InputText.tsx";
import {OneItem} from "../../types/SideBarItem.tsx";
import {useNavigate} from "react-router-dom";

const IndexManager = () => {
    const navigate = useNavigate();

    const sideBarItems: OneItem[] = [
        {
            onClick: () => {navigate('/manager/therapy')},
            text: "Лечение",
            label: "therapy"
        },
        {
            onClick: () => {navigate('/manager/booking')},
            text: "Бронирование",
            label: "booking"
        },
        {
            onClick: () => {navigate('/manager/placement')},
            text: "Размещение",
            label: "placement"
        },
        {
            onClick: () => {navigate('/manager/nutrition')},
            text: "Питание",
            label: "nutrition"
        }
    ];


    return (
        <div className={styles['page-style']}>

            <SideBar activeItem={"therapy"} items={sideBarItems}/>
            <div className={styles['content-container']}>

                <Header name={'Иванова Анастасия Сергеевна'} post={'Менеджер'}/>

                <div className={styles['main-container']}>
                    <h1 className={styles['welcome']}>Therapy</h1>



                </div>

            </div>


        </div>
    );
};

export default IndexManager;