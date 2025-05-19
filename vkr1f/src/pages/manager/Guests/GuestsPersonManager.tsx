import {useEffect, useState} from "react";
import styles from '../../css/Index.module.css'
import {SideBar} from "../../../components/SideBar/SideBar.tsx";
import {Header} from "../../../components/Header/Header.tsx"
import {Button} from "../../../components/buttons/Button/Button.tsx";
import {InputText} from "../../../components/inputs/InputText/InputText.tsx";
import {OneItem} from "../../../types/SideBarItem.tsx";
import {DatePicker} from "../../../components/inputs/DatePicker/DatePicker.tsx";
import {useNavigate, useSearchParams} from "react-router-dom";
import {DropdownList} from "../../../components/inputs/DropdownList/DpropdownList.tsx";
import {genderList, roomCategoryList, typeTourList} from "../../../mocks/mock.tsx";
import axios from "axios";
import {InputPhone} from "../../../components/inputs/InputPhone/InputPhone.tsx";
import {InputEmail} from "../../../components/inputs/InputEmail/InputEmail.tsx";


type GuestData = {
    guest_id: number,
    surname: string,
    name: string,
    patronymic: string,
    birthday: string,
    gender: string,
    tour_type: string,
    email: string,
    phone: string,
    home_address_country: string,
    home_address_region: string,
    home_address_city: string,
    home_address_street_and_house: string,
    workplace: string,
    place_name: string,
    room_name: string,
    checkin: string,
    checkout: string,
    category_label: string,
    category_name: string
};

