import styles from './FirstVisitDoctor.module.css'
import {SideBar} from "../../../components/SideBar/SideBar.tsx";
import {Header} from "../../../components/Header/Header.tsx"
import {OneItem} from "../../../types/SideBarItem.tsx";
import {useNavigate, useSearchParams} from "react-router-dom";
import {InputText} from "../../../components/inputs/InputText/InputText.tsx";
import {Button} from "../../../components/buttons/Button/Button.tsx";
import {useEffect, useState} from "react";
import axios from "axios";
import {PatientData} from "../../../types/datas.tsx";


const FirstVisitDoctor = () => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    const [surname, setSurname] = useState('');
    const [guests, setGuests] = useState<GuestsData[]>([]);
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
            const response = await axios.get(`http://localhost:8000/api/manager/guests/?surname=${surname}`);
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
        {onClick: () => navigate('/doctor/first_visit'), text: "Первичн. прием", label: "first_visit"},
        {onClick: () => navigate('/doctor/second_visit'), text: "Заключит. прием", label: "second_visit"},
        {onClick: () => navigate('/doctor/dairies'), text: "Дневники", label: "dairies"},
        {onClick: () => navigate('/doctor/medical_stories'), text: "Истории болезни", label: "medical_stories"}
    ];

    return (
        <div className={styles['page-style']}>

            <SideBar activeItem={"first_visit"} items={sideBarItems}/>
            <div className={styles['content-container']}>

                <Header name={'Фролова Клавдия Алексеевна'} post={'Врач'}/>

                <div className={styles['main-container']}>
                    <div className={styles['row-container']}>
                        <InputText text={'Введите фамилию'} label={'Введите фамилию'} value={surname}
                                   onChange={changeSurname}/>
                        <Button color={'violet'} text={'Применить'} onClick={SearchClick}/>
                        <Button color={'blue'} text={'Добавить человека'} onClick={() => navigate(`/manager/guests/new`)}/>
                    </div>

                    <div className={styles['table-title']}>
                        Список пациентов на первичный прием
                    </div>

                    <div className={styles['people-list-container']}>
                        {loading ? (
                            <p>Загрузка...</p>
                        ) : error_r ? (
                            <p style={{color: "red"}}>{error_r}</p>
                        ) : guests.length > 0 ? (
                            guests.map(guest => (
                                <div className={guest.surname=='Сидоров'? styles['hidden']:styles['people-container']}>
                                    <div className={styles['fio']}>
                                        {guest.surname} {guest.name} {guest.patronymic}
                                    </div>
                                    <div className={styles['birthday']}>
                                        {guest.birthday}
                                    </div>
                                    <div className={styles['button']}>
                                        <Button
                                            color="green"
                                            text="Перейти"
                                            onClick={() => navigate(`/doctor/first-visit/person?id=${guest.guest_id}`)}
                                        />
                                    </div>

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

export default FirstVisitDoctor;