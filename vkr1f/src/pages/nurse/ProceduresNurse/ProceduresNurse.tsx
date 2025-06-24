import styles from './ProceduresNurse.module.css'
import {SideBar} from "../../../components/SideBar/SideBar.tsx";
import {Header} from "../../../components/Header/Header.tsx"
import {OneItem} from "../../../types/SideBarItem.tsx";
import {useNavigate} from "react-router-dom";
import {InputText} from "../../../components/inputs/InputText/InputText.tsx";
import {Button} from "../../../components/buttons/Button/Button.tsx";
import {useState} from "react";
import axios from "axios";
import {PatientData} from "../../../types/datas.tsx";


type ProcedureData = {
    id: number,
    name: string,
    patient: string,
    time: string
};

const ProceduresNurse = () => {
    const navigate = useNavigate()
    const [surname, setSurname] = useState('');
    const [guests, setGuests] = useState<ProcedureData[]>([
        {   id: 111,
            name: 'Тренажеры',
            patient: 'группа',
            time: '9:00 - 9:30'},
        {   id: 1211,
            name: 'Массаж',
            patient: 'Сидоров С.А.',
            time: '9:30 - 10:00'},
        {   id: 12171,
            name: 'Массаж',
            patient: 'Сидоров С.А.',
            time: '10:00 - 10:30'},
        {   id: 199211,
            name: 'Массаж',
            patient: 'Иванов И.И.',
            time: '10:30 - 11:00'},
        {   id: 1211,
            name: 'ЛФК',
            patient: 'группа',
            time: '11:30 - 12:00'},
    ]);
    const [loading, setLoading] = useState(false);
    const [error_r, setError_r] = useState<string | null>(null);

    const changeSurname = (data: string) => {
        setSurname(data);
    };

    const SearchClick = async () => {
        setLoading(true);
        try {
            // const response = await axios.get(`http://localhost:8000/api/doctor/first_visit/?surname=${surname}`);
            // setGuests(response.data);
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
        {onClick: () => navigate('/nurse/procedures'), text: "Процедуры", label: "procedures"},
        {onClick: () => navigate('/nurse/workers-timetable'), text: "Расписание \nработников", label: "workers-timetable"},
        {onClick: () => navigate('/nurse/guests-timetable'), text: "Расписание \nгостей", label: "guests-timetable"},
        {onClick: () => navigate('/nurse/self-timetable'), text: "Свое \nрасписание", label: "self-timetable"}
    ];

    return (
        <div className={styles['page-style']}>

            <SideBar activeItem={"procedures"} items={sideBarItems}/>
            <div className={styles['content-container']}>

                <Header name={'Ефремова Светлана Валерьевна'} post={'Медсестра'}/>

                <div className={styles['main-container']}>

                    <div className={styles['table-title']}>
                        Список задач (процедур) на 18 июня 2025
                    </div>

                    <div className={styles['people-list-container']}>
                        {loading ? (
                            <p>Загрузка...</p>
                        ) : error_r ? (
                            <p style={{color: "red"}}>{error_r}</p>
                        ) : guests.length > 0 ? (
                            guests.map(procedure => (
                                <div className={styles['people-container']}>
                                    <div className={styles['name']}>
                                        {procedure.surname} {procedure.name} {procedure.patronymic}
                                    </div>
                                    <div className={styles['pr-time']}>
                                        {procedure.time}
                                    </div>
                                    <div className={styles['patient']}>
                                        {procedure.patient}
                                    </div>
                                    <div className={styles['button']}>
                                        <Button
                                            color="blue"
                                            text="Перейти"
                                            onClick={() => navigate(`/nurse/procedures/one?id=${procedure.id}`)}
                                        />
                                    </div>
                                    {/*{guest.surname} {guest.name} {guest.patronymic} - {guest.birthday}*/}
                                    {/*<Button color={'green'}*/}
                                    {/*text={'Перейти'}*/}
                                    {/*onClick={() => navigate(`/manager/guests/person?id=${guest.guest_id}`)}/>*/}
                                </div>
                            ))
                        ) : (
                            <p>Нет задач на сегодня</p>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProceduresNurse;