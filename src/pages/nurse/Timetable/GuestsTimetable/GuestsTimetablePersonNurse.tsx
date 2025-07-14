import styles from './GuestTimetablePersonNurse.module.css'
import {SideBar} from "../../../../components/SideBar/SideBar.tsx";
import {Header} from "../../../../components/Header/Header.tsx"
import {OneItem} from "../../../../types/SideBarItem.tsx";
import {useNavigate} from "react-router-dom";
import {Button} from "../../../../components/buttons/Button/Button.tsx";
import {DatePicker} from "../../../../components/inputs/DatePicker/DatePicker.tsx";

// type DoctorData = {
//     doctor_id: number,
//     surname: string,
//     name: string,
//     patronymic: string,
//     post: string,
// };

const GuestsTimetablePersonDoctor = () => {
    const navigate = useNavigate()
    // const [surname, setSurname] = useState('');
    // const [doctors, setDoctors] = useState<DoctorData[]>([]);
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
        {onClick: () => navigate('/nurse/workers-timetable'), text: "Расписание \nработников", label: "workers-timetable"},
        {onClick: () => navigate('/nurse/guests-timetable'), text: "Расписание \nгостей", label: "guests-timetable"},
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
        "16.06.25_9:00 - 9:30": "Тренажеры, каб. 202",
        "16.06.25_9:30 - 10:00": "Массаж, каб. 203",
        "16.06.25_10:00 - 10:30": "Массаж, каб. 203",
        "16.06.25_10:30 - 11:00": "Грязелечение, каб. 104",
        "16.06.25_11:30 - 12:00": "ЛФК, каб. 110",
        "17.06.25_9:00 - 9:30": "Тренажеры, каб. 202",
        "17.06.25_9:30 - 10:00": "Массаж, каб. 203",
        "17.06.25_10:00 - 10:30": "Массаж, каб. 203",
        "17.06.25_10:30 - 11:00": "Минеральные ванны, каб. 101",
        "17.06.25_11:30 - 12:00": "ЛФК, каб. 110",
        "18.06.25_9:00 - 9:30": "Тренажеры, каб. 202",
        "18.06.25_9:30 - 10:00": "Массаж, каб. 203",
        "18.06.25_10:00 - 10:30": "Массаж, каб. 203",
        "18.06.25_10:30 - 11:00": "Грязелечение, каб. 104",
        "18.06.25_11:30 - 12:00": "ЛФК, каб. 110",
        "19.06.25_9:00 - 9:30": "Тренажеры, каб. 202",
        "19.06.25_9:30 - 10:00": "Массаж, каб. 203.",
        "19.06.25_10:00 - 10:30": "Массаж, каб. 203",
        "19.06.25_10:30 - 11:00": "Минеральные ванны, каб. 101",
        "19.06.25_11:30 - 12:00": "ЛФК, каб. 110",
        "20.06.25_9:00 - 9:30": "Тренажеры, каб. 202",
        "20.06.25_9:30 - 10:00": "Массаж, каб. 203",
        "20.06.25_10:00 - 10:30": "Массаж, каб. 203",
        "20.06.25_10:30 - 11:00": "Грязелечение, каб. 104",
        "20.06.25_11:30 - 12:00": "ЛФК, каб. 110",

    };

    const timeSlots = generateTimeSlots();

    return (
        <div className={styles['page-style']}>

            <SideBar activeItem={"guests-timetable"} items={sideBarItems}/>
            <div className={styles['content-container']}>

                <Header name={'Ефремова Светлана Валерьевна'} post={'Медсестра'}/>

                <div className={styles['main-container']}>
                    <div className={styles['row-container']}>
                        <DatePicker value={sDate.toString()} />
                        <Button color={'green'} text={'Применить'} onClick={SearchClick}/>
                    </div>

                    <div className={styles['table-title']}>
                        Расписание пациента Сидорова Сергея Алексеевича
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

export default GuestsTimetablePersonDoctor;