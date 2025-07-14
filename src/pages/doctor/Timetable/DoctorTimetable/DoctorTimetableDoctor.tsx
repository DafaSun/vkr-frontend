import styles from '../../../css/Index.module.css'
import {SideBar} from "../../../../components/SideBar/SideBar.tsx";
import {Header} from "../../../../components/Header/Header.tsx"
import {OneItem} from "../../../../types/SideBarItem.tsx";
import {useNavigate} from "react-router-dom";
import self_styles from "../../FirstVisit/FirstVisitPersonDoctor.module.css";
import {InputText} from "../../../../components/inputs/InputText/InputText.tsx";
import {Button} from "../../../../components/buttons/Button/Button.tsx";
import {useState} from "react";

import {PatientData} from "../../../../types/datas.tsx";

const DoctorTimetableDoctor = () => {
    const navigate = useNavigate()
    const [surname, setSurname] = useState('');
    const guests:PatientData[]=[];
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
        {onClick: () => navigate('/doctor/timetable'), text: "Расписание", label: "timetable"},
        {onClick: () => navigate('/doctor/first_visit'), text: "Первичный прием", label: "first_visit"},
        {onClick: () => navigate('/doctor/second_visit'), text: "Заключительный прием", label: "second_visit"},
        {onClick: () => navigate('/doctor/dairies'), text: "Дневники", label: "dairies"},
        {onClick: () => navigate('/doctor/medical_stories'), text: "Истории болезни", label: "medical_stories"}
    ];

    return (
        <div className={styles['page-style']}>

            <SideBar activeItem={"timetable"} items={sideBarItems}/>
            <div className={styles['content-container']}>

                <Header name={'Фролова Клавдия Алексеевна'} post={'Врач'}/>

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
                        ) : guests.length > 0 ? (
                            guests.map(doctor => (
                                <div className={self_styles['people-container']}>
                                    {doctor.surname} {doctor.name} {doctor.patronymic} - Врач
                                    <Button color={'violet'}
                                            text={'Перейти'}
                                            onClick={() => navigate(`/doctor/first_visit/person?id=${doctor.guest_id}`)}/>
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

export default DoctorTimetableDoctor;