const GuestPersonManager = () => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    const defaultParams = {
        id: '1',
    };

    const [guestId, setGuestId] = useState<number>();
    const [loading, setLoading] = useState(false);
    const [error_r, setError_r] = useState<string | null>(null);
    const [isEdit, setIsEdit] = useState(false);
    const [surname, setSurname] = useState<string>();
    const [name, setName] = useState<string>();
    const [patronymic, setPatronymic] = useState<string>('');
    const [birthday, setBirthday] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [phone, setPhone] = useState<string>();
    const [homeAddressCountry, setHomeAddressCountry] = useState<string>();
    const [homeAddressRegion, setHomeAddressRegion] = useState<string>();
    const [homeAddressCity, setHomeAddressCity] = useState<string>();
    const [homeAddressStreet, setHomeAddressStreet] = useState<string>();
    const [workplace, setWorkplace] = useState<string>();
    const [guestInfo, setGuestInfo] = useState<GuestData>({
        guest_id: 0,
        surname: '',
        name: '',
        patronymic: '',
        birthday: '',
        gender: '',
        tour_type: '',
        email: '',
        phone: '',
        home_address_country: '',
        home_address_region: '',
        home_address_city: '',
        home_address_street_and_house: '',
        workplace: '',
        place_name: '',
        room_name: '',
        checkin: '',
        checkout: '',
        category_label: '',
        category_name: ''
    });
    const [formErrors, setFormErrors] = useState({
        surname: false,
        name: false,
        birthday: false,
        phone: false,
    });

    useEffect(() => {
        setLoading(true);
        getGuestPerson()
    }, [guestId]);

    useEffect(() => {
        setGuestId(Number(searchParams.get("id")) || Number(defaultParams.id));
    }, [searchParams]);

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

    const changeEmail = (data: string) => {
        setEmail(data);
    }

    const changePhone = (data: string) => {
        setPhone(data);
    }

    const changeHomeAddressCountry = (data: string) => {
        setHomeAddressCountry(data);
    }

    const changeHomeAddressRegion = (data: string) => {
        setHomeAddressRegion(data);
    }

    const changeHomeAddressCity = (data: string) => {
        setHomeAddressCity(data);
    }

    const changeHomeAddressStreet = (data: string) => {
        setHomeAddressStreet(data);
    }

    const changeWorkplace = (data: string) => {
        setWorkplace(data);
    }

    const getGuestPerson = async () => {
        if (!guestId || isNaN(guestId)) return; // Предотвращаем запрос с undefined

        try {
            const response = await axios.get(`http://localhost:8000/api/manager/guests/person/?id=${guestId}`);
            setGuestInfo(response.data);
            setSurname(response.data.surname);
            setName(response.data.name);
            setPatronymic(response.data.patronymic);
            setBirthday(response.data.birthday);
            setPhone(response.data.phone);
            setHomeAddressCountry(response.data.home_address_country);
            setHomeAddressRegion(response.data.home_address_region);
            setHomeAddressCity(response.data.home_address_city);
            setHomeAddressStreet(response.data.home_address_street_and_house);
            setWorkplace(response.data.workplace);
        } catch (error) {
            setError_r(error instanceof Error ? error.message : "Произошла ошибка");
        } finally {
            setLoading(false);
        }
    };

    const deleteGuestPerson = async () => {
        try {
            const response = await axios.delete(`http://localhost:8000/api/manager/guests/person/delete/?id=${guestId}`);
        } catch (error) {
            if (error instanceof Error) {
                setError_r(error.message);
            } else {
                setError_r("Произошла ошибка");
            }
        } finally {
            setLoading(false);
        }
    };

    const updateGuestPerson = async () => {
        if (!surname || !name || !birthday || !phone) {
            setFormErrors({
                surname: !surname,
                name: !name,
                birthday: !birthday,
                phone: !phone,
            });
            return;
        }

        try {
            const response = await axios.patch(`http://localhost:8000/api/manager/guests/person/update/?id=${Number(guestId)}`, {
                "surname": surname,
                "name": name,
                "patronymic": patronymic,
                "birthday": birthday,
                "email": email,
                "phone": phone,
                "home_address_country": homeAddressCountry,
                "home_address_region": homeAddressRegion,
                "home_address_city": homeAddressCity,
                "home_address_street_and_house": homeAddressStreet,
                "workplace": workplace,
            });
        } catch (error) {
            if (error instanceof Error) {
                setError_r(error.message);
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
        {onClick: () => navigate('/manager/info'), text: "Информация", label: "info"}
    ];

    const minDate = "1907-03-04";
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const maxDate = yesterday.toISOString().split("T")[0];

    return (
        <div className={styles['page-style']}>

            <SideBar activeItem={"guests"} items={sideBarItems}/>
            <div className={styles['content-container']}>

                <Header name={'Иванова Анастасия Сергеевна'} post={'Менеджер'}/>

                <div className={styles['main-container']}>
                    <InputText text={'Фамилия*'} value={surname} label={''} isEdit={isEdit} onChange={changeSurname}/>
                    {formErrors.surname && <span style={{color: 'red'}}>Это поле обязательно для заполнения.</span>}

                    <InputText text={'Имя*'} value={name} label={''} isEdit={isEdit} onChange={changeName}/>
                    {formErrors.name && <span style={{color: 'red'}}>Это поле обязательно для заполнения.</span>}

                    <InputText text={'Отчество'} value={patronymic} label={''} isEdit={isEdit}
                               onChange={changePatronymic}/>

                    <DatePicker text={"Выберите дату рождения*"}
                                minDate={minDate}
                                maxDate={maxDate} value={birthday} onSelect={changeBirthday}/>
                    {formErrors.birthday && <span style={{color: 'red'}}>Это поле обязательно для заполнения.</span>}

                    <DropdownList text={'Пол'} value={guestInfo.gender} label={''} options={genderList}/>
                    <DropdownList text={'Тип тура'} value={guestInfo.tour_type} label={''} isEdit={false}
                                  options={typeTourList}/>
                    <InputPhone text={'Телефон*'} value={phone} label={''} isEdit={isEdit} onChange={changePhone}/>
                    {formErrors.phone && <span style={{color: 'red'}}>Это поле обязательно для заполнения.</span>}

                    <InputEmail text={'Электронная почта'} value={email} label={''} isEdit={isEdit}
                                onChange={changeEmail}/>
                    <InputText text={'Ваша страна'} value={homeAddressCountry} label={''} isEdit={isEdit}
                               onChange={changeHomeAddressCountry}/>
                    <InputText text={'Ваш регион'} value={homeAddressRegion} label={''} isEdit={isEdit}
                               onChange={changeHomeAddressRegion}/>
                    <InputText text={'Ваш город'} value={homeAddressCity} label={''} isEdit={isEdit}
                               onChange={changeHomeAddressCity}/>
                    <InputText text={'Улица и дом'} value={homeAddressStreet} label={''} isEdit={isEdit}
                               onChange={changeHomeAddressStreet}/>
                    <InputText text={'Место работы'} value={workplace} label={''} isEdit={isEdit}
                               onChange={changeWorkplace}/>
                    <DatePicker text={'Дата заезда'} value={guestInfo.checkin} isEdit={false}/>
                    <DatePicker text={'Дата отъезда'} value={guestInfo.checkout} isEdit={false}/>
                    <InputText text={'Номер'} value={guestInfo.room_name} label={''} isEdit={false} onChange={() => {
                    }}/>
                    <DropdownList text={'Категория'} value={guestInfo.category_label} label={''} isEdit={false}
                                  options={roomCategoryList}/>
                    <InputText text={'Место'} value={guestInfo.place_name} label={''} isEdit={false} onChange={() => {
                    }}/>

                    <Button color={'blue'} text={'Редактировать'} onClick={() => {
                        setIsEdit(!isEdit)
                    }}/>
                    <Button color={'green'} text={'Сохранить'} onClick={updateGuestPerson}/>
                    <Button color={'violet'} text={'Удалить'} onClick={deleteGuestPerson}/>
                </div>
            </div>
        </div>
    );
};

export default GuestPersonManager;
