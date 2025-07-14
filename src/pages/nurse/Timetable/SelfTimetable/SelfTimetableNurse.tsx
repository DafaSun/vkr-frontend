import styles from './SelfTimetableNurse.module.css'
import {SideBar} from "../../../../components/SideBar/SideBar.tsx";
import {Header} from "../../../../components/Header/Header.tsx"
import {OneItem} from "../../../../types/SideBarItem.tsx";
import {useNavigate} from "react-router-dom";
import {Button} from "../../../../components/buttons/Button/Button.tsx";
// import {PatientData} from "../../../../types/datas.tsx";
import {DatePicker} from "../../../../components/inputs/DatePicker/DatePicker.tsx";

const SelfTimetableNurse = () => {
    const navigate = useNavigate()
    // const [surname, setSurname] = useState('');
    // const [guests, setGuests] = useState<PatientData[]>([]);
    // const [loading, setLoading] = useState(false);
    // const [error_r, setError_r] = useState<string | null>(null);

    // const changeSurname = (data: string) => {
    //     setSurname(data);
    // };

    const SearchClick = async () => {
        // setLoading(true);
        try {
            // const response = await axios.get(`http://localhost:8000/api/doctor/first_visit/?surname=${surname}`);
            // setGuests(response.data);
        } catch (error) {
            if (error instanceof Error) {
                // setError_r(error.response.data.error);
            } else {
                // setError_r("Произошла ошибка");
            }
        } finally {
            // setLoading(false);
        }
    };

    const sideBarItems: OneItem[] = [
        {onClick: () => navigate('/nurse/procedures'), text: "Процедуры", label: "procedures"},
        {onClick: () => navigate('/nurse/workers-timetable'), text: "Расписание\nперсонала", label: "workers-timetable"},
        {onClick: () => navigate('/nurse/guests-timetable'), text: "Расписание\nгостей", label: "guests-timetable"},
        {onClick: () => navigate('/nurse/self-timetable'), text: "Свое \nрасписание", label: "self-timetable"}
    ];

    const sDate=new Date();

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
        "16.06.25_9:00 - 9:30": "Тренажеры",
        "16.06.25_9:30 - 10:00": "Массаж: Сидоров С.А.",
        "16.06.25_10:00 - 10:30": "Массаж: Сидоров С.А.",
        "16.06.25_11:30 - 12:00": "ЛФК",
        "17.06.25_9:00 - 9:30": "Тренажеры",
        "17.06.25_9:30 - 10:00": "Массаж: Сидоров С.А.",
        "17.06.25_10:00 - 10:30": "Массаж: Сидоров С.А.",
        "17.06.25_11:30 - 12:00": "ЛФК",
        "18.06.25_9:00 - 9:30": "Тренажеры",
        "18.06.25_9:30 - 10:00": "Массаж: Сидоров С.А.",
        "18.06.25_10:00 - 10:30": "Массаж: Сидоров С.А.",
        "18.06.25_10:30 - 11:00": "Массаж: Иванов И.И.",
        "18.06.25_11:30 - 12:00": "ЛФК",
        "19.06.25_9:00 - 9:30": "Тренажеры",
        "19.06.25_9:30 - 10:00": "Массаж: Сидоров С.А.",
        "19.06.25_10:00 - 10:30": "Массаж: Сидоров С.А.",
        "19.06.25_10:30 - 11:00": "Массаж: Иванов И.И.",
        "19.06.25_11:30 - 12:00": "ЛФК",
        "20.06.25_9:00 - 9:30": "Тренажеры",
        "20.06.25_9:30 - 10:00": "Массаж: Сидоров С.А.",
        "20.06.25_10:00 - 10:30": "Массаж: Сидоров С.А.",
        "20.06.25_10:30 - 11:00": "Массаж: Иванов И.И.",
        "20.06.25_11:30 - 12:00": "ЛФК",
        "21.06.25_9:00 - 9:30": "Тренажеры",
        "21.06.25_10:30 - 11:00": "Массаж: Иванов И.И.",
        "21.06.25_11:30 - 12:00": "ЛФК",

    };

    const timeSlots = generateTimeSlots();

    return (
        <div className={styles['page-style']}>

            <SideBar activeItem={"self-timetable"} items={sideBarItems}/>
            <div className={styles['content-container']}>

                <Header name={'Ефремова Светлана Валерьевна'} post={'Медсестра'}/>

                <div className={styles['main-container']}>
                    <div className={styles['row-container']}>
                        <DatePicker value={sDate.toString()} />
                        <Button color={'green'} text={'Применить'} onClick={SearchClick}/>
                    </div>

                    <div className={styles['table-title']}>
                        Расписание медсестры Ефремова Светлана Валерьевна (расписание пользователя)
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

export default SelfTimetableNurse;