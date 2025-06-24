import {useEffect, useState} from "react";
import styles from './roomsManager.module.css'
import {SideBar} from "../../../components/SideBar/SideBar.tsx";
import {Header} from "../../../components/Header/Header.tsx"
import {Button} from "../../../components/buttons/Button/Button.tsx";
import {OneItem} from "../../../types/SideBarItem.tsx";
import {useNavigate, useSearchParams} from "react-router-dom";
import {DatePicker} from "../../../components/inputs/DatePicker/DatePicker.tsx";
import {DropdownList} from "../../../components/inputs/DropdownList/DpropdownList.tsx";
import {roomCategoryList} from "../../../mocks/mock.tsx";
import {buildList} from "../../../mocks/mock.tsx";
import axios from "axios";

const categoryToBuildingMap: Record<string, string> = {
    "1cat": "4building",
    "2cat": "4building",
    "3cat": "4building",
    "4cat": "4building",
    "5cat": "4building",
    "6cat": "6building",
    "7cat": "6building",
};

type BookingData = {
    places: string[];
    dates: string[];
    bookings: Record<string, Record<string, "free" | "booked">>;
};

const RoomsManager = () => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    const [roomCategory, setRoomCategory] = useState('');
    const [building, setBuilding] = useState('');
    const [date, setDate] = useState('');
    const [loading, setLoading] = useState(false);
    const [error_r, setError_r] = useState<string | null>(null);
    const [placeTable, setPlaceTable] = useState<BookingData>({
        places: [],
        dates: [],
        bookings: {}
    });

    useEffect(() => {
        setSearchParams({building, category: roomCategory, date});
    }, [building, roomCategory, date, setSearchParams]);

    useEffect(() => {
        if (roomCategory) {
            setBuilding(categoryToBuildingMap[roomCategory] || "");
        }
    }, [roomCategory]);

    useEffect(() => {
        getPlacesTable()
    }, []);


    const selectDate = (data: string) => {
        setDate(data);
    };

    const selectRoomCategory = (data: string) => {
        setRoomCategory(data);
    };

    const selectBuilding = (data: string) => {
        if (!roomCategory) {
            setBuilding(data);
        }
    };

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

    const sideBarItems: OneItem[] = [
        {onClick: () => navigate('/manager/tour'), text: "Путевки", label: "tour"},
        {onClick: () => navigate('/manager/hotel'), text: "Гостиница", label: "hotel"},
        {onClick: () => navigate('/manager/bookings'), text: "Брони", label: "bookings"},
        {onClick: () => navigate('/manager/guests'), text: "Отдыхающие", label: "guests"},
        {onClick: () => navigate('/manager/rooms'), text: "Номера", label: "rooms"},
        {onClick: () => navigate('/manager/timetable'), text: "Расписания", label: "timetable"},
        {onClick: () => navigate('/manager/info'), text: "Информация", label: "info"},
    ];

    const currentDate = new Date();

    const minDate0 = new Date(currentDate);
    minDate0.setMonth(minDate0.getMonth() - 6);
    const minDate = minDate0.toISOString().split("T")[0];

    const maxDate0 = new Date(currentDate);
    maxDate0.setMonth(maxDate0.getMonth() + 18);
    const maxDate = maxDate0.toISOString().split("T")[0];

    return (
        <div className={styles['page-style']}>

            <SideBar activeItem={"rooms"} items={sideBarItems}/>
            <div className={styles['content-container']}>

                <Header name={'Иванова Анастасия Сергеевна'} post={'Менеджер'}/>

                <div className={styles['main-container']}>

                    <div className={styles['row-container']}>
                        <DatePicker text={"Выберите дату "} value={date} onSelect={selectDate} minDate={minDate}
                                    maxDate={maxDate}/>
                        <DropdownList options={roomCategoryList} value={roomCategory}
                                      label={'Выберите категорию номера'} text={'Выберите категорию номера из списка'}
                                      onSelect={selectRoomCategory}/>
                        <DropdownList options={buildList} value={building} label={'Выберите корпус'}
                                      text={'Выберите корпус из списка'} onSelect={selectBuilding}/>
                        <Button color={'blue'} text={'Применить'}  onClick={getPlacesTable}/>
                    </div>

                    <div className={styles['table-title']}>Заполненность номеров/мест</div>
                    <div className={styles["table-container"]}>
                        <table>
                            <thead>
                            <tr>
                                <th className="border border-gray-500 px-2">Места</th>
                                {placeTable.dates.map((date) => (
                                    <th key={date} className="border border-gray-500 px-1" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', whiteSpace: 'nowrap' }}>
                                        {date}
                                    </th>
                                ))}
                            </tr>
                            </thead>
                            <tbody>
                            {placeTable.places.map((place, i) => (
                                <tr key={place}>
                                    <td className="border border-gray-500 px-2"><b>{place.replace('Место ', '')}</b></td>
                                    {placeTable.dates.map((date, j) => (
                                        <td key={date}>
                                            {placeTable.bookings[i][j] === "free" ? (
                                                <div className={styles['free-room']} />
                                            ) : (
                                                <div className={styles['occupered-room']} />
                                            )}
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