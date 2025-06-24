import styles from './TimetableManager.module.css'
import {SideBar} from "../../../components/SideBar/SideBar.tsx";
import {Header} from "../../../components/Header/Header.tsx"
import {OneItem} from "../../../types/SideBarItem.tsx";
import {useNavigate, useSearchParams} from "react-router-dom";
import {InputText} from "../../../components/inputs/InputText/InputText.tsx";
import {Button} from "../../../components/buttons/Button/Button.tsx";
import {useEffect, useState} from "react";
import axios from "axios";
import {PatientData} from "../../../types/datas.tsx";

const TimetableManager = () => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    const [date, setDate] = useState(new Date());
    const [guests, setGuests] = useState<PatientData[]>([]);
    const [loading, setLoading] = useState(false);
    const [error_r, setError_r] = useState<string | null>(null);

    const changeDate = (data: string) => {
        setDate(data);
    };

    useEffect(() => {
        setSearchParams({date});
    }, [date, setSearchParams]);

    useEffect(() => {
        SearchClick()
    }, []);

    const SearchClick = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`http://localhost:8000/api/doctor/second_visit/?date=${date}`);
            setGuests(response.data);
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

    return (
        <div className={styles['page-style']}>

            <SideBar activeItem={"timetable"} items={sideBarItems}/>
            <div className={styles['content-container']}>

                <Header name={'Иванова Анастасия Сергеевна'} post={'Менеджер'}/>

                <div className={styles['main-container']}>
                    <Button color={'violet'} text={'Расписание медработников'} onClick={() => {
                        navigate('/manager/workers-timetable')
                    }}/>
                    <Button color={'blue'} text={'Расписание пациентов'} onClick={() => {
                        navigate('/manager/guests-timetable')
                    }}/>

                </div>
            </div>
        </div>
    );
};

export default TimetableManager;