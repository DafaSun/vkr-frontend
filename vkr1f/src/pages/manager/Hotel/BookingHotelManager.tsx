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
import {InputText} from "../../../components/inputs/InputText/InputText.tsx";
import {DisplayNumber} from "../../../components/displays/DisplayNumber.tsx";
import {Checkbox} from "../../../components/inputs/Checkbox/Checkbox.tsx";
import {InputPhone} from "../../../components/inputs/InputPhone/InputPhone.tsx";
import {InputEmail} from "../../../components/inputs/InputEmail/InputEmail.tsx";

const BookingUsualTourManager = () => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    const defaultParams = {
        checkin: new Date().toISOString().split("T")[0],
        checkout: new Date(Date.now() + 86400000 * 7).toISOString().split("T")[0],
        guests: "1",
        roomType: "1",
        category: "1",
        room: "1",
        gender: "1",
    };

    const [arrivalDate, setArrivalDate] = useState(searchParams.get("checkin") || defaultParams.checkin);
    const [departureDate, setDepartureDate] = useState(searchParams.get("checkout") || defaultParams.checkout);
    const [roomType, setRoomType] = useState(Number(searchParams.get("roomType")) || Number(defaultParams.roomType));
    const [people, setPeople] = useState(Number(searchParams.get("guests")) || Number(defaultParams.guests));
    const [category, setCategory] = useState(Number(searchParams.get("category")) || Number(defaultParams.category));
    const [room, setRoom] = useState(Number(searchParams.get("room")) || Number(defaultParams.room));
    const [gender, setGender] = useState(Number(searchParams.get("gender")) || Number(defaultParams.gender));
    const [hasBreakfest, setHasBreakfest]=useState(false)
    const [hasLunch, setHasLunch]=useState(false)
    const [hasDinner, setHasDinner]=useState(false)

    const changeHasBreakfest=(data:boolean)=>{
        setHasBreakfest(data);
    }

    const changeHasLunch=(data:boolean)=>{
        setHasLunch(data);
    }

    const changeHasDinner=(data:boolean)=>{
        setHasDinner(data);
    }



    // Следим за изменением параметров в URL
    useEffect(() => {
        setArrivalDate(searchParams.get("checkin") || defaultParams.checkin);
        setDepartureDate(searchParams.get("checkout") || defaultParams.checkout);
        setRoomType(Number(searchParams.get("roomType")) || Number(defaultParams.roomType));
        setPeople(Number(searchParams.get("guests")) || Number(defaultParams.guests));
        setCategory(Number(searchParams.get("category")) || Number(defaultParams.category));
        setRoom(Number(searchParams.get("room")) || Number(defaultParams.room));
        setGender(Number(searchParams.get("gender")) || Number(defaultParams.gender));
    }, [searchParams]);

    useEffect(() => {
        if (!searchParams.get("checkin") || !searchParams.get("checkout") || !searchParams.get("guests") || !searchParams.get("roomType") || !searchParams.get("category") || !searchParams.get("room")|| !searchParams.get("gender")) {
            setSearchParams(defaultParams, {replace: true});
        }
    }, [searchParams, setSearchParams]);

    const [birthday, setBirthday] = useState('');
    const [patronymic, setPatronymic] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');

    const selectBirthday = (date: string) => {
        setBirthday(date);
    };

    const changeSurname = (surname: string) => {
        setSurname(surname);
    }

    const changeName = (name: string) => {
        setName(name);
    }

    const changePatronymic = (data: string) => {
        setPatronymic(data);
    }

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


    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const changeEmail = (data: string) => {
        setEmail(data);
    }

    const changePhone = (data: string) => {
        setPhone(data);
    }


    return (
        <div className={styles['page-style']}>
            <SideBar activeItem={"tour"} items={sideBarItems}/>
            <div className={styles['content-container']}>

                <Header name={'Иванова Анастасия Сергеевна'} post={'Менеджер'}/>

                <div className={styles['main-container']}>
                    <h1> Забронировать номер {room} </h1>
                    <div className={styles['parameters-container']}>
                        <div className={styles['columns-container']}>
                            <p>Дата заезда: {arrivalDate}</p>
                            <p>Дата отъезда: {departureDate}</p>
                            <p>Пол: {gender}</p>
                            <p>Кол-во
                                дней: {((new Date(departureDate)).getTime() - (new Date(arrivalDate)).getTime()) / 86400000}</p>
                        </div>
                        <div className={styles['columns-container']}>
                            <p>Тип размещения: {roomType}</p>
                            <p>Кол-во человек: {people}</p>
                            <p>Категория: {category}</p>
                            <p>Стоимость: {25000}</p>
                        </div>


                    </div>
                    <h1>Ввод данных</h1>
<InputText text={'Введите фамилию'} onChange={changeSurname} label={''}/>
<InputText text={'Введите имя'} onChange={changeName} label={''}/>
<InputText text={'Введите отчество'} onChange={changePatronymic} label={''}/>
                    <DatePicker text={"Выберите дату рождения"} value={birthday} onSelect={selectBirthday} />
                    <Checkbox text={'Завтрак'} value={hasBreakfest} onChange={changeHasBreakfest} />
                    <Checkbox text={'Обед'} value={hasLunch} onChange={changeHasLunch} />
                    <Checkbox text={'Ужин'} value={hasDinner} onChange={changeHasDinner} />
                    <InputPhone text={'Введите номер телефона'} onChange={changePhone} label={''}/>
                    <InputEmail text={'Введите эл. почту'} onChange={changeEmail} label={''}/>
                    <h1>Итоговая стоимость  -  28 000 руб.</h1>
                <Button3 text={'Забронировать' } onClick={()=>{}}/>
                </div>

            </div>
        </div>
    )
        ;
};

export default BookingUsualTourManager;
