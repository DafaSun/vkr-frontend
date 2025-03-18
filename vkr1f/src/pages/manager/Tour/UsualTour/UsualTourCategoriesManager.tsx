import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from '../../../css/Index.module.css';
import self_styles from '../TourManager.module.css';
import { SideBar } from "../../../../components/SideBar/SideBar.tsx";
import { Header } from "../../../../components/Header/Header.tsx";
import { Button3 } from "../../../../components/buttons/Button3/Button3.tsx";
import { useNavigate, useSearchParams } from "react-router-dom";
import { DatePicker } from "../../../../components/inputs/DatePicker/DatePicker.tsx";
import { DropdownList } from "../../../../components/inputs/DropdownList/DpropdownList.tsx";
import { InputNumber } from "../../../../components/inputs/InputNumber/InputNumber.tsx";
import { DisplayNumber } from "../../../../components/displays/DisplayNumber.tsx";

interface TourCategory {
    category_label: string;
    category_name: string;
    available_places: number;
    price: number;
}

const UsualTourCategoriesManager = () => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    const defaultParams = {
        checkin: new Date().toISOString().split("T")[0],
        checkout: new Date(Date.now() + 86400000 * 7).toISOString().split("T")[0],
        guests: "1",
        roomType: "in_block",
        gender: "male"
    };

    const [checkin, setCheckin] = useState(searchParams.get("checkin") || defaultParams.checkin);
    const [checkout, setCheckout] = useState(searchParams.get("checkout") || defaultParams.checkout);
    const [roomType, setRoomType] = useState<string>(searchParams.get("roomType") || defaultParams.roomType);
    const [guests, setGuests] = useState(Number(searchParams.get("guests")) || Number(defaultParams.guests));
    const [gender, setGender] = useState<string>(searchParams.get("gender") || defaultParams.gender);

    const [categories, setCategories] = useState<TourCategory[]>([]);
    const [loading, setLoading] = useState(false);
    const [error_r, setError_r] = useState<string | null>(null);

    const updateUrl = (key: string, value: string | number) => {
        setSearchParams(prev => {
            const newParams = new URLSearchParams(prev);
            newParams.set(key, value.toString());
            return newParams;
        }, { replace: true });
    };

    const searchClick = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/api/manager/categories/?checkin=${checkin}&checkout=${checkout}&gender=${gender}&guests=${guests}&room_type=${roomType}`);
            setCategories(response.data);
        } catch (error) {
            if (error instanceof Error) {
                setError_r(error.message);
            } else {
                setError_r("Произошла ошибка");
            }
        }
        finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles['page-style']}>
            <SideBar activeItem={"tour"} items={[
                { onClick: () => navigate('/manager/tour'), text: "Путевки", label: "tour" },
                { onClick: () => navigate('/manager/hotel'), text: "Гостиница", label: "hotel" },
                { onClick: () => navigate('/manager/bookings'), text: "Брони", label: "bookings" },
                { onClick: () => navigate('/manager/guests'), text: "Отдыхающие", label: "guests" },
                { onClick: () => navigate('/manager/rooms'), text: "Номера", label: "rooms" },
                { onClick: () => navigate('/manager/info'), text: "Информация", label: "info" }
            ]} />
            <div className={styles['content-container']}>

                <Header name={'Иванова Анастасия Сергеевна'} post={'Менеджер'} />

                <div className={styles['main-container']}>
                    <div className={styles['filters-container']}>
                        <div className={styles['row-container']}>
                            <DatePicker text={"Выберите дату заезда"} value={checkin} onSelect={date => { setCheckin(date); updateUrl("checkin", date); }} />
                            <DatePicker text={"Выберите дату отъезда"} value={checkout} onSelect={date => { setCheckout(date); updateUrl("checkout", date); }} />
                            <DisplayNumber text={'Введите кол-во дней'} value={((new Date(checkout)).getTime() - (new Date(checkin)).getTime()) / 86400000} label={''} />
                        </div>
                        <div className={styles['row-container']}>
                            <DropdownList options={[{ id: 'in_block', fullName: "Удобства в блоке" }, { id: 'in_room', fullName: "Удобства в номере" }]} value={roomType} label={'Выберите тип размещения'} text={'Выберите тип размещения из списка'} onSelect={data => { setRoomType(data); updateUrl("roomType", data); }} />
                            <DropdownList options={[{ id: 'male', fullName: "Male" }, { id: 'female', fullName: "Female" }]} value={gender} label={'Выберите пол'} text={'Выберите пол из списка'} onSelect={data => { setGender(data); updateUrl("gender", data); }} />
                            <InputNumber text={'Введите кол-во человек'} value={guests} onChange={data => { setGuests(data); updateUrl("guests", data); }} min={1} max={100} label={''} />
                            <Button3 text={'Search'} onClick={searchClick} />
                        </div>
                    </div>
                    <div className={self_styles['rooms-container']}>
                        {loading ? (
                            <p>Загрузка...</p>
                        ) : error_r ? (
                            <p style={{ color: "red" }}>{error_r}</p>
                        ) : categories.length > 0 ? (
                            categories.map(category => (
                                <div key={category.category_label} className={self_styles['category-room-container']}>
                                    <img src="/images/rooms/room1.jpg" />
                                    <div className={self_styles['room-description']}>
                                        <div className={self_styles['room-title']}>{category.category_name} - {category.available_places}</div>
                                        <div className={self_styles['price']}>От {category.price} руб.</div>
                                        <Button3 text={'Все номера категории'} onClick={() => {
                                            navigate(`/manager/tour/tour/rooms-in-category?checkin=${checkin}&checkout=${checkout}&guests=${guests}&category=${category.category_label}&gender=${gender}`);
                                        }} />
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>Нет доступных категорий</p>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default UsualTourCategoriesManager;
