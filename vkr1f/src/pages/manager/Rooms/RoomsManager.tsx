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
import axios from "axios";

type BookingData = {
    places: string[];
    dates: string[];
    bookings: Record<string, Record<string, "free" | "booked">>;
};

const RoomsManager = () => {
    const navigate = useNavigate();

    const [roomCategory, setRoomCategory] = useState('');
    const [building, setBuilding] = useState('');
    const [date, setDate] = useState('');
    const [placeTable, setPlaceTable] = useState<BookingData>({
        places: [],
        dates: [],
        bookings: {}
    });
    const [loading, setLoading] = useState(false);
    const [error_r, setError_r] = useState<string | null>(null);

    const selectDate = (data: string) => {
        setDate(data);
    };

    const selectRoomCategory = (data: string) => {
        setRoomCategory(data);
    };

    const selectBuilding = (data: string) => {
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

    const getPlacesTable = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`http://localhost:8000/api/manager/rooms/?building=${building}&category=${roomCategory}&date=${date}`);
            setPlaceTable(response.data);
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
                            <DropdownList options={buildList} value={building} label={'Выберите корпус'} text={'Выберите корпус из списка'} onSelect={selectBuilding} />
                            <Button3 text={'Применить'} onClick={getPlacesTable}/>
                        </div>
                    </div>

                    <div className="overflow-auto">
                        <table className="border-collapse border border-gray-500">
                            <thead>
                            <tr>
                                <th className="border border-gray-500 px-2">Места</th>
                                {placeTable.dates.map((date) => (
                                    <th key={date} className="border border-gray-500 px-2">
                                        {date}
                                    </th>
                                ))}
                            </tr>
                            </thead>
                            <tbody>
                            {placeTable.places.map((place) => (
                                <tr key={place}>
                                    <td className="border border-gray-500 px-2">{place}</td>
                                    {placeTable.dates.map((date) => (
                                        <td
                                            key={date}
                                            className={`border border-gray-500 px-2 ${
                                                placeTable.bookings[place]?.[date] === "free"
                                                    ? "bg-green-500 text-black"
                                                    : "bg-red-500 text-white"
                                            }`}
                                        >
                                            {placeTable.bookings[place]?.[date] === "free"
                                                ? "Свободно"
                                                : "Занято"}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default RoomsManager;