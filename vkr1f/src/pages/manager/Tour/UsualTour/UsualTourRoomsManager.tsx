import React, {useEffect, useState} from "react";
import styles from '../../../css/Index.module.css';
import self_styles from '../TourManager.module.css';
import {SideBar} from "../../../../components/SideBar/SideBar.tsx";
import {Header} from "../../../../components/Header/Header.tsx";
import {Button3} from "../../../../components/buttons/Button3/Button3.tsx";
import {OneItem} from "../../../../types/SideBarItem.tsx";
import {useNavigate, useSearchParams} from "react-router-dom";
import {DatePicker} from "../../../../components/inputs/DatePicker/DatePicker.tsx";
import {DropdownList} from "../../../../components/inputs/DropdownList/DpropdownList.tsx";
import {InputNumber} from "../../../../components/inputs/InputNumber/InputNumber.tsx";
import {DisplayNumber} from "../../../../components/displays/DisplayNumber.tsx";
import axios from "axios";

interface TourPlace {
    place_id: number
    place_name: string
    room_name: string
    price: number
    category_name: string
}

const UsualTourRoomsManager = () => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    const defaultParams = {
        checkin: new Date().toISOString().split("T")[0],
        checkout: new Date(Date.now() + 86400000 * 7).toISOString().split("T")[0],
        guests: "1",
        roomType: "in_room",
        category: "1cat",
        gender: "male",
    };

    const [checkin, setCheckin] = useState(searchParams.get("checkin") || defaultParams.checkin);
    const [checkout, setCheckout] = useState(searchParams.get("checkout") || defaultParams.checkout);
    const [roomType, setRoomType] = useState(searchParams.get("roomType") || defaultParams.roomType);
    const [guests, setGuests] = useState(Number(searchParams.get("guests")) || Number(defaultParams.guests));
    const [category, setCategory] = useState(searchParams.get("category") || defaultParams.category);
    const [gender, setGender] = useState(searchParams.get("gender") || defaultParams.gender);

    const [places, setPlaces] = useState<TourPlace[]>([]);
    const [loading, setLoading] = useState(false);
    const [error_r, setError_r] = useState<string | null>(null);

    useEffect(() => {
        setCheckin(searchParams.get("checkin") || defaultParams.checkin);
        setCheckout(searchParams.get("checkout") || defaultParams.checkout);
        setRoomType(searchParams.get("roomType") || defaultParams.roomType);
        setGuests(Number(searchParams.get("guests")) || Number(defaultParams.guests));
        setCategory(searchParams.get("category") || defaultParams.category);
        setGender(searchParams.get("gender") || defaultParams.gender);
    }, [searchParams]);

    useEffect(() => {
        if (!searchParams.get("checkin") || !searchParams.get("checkout") || !searchParams.get("guests") || !searchParams.get("roomType") || !searchParams.get("category") || !searchParams.get("gendery")) {
            setSearchParams(defaultParams, {replace: true});
        }
        setLoading(true);
        searchPlaces()

    }, [searchParams, setSearchParams]);

    const sideBarItems: OneItem[] = [
        {onClick: () => navigate('/manager/tour'), text: "Путевки", label: "tour"},
        {onClick: () => navigate('/manager/hotel'), text: "Гостиница", label: "hotel"},
        {onClick: () => navigate('/manager/bookings'), text: "Брони", label: "bookings"},
        {onClick: () => navigate('/manager/guests'), text: "Отдыхающие", label: "guests"},
        {onClick: () => navigate('/manager/rooms'), text: "Номера", label: "rooms"},
        {onClick: () => navigate('/manager/info'), text: "Информация", label: "info"}
    ];

    const searchPlaces = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/api/manager/categories/places/?checkin=${checkin}&checkout=${checkout}&gender=${gender}&guests=${guests}&category=${category}`);
            setPlaces(response.data);
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

    return (
        <div className={styles['page-style']}>
            <SideBar activeItem={"tour"} items={sideBarItems}/>
            <div className={styles['content-container']}>

                <Header name={'Иванова Анастасия Сергеевна'} post={'Менеджер'}/>

                <div className={styles['main-container']}>
                    <div className={self_styles['parameters-container']}>
                        <div className={self_styles['columns-container']}>
                            <p>Дата заезда: {checkin}</p>
                            <p>Дата отъезда: {checkout}</p>
                            <p>Кол-во
                                дней: {((new Date(checkout)).getTime() - (new Date(checkin)).getTime()) / 86400000}</p>
                        </div>
                        <div className={self_styles['columns-container']}>
                            <p>Тип размещения: {roomType}</p>
                            <p>Кол-во человек: {guests}</p>
                            <p>Пол: {gender}</p>
                            <p>Категория: {category}</p>
                        </div>

                    </div>

                    <div className={self_styles['rooms-container']}>
                        {loading ? (
                            <p>Загрузка...</p>
                        ) : error_r ? (
                            <p style={{ color: "red" }}>{error_r}</p>
                        ) : places.length > 0 ? (
                            places.map(place => (
                                <div key={place.place_id} className={self_styles['room-container']}>
                                    <img src="/images/rooms/room1.jpg" />
                                    <div className={self_styles['room-description']}>
                                        <div className={self_styles['room-title']}>
                                            {place.room_name} - {place.place_name}
                                            <br/>
                                            {place.category_name}
                                        </div>
                                        <div className={self_styles['price']}>
                                            {place.price} руб.
                                        </div>
                                        <Button3 text={'Забронировать'} onClick={() => {
                                            navigate(`/manager/tour/tour/rooms-in-category/booking?checkin=${checkin}&checkout=${checkout}&guests=${guests}&roomType=${roomType}&category=${category}&place=${place.place_id}`);
                                        }}/>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>Нет доступных номеров</p>
                        )}
                    </div>
                </div>

            </div>
        </div>
    )
        ;
};

export default UsualTourRoomsManager;
