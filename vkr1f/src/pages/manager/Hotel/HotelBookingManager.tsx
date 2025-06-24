import {useEffect, useState} from "react";
import styles from './HotelBookingManager.module.css';
import {SideBar} from "../../../components/SideBar/SideBar.tsx";
import {Header} from "../../../components/Header/Header.tsx";
import {Button} from "../../../components/buttons/Button/Button.tsx";
import {OneItem} from "../../../types/SideBarItem.tsx";
import {useNavigate, useSearchParams} from "react-router-dom";
import {DatePicker} from "../../../components/inputs/DatePicker/DatePicker.tsx";
import {DropdownList} from "../../../components/inputs/DropdownList/DpropdownList.tsx";
import {InputText} from "../../../components/inputs/InputText/InputText.tsx";
import {Checkbox} from "../../../components/inputs/Checkbox/Checkbox.tsx";
import {InputPhone} from "../../../components/inputs/InputPhone/InputPhone.tsx";
import {InputEmail} from "../../../components/inputs/InputEmail/InputEmail.tsx";
import axios from "axios";
import {InputNumber} from "../../../components/inputs/InputNumber/InputNumber.tsx";
import {genderList, roomCategoryList, typeTourList} from "../../../mocks/mock.tsx";

const HotelBookingNewManager = () => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

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
    const [surname, setSurname] = useState('');
    const [name, setName] = useState('');
    const [patronymic, setPatronymic] = useState('');
    const [birthday, setBirthday] = useState('');
    const [breakfast, setBreakfast] = useState(false);
    const [lunch, setLunch] = useState(false);
    const [dinner, setDinner] = useState(false);
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [error_r, setError_r] = useState<string | null>(null);
    const [message, setMessage] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [generalError, setGeneralError] = useState<string | null>(null);

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

    const changeSurname = (data: string) => {
        setSurname(data);
        setErrors({});
        setGeneralError(null);
    };
    const changeName = (data: string) => {
        setName(data);
        setErrors({});
        setGeneralError(null);
    };
    const changePatronymic = (data: string) => setPatronymic(data);
    const changeBirthday = (data: string) => {
        setBirthday(data);
        setErrors({});
        setGeneralError(null);
    };
    const changeGender = (data: string) => {
        setGender(data);
        setErrors({});
        setGeneralError(null);
    };
    const changeBreakfast = (data: boolean) => setBreakfast(data);
    const changeLunch = (data: boolean) => setLunch(data);
    const changeDinner = (data: boolean) => setDinner(data);
    const changeEmail = (data: string) => {
        setEmail(data);
    };
    const changePhone = (data: string) => {
        setPhone(data);
        setErrors({});
        setGeneralError(null);
    };

    const validateFields = () => {
        let tempErrors: { [key: string]: string } = {};
        if (!surname) tempErrors.surname = "Фамилия обязательна";
        if (!name) tempErrors.name = "Имя обязательно";
        if (!birthday) tempErrors.birthday = "Дата рождения обязательна";
        if (!phone) tempErrors.phone = "Телефон обязателен";
        if (!gender) tempErrors.gender = "Пол обязателен";
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const createBooking = async () => {
        if (!validateFields()) {
            setGeneralError("Пожалуйста, заполните все обязательные поля!");
            return;
        }

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
                'tour_type': "hotel",
                'breakfast': breakfast,
                'lunch': lunch,
                'dinner': dinner,
                'price': price,
            });
            setMessage(response.data.message);
        } catch (error) {
            if (error instanceof Error) {
                setError_r(error.response.data.error);
            } else {
                setError_r("Произошла ошибка");
            }
        } finally {
            setLoading(false);
        }
    };

    const getPlaceName = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/api/manager/booking/place_name/?place_id=${place}`)
            const r = response.data;
            setPlaceName(r.place_name);
        } catch (error) {
            setError_r("Произошла ошибка");
        }
    }


    const sideBarItems: OneItem[] = [
        {onClick: () => navigate('/manager/tour'), text: "Путевки", label: "tour"},
        {onClick: () => navigate('/manager/hotel'), text: "Гостиница", label: "hotel"},
        {onClick: () => navigate('/manager/bookings'), text: "Брони", label: "bookings"},
        {onClick: () => navigate('/manager/guests'), text: "Отдыхающие", label: "guests"},
        {onClick: () => navigate('/manager/rooms'), text: "Номера", label: "rooms"},
        {onClick: () => navigate('/manager/timetable'), text: "Расписания", label: "info"},
        {onClick: () => navigate('/manager/info'), text: "Информация", label: "info"},
    ];

    const minDate = "1907-03-04";
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const maxDate = yesterday.toISOString().split("T")[0];

    return (
        <div className={styles['page-style']}>
            <SideBar activeItem={"hotel"} items={sideBarItems}/>
            <div className={styles['content-container']}>

                <Header name={'Иванова Анастасия Сергеевна'} post={'Менеджер'}/>

                <div className={styles['main-container']}>

                    <div className={styles['table-title']}>
                        Бронирование
                    </div>

                    <div className={styles['book-head']}>
                        <img
                            src={"/images/rooms/img_room_3.png"}/>
                        <div className={styles['descs00']}>
                            <div className={styles['desc']}>
                                <span>Место: 102/1</span>

                                <span>Номер: 102</span>

                                <span>Удобства: В блоке</span>

                                <span>Корпус: 4</span>
                            </div>
                            <div className={styles['desc']}>
                                <span>Дата заезда: 17 июня 2025</span>

                                <span>Датат выезда: 24 июня 2025</span>

                                <span>Пол: Мужской</span>

                                <span>Этаж: 1</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles['containers-00']}>

                        <div className={styles['fields-container']}>
                            <div className={styles['field']}>
                                <InputText text={'Введите фамилию*'} onChange={changeSurname} label={'Фамилия'}/>
                            </div>
                            <div className={styles['field']}>
                                <InputText text={'Введите имя*'} onChange={changeName} label={'Имя'}/>
 </div>
                            <div className={styles['field']}>
                                <InputText text={'Введите отчество'} onChange={changePatronymic} label={'Отчество'}/>
                            </div>
                        </div>


                        <div className={styles['fields-container']}>
                            <div className={styles['field']}>
                                <DatePicker text={"Выберите дату рождения*"} minDate={minDate} maxDate={maxDate} value={birthday}
                                            onSelect={changeBirthday}/>
                            </div>
                            <div className={styles['field']}>
                                <InputPhone text={'Введите номер телефона*'} onChange={changePhone} label={''}/>
                            </div>
                            <div className={styles['field']}>
                                <InputEmail text={'Введите эл. почту'} onChange={changeEmail} label={''}/>
                            </div>
                        </div>


                    </div>


                    <Button color={'orange'} text={`Забронировать`} onClick={createBooking}/>
                </div>
            </div>
        </div>
    );
};

export default HotelBookingNewManager;
