import {useState} from "react";
import styles from '../../css/Index.module.css'
import {SideBar} from "../../../components/SideBar/SideBar.tsx";
import {Header} from "../../../components/Header/Header.tsx";
import {Button3} from "../../../components/buttons/Button3/Button3.tsx";
import {InputText} from "../../../components/inputs/InputText/InputText.tsx";
import {DatePicker} from "../../../components/inputs/DatePicker/DatePicker.tsx";
import {DropdownList} from "../../../components/inputs/DropdownList/DpropdownList.tsx";
import {InputPhone} from "../../../components/inputs/InputPhone/InputPhone.tsx";
import {InputEmail} from "../../../components/inputs/InputEmail/InputEmail.tsx";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {genderList} from "../../../mocks/mock.tsx";
import {OneItem} from "../../../types/SideBarItem.tsx";

const GuestNewPersonManager = () => {
    const navigate = useNavigate();

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
    const [gender, setGender] = useState<string>();
    const [loading, setLoading] = useState(false);
    const [error_r, setError_r] = useState<string | null>(null);

    const [errors, setErrors] = useState({
        surname: false,
        name: false,
        birthday: false,
        gender: false,
        phone: false,
    });

    const createGuestPerson = async () => {
        const newErrors = {
            surname: !surname,
            name: !name,
            birthday: !birthday,
            gender: !gender,
            phone: !phone,
        };

        setErrors(newErrors);

        if (Object.values(newErrors).includes(true)) {
            return;
        }

        try {
            setLoading(true);
            const response = await axios.post(`http://localhost:8000/api/manager/guests/new/`, {
                surname,
                name,
                patronymic,
                birthday,
                gender,
                email,
                phone,
                home_address_country: homeAddressCountry,
                home_address_region: homeAddressRegion,
                home_address_city: homeAddressCity,
                home_address_street_and_house: homeAddressStreet,
                workplace,
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
                    <InputText text={'Фамилия*'} value={surname} label={''} onChange={setSurname}/>
                    {errors.surname && <p style={{color: 'red'}}>Это поле обязательно для заполнения</p>}

                    <InputText text={'Имя*'} value={name} label={''} onChange={setName}/>
                    {errors.name && <p style={{color: 'red'}}>Это поле обязательно для заполнения</p>}

                    <InputText text={'Отчество'} value={patronymic} label={''} onChange={setPatronymic}/>

                    <DatePicker text={"Выберите дату рождения*"} minDate={minDate} maxDate={maxDate} value={birthday}
                                onSelect={setBirthday}/>
                    {errors.birthday && <p style={{color: 'red'}}>Это поле обязательно для заполнения</p>}

                    <DropdownList text={'Пол*'} value={gender} label={''} options={genderList} onSelect={setGender}/>
                    {errors.gender && <p style={{color: 'red'}}>Это поле обязательно для заполнения</p>}

                    <InputPhone text={'Телефон*'} value={phone} label={''} onChange={setPhone}/>
                    {errors.phone && <p style={{color: 'red'}}>Это поле обязательно для заполнения</p>}

                    <InputEmail text={'Электронная почта'} value={email} label={''} onChange={setEmail}/>
                    <InputText text={'Ваша страна'} value={homeAddressCountry} label={''}
                               onChange={setHomeAddressCountry}/>

                    <InputText text={'Ваш регион'} value={homeAddressRegion} label={''}
                               onChange={setHomeAddressRegion}/>
                    <InputText text={'Ваш город'} value={homeAddressCity} label={''} onChange={setHomeAddressCity}/>
                    <InputText text={'Улица и дом'} value={homeAddressStreet} label={''}
                               onChange={setHomeAddressStreet}/>
                    <InputText text={'Место работы'} value={workplace} label={''} onChange={setWorkplace}/>

                    <Button3 text={'Сохранить'} onClick={createGuestPerson}/>
                </div>
            </div>
        </div>
    );
};

export default GuestNewPersonManager;
