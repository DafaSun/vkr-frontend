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
import {DatePicker} from "../../components/inputs/DatePicker/DatePicker.tsx";
import {DropdownList} from "../../components/inputs/DropdownList/DpropdownList.tsx";
import {OneItem} from "../../types/SideBarItem.tsx";
import {useNavigate} from "react-router-dom";

const IndexManager = () => {
    const [arrivalDate, setArrivalDate] = useState(new Date());
    const [departureDate, setDepartureDate] = useState(new Date());
    const [roomType, setRoomType] = useState();
    const navigate = useNavigate();

    const roomTypesList = [
        { id: 1, fullName: "Одноместный" },
        { id: 2, fullName: "Двуместный" },
        { id: 3, fullName: "Люкс"}
        ];


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


    const selectArrivalDate = (date: string) => {
        setArrivalDate(new Date(date));
    };


    const selectDepartureDate = (date: string) => {
        setDepartureDate(new Date(date));
    };

    return (
        <div className={styles['page-style']}>

            <SideBar activeItem={"booking"} items={sideBarItems}/>
            <div className={styles['content-container']}>

                <Header name={'Иванова Анастасия Сергеевна'} post={'Менеджер'}/>

                <div className={styles['main-container']}>
                    <div className={styles['filters-container']}>
                        <DatePicker text={"Выберите дату заезда"} onSelect={selectArrivalDate} />
                        <DatePicker text={"Выберите дату отъезда"} onSelect={selectDepartureDate} />
                        <DropdownList  options={roomTypesList} label={' Выберите тип номера'} text={'Выберите тип номера из списка'} onSelect={()=>{}} />
                        <Button3 text={'Search'} onClick={()=>{}}/>/
                    </div>
                    <div className={styles['rooms-container']}>
                        <div className={styles['one-room-container']}>

                        </div>
                    </div>

                    <h1 className={styles['welcome']}>Booking</h1>



                </div>

            </div>


        </div>
    );
};

export default IndexManager;