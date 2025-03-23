import styles from '../../css/Index.module.css'
import self_styles from './SecondVisitDoctor.module.css'
import {SideBar} from "../../../components/SideBar/SideBar.tsx";
import {Header} from "../../../components/Header/Header.tsx"
import {OneItem} from "../../../types/SideBarItem.tsx";
import {useNavigate, useSearchParams} from "react-router-dom";
import {InputText} from "../../../components/inputs/InputText/InputText.tsx";
import {Button3} from "../../../components/buttons/Button3/Button3.tsx";
import {useEffect, useState} from "react";
import axios from "axios";

type PatientData = {
    guest_id: number,
    surname: string,
    name: string,
    patronymic: string,
    birthday: string,
};

const SecondVisitDoctor = () => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    const [surname, setSurname] = useState('');
    const [guests, setGuests] = useState<PatientData[]>([]);
    const [loading, setLoading] = useState(false);
    const [error_r, setError_r] = useState<string | null>(null);

    const changeSurname = (data: string) => {
        setSurname(data);
    };

    useEffect(() => {
        setSearchParams({surname});
    }, [surname, setSearchParams]);

    useEffect(() => {
        SearchClick()
    }, []);

    const SearchClick = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`http://localhost:8000/api/doctor/second_visit/?surname=${surname}`);
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
        {onClick: () => navigate('/doctor/timetable'), text: "Расписание", label: "timetable"},
        {onClick: () => navigate('/doctor/first_visit'), text: "Первичный прием", label: "first_visit"},
        {onClick: () => navigate('/doctor/second_visit'), text: "Заключительный прием", label: "second_visit"},
        {onClick: () => navigate('/doctor/dairies'), text: "Дневники", label: "dairies"},
        {onClick: () => navigate('/doctor/medical_stories'), text: "Истории болезни", label: "medical_stories"}
    ];

    return (
        <div className={styles['page-style']}>

            <SideBar activeItem={"second_visit"} items={sideBarItems}/>
            <div className={styles['content-container']}>

                <Header name={'Иванова Анастасия Сергеевна'} post={'Врач'}/>

                <div className={styles['main-container']}>
                    <div className={self_styles['filters-container']}>
                        <div className={self_styles['row-container']}>
                            <InputText text={'Введите фамилию'} label={'Введите фамилию'} value={surname}
                                       onChange={changeSurname}/>
                            <Button3 text={'Применить'} onClick={SearchClick}/>
                        </div>
                    </div>

                    <div className={self_styles['people-list-container']}>
                        {loading ? (
                            <p>Загрузка...</p>
                        ) : error_r ? (
                            <p style={{color: "red"}}>{error_r}</p>
                        ) : guests.length > 0 ? (
                            guests.map(guest => (
                                <div className={self_styles['people-container']}>
                                    {guest.surname} {guest.name} {guest.patronymic} - {guest.birthday}
                                    <Button3 text={'Перейти'}
                                             onClick={() => navigate(`/doctor/second_visit/person?id=${guest.guest_id}`)}/>
                                </div>
                            ))
                        ) : (
                            <p>Нет подходящих отдыхающих</p>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SecondVisitDoctor;