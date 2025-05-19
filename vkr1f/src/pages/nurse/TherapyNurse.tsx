import React, {useState} from "react";
import styles from '../css/Index.module.css'
import {useNavigate} from "react-router-dom";
import {SideBar} from "../../components/SideBar/SideBar.tsx";
import {Header} from "../../components/Header/Header.tsx"
import {Button} from "../../components/buttons/Button/Button.tsx";
import {OneItem} from "../../types/SideBarItem.tsx";

const TherapyNurse = () => {
    const navigate = useNavigate();

    const sideBarItems: OneItem[] = [
        {
            onClick: () => {navigate('/nurse/therapy')},
            text: "Лечение",
            label: "therapy"
        },
        {
            onClick: () => {navigate('/nurse/reports')},
            text: "Отчеты",
            label: "reports"
        },
        {
            onClick: () => {navigate('/nurse/employees')},
            text: "Сотрудники",
            label: "employees"
        }
    ];
    return (
        <div className={styles['page-style']}>

            <SideBar activeItem={"therapy"} items={sideBarItems}/>
            <div className={styles['content-container']}>

                <Header name={'Иванова Анастасия Сергеевна'} post={'Медсестра'}/>

                <div className={styles['main-container']}>

                    <h1>Лечение. Запись на процедуры</h1>
                   <Button color={'green'} text={'Записать на курс процедур'}  onClick={() => {
                       navigate('/nurse/therapy/add-course-procedure')}}/>
                   <Button color={'orange'} text={'Записать на одну процедуру'} onClick={() => {
                       navigate('/nurse/therapy/add-one-procedure')}}/>



                </div>

            </div>


        </div>
    );
};

export default TherapyNurse;