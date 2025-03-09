import React, {useState} from "react";
import styles from '../css/Index.module.css'
import {SideBar} from "../../components/SideBar/SideBar.tsx";
import {Header} from "../../components/Header/Header.tsx"
import {Button1} from "../../components/buttons/Button1/Button1.tsx";
import {Button2} from "../../components/buttons/Button2/Button2.tsx";
import {Button3} from "../../components/buttons/Button3/Button3.tsx";
import {Button4} from "../../components/buttons/Button4/Button4.tsx";
import {Button5} from "../../components/buttons/Button5/Button5.tsx";
import {OneItem} from "../../types/SideBarItem.tsx";
import {useNavigate} from "react-router-dom";
import {DatePicker} from "../../components/inputs/DatePicker/DatePicker.tsx";
import {DropdownList} from "../../components/inputs/DropdownList/DpropdownList.tsx";
import {InputNumber} from "../../components/inputs/InputNumber/InputNumber.tsx";
import {DisplayNumber} from "../../components/displays/DisplayNumber.tsx";

const TourManager = () => {
    const [arrivalDate, setArrivalDate] = useState(new Date());
    const [departureDate, setDepartureDate] = useState(new Date());
    const [roomType, setRoomType] = useState(0);
    const [days, setDays] = useState(0);
    const [people, setPeople] = useState(0);
    const navigate = useNavigate();

    const roomTypesList = [
        { id: 1, fullName: "Удобства на блок" },
        { id: 2, fullName: "Удобства в номере"}
    ];

    const selectArrivalDate = (date: string) => {
        setArrivalDate(new Date(date));
    };


    const selectDepartureDate = (date: string) => {
        setDepartureDate(new Date(date));
    };

    const selectRoomType = (data: number) => {
        setRoomType(data);
    }

    const changePeople = (data: number) => {
        setPeople(data);
    }

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

            <SideBar activeItem={"hotel"} items={sideBarItems}/>
            <div className={styles['content-container']}>

                <Header name={'Иванова Анастасия Сергеевна'} post={'Менеджер'}/>

                <div className={styles['main-container']}>
                    <div className={styles['filters-container']}>
                        <div className={styles['row-container']}>
                            <DatePicker text={"Выберите дату заезда"} onSelect={selectArrivalDate} />
                            <DatePicker text={"Выберите дату отъезда"} onSelect={selectDepartureDate} />
                            <DisplayNumber text={'Введите кол-во дней'} value={days} label={''}/>
                        </div>
                        <div className={styles['row-container']}>
                            <DropdownList  options={roomTypesList} label={' Выберите тип размещения'} text={'Выберите тип размещения из списка'} onSelect={selectRoomType} />
                            <InputNumber text={'Введите кол-во человек'} onChange={changePeople} min={1} max={100}  label={''}/>
                            <Button3 text={'Search'} onClick={()=>{}}/>
                        </div>
                    </div>
                    <div className={styles['rooms-container']}>
                        <div className={styles['category-room-container']}>
                            <p>Одноместный номер, корпус 6, удобства в номере, кровать, телевизор, чайник, вай-фай</p>
                        </div>
                    </div>




                </div>

            </div>


        </div>
    );
};

export default TourManager;