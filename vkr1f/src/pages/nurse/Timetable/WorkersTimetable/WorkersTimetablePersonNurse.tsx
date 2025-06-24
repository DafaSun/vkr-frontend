import styles from '../../../css/Index.module.css'
import {SideBar} from "../../../../components/SideBar/SideBar.tsx";
import {Header} from "../../../../components/Header/Header.tsx"
import {OneItem} from "../../../../types/SideBarItem.tsx";
import {useNavigate} from "react-router-dom";
import self_styles from "./WorkersTimetableNurse.module.css";
import {InputText} from "../../../../components/inputs/InputText/InputText.tsx";
import {Button} from "../../../../components/buttons/Button/Button.tsx";
import {useState} from "react";
import axios from "axios";


type DoctorData = {
    doctor_id: number,
    surname: string,
    name: string,
    patronymic: string,
    post: string,
};

const WorkersTimetablePersonNurse = () => {
    const navigate = useNavigate()
    const [surname, setSurname] = useState('');
    const [doctors, setDoctors] = useState<DoctorData[]>([]);
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

            <SideBar activeItem={"workers-timetable"} items={sideBarItems}/>
            <div className={styles['content-container']}>

                <Header name={'Ефремова Светлана Валерьевна'} post={'Медсестра'}/>

                <div className={styles['main-container']}>
                    <div className={self_styles['filters-container']}>
                        <div className={self_styles['row-container']}>
                            <InputText text={'Введите фамилию'} label={'Введите фамилию'} value={surname}
                                       onChange={changeSurname}/>
                            <Button color={'green'} text={'Применить'} onClick={SearchClick}/>
                        </div>
                    </div>

                    <div className={self_styles['people-list-container']}>
                        {loading ? (
                            <p>Загрузка...</p>
                        ) : error_r ? (
                            <p style={{color: "red"}}>{error_r}</p>
                        ) : doctors.length > 0 ? (
                            doctors.map(doctor => (
                                <div className={self_styles['people-container']}>
                                    {doctor.surname} {doctor.name} {doctor.patronymic} - {doctor.post}
                                    <Button color={'violet'}
                                            text={'Перейти'}
                                            onClick={() => navigate(`/doctor/first_visit/person?id=${doctor.doctor_id}`)}/>
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

export default WorkersTimetablePersonNurse;