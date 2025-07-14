import styles from './OneProcedureNurse.module.css'
import {SideBar} from "../../../components/SideBar/SideBar.tsx";
import {Header} from "../../../components/Header/Header.tsx"
import {OneItem} from "../../../types/SideBarItem.tsx";
import {useNavigate} from "react-router-dom";
import self_styles from "./ProceduresNurse.module.css";
import {InputText} from "../../../components/inputs/InputText/InputText.tsx";
import {Button} from "../../../components/buttons/Button/Button.tsx";
import {useState} from "react";
import axios from "axios";
import {PatientData} from "../../../types/datas.tsx";
import {InputBigText} from "../../../components/inputs/InputBigText/InputBigText.tsx";

const OneProcedureNurse = () => {
    const navigate = useNavigate()
    const [surname, setSurname] = useState('');
    const [guests, setGuests] = useState<PatientData[]>([]);
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
        {
            onClick: () => navigate('/nurse/workers-timetable'),
            text: "Расписание \nработников",
            label: "workers-timetable"
        },
        {onClick: () => navigate('/nurse/guests-timetable'), text: "Расписание \nгостей", label: "guests-timetable"},
        {onClick: () => navigate('/nurse/self-timetable'), text: "Свое \nрасписание", label: "self-timetable"}
    ];

    return (
        <div className={styles['page-style']}>

            <SideBar activeItem={"procedures"} items={sideBarItems}/>
            <div className={styles['content-container']}>

                <Header name={'Ефремова Светлана Валерьевна'} post={'Медсестра'}/>

                <div className={styles['main-container']}>
                    <div className={styles['t1']}>
                        Процедура 18 июня 2025 в 9:30 - 10:00
                    </div>

                    <div className={styles['info']}>
                        <table className={styles['only-horizontal-lines']}>
                            <tbody>
                            <tr>
                                <td className={styles['left-col']}>
                                    Дата
                                </td>
                                <td>
                                    18 июня 2025
                                </td>
                            </tr>
                            <tr>
                                <td className={styles['left-col']}>
                                    Время
                                </td>
                                <td>
                                    9:30 - 10:00
                                </td>
                            </tr>
                            <tr>
                                <td className={styles['left-col']}>
                                    Пациент
                                </td>
                                <td>
                                    Сидоров Сергей Алексеевич
                                </td>
                            </tr>
                            <tr>
                                <td className={styles['left-col']}>
                                    Пол пациента
                                </td>
                                <td>
                                    Мужской
                                </td>
                            </tr>
                            <tr>
                                <td className={styles['left-col']}>
                                    Возраст пациента
                                </td>
                                <td>
                                    63 года
                                </td>
                            </tr>
                            <tr>
                                <td className={styles['left-col']}>
                                    Осторожно!
                                </td>
                                <td>
                                    Аллергия на парацетамол
                                </td>
                            </tr>
                            <tr>
                                <td className={styles['left-col']}>
                                    Название процедуры
                                </td>
                                <td>
                                    Массаж
                                </td>
                            </tr>
                            <tr>
                                <td className={styles['left-col']}>
                                    Параметры процедуры
                                </td>
                                <td>
                                    Пояснично-крестцовая область
                                </td>
                            </tr>

                            </tbody>
                        </table>
                    </div>
                    <div className={styles['t2']}> Примечание о выполнении</div>
                    <div className={styles['info']}>
                    <div className={styles['t3']}> Примечание о выполнении</div>
                    <InputBigText label={'Введите примечание о выполнении процедуры'}></InputBigText>
                        <div className={styles['info-td-btn']}>
                    <Button text={'Выполнено'}></Button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default OneProcedureNurse;