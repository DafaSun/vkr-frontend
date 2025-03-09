import React, {useState} from "react";
import styles from '../../css/Index.module.css'
import {SideBar} from "../../../components/SideBar/SideBar.tsx";
import {Header} from "../../../components/Header/Header.tsx"
import {Button1} from "../../../components/buttons/Button1/Button1.tsx";
import {Button2} from "../../../components/buttons/Button2/Button2.tsx";
import {Button3} from "../../../components/buttons/Button3/Button3.tsx";
import {Button4} from "../../../components/buttons/Button4/Button4.tsx";
import {Button5} from "../../../components/buttons/Button5/Button5.tsx";
import {InputText} from "../../../components/inputs/InputText/InputText.tsx";
import {OneItem} from "../../../types/SideBarItem.tsx";
import {useNavigate} from "react-router-dom";

const TourManager = () => {
    const navigate = useNavigate();


    const sideBarItems: OneItem[] = [
        {
            onClick: () => {navigate('/manager/tour')},
            text: "Путевки",
            label: "tour"
        },
        {
            onClick: () => {navigate('/manager/hotel')},
            text: "Гостиница",
            label: "hotel"
        },
        {
            onClick: () => {navigate('/manager/placement')},
            text: "Размещение",
            label: "placement"
        },
        {
            onClick: () => {navigate('/manager/registration')},
            text: "Регистрация",
            label: "registration"
        },
        {
            onClick: () => {navigate('/manager/info')},
            text: "Информация",
            label: "info"
        }
    ];


    return (
        <div className={styles['page-style']}>

            <SideBar activeItem={"tour"} items={sideBarItems}/>
            <div className={styles['content-container']}>

                <Header name={'Иванова Анастасия Сергеевна'} post={'Менеджер'}/>

                <div className={styles['main-container']}>
                    <Button3 text={'Социальная путевка (льготная)'} onClick={()=>{navigate('/manager/tour/social')}}/>
                    <Button3 text={'Обычная за свои деньги'} onClick={()=>{navigate('/manager/tour/tour')}}/>



                </div>

            </div>


        </div>
    );
};

export default TourManager;