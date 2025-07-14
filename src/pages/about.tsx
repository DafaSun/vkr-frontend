import React, {useState} from "react";
import styles from './about.module.css'


import {Header} from "../components/Header/Header.tsx"
import {Button1} from "../components/buttons/Button1/Button1.tsx";
import {Button2} from "../components/buttons/Button2/Button2.tsx";
import {Button3} from "../components/buttons/Button3/Button3.tsx";
import {DropdownList} from "../components/inputs/DropdownList/DpropdownList.tsx"
import {DatePicker} from "../components/inputs/DatePicker/DatePicker.tsx";
import {TimePicker} from "../components/inputs/TimePicker/TimePicker.tsx";
import {InputNumber} from "../components/inputs/InputNumber/InputNumber.tsx";
import {Checkbox} from "../components/inputs/Checkbox/Checkbox.tsx"


const About = () => {


    const people = [
        { id: 1, fullName: "Иван Иванов" },
        { id: 2, fullName: "Петр Петров" },
        { id: 3, fullName: "Сергей Сергеев" }
    ];

    const handleSelect = (id: number) => {
        console.log("Выбран ID:", id);
    };

    const handleDateSelect = (date: string) => {
        console.log("Выбранная дата:", date);
    };

    const handleTimeSelect = (time: string) => {
        console.log("Выбранное время:", time);
    };

    const handleNumberChange = (value: number) => {
        console.log("Введенное число:", value);
    };

    return (
        <div className={styles['page-style']}>
            {/*<SideBar/>*/}
            <div className={styles['content-container']}>

                <Header name={'Иванова Анастасия Сергеевна'} post={'Главная медсестра'}/>

                <div className={styles['main-container']}>

                    {/*<Button1 text={'Button1'}/>*/}
                    {/*<Button2 text={'Button2'}/>*/}
                    {/*<Button3 text={'Button3'}/>*/}
                    {/*<DropdownList options={people} label={"DropdownList"} text={'Выберите ФИО отдыхающего из списка'} onSelect={handleSelect} />*/}
                    <DatePicker text={"Выберите дату процедуры"} onSelect={handleDateSelect} />
                    <TimePicker text={"Выберите время процедуры"} onSelect={handleTimeSelect} />
                    <InputNumber text={'Введите кол-во процедур'} onChange={handleNumberChange} min={1} max={100} label={''} />
<Checkbox text={'asdfgh;lmnbvcaertyu'}/>

                </div>

            </div>


        </div>
    );
};

export default About;