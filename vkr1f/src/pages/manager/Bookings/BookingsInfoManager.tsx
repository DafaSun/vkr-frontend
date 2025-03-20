import {useEffect, useState} from "react";
import styles from '../../css/Index.module.css'
import {SideBar} from "../../../components/SideBar/SideBar.tsx";
import {Header} from "../../../components/Header/Header.tsx"
import {Button3} from "../../../components/buttons/Button3/Button3.tsx";
import {InputText} from "../../../components/inputs/InputText/InputText.tsx";
import {InputNumber} from "../../../components/inputs/InputNumber/InputNumber.tsx";
import {OneItem} from "../../../types/SideBarItem.tsx";
import {DatePicker} from "../../../components/inputs/DatePicker/DatePicker.tsx";
import {useNavigate, useSearchParams} from "react-router-dom";
import axios from "axios";

type BookingData = {
    guest_surname: string,
    guest_name: string,
    guest_patronymic: string,
    checkin: string,
    checkout: string,
    room_name: string,
    category_label: string,
    category_name: string,
    place_name: string,
    status: string,
    total_price: number,
    prepayment_percent: number,
    prepayment_money: number
};

const BookingInfoManager = () => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    const defaultParams = {
        id: '1',
    };

    const [prepay_percent, setPrepay_percent] = useState(0);
    const [prepay_money, setPrepay_money] = useState(0);
    const [status, setStatus] = useState();
    const [bookingId, setBookingId] = useState<number>();
    const [loading, setLoading] = useState(false);
    const [error_r, setError_r] = useState<string | null>(null);
    const [isEdit, setIsEdit] = useState(false);
    const [bookingInfo, setBookingInfo] = useState<BookingData>({
        guest_surname: '',
        guest_name: '',
        guest_patronymic: '',
        checkin: '',
        checkout: '',
        room_name: '',
        category_label: '',
        category_name: '',
        place_name: '',
        status: '',
        total_price: 0,
        prepayment_percent: 0,
        prepayment_money: 0
    });

    useEffect(() => {
        setLoading(true);
        getBooking()
    }, [bookingId]);

    useEffect(() => {
        setBookingId(Number(searchParams.get("id")) || Number(defaultParams.id));
    }, [searchParams]);

    const getBooking = async () => {
        if (!bookingId || isNaN(bookingId)) return; // Предотвращаем запрос с undefined

        try {
            const response = await axios.get(`http://localhost:8000/api/manager/bookings/record/?id=${bookingId}`);
            setPrepay_money(response.data.prepayment_money);
            setPrepay_percent(response.data.prepayment_percent);
            setStatus(response.data.status);
            setBookingInfo(response.data);
        } catch (error) {
            setError_r(error instanceof Error ? error.message : "Произошла ошибка");
        } finally {
            setLoading(false);
        }
    };

    const deleteBooking = async () => {
        try {
            const response = await axios.delete(`http://localhost:8000/api/manager/bookings/record/delete/?id=${bookingId}`);
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

    const updateBooking = async () => {
        try {
            const response = await axios.patch(`http://localhost:8000/api/manager/bookings/record/update/?id=${bookingId}`, {
                "prepayment_percent": prepay_percent,
                'prepayment_money': prepay_money,
                'status': status,
            });
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

    const changePrepayPercent = (data: number) => {
        setPrepay_percent(data);
    };

    const changePrepayMoney = (data: number) => {
        setPrepay_money(data);
    };

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
                    <InputText text={'Фамилия'} value={bookingInfo.guest_surname} label={''} isEdit={false}
                               onChange={() => {
                               }}/>
                    <InputText text={'Имя'} value={bookingInfo.guest_name} label={''} isEdit={false} onChange={() => {
                    }}/>
                    <InputText text={'Отчество'} value={bookingInfo.guest_patronymic} label={''} isEdit={false}
                               onChange={() => {
                               }}/>
                    <DatePicker text={'Дата заезда'} value={bookingInfo.checkin} isEdit={false}/>
                    <DatePicker text={'Дата отъезда'} value={bookingInfo.checkout} isEdit={false}/>
                    <InputText text={'Номер'} value={bookingInfo.room_name} label={''} isEdit={false} onChange={() => {
                    }}/>
                    <InputText text={'Категория'} value={bookingInfo.category_name} label={''} isEdit={false}
                               onChange={() => {
                               }}/>
                    <InputText text={'Место'} value={bookingInfo.place_name} label={''} isEdit={false} onChange={() => {
                    }}/>
                    <InputText text={'Статус'} value={status} label={''} isEdit={isEdit} onChange={() => {
                    }}/>
                    <InputNumber text={'Предоплата (%)'} value={prepay_percent} label={''} isEdit={isEdit}
                                 onChange={changePrepayPercent}/>
                    <InputNumber text={'Предоплата'} value={prepay_money} label={''} isEdit={isEdit}
                                 onChange={changePrepayMoney}/>
                    <InputNumber text={'Полная стоимость'} value={bookingInfo.total_price} label={''} isEdit={false}
                                 onChange={() => {
                                 }}/>

                    <Button3 text={'Редактировать'} onClick={() => {
                        setIsEdit(!isEdit)
                    }}/>
                    <Button3 text={'Сохранить'} onClick={updateBooking}/>
                    <Button3 text={'Удалить'} onClick={deleteBooking}/>
                </div>
            </div>
        </div>
    );
};

export default BookingInfoManager;