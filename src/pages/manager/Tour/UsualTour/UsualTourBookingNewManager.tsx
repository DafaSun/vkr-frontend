import {useEffect, useState} from "react";
import styles from '../../../css/Index.module.css';
import self_styles from '../TourManager.module.css';
import {SideBar} from "../../../../components/SideBar/SideBar.tsx";
import {Header} from "../../../../components/Header/Header.tsx";
import {Button} from "../../../../components/buttons/Button/Button.tsx";
import {OneItem} from "../../../../types/SideBarItem.tsx";
import {useNavigate, useSearchParams} from "react-router-dom";
import {DatePicker} from "../../../../components/inputs/DatePicker/DatePicker.tsx";
import {DropdownList} from "../../../../components/inputs/DropdownList/DpropdownList.tsx";
import {InputNumber} from "../../../../components/inputs/InputNumber/InputNumber.tsx";
import {InputText} from "../../../../components/inputs/InputText/InputText.tsx";
import {InputPhone} from "../../../../components/inputs/InputPhone/InputPhone.tsx";
import {InputEmail} from "../../../../components/inputs/InputEmail/InputEmail.tsx";
import axios from "axios";
import {genderList, roomCategoryList} from "../../../../mocks/mock.tsx";

const UsualTourBookingNewManager = () => {
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
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [generalError, setGeneralError] = useState<string | null>(null);
    const [error_r, setError_r] = useState<string | null>(null);
    const [message, setMessage] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

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
    }

    const changeName = (data: string) => {
        setName(data);
        setErrors({});
        setGeneralError(null);
    }

    const changePatronymic = (data: string) => {
        setPatronymic(data);
    }

    const changeBirthday = (data: string) => {
        setBirthday(data);
        setErrors({});
        setGeneralError(null);
    }

    const changeEmail = (data: string) => {
        setEmail(data);
    }

    const changePhone = (data: string) => {
        setPhone(data);
        setErrors({});
        setGeneralError(null);
    }

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

    const getPlaceName = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/api/manager/booking/place_name/?place_id=${place}`)
            const r = response.data;
            setPlaceName(r.place_name);
        } catch (error) {
            setError_r("Произошла ошибка");
        }
    }

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
                'tour_type': "usual",
                'breakfast': false,
                'lunch': false,
                'dinner': false,
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
            <SideBar activeItem={"tour"} items={sideBarItems}/>
            <div className={styles['content-container']}>

                <Header name={'Иванова Анастасия Сергеевна'} post={'Менеджер'}/>

                <div className={styles['main-container']}>
                    <h1> Забронировать {placeName} </h1>
                    <div className={self_styles['parameters-container']}>
                        <div className={self_styles['columns-container']}>
                            <DatePicker value={checkin} text={'Дата заезда'} isEdit={false}/>
                            <DatePicker value={checkout} text={'Дата отъезда'} isEdit={false}/>
                            <InputNumber
                                value={((new Date(checkout)).getTime() - (new Date(checkin)).getTime()) / 86400000}
                                text={'Кол-во дней'} isEdit={false}/>
                        </div>
                        <div className={self_styles['columns-container']}>
                            <InputNumber value={guests} text={'Кол-во человек'} isEdit={false}/>
                            <DropdownList text={'Категория'} value={category} options={roomCategoryList}
                                          isEdit={false}/>
                            <DropdownList text={'Пол'} value={gender} options={genderList} isEdit={false}/>
                        </div>
                    </div>
                    <h1>Ввод данных</h1>
                    <InputText text={'Введите фамилию*'} onChange={changeSurname} label={''} required/>
                    <InputText text={'Введите имя*'} onChange={changeName} label={''} required/>
                    <InputText text={'Введите отчество'} onChange={changePatronymic} label={''}/>
                    <DropdownList options={genderList}
                                  value={gender} label={'Выберите пол'} text={'Выберите пол*'} isEdit={false} required/>
                    <DatePicker text={"Выберите дату рождения*"}
                                minDate={minDate}
                                maxDate={maxDate} value={birthday} onSelect={changeBirthday} required/>
                    <InputPhone text={'Введите номер телефона*'} onChange={changePhone} label={''} required/>
                    <InputEmail text={'Введите эл. почту'} onChange={changeEmail} label={''}/>
                    <div className={self_styles['price']}>{price} руб.</div>
                    {loading ? (
                            <p>Загрузка...</p>
                        ) :
                        error_r ? (
                                <p style={{color: "red"}}>{error_r}</p>
                            ) :
                            (<p style={{color: "green"}}>{message}</p>)
                    }
                    {generalError && <p style={{color: "red"}}>{generalError}</p>}
                    <Button text={`Забронировать`} onClick={createBooking} color={'orange'}/>
                </div>
            </div>
        </div>
    );
};

export default UsualTourBookingNewManager;
