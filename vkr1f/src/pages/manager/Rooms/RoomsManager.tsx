import React, {useState} from "react";
import styles from '../../css/Index.module.css'
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
import {buildList} from "../../../mocks/mock.tsx";

const InfoManager = () => {
    const navigate = useNavigate();

    const [roomCategory, setRoomCategory] = useState(1);
    const [building, setBuilding] = useState(0);
    const [date, setDate] = useState('');
    const selectDate = (data: string) => {
        setDate(data);
    };

    const selectRoomCategory = (data: number) => {
        setRoomCategory(data);
    };

    const selectBuilding = (data: number) => {
        setBuilding(data);
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

            <SideBar activeItem={"rooms"} items={sideBarItems}/>
            <div className={styles['content-container']}>

                <Header name={'Иванова Анастасия Сергеевна'} post={'Менеджер'}/>

                <div className={styles['main-container']}>

                    <div className={styles['filters-container']}>
                        <div className={styles['row-container']} >
                            <DatePicker text={"Выберите дату "} value={date} onSelect={selectDate}/>
                            <DropdownList options={roomCategoryList} value={roomCategory} label={'Выберите категорию номера'} text={'Выберите категорию номера из списка'} onSelect={selectRoomCategory} />
                            <DropdownList options={buildList} value={building} label={'Выберите корпус'} text={'Выберите корпус из списка'} onSelect={selectRoomCategory} />
                            <Button3 text={'Применить'} onClick={()=>{}}/>
                        </div>
                    </div>


                </div>

            </div>


        </div>
    );
};

export default InfoManager;