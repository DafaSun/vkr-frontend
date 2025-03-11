import React, {useState} from "react";
import styles from './PlacementManager.module.css'
import {SideBar} from "../../../components/SideBar/SideBar.tsx";
import {Header} from "../../../components/Header/Header.tsx"
import {Button1} from "../../../components/buttons/Button1/Button1.tsx";
import {Button2} from "../../../components/buttons/Button2/Button2.tsx";
import {Button3} from "../../../components/buttons/Button3/Button3.tsx";
import {Button4} from "../../../components/buttons/Button4/Button4.tsx";
import {Button5} from "../../../components/buttons/Button5/Button5.tsx";
import {InputText} from "../../../components/inputs/InputText/InputText.tsx";
import {OneItem} from "../../../types/SideBarItem.tsx";
import {DatePicker} from "../../../components/inputs/DatePicker/DatePicker.tsx";
import {useNavigate} from "react-router-dom";
import {DropdownList} from "../../../components/inputs/DropdownList/DpropdownList.tsx";
import {roomCategoryList} from "../../../mocks/mock.tsx";

const IndexManager = () => {
    const navigate = useNavigate();


    const sideBarItems: OneItem[] = [
        {
            onClick: () => {
                navigate('/manager/tour')
            },
            text: "Путевки",
            label: "tour"
        },
        {
            onClick: () => {
                navigate('/manager/hotel')
            },
            text: "Гостиница",
            label: "hotel"
        },
        {
            onClick: () => {
                navigate('/manager/placement')
            },
            text: "Размещение",
            label: "placement"
        },
        {
            onClick: () => {
                navigate('/manager/registration')
            },
            text: "Регистрация",
            label: "registration"
        },
        {
            onClick: () => {
                navigate('/manager/rooms')
            },
            text: "Номера",
            label: "rooms"
        },
        {
            onClick: () => {
                navigate('/manager/info')
            },
            text: "Информация",
            label: "info"
        }
    ];

    const [roomCategory, setRoomCategory] = useState(1);
    const [surname, setSurname] = useState('');
    const [arrivalDate, setArrivalDate] = useState('');
    const selectArrivalDate = (data: string) => {
        setArrivalDate(data);
    };

    const selectRoomCategory = (data: number) => {
        setRoomCategory(data);
    };

    const changeSurname = (data: string) => {
        setSurname(data);
    };

    return (
        <div className={styles['page-style']}>

            <SideBar activeItem={"placement"} items={sideBarItems}/>
            <div className={styles['content-container']}>

                <Header name={'Иванова Анастасия Сергеевна'} post={'Менеджер'}/>

                <div className={styles['main-container']}>
<div className={styles['text']}>Фамилия</div>
<div className={styles['text']}>Имя</div>
<div className={styles['text']}>Отчество</div>
<div className={styles['text']}>Дата рождения</div>
<div className={styles['text']}>Пол</div>
<div className={styles['text']}>Дата заезда</div>
<div className={styles['text']}>Дата отъезда</div>
<div className={styles['text']}>Стоимость</div>
<div className={styles['text']}>Номер</div>
<div className={styles['text']}>Корпус</div>
<div className={styles['text']}>Предоплата</div>
<div className={styles['text']}>Статус</div>

                    <Button3 text={'Редактировать'} onClick={()=>{}}/>

                </div>

            </div>


        </div>
    );
};

export default IndexManager;