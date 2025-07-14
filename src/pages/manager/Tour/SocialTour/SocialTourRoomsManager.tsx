import {useEffect, useState} from "react";
import styles from '../../../css/Index.module.css';
import self_styles from '../TourManager.module.css';
import {SideBar} from "../../../../components/SideBar/SideBar.tsx";
import {Header} from "../../../../components/Header/Header.tsx";
import {Button} from "../../../../components/buttons/Button/Button.tsx";
import {OneItem} from "../../../../types/SideBarItem.tsx";
import {useNavigate, useSearchParams} from "react-router-dom";
import {DatePicker} from "../../../../components/inputs/DatePicker/DatePicker.tsx";
import {DropdownList} from "../../../../components/inputs/DropdownList/DpropdownList.tsx";
import {InputNumber} from "../../../../components/inputs/InputNumber/InputNumber.tsx";
import {genderList, roomCategoryList} from "../../../../mocks/mock.tsx";

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
        category: "1cat",
        gender: "male",
    };

    const [checkin, setCheckin] = useState(searchParams.get("checkin") || defaultParams.checkin);
    const [checkout, setCheckout] = useState(searchParams.get("checkout") || defaultParams.checkout);
    const [guests, setGuests] = useState(Number(searchParams.get("guests")) || Number(defaultParams.guests));
    const [category, setCategory] = useState(searchParams.get("category") || defaultParams.category);
    const [gender, setGender] = useState(searchParams.get("gender") || defaultParams.gender);
    const places:TourPlace[]=[{
        place_id: 5,
        place_name: 'Место 1',
        room_name: '5 Номер',
        price: 6000,
        category_name: "3 - Двухместный номер на 1 этаже в 4 корпусе с удобствами в номере",
    }, {
        place_id: 6,
        place_name: 'Место 2',
        room_name: '5 Номер',
        price: 6000,
        category_name: "3 - Двухместный номер на 1 этаже в 4 корпусе с удобствами в номере",
    }];
    // const [loading, setLoading] = useState(false);
    // const [error_r, setError_r] = useState<string | null>(null);
    const loading = false;
    const error_r = null;

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
    // try {
    //     const response = await axios.get(`http://localhost:8000/api/manager/categories/places/?checkin=${checkin}&checkout=${checkout}&gender=${gender}&guests=${guests}&category=${category}&tour_type=social`);
    //     setPlaces(response.data);
    // } catch (error) {
    //     if (error instanceof Error) {
    //         setError_r(error.message);
    //     } else {
    //         setError_r("Произошла ошибка");
    //     }
    // } finally {
    //     setLoading(false);
    // }
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
            <SideBar activeItem={"tour"} items={sideBarItems}/>
            <div className={styles['content-container']}>

                <Header name={'Иванова Анастасия Сергеевна'} post={'Менеджер'}/>

                <div className={styles['main-container']}>
                    <div className={self_styles['row-container']}>
                        <DatePicker value={checkin} text={'Дата заезда'} width={150} isEdit={false}/>
                        <DatePicker value={checkout} text={'Дата отъезда'} width={150} isEdit={false}/>
                        <InputNumber width={100}
                                     value={((new Date(checkout)).getTime() - (new Date(checkin)).getTime()) / 86400000}
                                     text={'Кол-во дней'} isEdit={false}/>
                        <DropdownList text={'Категория'} width={200} value={category} options={roomCategoryList}
                                      isEdit={false}/>
                        <DropdownList text={'Пол'} width={150} value={gender} options={genderList} isEdit={false}/>
                    </div>

                    <div className={self_styles['rooms-container']}>
                        {loading ? (
                            <p>Загрузка...</p>
                        ) : error_r ? (
                            <p style={{color: "red"}}>{error_r}</p>
                        ) : places.length > 0 ? (
                            places.map(place => (
                                <div key={place.place_id} className={self_styles['room-container']}>
                                    <img src="/images/rooms/room1.jpg"/>
                                    <div className={self_styles['room-description']}>
                                        <div className={self_styles['room-title']}>
                                            {place.room_name} - {place.place_name}
                                            <br/>
                                            {place.category_name}
                                        </div>
                                        <div className={self_styles['price']}>
                                            {place.price} руб.
                                        </div>
                                        <Button color={'orange'} text={'Забронировать'} onClick={() => {
                                            navigate(`/manager/tour/social/rooms-in-category/booking?checkin=${checkin}&checkout=${checkout}&guests=${guests}&category=${category}&place=${place.place_id}&place_name=${place.place_name}&gender=${gender}&price=${place.price}`);
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
