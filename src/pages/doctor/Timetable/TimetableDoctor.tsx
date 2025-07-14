import styles from './TimetableDoctor.module.css'
import {SideBar} from "../../../components/SideBar/SideBar.tsx";
import {Header} from "../../../components/Header/Header.tsx"
import {OneItem} from "../../../types/SideBarItem.tsx";
import {useNavigate, useSearchParams} from "react-router-dom";
import {Button} from "../../../components/buttons/Button/Button.tsx";
import {useEffect, useState} from "react";
import axios from "axios";
import {PatientData} from "../../../types/datas.tsx";

const TimetableDoctor = () => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    const date=new Date();
    const [guests, setGuests] = useState<PatientData[]>([]);
    // const [loading, setLoading] = useState(false);
    // const [error_r, setError_r] = useState<string | null>(null);

    // const changeDate = (data: string) => {
    //     setDate(data);
    // };

    useEffect(() => {
        setSearchParams((new Date(date)).toISOString);
    }, [date, setSearchParams, searchParams, guests]);

    useEffect(() => {
        SearchClick()
    }, []);

    const SearchClick = async () => {
        // setLoading(true);
        try {
            const response = await axios.get(`http://localhost:8000/api/doctor/second_visit/?date=${date}`);
            setGuests(response.data);
        } catch (error) {
            if (error instanceof Error) {
                // setError_r(error.response.data.error);
            } else {
                // setError_r("Произошла ошибка");
            }
        } finally {
            // setLoading(false);
        }
    };

    const sideBarItems: OneItem[] = [
        {onClick: () => navigate('/doctor/timetable'), text: "Расписание", label: "timetable"},
        {onClick: () => navigate('/doctor/first_visit'), text: "Первичн. прием", label: "first_visit"},
        {onClick: () => navigate('/doctor/second_visit'), text: "Заключит. прием", label: "second_visit"},
        {onClick: () => navigate('/doctor/dairies'), text: "Дневники", label: "dairies"},
        {onClick: () => navigate('/doctor/medical_stories'), text: "Истории болезни", label: "medical_stories"}
    ];

    return (
        <div className={styles['page-style']}>

            <SideBar activeItem={"timetable"} items={sideBarItems}/>
            <div className={styles['content-container']}>

                <Header name={'Фролова Клавдия Алексеевна'} post={'Врач'}/>

                <div className={styles['main-container']}>
                    <Button color={'green'} text={'Собственное расписание'} onClick={() => {
                        navigate('/doctor/timetable/self')
                    }}/>
                    <Button color={'violet'} text={'Расписание медработников'} onClick={() => {
                        navigate('/doctor/workers-timetable')
                    }}/>
                    <Button color={'blue'} text={'Расписание пациентов'} onClick={() => {
                        navigate('/doctor/guests-timetable')
                    }}/>

                </div>
            </div>
        </div>
    );
};

export default TimetableDoctor;