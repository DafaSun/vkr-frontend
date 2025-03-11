import React, { useEffect, useState } from "react";
import styles from './HotelManager.module.css';
import { SideBar } from "../../../components/SideBar/SideBar.tsx";
import { Header } from "../../../components/Header/Header.tsx";
import { Button3 } from "../../../components/buttons/Button3/Button3.tsx";
import { OneItem } from "../../../types/SideBarItem.tsx";
import { useNavigate, useSearchParams } from "react-router-dom";
import { DatePicker } from "../../../components/inputs/DatePicker/DatePicker.tsx";
import { DropdownList } from "../../../components/inputs/DropdownList/DpropdownList.tsx";
import { InputNumber } from "../../../components/inputs/InputNumber/InputNumber.tsx";
import { DisplayNumber } from "../../../components/displays/DisplayNumber.tsx";

const UsualTourManager = () => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    const defaultParams = {
        checkin: new Date().toISOString().split("T")[0],
        checkout: new Date(Date.now() + 86400000 * 7).toISOString().split("T")[0],
        guests: "1",
        roomType: "1",
        gender: "1"
    };

    // Состояние, синхронизированное с URL
    const [arrivalDate, setArrivalDate] = useState(searchParams.get("checkin") || defaultParams.checkin);
    const [departureDate, setDepartureDate] = useState(searchParams.get("checkout") || defaultParams.checkout);
    const [roomType, setRoomType] = useState(Number(searchParams.get("roomType")) || Number(defaultParams.roomType));
    const [people, setPeople] = useState(Number(searchParams.get("guests")) || Number(defaultParams.guests));
    const [gender, setGender] = useState(Number(searchParams.get("gender")) || Number(defaultParams.gender));

    // Следим за изменением параметров в URL
    useEffect(() => {
        setArrivalDate(searchParams.get("checkin") || defaultParams.checkin);
        setDepartureDate(searchParams.get("checkout") || defaultParams.checkout);
        setRoomType(Number(searchParams.get("roomType")) || Number(defaultParams.roomType));
        setPeople(Number(searchParams.get("guests")) || Number(defaultParams.guests));
        setGender(Number(searchParams.get("gender")) || Number(defaultParams.gender));
    }, [searchParams]);

    useEffect(() => {
        if (!searchParams.get("checkin") || !searchParams.get("checkout") || !searchParams.get("guests") || !searchParams.get("roomType") || !searchParams.get("gender")) {
            setSearchParams(defaultParams, { replace: true });
        }
    }, [searchParams, setSearchParams]);

    const updateUrl = (key: string, value: string | number) => {
        setSearchParams(prev => {
            const newParams = new URLSearchParams(prev);
            newParams.set(key, value.toString());
            return newParams;
        }, { replace: true });
    };

    const selectArrivalDate = (date: string) => {
        setArrivalDate(date);
        updateUrl("checkin", date);
    };

    const selectDepartureDate = (date: string) => {
        setDepartureDate(date);
        updateUrl("checkout", date);
    };

    const selectRoomType = (data: number) => {
        setRoomType(data);
        updateUrl("roomType", data);
    };

    const selectGender = (data: number) => {
        setGender(data);
        updateUrl("gender", data);
    };

    const changePeople = (data: number) => {
        setPeople(data);
        updateUrl("guests", data);
    };

    const roomTypesList = [
        { id: 1, fullName: "Удобства на блок" },
        { id: 2, fullName: "Удобства в номере" }
    ];

    const genderList = [
        { id: 1, fullName: "Male" },
        { id: 2, fullName: "Female" }
    ];

    const sideBarItems: OneItem[] = [
        { onClick: () => navigate('/manager/tour'), text: "Путевки", label: "tour" },
        { onClick: () => navigate('/manager/hotel'), text: "Гостиница", label: "hotel" },
        { onClick: () => navigate('/manager/placement'), text: "Размещение", label: "placement" },
        { onClick: () => navigate('/manager/registration'), text: "Регистрация", label: "registration" },
        {
            onClick: () => {navigate('/manager/rooms')},
            text: "Номера",
            label: "rooms"
        },
        { onClick: () => navigate('/manager/info'), text: "Информация", label: "info" }
    ];

    return (
        <div className={styles['page-style']}>
            <SideBar activeItem={"hotel"} items={sideBarItems} />
            <div className={styles['content-container']}>

                <Header name={'Иванова Анастасия Сергеевна'} post={'Менеджер'} />

                <div className={styles['main-container']}>
                    <div className={styles['filters-container']}>
                        <div className={styles['row-container']}>
                            <DatePicker text={"Выберите дату заезда"} value={arrivalDate} onSelect={selectArrivalDate} />
                            <DatePicker text={"Выберите дату отъезда"} value={departureDate} onSelect={selectDepartureDate} />
                            <DisplayNumber text={'Введите кол-во дней'} value={((new Date(departureDate)).getTime() - (new Date(arrivalDate)).getTime()) / 86400000} label={''} />
                        </div>
                        <div className={styles['row-container']}>
                            <DropdownList options={roomTypesList} value={roomType} label={'Выберите тип размещения'} text={'Выберите тип размещения из списка'} onSelect={selectRoomType} />
                            <DropdownList options={genderList} value={gender} label={'Выберите пол'} text={'Выберите пол из списка'} onSelect={selectGender} />
                            <InputNumber text={'Введите кол-во человек'} value={people} onChange={changePeople} min={1} max={100} label={''} />
                            <Button3 text={'Search'} onClick={() => { }} />
                        </div>
                    </div>
                    <div className={styles['rooms-container']}>
                        <div className={styles['category-room-container']}>
                            <img src="/images/rooms/room1.jpg" />
                            <div className={styles['room-description']}>
                                <div className={styles['room-title']}>
                                    Одноместный номер в 6 корпусе
                                </div>
                                <div className={styles['price']}>
                                    От 24 000 руб.
                                </div>
                                <Button3 text={'Все номера категории'} onClick={() => {
                                    navigate(`/manager/hotel/rooms-in-category?checkin=${arrivalDate}&checkout=${departureDate}&guests=${people}&roomType=${roomType}&category=${1}`);
                                }} />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default UsualTourManager;
