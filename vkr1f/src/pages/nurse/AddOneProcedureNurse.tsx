import React, {useState} from "react";
import styles from '../css/Index.module.css'
import {SideBar} from "../../components/SideBar/SideBar.tsx";
import {Header} from "../../components/Header/Header.tsx"
import {Button} from "../../components/buttons/Button/Button.tsx";
import {DropdownList} from "../../components/inputs/DropdownList/DpropdownList.tsx";
import {DatePicker} from "../../components/inputs/DatePicker/DatePicker.tsx";
import {TimePicker} from "../../components/inputs/TimePicker/TimePicker.tsx";
import {useNavigate} from "react-router-dom";
import {OneItem} from "../../types/SideBarItem.tsx";

const AddOneProcedureNurse = () => {
    const navigate = useNavigate();
    const [person, setPerson] = useState<number>();
    const [procedure, setProcedure] = useState<number>();
    const [date, setDate] = useState<Date | null>(null);
    const [time, setTime] = useState<string>("");

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

    const selectPerson = (personId: number) => {
        setPerson(personId);
    };

    const selectProcedure = (procedureId: number) => {
        setProcedure(procedureId);
    };

    const selectDate = (date: string) => {
        setDate(new Date(date));
    };

    const selectTime = (time: string) => {
        setTime(time);
    };

    return (
        <div className={styles['page-style']}>

            <SideBar activeItem={"therapy"} items={sideBarItems}/>
            <div className={styles['content-container']}>

                <Header name={'Иванова Анастасия Сергеевна'} post={'Медсестра'}/>

                <div className={styles['main-container']}>
                   <h1>Запись на 1 процедуру</h1>
                    <DropdownList options={people} label={' Выберите человека'} text={'Выберите ФИО отдыхающего из списка'} onSelect={selectPerson} />
                    <DropdownList options={procedures} label={' Выберите процедуру'} text={'Выберите тип процедуры из списка'} onSelect={selectProcedure} />
                    <DatePicker text={"Выберите дату процедуры"} onSelect={selectDate} />
                    <TimePicker text={"Выберите время процедуры"} onSelect={selectTime} />
                    <h3> Проверьте все поля </h3>
                    <Button color={'blue'} text={'Записать'} onClick={()=>{}}/>


                </div>

            </div>


        </div>
    );
};

export default AddOneProcedureNurse;