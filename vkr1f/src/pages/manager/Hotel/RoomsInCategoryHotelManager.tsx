import React, {useEffect, useState} from "react";
import styles from './HotelManager.module.css';
import {SideBar} from "../../../components/SideBar/SideBar.tsx";
import {Header} from "../../../components/Header/Header.tsx";
import {Button3} from "../../../components/buttons/Button3/Button3.tsx";
import {OneItem} from "../../../types/SideBarItem.tsx";
import {useNavigate, useSearchParams} from "react-router-dom";
import {DatePicker} from "../../../components/inputs/DatePicker/DatePicker.tsx";
import {DropdownList} from "../../../components/inputs/DropdownList/DpropdownList.tsx";
import {InputNumber} from "../../../components/inputs/InputNumber/InputNumber.tsx";
import {DisplayNumber} from "../../../components/displays/DisplayNumber.tsx";

const RoomsInCategoryHotelManager = () => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    const defaultParams = {
        checkin: new Date().toISOString().split("T")[0],
        checkout: new Date(Date.now() + 86400000 * 7).toISOString().split("T")[0],
        guests: "1",
        roomType: "1",
        category: "1",
        gender: "1",
    };

    const [arrivalDate, setArrivalDate] = useState(searchParams.get("checkin") || defaultParams.checkin);
    const [departureDate, setDepartureDate] = useState(searchParams.get("checkout") || defaultParams.checkout);
    const [roomType, setRoomType] = useState(Number(searchParams.get("roomType")) || Number(defaultParams.roomType));
    const [people, setPeople] = useState(Number(searchParams.get("guests")) || Number(defaultParams.guests));
    const [category, setCategory] = useState(Number(searchParams.get("category")) || Number(defaultParams.category));
    const [gender, setGender] = useState(Number(searchParams.get("gender")) || Number(defaultParams.gender));

    // Следим за изменением параметров в URL
    useEffect(() => {
        setArrivalDate(searchParams.get("checkin") || defaultParams.checkin);
        setDepartureDate(searchParams.get("checkout") || defaultParams.checkout);
        setRoomType(Number(searchParams.get("roomType")) || Number(defaultParams.roomType));
        setPeople(Number(searchParams.get("guests")) || Number(defaultParams.guests));
        setCategory(Number(searchParams.get("category")) || Number(defaultParams.category));
        setGender(Number(searchParams.get("gender")) || Number(defaultParams.gender));
    }, [searchParams]);

    useEffect(() => {
        if (!searchParams.get("checkin") || !searchParams.get("checkout") || !searchParams.get("guests") || !searchParams.get("roomType") || !searchParams.get("category") || !searchParams.get("gendery")) {
            setSearchParams(defaultParams, {replace: true});
        }
    }, [searchParams, setSearchParams]);

    const sideBarItems: OneItem[] = [
        {onClick: () => navigate('/manager/tour'), text: "Путевки", label: "tour"},
        {onClick: () => navigate('/manager/hotel'), text: "Гостиница", label: "hotel"},
        {onClick: () => navigate('/manager/placement'), text: "Размещение", label: "placement"},
        {onClick: () => navigate('/manager/registration'), text: "Регистрация", label: "registration"},
        {
            onClick: () => {navigate('/manager/rooms')},
            text: "Номера",
            label: "rooms"
        },
        {onClick: () => navigate('/manager/info'), text: "Информация", label: "info"}
    ];

    return (
        <div className={styles['page-style']}>
            <SideBar activeItem={"tour"} items={sideBarItems}/>
            <div className={styles['content-container']}>

                <Header name={'Иванова Анастасия Сергеевна'} post={'Менеджер'}/>

                <div className={styles['main-container']}>
                    <div className={styles['parameters-container']}>
                        <div className={styles['columns-container']}>
                        <p>Дата заезда: {arrivalDate}</p>
                        <p>Дата отъезда: {departureDate}</p>
                        <p>Кол-во
                            дней: {((new Date(departureDate)).getTime() - (new Date(arrivalDate)).getTime()) / 86400000}</p>
                    </div>
                    <div className={styles['columns-container']}>
                        <p>Тип размещения: {roomType}</p>
                        <p>Кол-во человек: {people}</p>
                        <p>Пол: {gender}</p>
                        <p>Категория: {category}</p>
                    </div>

                </div>
                <div className={styles['rooms-container']}>
                    <div className={styles['room-container']}>
                        <img src="/images/rooms/room1.jpg"/>
                        <div className={styles['room-description']}>
                            <div className={styles['room-title']}>
                                Одноместный номер 26 в 6 корпусе
                                <br/>
                                2 этаж
                                <br/>
                                кирпичный корпус
                                <br/>
                                удобства в номере
                            </div>
                            <div className={styles['price']}>
                                24 000 руб.
                            </div>
                            <Button3 text={'Забронировать'} onClick={() => {
                                navigate(`/manager/hotel/rooms-in-category/booking?checkin=${arrivalDate}&checkout=${departureDate}&guests=${people}&roomType=${roomType}&category=${category}&room=${206}`);
                            }}/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
</div>
)
    ;
};

export default RoomsInCategoryHotelManager;
