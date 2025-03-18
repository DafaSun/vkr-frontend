import React, {useEffect, useState} from "react";
import styles from '../../../css/Index.module.css';
import self_styles from '../TourManager.module.css';
import {SideBar} from "../../../../components/SideBar/SideBar.tsx";
import {Header} from "../../../../components/Header/Header.tsx";
import {Button3} from "../../../../components/buttons/Button3/Button3.tsx";
import {OneItem} from "../../../../types/SideBarItem.tsx";
import {useNavigate, useSearchParams} from "react-router-dom";
import {DatePicker} from "../../../../components/inputs/DatePicker/DatePicker.tsx";
import {DropdownList} from "../../../../components/inputs/DropdownList/DpropdownList.tsx";
import {InputNumber} from "../../../../components/inputs/InputNumber/InputNumber.tsx";
import {InputText} from "../../../../components/inputs/InputText/InputText.tsx";
import {DisplayNumber} from "../../../../components/displays/DisplayNumber.tsx";
import {InputPhone} from "../../../../components/inputs/InputPhone/InputPhone.tsx";
import {InputEmail} from "../../../../components/inputs/InputEmail/InputEmail.tsx";
import axios from "axios";

const UsualTourBookingNewManager = () => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    const [error_r, setError_r] = useState<string | null>(null);
    const [message, setMessage] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const defaultParams = {
        checkin: new Date().toISOString().split("T")[0],
        checkout: new Date(Date.now() + 86400000 * 7).toISOString().split("T")[0],
        guests: "1",
        price: "1000",
        category: "1cat",
        place: "1",
        gender: "male",
    };

    const [checkin, setCheckin] = useState(searchParams.get("checkin") || defaultParams.checkin);
    const [checkout, setCheckout] = useState(searchParams.get("checkout") || defaultParams.checkout);
    const [guests, setGuests] = useState(Number(searchParams.get("guests")) || Number(defaultParams.guests));
    const [price, setPrice] = useState(Number(searchParams.get("price")) || Number(defaultParams.price));
    const [category, setCategory] = useState(searchParams.get("category") || defaultParams.category);
    const [place, setPlace] = useState(Number(searchParams.get("place")) || Number(defaultParams.place));
    const [gender, setGender] = useState(searchParams.get("gender") || defaultParams.gender);
    const [placeName, setPlaceName] = useState('');

    const getPlaceName = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/api/manager/booking/place_name/?place_id=${place}`)
            const r = response.data;
            setPlaceName(r.place_name);
        } catch (error) {
            setError_r("Произошла ошибка");
        }
    }

    useEffect(() => {
        getPlaceName()

    }, []);

    useEffect(() => {
        setCheckin(searchParams.get("checkin") || defaultParams.checkin);
        setCheckout(searchParams.get("checkout") || defaultParams.checkout);
        setGuests(Number(searchParams.get("guests")) || Number(defaultParams.guests));
        setCategory(searchParams.get("category") || defaultParams.category);
        setPrice(Number(searchParams.get("price")) || Number(defaultParams.price));
        setPlace(Number(searchParams.get("place")) || Number(defaultParams.place));
        setGender(searchParams.get("gender") || defaultParams.gender);
    }, [searchParams]);

    useEffect(() => {
        if (!searchParams.get("checkin") || !searchParams.get("checkout") || !searchParams.get("guests") || !searchParams.get("category") || !searchParams.get("place") || !searchParams.get("gender") || !searchParams.get("price")) {
            setSearchParams(defaultParams, {replace: true});
        }
    }, [searchParams, setSearchParams]);

    const [surname, setSurname] = useState('');
    const [name, setName] = useState('');
    const [patronymic, setPatronymic] = useState('');
    const [birthday, setBirthday] = useState('');
    const [breakfast, setBreakfast] = useState(false);
    const [lunch, setLunch] = useState(false);
    const [dinner, setDinner] = useState(false);
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const changeSurname = (data: string) => {
        setSurname(data);
    }

    const changeName = (data: string) => {
        setName(data);
    }

    const changePatronymic = (data: string) => {
        setPatronymic(data);
    }

    const changeBirthday = (data: string) => {
        setBirthday(data);
    }

    const changeGender = (data: string) => {
        setGender(data);
    }

    const changeBreakfast = (data: boolean) => {
        setBreakfast(data);
    }

    const changeLunch = (data: boolean) => {
        setLunch(data);
    }

    const changeDinner = (data: boolean) => {
        setDinner(data);
    }

    const changeEmail = (data: string) => {
        setEmail(data);
    }

    const changePhone = (data: string) => {
        setPhone(data);
    }

    const createBooking = async () => {
        try {
            setLoading(true);
            const response = await axios.post('http://localhost:8000/api/manager/booking/new/', {
                "place_id": place,
                'checkin': checkin,
                'checkout': checkout,
                'surname': surname,
                'name': name,
                'patronymic': patronymic,
                'birthday': birthday,
                'phone': phone,
                'email': email,
                'gender': gender,
                'tour_type': "usual",
                'breakfast': breakfast,
                'lunch': lunch,
                'dinner': dinner,
                'price': price,
            });
            setMessage(response.data.message);
            // navigate('/manager/tour');
        } catch (error) {
            if (error instanceof Error) {
                setError_r(error.response.data.error);
            } else {
                setError_r("Произошла ошибка");
            }
        }
        finally {
            setLoading(false);
        }
    };

    const sideBarItems: OneItem[] = [
        {onClick: () => navigate('/manager/tour'), text: "Путевки", label: "tour"},
        {onClick: () => navigate('/manager/hotel'), text: "Гостиница", label: "hotel"},
        {onClick: () => navigate('/manager/bookings'), text: "Брони", label: "bookings"},
        {onClick: () => navigate('/manager/guests'), text: "Отдыхающие", label: "guests"},
        {onClick: () => navigate('/manager/rooms'), text: "Номера", label: "rooms"},
        {onClick: () => navigate('/manager/info'), text: "Информация", label: "info"}
    ];

    return (
        <div className={styles['page-style']}>
            <SideBar activeItem={"tour"} items={sideBarItems}/>
            <div className={styles['content-container']}>

                <Header name={'Иванова Анастасия Сергеевна'} post={'Менеджер'}/>

                <div className={styles['main-container']}>
                    <h1> Забронировать {placeName} </h1>
                    <div className={self_styles['parameters-container']}>
                        <div className={self_styles['columns-container']}>
                            <p>Дата заезда: {checkin}</p>
                            <p>Дата отъезда: {checkout}</p>
                            <p>Кол-во
                                дней: {((new Date(checkout)).getTime() - (new Date(checkin)).getTime()) / 86400000}</p>
                        </div>
                        <div className={self_styles['columns-container']}>
                            <p>Кол-во человек: {guests}</p>
                            <p>Категория: {category}</p>
                            <p>Пол: {gender}</p>
                        </div>


                    </div>
                    <h1>Ввод данных</h1>
                    <InputText text={'Введите фамилию'} onChange={changeSurname} label={''}/>
                    <InputText text={'Введите имя'} onChange={changeName} label={''}/>
                    <InputText text={'Введите отчество'} onChange={changePatronymic} label={''}/>
                    <DropdownList options={[{id: 'male', fullName: "Male"}, {id: 'female', fullName: "Female"}]}
                                  value={gender} label={'Выберите пол'} text={'Выберите пол из списка'}
                                  onSelect={changeGender}/>
                    <DatePicker text={"Выберите дату рождения"} value={birthday} onSelect={changeBirthday}/>
                    <InputPhone text={'Введите номер телефона'} onChange={changePhone} label={''}/>
                    <InputEmail text={'Введите эл. почту'} onChange={changeEmail} label={''}/>
                    <div className={self_styles['price']}>{price}</div>
                    {loading ? (
                            <p>Загрузка...</p>
                        ) :
                        error_r ? (
                                <p style={{color: "red"}}>{error_r}</p>
                            ) :
                            (<p style={{color: "green"}}>{message}</p>)
                    }
                    <Button3 text={`Забронировать`} onClick={createBooking}/>
                </div>

            </div>
        </div>
    )
        ;
};

export default UsualTourBookingNewManager;
