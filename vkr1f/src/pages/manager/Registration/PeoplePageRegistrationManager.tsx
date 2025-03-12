import React, {useState} from "react";
import styles from './Registration.module.css'
import {SideBar} from "../../../components/SideBar/SideBar.tsx";
import {Header} from "../../../components/Header/Header.tsx"
import {Button1} from "../../../components/buttons/Button1/Button1.tsx";
import {Button2} from "../../../components/buttons/Button2/Button2.tsx";
import {Button3} from "../../../components/buttons/Button3/Button3.tsx";
import {Button4} from "../../../components/buttons/Button4/Button4.tsx";
import {Button5} from "../../../components/buttons/Button5/Button5.tsx";
import {InputText} from "../../../components/inputs/InputText/InputText.tsx";
import {OneItem} from "../../../types/SideBarItem.tsx";
import {useNavigate} from "react-router-dom";
import {DatePicker} from "../../../components/inputs/DatePicker/DatePicker.tsx";
import {DropdownList} from "../../../components/inputs/DropdownList/DpropdownList.tsx";
import {roomCategoryList} from "../../../mocks/mock.tsx";
import {genderList} from "../../../mocks/mock.tsx";
import {typeTourList} from "../../../mocks/mock.tsx";
import {InputEmail} from "../../../components/inputs/InputEmail/InputEmail.tsx";
import {InputPhone} from "../../../components/inputs/InputPhone/InputPhone.tsx";

const InfoManager = () => {
    const navigate = useNavigate();

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
            onClick: () => {navigate('/manager/rooms')},
            text: "Номера",
            label: "rooms"
        },
        {
            onClick: () => {navigate('/manager/info')},
            text: "Информация",
            label: "info"
        }
    ];

    const [birthday, setBirthday] = useState('');
    const [patronymic, setPatronymic] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [gender, setGender] = useState(1);
    const [tourType, setTourType] = useState(1);
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [workPlace, setWorkPlace] = useState('');
    const [homeAddress, setHomeAddress] = useState('');

    const selectBirthday = (date: string) => {
        setBirthday(date);
    };

    const selectTourType = (data: number) => {
        setTourType(data);
    };

    const selectGender = (data: number) => {
        setGender(data);
    };

    const changeSurname = (surname: string) => {
        setSurname(surname);
    }

    const changeName = (name: string) => {
        setName(name);
    }

    const changeEmail = (data: string) => {
        setEmail(data);
    }

    const changePhone = (data: string) => {
        setPhone(data);
    }

    const changePatronymic = (data: string) => {
        setPatronymic(data);
    }

    const changeWorkPlace = (data: string) => {
        setWorkPlace(data);
    }

    const changeHomeAddress = (data: string) => {
        setHomeAddress(data);
    }

    return (
        <div className={styles['page-style']}>

            <SideBar activeItem={"registration"} items={sideBarItems}/>
            <div className={styles['content-container']}>

                <Header name={'Иванова Анастасия Сергеевна'} post={'Менеджер'}/>

                <div className={styles['main-container']}>

                    <InputText text={'Введите фамилию'} onChange={changeSurname} label={''}/>
                    <InputText text={'Введите имя'} onChange={changeName} label={''}/>
                    <InputText text={'Введите отчество'} onChange={changePatronymic} label={''}/>
                    <DatePicker text={"Выберите дату рождения"} value={birthday} onSelect={selectBirthday} />
                    <InputText text={'Введите место работы'} onChange={changeWorkPlace} label={''}/>
                    <InputText text={'Введите адрес'} onChange={changeHomeAddress} label={''}/>
                    <DropdownList options={genderList} value={gender} label={'Выберите пол'} text={'Выберите пол из списка'} onSelect={selectGender} />
                    <DropdownList options={typeTourList} value={tourType} label={'Выберите тип путевки'} text={'Выберите тип путевки из списка'} onSelect={selectTourType} />
                    <InputPhone text={'Введите номер телефона'} onChange={changePhone} label={''}/>
                    <InputEmail text={'Введите эл. почту'} onChange={changeEmail} label={''}/>

<Button3 text={'Сохранить'} onClick={()=>{}}/>


                </div>

            </div>


        </div>
    );
};

export default InfoManager;