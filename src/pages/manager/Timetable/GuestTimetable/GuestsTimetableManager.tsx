import {SideBar} from "../../../../components/SideBar/SideBar.tsx";
import {Header} from "../../../../components/Header/Header.tsx"
import {OneItem} from "../../../../types/SideBarItem.tsx";
import {useNavigate} from "react-router-dom";
import styles from "./GuestsTimetableManager.module.css";
import {InputText} from "../../../../components/inputs/InputText/InputText.tsx";
import {Button} from "../../../../components/buttons/Button/Button.tsx";
import {useEffect, useState} from "react";
import axios from "axios";
import {PatientData} from "../../../../types/datas.tsx";

const GuestsTimetableManager = () => {
    const navigate = useNavigate()
    const [surname, setSurname] = useState('');
    const [guests, setGuests] = useState<PatientData[]>([]);
    const [loading, setLoading] = useState(false);
    const [error_r, setError_r] = useState<string | null>(null);

    const changeSurname = (data: string) => {
        setSurname(data);
    };

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
                    <div className={styles['row-container']}>
                        <InputText text={'Введите фамилию'} label={'Введите фамилию'} value={surname}
                                   onChange={changeSurname}/>
                        <Button color={'violet'} text={'Применить'} onClick={SearchClick}/>
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
                                            color="blue"
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

export default GuestsTimetableManager;