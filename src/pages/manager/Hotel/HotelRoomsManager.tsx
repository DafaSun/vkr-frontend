import {useEffect, useState} from "react";
import styles from './HotelRoomsManager.module.css';
import {SideBar} from "../../../components/SideBar/SideBar.tsx";
import {Header} from "../../../components/Header/Header.tsx";
import {Button} from "../../../components/buttons/Button/Button.tsx";
import {OneItem} from "../../../types/SideBarItem.tsx";
import {useNavigate, useSearchParams} from "react-router-dom";
import {DatePicker} from "../../../components/inputs/DatePicker/DatePicker.tsx";
import {DropdownList} from "../../../components/inputs/DropdownList/DpropdownList.tsx";
import {InputNumber} from "../../../components/inputs/InputNumber/InputNumber.tsx";
import {genderList, roomCategoryList} from "../../../mocks/mock.tsx";

interface HotelPlace {
    place_id: number
    place_name: string
    room_name: string
    price: number
    category_name: string
}

const HotelRoomsManager = () => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    const defaultParams = {
        checkin: new Date().toISOString().split("T")[0],
        checkout: new Date(Date.now() + 86400000 * 7).toISOString().split("T")[0],
        guests: "1",
        category: "1cat",
        gender: "male",
    };

    const [checkin, setCheckin] = useState(searchParams.get("checkin") || defaultParams.checkin);
    const [checkout, setCheckout] = useState(searchParams.get("checkout") || defaultParams.checkout);
    const [guests, setGuests] = useState(Number(searchParams.get("guests")) || Number(defaultParams.guests));
    const [category, setCategory] = useState(searchParams.get("category") || defaultParams.category);
    const [gender, setGender] = useState(searchParams.get("gender") || defaultParams.gender);
    const places:HotelPlace[]=[
        { place_id: 10000,
            place_name: 'Место 102/1',
            room_name: 'Номер 102',
            price: 3000,
            category_name: '2 - Двухместный номер на 1 этаже в 4 корпусе с удобствами в блоке'},
        { place_id: 100060,
            place_name: 'Место 102/2',
            room_name: 'Номер 102',
            price: 3000,
            category_name: '2 - Двухместный номер на 1 этаже в 4 корпусе с удобствами в блоке'},
        { place_id: 100067,
            place_name: 'Место 112/1',
            room_name: 'Номер 112',
            price: 3000,
            category_name: '2 - Двухместный номер на 1 этаже в 4 корпусе с удобствами в блоке'
    },
    ];
    const loading=false;
    const error_r=null;

    useEffect(() => {
        setCheckin(searchParams.get("checkin") || defaultParams.checkin);
        setCheckout(searchParams.get("checkout") || defaultParams.checkout);
        setGuests(Number(searchParams.get("guests")) || Number(defaultParams.guests));
        setCategory(searchParams.get("category") || defaultParams.category);
        setGender(searchParams.get("gender") || defaultParams.gender);
    }, [searchParams]);

    useEffect(() => {
        if (!searchParams.get("checkin") || !searchParams.get("checkout") || !searchParams.get("guests") || !searchParams.get("category")) {
            setSearchParams(defaultParams, {replace: true});
        }

    }, [searchParams, setSearchParams]);

    useEffect(() => {
        // setLoading(true);
        // searchPlaces()
    }, []);

    // const searchPlaces = async () => {
    //     try {
    //         const response = await axios.get(`http://localhost:8000/api/manager/categories/places/?checkin=${checkin}&checkout=${checkout}&gender=${gender}&guests=${guests}&category=${category}&tour_type=hotel`);
    //         setPlaces(response.data);
    //     } catch (error) {
    //         if (error instanceof Error) {
    //             setError_r(error.message);
    //         } else {
    //             setError_r("Произошла ошибка");
    //         }
    //     } finally {
    //         setLoading(false);
    //     }
    // };


    const sideBarItems: OneItem[] = [
        {onClick: () => navigate('/manager/tour'), text: "Путевки", label: "tour"},
        {onClick: () => navigate('/manager/hotel'), text: "Гостиница", label: "hotel"},
        {onClick: () => navigate('/manager/bookings'), text: "Брони", label: "bookings"},
        {onClick: () => navigate('/manager/guests'), text: "Отдыхающие", label: "guests"},
        {onClick: () => navigate('/manager/rooms'), text: "Номера", label: "rooms"},
        {onClick: () => navigate('/manager/timetable'), text: "Расписания", label: "info"},
        {onClick: () => navigate('/manager/info'), text: "Информация", label: "info"},
    ];

    return (
        <div className={styles['page-style']}>
            <SideBar activeItem={"hotel"} items={sideBarItems}/>
            <div className={styles['content-container']}>

                <Header name={'Иванова Анастасия Сергеевна'} post={'Менеджер'}/>

                <div className={styles['main-container']}>

                    <div className={styles['table-title']}>
                        Номера\места в категории

                    </div>

                    <div className={styles['table-title00']}>
                        2 - Двухместный номер на 1 этаже в 4 корпусе с удобствами в блоке
                    </div>

                    <div className={styles['row-container']}>
                        <DatePicker value={checkin} text={'Дата заезда'} isEdit={false} width={210}/>
                        <DatePicker value={checkout} text={'Дата отъезда'} isEdit={false} width={210}/>
                        <InputNumber
                            value={((new Date(checkout)).getTime() - (new Date(checkin)).getTime()) / 86400000}
                            text={'Кол-во дней'} isEdit={false} width={130}/>
                        <DropdownList text={'Категория'} value={category} options={roomCategoryList}
                                      isEdit={false} width={290}/>
                        <DropdownList text={'Пол'} value={gender} options={genderList} isEdit={false} width={180}/>
                    </div>

                    <div className={styles['rooms-container']}>
                        {loading ? (
                            <p>Загрузка...</p>
                        ) : error_r ? (
                            <p style={{color: "red"}}>{error_r}</p>
                        ) : places.length > 0 ? (
                            places.map(category => (
                                <div key={category.place_id} className={styles['category-room-container']}>
                                    <img
                                        src={"/images/rooms/img_room_3.png" }/>
                                    <div className={styles['room-description']}>
                                        <div
                                            className={styles['room-title1']}> <b>Место:</b> {category.place_name}
                                        </div>
                                        <div
                                            className={styles['room-title2']}> <b>Номер:</b> {category.room_name}
                                        </div>

                                        <div className={styles['room-flex']}>
                                            <div className={styles['price']}>{category.price} руб.</div>
                                            <Button color={'green'} text={'Забронировать'} onClick={() => {
                                                navigate(`/manager/hotel/rooms-in-category/booking?checkin=${checkin}&checkout=${checkout}&guests=${guests}&category=${category}&place=${category.place_id}&place_name=${category.place_name}&gender=${gender}&price=${category.price}`);
                                            }}/>
                                        </div>
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
    )
        ;
};

export default HotelRoomsManager;
