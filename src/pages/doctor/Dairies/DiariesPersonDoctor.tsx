import styles from './DiariesPersonDoctor.module.css'
import {SideBar} from "../../../components/SideBar/SideBar.tsx";
import {Header} from "../../../components/Header/Header.tsx"
import {OneItem} from "../../../types/SideBarItem.tsx";
import {useNavigate} from "react-router-dom";
import {Button} from "../../../components/buttons/Button/Button.tsx";
import {useState} from "react";
import {DatePicker} from "../../../components/inputs/DatePicker/DatePicker.tsx";
import {InputText} from "../../../components/inputs/InputText/InputText.tsx";
import {InputBigText} from "../../../components/inputs/InputBigText/InputBigText.tsx";
import {TimePicker} from "../../../components/inputs/TimePicker/TimePicker.tsx";

// type PatientData = {
//     guest_id: number,
//     surname: string,
//     name: string,
//     patronymic: string,
//     birthday: string,
// };

const DiariesPersonDoctor = () => {
    const navigate = useNavigate();
    // const [searchParams, setSearchParams] = useSearchParams();
    // const [generalError, setGeneralError] = useState<string | null>(null);
    // const [doctorCheck, setDoctorCheck] = useState<boolean>();

    // const viewDate = new Date().toISOString().split("T")[0];
    // const [patient, setPatient] = useState<PatientData>({
    //     guest_id: 0,
    //     surname: '',
    //     name: '',
    //     patronymic: '',
    //     birthday: '',
    // });
    const [description, setDescription] = useState('');
    // const [loading, setLoading] = useState(false);
    // const [error_r, setError_r] = useState<string | null>(null);

    const sideBarItems: OneItem[] = [
        {onClick: () => navigate('/doctor/timetable'), text: "Расписание", label: "timetable"},
        {onClick: () => navigate('/doctor/first_visit'), text: "Первичн. прием", label: "first_visit"},
        {onClick: () => navigate('/doctor/second_visit'), text: "Заключит. прием", label: "second_visit"},
        {onClick: () => navigate('/doctor/dairies'), text: "Дневники", label: "dairies"},
        {onClick: () => navigate('/doctor/medical_stories'), text: "Истории болезни", label: "medical_stories"}
    ];

    return (
        <div className={styles['page-style']}>

            <SideBar activeItem={"dairies"} items={sideBarItems}/>
            <div className={styles['content-container']}>

                <Header name={'Фролова Клавдия Алексеевна'} post={'Врач'}/>

                <div className={styles['main-container']}>
                    <div className={styles['table-title']}>Дневник пациента</div>

                    <div className={styles['person-container']}>
                        <div className={styles['containers-00']}>

                            <div className={styles['fields-container']}>
                                <div className={styles['field']}>
                                    <InputText text={'Фамилия*'} value={'Сидоров'} label={''}/>
                                </div>
                                <div className={styles['field']}>
                                    <InputText text={'Имя*'} value={'Сергей'}/>

                                </div>
                                <div className={styles['field']}>
                                    <InputText text={'Отчество'} value={'Алексеевич'}/>
                                </div>
                            </div>


                            <div className={styles['fields-container']}>

                                <div className={styles['field']}>
                                    <DatePicker text={"Дата осмотра"} value={'2025-06-18'} isEdit={false}/>
                                </div>
                                <div className={styles['field']}>
                                    <TimePicker text={"Время начала осмотра"} value={'13:27'}/>
                                </div>
                            </div>
                        </div>


                        <InputBigText text={'Результаты осмотра'} value={description} onChange={setDescription}/>

                        {/*<Checkbox text={'Лечащий врач все проверил'} value={doctorCheck} onChange={setDoctorCheck}/>*/}
                        {/*{generalError && <p style={{color: "red"}}>{generalError}</p>}*/}

                        <div className={styles['button-container']}>
                        <Button color={'orange'} text={'Сохранить'}  onClick={() => {
                        }}/>
                        </div>
                    </div>
                    {/*<Button color={'violet'} text={'На печать'} onClick={() => {*/}
                    {/*}}/>*/}
                </div>
            </div>
        </div>
    );
};

export default DiariesPersonDoctor;

// const DiariesPersonDoctor = () => <div></div>;
// export default DiariesPersonDoctor;