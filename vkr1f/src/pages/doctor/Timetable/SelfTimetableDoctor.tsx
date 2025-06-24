import styles from './SelfTimetableDoctor.module.css'
import {SideBar} from "../../../components/SideBar/SideBar.tsx";
import {Header} from "../../../components/Header/Header.tsx"
import {OneItem} from "../../../types/SideBarItem.tsx";
import {useNavigate, useSearchParams} from "react-router-dom";
import {InputText} from "../../../components/inputs/InputText/InputText.tsx";
import {Button} from "../../../components/buttons/Button/Button.tsx";
import {useEffect, useState} from "react";
import axios from "axios";
import {PatientData} from "../../../types/datas.tsx";
import {DatePicker} from "../../../components/inputs/DatePicker/DatePicker.tsx";
import {DropdownList} from "../../../components/inputs/DropdownList/DpropdownList.tsx";
import {roomCategoryList} from "../../../mocks/mock.tsx";

const SelfTimetableDoctor = () => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const [sDate, setSDate] = useState(new Date());

    const [date, setDate] = useState('');
    const [guests, setGuests] = useState<PatientData[]>([]);
    const [loading, setLoading] = useState(false);
    const [error_r, setError_r] = useState<string | null>(null);

    const changeDate = (data: string) => {
        setDate(data);
    };

    useEffect(() => {
        setSearchParams({date});
    }, [date, setSearchParams]);

    useEffect(() => {
        SearchClick()
    }, []);

    const SearchClick = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`http://localhost:8000/api/doctor/second_visit/?surname=${date}`);
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

    const days = [
        { short: "Пн", date: "16.06.25" },
        { short: "Вт", date: "17.06.25" },
        { short: "Ср", date: "18.06.25" },
        { short: "Чт", date: "19.06.25" },
        { short: "Пт", date: "20.06.25" },
        { short: "Сб", date: "21.06.25" },
    ];

    const today = "18.06.25";

    const generateTimeSlots = () => {
        const slots: (string | "перерыв" | "обед")[] = [];

        for (let hour = 8; hour < 15; hour++) {
            const slot1 = `${hour}:00 - ${hour}:30`;
            const slot2 = `${hour}:30 - ${hour + 1}:00`;

            if (slot1 === "11:00 - 11:30") {
                slots.push("перерыв");
            } else if (slot1 === "13:00 - 13:30") {
                slots.push("обед");
            } else {
                slots.push(slot1);
            }

            // Добавляем slot2 только если он не часть обеда
            if (!(slot1 === "13:00 - 13:30" || slot2 === "13:30 - 14:00")) {
                slots.push(slot2);
            }
        }

        return slots;
    };

    const scheduleData: Record<string, string> = {
        "16.06.25_11:30 - 12:00": "Первичн.прием: Сидоров",
        // "17.06.25_10:30 - 11:00": "Прием: Сидоров",
        // "18.06.25_8:00 - 8:30": "Прием: Сидоров",
        // "18.06.25_9:00 - 9:30": "Первичн.прием: Иванов",
        // "18.06.25_11:30 - 12:00": "Прием: Иванов",
        // "18.06.25_11:30 - 10:30": "Первичн.прием: Иванов",
        "17.06.25_8:30 - 9:00": "Прием: Сидоров С.А.",
        "18.06.25_8:30 - 9:00": "Прием: Сидоров С.А.",
        "18.06.25_14:00 - 15:00": "Первичн.прием: Иванов И.И.",
        "19.06.25_8:30 - 9:00": "Прием: Сидоров С.А.",
        "19.06.25_9:00 - 9:30": "Прием: Иванов И.И.",
        "20.06.25_8:30 - 9:00": "Заключит.прием: Сидоров С.А.",
        "20.06.25_9:00 - 9:30": "Прием: Иванов И.И.",
        "21.06.25_10:30 - 11:00": "Прием: Иванов И.И.",
    };

    const timeSlots = generateTimeSlots();

    return (
        <div className={styles['page-style']}>

            <SideBar activeItem={"timetable"} items={sideBarItems}/>
            <div className={styles['content-container']}>

                <Header name={'Фролова Клавдия Алексеевна'} post={'Врач'}/>

                <div className={styles['main-container']}>
                    <div className={styles['row-container']}>
                        <DatePicker  value={sDate.toString()} />
                        <Button color={'green'} text={'Применить'} onClick={SearchClick}/>
                    </div>

                    <div className={styles['table-title']}>
                        Расписание врача Фролова Клавдия Алексеевна (расписание пользователя)
                    </div>

                    <table className={styles['schedule-table']}>
                        <thead>
                        <tr>
                            <th>Время</th>
                            {days.map((day) =>
                                (
                                <th
                                    key={day.date}
                                    className={day.date === today ? styles['today'] : 'not-today'}
                                >
                                    {day.short}
                                    <br />
                                    <span className={styles['date']}>{day.date}</span>
                                </th>
                            ))}
                        </tr>
                        </thead>
                        <tbody>
                        {timeSlots.map((time) => {
                            if (time === "обед") {
                                return (
                                    <tr key="lunch" className={styles['lunch-row']}>
                                        <td colSpan={8}>Обед 13:00 – 14:00</td>
                                    </tr>
                                );
                            }

                            if (time === "перерыв") {
                                return (
                                    <tr key="break" className={styles['break-row']}>
                                        <td colSpan={8}>Перерыв 11:00 – 11:30</td>
                                    </tr>
                                );
                            }

                            return (
                                <tr key={time}>
                                    <td className={styles['time-cell']}>{time}</td>
                                    {days.map((day) => {
                                        const key = `${day.date}_${time}`;
                                        const text = scheduleData[key] || "";
                                        return (
                                            <td
                                                key={day.date + time}
                                                className={day.date === today ? styles['today-column'] : styles['not-today-column']}
                                            >
                                                {text}
                                            </td>
                                        );
                                    })}
                                </tr>
                            );
                        })}
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    );
};

export default SelfTimetableDoctor;