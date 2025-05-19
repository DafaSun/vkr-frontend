import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import styles from '../css/Index.module.css'
import {SideBar} from "../../components/SideBar/SideBar.tsx";
import {Header} from "../../components/Header/Header.tsx"
import {OneItem} from "../../types/SideBarItem.tsx";

const IndexNurse = () => {
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

            <SideBar activeItem={"reports"} items={sideBarItems}/>
            <div className={styles['content-container']}>

                <Header name={'Иванова Анастасия Сергеевна'} post={'Медсестра'}/>

                <div className={styles['main-container']}>
                    <h1 className={styles['welcome']}>Reports</h1>



                </div>

            </div>


        </div>
    );
};

export default IndexNurse;