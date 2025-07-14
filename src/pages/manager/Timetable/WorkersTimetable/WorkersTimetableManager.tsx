import styles from '../../../css/Index.module.css'
import {SideBar} from "../../../../components/SideBar/SideBar.tsx";
import {Header} from "../../../../components/Header/Header.tsx"
import {OneItem} from "../../../../types/SideBarItem.tsx";
import {useNavigate} from "react-router-dom";
import self_styles from "./WorkersTimetableManager.module.css";
import {InputText} from "../../../../components/inputs/InputText/InputText.tsx";
import {Button} from "../../../../components/buttons/Button/Button.tsx";
import {useState} from "react";
import {DoctorData} from "../../../../types/datas.tsx";

const WorkersTimetableManager = () => {
    const navigate = useNavigate()
    const [surname, setSurname] = useState('');
    const doctors:DoctorData[]=[];
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
        {onClick: () => navigate('/manager/timetable'), text: "Расписания", label: "timetable"},
        {onClick: () => navigate('/manager/info'), text: "Информация", label: "info"},
    ];

    return (
        <div className={styles['page-style']}>

            <SideBar activeItem={"timetable"} items={sideBarItems}/>
            <div className={styles['content-container']}>

                <Header name={'Иванова Анастасия Сергеевна'} post={'Менеджер'}/>

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
                            <p>Нет подходящих медицинских работников</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkersTimetableManager;