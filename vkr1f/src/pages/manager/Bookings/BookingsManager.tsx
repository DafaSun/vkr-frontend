import {useEffect, useState} from "react";
import styles from './../../css/Index.module.css'
import self_styles from './BookingsManager.module.css'
import {SideBar} from "../../../components/SideBar/SideBar.tsx";
import {Header} from "../../../components/Header/Header.tsx"
import {Button3} from "../../../components/buttons/Button3/Button3.tsx";
import {InputText} from "../../../components/inputs/InputText/InputText.tsx";
import {OneItem} from "../../../types/SideBarItem.tsx";
import {DatePicker} from "../../../components/inputs/DatePicker/DatePicker.tsx";
import {useNavigate, useSearchParams} from "react-router-dom";
import {DropdownList} from "../../../components/inputs/DropdownList/DpropdownList.tsx";
import {roomCategoryList} from "../../../mocks/mock.tsx";
import axios from "axios";

type BookingData = {
    booking_id: number,
    surname: string,
    name: string,
    patronymic: string,
    room_name: string,
    place_name: string,
    place_id: number,
    checkin_date: string,
    category_label: string,
    category_name: string
};

const BookingManager = () => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    const [bookings, setBookings] = useState<BookingData[]>([]);
    const [roomCategory, setRoomCategory] = useState('');
    const [surname, setSurname] = useState('');
    const [checkin, setCheckin] = useState('');
    const [loading, setLoading] = useState(false);
    const [error_r, setError_r] = useState<string | null>(null);

    useEffect(() => {
        SearchClick()
    }, []);

    useEffect(() => {
        setSearchParams({surname, category: roomCategory, checkin});
    }, [surname, roomCategory, checkin, setSearchParams]);

    const selectCheckin = (data: string) => {
        setCheckin(data);
    };

    const selectRoomCategory = (data: string) => {
        setRoomCategory(data);
    };

    const changeSurname = (data: string) => {
        setSurname(data);
    };

    const SearchClick = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`http://localhost:8000/api/manager/bookings/?checkin=${checkin}&category=${roomCategory}&surname=${surname}`);
            setBookings(response.data);
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

    const currentDate = new Date();

    const minDate0 = new Date(currentDate);
    minDate0.setMonth(minDate0.getMonth() - 6);
    const minDate = minDate0.toISOString().split("T")[0];

    const maxDate0 = new Date(currentDate);
    maxDate0.setMonth(maxDate0.getMonth() + 18);
    const maxDate = maxDate0.toISOString().split("T")[0];

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

            <SideBar activeItem={"bookings"} items={sideBarItems}/>
            <div className={styles['content-container']}>

                <Header name={'Иванова Анастасия Сергеевна'} post={'Менеджер'}/>

                <div className={styles['main-container']}>
                    <div className={self_styles['filters-container']}>
                        <div className={self_styles['row-container']}>
                            <DatePicker text={"Выберите дату заезда"} value={checkin} onSelect={selectCheckin}
                                        minDate={minDate} maxDate={maxDate}/>
                            <DropdownList options={roomCategoryList} value={roomCategory}
                                          label={'Выберите категорию номера'}
                                          text={'Выберите категорию номера из списка'} onSelect={selectRoomCategory}/>
                            <InputText text={'Введите фамилию'} label={'Введите фамилию'} value={surname}
                                       onChange={changeSurname}/>
                            <Button3 text={'Применить'} onClick={SearchClick}/>
                        </div>
                    </div>

                    <div className={self_styles['bookings-list-container']}>
                        {loading ? (
                            <p>Загрузка...</p>
                        ) : error_r ? (
                            <p style={{color: "red"}}>{error_r}</p>
                        ) : bookings.length > 0 ? (
                            bookings.map(book => (
                                <div className={self_styles['booking-container']}>
                                    {book.checkin_date} - {book.surname} {book.name} {book.patronymic} - {book.place_name}
                                    <Button3 text={'Перейти'}
                                             onClick={() => navigate(`/manager/bookings/info?id=${book.booking_id}`)}/>
                                </div>
                            ))
                        ) : (
                            <p>Нет доступных броний</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingManager;