import styles from '../../css/Index.module.css'
import self_styles from './DiariesDoctor.module.css'
import {SideBar} from "../../../components/SideBar/SideBar.tsx";
import {Header} from "../../../components/Header/Header.tsx"
import {OneItem} from "../../../types/SideBarItem.tsx";
import {useNavigate, useSearchParams} from "react-router-dom";
import {Button3} from "../../../components/buttons/Button3/Button3.tsx";
import {useEffect, useState} from "react";
import axios from "axios";
import {DatePicker} from "../../../components/inputsInText/DatePicker/DatePicker.tsx";
import {InputString} from "../../../components/inputsInText/InputString/InputString.tsx";
import {InputText} from "../../../components/inputsInText/InputText/InputText.tsx";

type PatientData = {
    guest_id: number,
    surname: string,
    name: string,
    patronymic: string,
    birthday: string,
};

const DiariesPersonDoctor = () => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    const viewDate = new Date().toISOString().split("T")[0];
    const [patient, setPatient] = useState<PatientData>({
        guest_id: 0,
        surname: '',
        name: '',
        patronymic: '',
        birthday: '',
    });
    const [description, setDescription] = useState('');
    const [loading, setLoading] = useState(false);
    const [error_r, setError_r] = useState<string | null>(null);

    const sideBarItems: OneItem[] = [
        {onClick: () => navigate('/doctor/timetable'), text: "Расписание", label: "timetable"},
        {onClick: () => navigate('/doctor/first_visit'), text: "Первичный прием", label: "first_visit"},
        {onClick: () => navigate('/doctor/second_visit'), text: "Заключительный прием", label: "second_visit"},
        {onClick: () => navigate('/doctor/dairies'), text: "Дневники", label: "dairies"},
        {onClick: () => navigate('/doctor/medical_stories'), text: "Истории болезни", label: "medical_stories"}
    ];

    return (
        <div className={styles['page-style']}>

            <SideBar activeItem={"dairies"} items={sideBarItems}/>
            <div className={styles['content-container']}>

                <Header name={'Иванова Анастасия Сергеевна'} post={'Врач'}/>

                <div className={styles['main-container']}>
                    <h1>Дневник пациента</h1>
                        <InputString text={'ФИО пациента'}
                                   value={patient.surname + ' ' + patient.name + ' ' + patient.patronymic}
                                   isEdit={false}/>
                    <DatePicker text={'Дата осмотра'} value={viewDate} isEdit={false}/>

                    <InputText text={''} value={description} onChange={setDescription}/>

                    <Button3 text={'Сохранить'} onClick={() => {
                    }}/>


                </div>
            </div>
        </div>
    );
};

export default DiariesPersonDoctor;