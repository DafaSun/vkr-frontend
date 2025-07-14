import {useEffect, useState} from "react";
import styles from './GuestsManager.module.css'
import {SideBar} from "../../../components/SideBar/SideBar.tsx";
import {Header} from "../../../components/Header/Header.tsx"
import {Button} from "../../../components/buttons/Button/Button.tsx";
import {InputText} from "../../../components/inputs/InputText/InputText.tsx";
import {OneItem} from "../../../types/SideBarItem.tsx";
import {useNavigate, useSearchParams} from "react-router-dom";
import axios from "axios";

type GuestsData = {
    guest_id: number,
    surname: string,
    name: string,
    patronymic: string,
    birthday: string,
    tour_type: string
};

const InfoManager = () => {
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
    }, [surname, setSearchParams, searchParams]);

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
                // setError_r(error.response.data.error);
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
        {onClick: () => navigate('/manager/timetable'), text: "Расписания", label: "info"},
        {onClick: () => navigate('/manager/info'), text: "Информация", label: "info"},
    ];

    return (
        <div className={styles['page-style']}>

            <SideBar activeItem={"guests"} items={sideBarItems}/>
            <div className={styles['content-container']}>

                <Header name={'Иванова Анастасия Сергеевна'} post={'Менеджер'}/>

                <div className={styles['main-container']}>
                        <div className={styles['row-container']}>
                            <InputText text={'Введите фамилию'} label={'Введите фамилию'} value={surname}
                                       onChange={changeSurname}/>
                            <Button color={'violet'} text={'Применить'} onClick={SearchClick}/>
                            <Button color={'blue'} text={'Добавить человека'} onClick={() => navigate(`/manager/guests/new`)}/>
                        </div>

                    <div className={styles['table-title']}>
                        Список отдыхающих
                    </div>

                    <div className={styles['people-list-container']}>
                        {loading ? (
                            <p>Загрузка...</p>
                        ) : error_r ? (
                            <p style={{color: "red"}}>{error_r}</p>
                        ) : guests.length > 0 ? (
                            guests.map(guest => (
                                <div className={styles['people-container']}>
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
                                            onClick={() => navigate(`/manager/guests/person?id=${guest.guest_id}`)}
                                        />
                                    </div>
                                    {/*{guest.surname} {guest.name} {guest.patronymic} - {guest.birthday}*/}
                                    {/*<Button color={'green'}*/}
                                    {/*text={'Перейти'}*/}
                                    {/*onClick={() => navigate(`/manager/guests/person?id=${guest.guest_id}`)}/>*/}
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

export default InfoManager;