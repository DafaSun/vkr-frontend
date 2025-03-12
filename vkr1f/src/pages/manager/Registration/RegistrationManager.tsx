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

const InfoManager = () => {
    const navigate = useNavigate();
    const [surname, setSurname] = useState('');
    const [peopleId, setPeopleId] = useState(0);

    const changeSurname = (data: string) => {
        setSurname(data);
    };

    const changePeopleId = (data: string) => {
        setPeopleId(data);
    };


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

    return (
        <div className={styles['page-style']}>

            <SideBar activeItem={"registration"} items={sideBarItems}/>
            <div className={styles['content-container']}>

                <Header name={'Иванова Анастасия Сергеевна'} post={'Менеджер'}/>

                <div className={styles['main-container']}>
                    <div className={styles['filters-container']}>
                        <div className={styles['row-container']} >
                            <InputText text={'Введите фамилию'} label={'Введите фамилию'} value={surname} onChange={changeSurname}/>
                            <Button3 text={'Применить'} onClick={()=>{}}/>
                            <Button3 text={'Добвить человека'} onClick={()=>{}}/>
                        </div>
                    </div>

                    <div className={styles['people-list-container']}>
                        <div className={styles['people-container']} >
                            Фамилия Имя Отчество - 04.02.1965 <Button3 text={'Перейти'} onClick={() => navigate(`/manager/registration/people?id=${peopleId}`)}/>
                        </div>
                    </div>



                </div>

            </div>


        </div>
    );
};

export default InfoManager;