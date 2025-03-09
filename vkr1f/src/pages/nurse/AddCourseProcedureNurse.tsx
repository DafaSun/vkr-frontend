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
import {DropdownList} from "../../components/inputs/DropdownList/DpropdownList.tsx";
import {DatePicker} from "../../components/inputs/DatePicker/DatePicker.tsx";
import {TimePicker} from "../../components/inputs/TimePicker/TimePicker.tsx";
import {InputNumber} from "../../components/inputs/InputNumber/InputNumber.tsx";
import {useNavigate} from "react-router-dom";
import {OneItem} from "../../types/SideBarItem.tsx";

const AddCourseProcedureNurse = () => {
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

    const people = [
        { id: 1, fullName: "Иван Иванов" },
        { id: 2, fullName: "Петр Петров" },
        { id: 3, fullName: "Сергей Сергеев" }
    ];

    const procedures = [
        { id: 1, fullName: "Массаж" },
        { id: 2, fullName: "Грязи" },
        { id: 3, fullName: "Ванны" },
        { id:4, fullName: "Гирудотерапия" }
    ];

    const proceduresTime = [
        { id: 1, fullName: "Каждый день" },
        { id: 2, fullName: "Раз в 2 дняи" },
        { id: 3, fullName: "Раз в неделю" }
    ];

    const handleSelect = (id: number) => {
        console.log("Выбран ID:", id);
    };

    const handleDateSelect = (date: string) => {
        console.log("Выбранная дата:", date);
    };

    const handleNumberChange = (value: number) => {
        console.log("Введенное число:", value);
    };

    return (
        <div className={styles['page-style']}>

            <SideBar activeItem={"therapy"} items={sideBarItems}/>
            <div className={styles['content-container']}>

                <Header name={'Иванова Анастасия Сергеевна'} post={'Медсестра'}/>

                <div className={styles['main-container']}>
                    <h1>Запись на курс процедур</h1>
                    <DropdownList options={people} label={' Выберите человека'} text={'Выберите ФИО отдыхающего из списка'} onSelect={handleSelect} />
                    <DropdownList options={procedures} label={' Выберите процедуру'} text={'Выберите тип процедуры из списка'} onSelect={handleSelect} />
                    <DatePicker text={"Выберите дату начала процедур"} onSelect={handleDateSelect} />
                    <DropdownList options={proceduresTime} label={' Выберите частоту процедур'} text={'Выберите частоту процедур из списка'} onSelect={handleSelect} />
                    <InputNumber text={'Введите кол-во процедур'} onChange={handleNumberChange} min={1} max={100} />
                    <h3> Проверьте все поля </h3>
                    <Button3 text={'Записать'}></Button3>

                </div>

            </div>


        </div>
    );
};

export default AddCourseProcedureNurse;