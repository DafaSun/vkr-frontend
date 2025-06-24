import styles from './SecondVisitPersonDoctor.module.css'
import {SideBar} from "../../../components/SideBar/SideBar.tsx";
import {Header} from "../../../components/Header/Header.tsx"
import {OneItem} from "../../../types/SideBarItem.tsx";
import {useNavigate} from "react-router-dom";
import {InputBigText} from "../../../components/inputs/InputBigText/InputBigText.tsx";
import {DatePicker} from "../../../components/inputs/DatePicker/DatePicker.tsx";
import {DropdownList} from "../../../components/inputs/DropdownList/DpropdownList.tsx";
import {useState} from "react";
import {TimePicker} from "../../../components/inputs/TimePicker/TimePicker.tsx";
import {Checkbox} from "../../../components/inputs/Checkbox/Checkbox.tsx";
import {InputText} from "../../../components/inputs/InputText/InputText.tsx";
import {InputNumber} from "../../../components/inputs/InputNumber/InputNumber.tsx";
import {Button} from "../../../components/buttons/Button/Button.tsx";
import {statesList, genderList} from "../../../mocks/mock.tsx";

const FirstVisitPersonDoctor = () => {
    const navigate = useNavigate();

    const empty_string = '';

    const viewDate = new Date().toISOString().split("T")[0];
    const gender = "female";
    const [viewTime, setViewTime] = useState<string>();
    const [complaints, setComplaints] = useState<string>();
    const [general, setGeneral] = useState<string>();
    const [pulse, setPulse] = useState<number>();
    const [pressure, setPressure] = useState<string>();
    const [breathRate, setBreathRate] = useState<number>();
    const [mainDiagnosisMKB, setMainDiagnosisMKB] = useState<string>();
    const [mainDiagnosis, setMainDiagnosis] = useState<string>();
    const [concomitantDiagnosisMKB, setConcomitantDiagnosisMKB] = useState<string>();
    const [concomitantDiagnosis, setConcomitantDiagnosis] = useState<string>();
    const [doctorCheck, setDoctorCheck] = useState<boolean>();
    const [recomendation, setRecomendation] = useState<string>();
    const [resultReason, setResultReason] = useState<string>();
    const [result, setResult] = useState<string>();
    const [therapy, setTherapy] = useState<string>();
    const [medicalStory, setMedicalStory] = useState<string>();

    const [loading, setLoading] = useState(false);
    const [error_r, setError_r] = useState<string | null>(null);
    const [generalError, setGeneralError] = useState<string | null>(null);

    const [errors, setErrors] = useState({
        complaints: false,
        general: false,
        pulse: false,
        pressure: false,
        breathRate: false,
        mainDiagnosisMKB: false,
        mainDiagnosis: false,
        concomitantDiagnosisMKB: false,
        concomitantDiagnosis: false,
        therapyPlan: false,
        doctorCheck: false,
        recomendation: false,
        result:false,
    });

    // const validateFields = () => {
    //     let tempErrors: { [key: string]: string } = {};
    //     if (!surname) tempErrors.surname = "Обязательно!";
    //     if (!name) tempErrors.name = "Обязательно!";
    //     if (!birthday) tempErrors.birthday = "Обязательно!";
    //     if (!phone) tempErrors.phone = "Обязательно!";
    //     if (!gender) tempErrors.gender = "Обязательно!";
    //     seterrors(tempErrors);
    //     return Object.keys(tempErrors).length === 0;
    // };

    const sideBarItems: OneItem[] = [
        {onClick: () => navigate('/doctor/timetable'), text: "Расписание", label: "timetable"},
        {onClick: () => navigate('/doctor/first_visit'), text: "Первичн. прием", label: "first_visit"},
        {onClick: () => navigate('/doctor/second_visit'), text: "Заключит. прием", label: "second_visit"},
        {onClick: () => navigate('/doctor/dairies'), text: "Дневники", label: "dairies"},
        {onClick: () => navigate('/doctor/medical_stories'), text: "Истории болезни", label: "medical_stories"}
    ];

    return (
        <div className={styles['page-style']}>

            <SideBar activeItem={"second_visit"} items={sideBarItems}/>
            <div className={styles['content-container']}>

                <Header name={'Фролова Клавдия Алексеевна'} post={'Врач'}/>

                <div className={styles['main-container']}>
                    <div className={styles['table-title']}>Заключительный прием</div>
                    <div className={styles['person-container']}>
                        <div className={styles['containers-00']}>

                            <div className={styles['fields-container']}>
                                <div className={styles['field']}>
                                    <InputText text={'Фамилия*'} value={'Сидоров'} label={''} />
                                </div>
                                <div className={styles['field']}>
                                    <InputText text={'Имя*'} value={'Сергей'} />

                                </div>
                                <div className={styles['field']}>
                                    <InputText text={'Отчество'} value={'Алексеевич'} />
                                </div>
                            </div>


                            <div className={styles['fields-container']}>
                                <div className={styles['field']}>
                                    <DropdownList text={'Пол'} value={'male'} label={''} options={genderList} isEdit={true}/>
                                </div>

                                <div className={styles['field']}>
                                    <DatePicker text={"Дата осмотра"} value={viewDate} isEdit={false}/>
                                </div>
                                <div className={styles['field']}>
                                    <TimePicker text={"Время начала осмотра"} value={'14:42'} onSelect={setViewTime}/>
                                </div>
                            </div>
                        </div>

                        <InputBigText text={"Жалобы"} value={complaints} label={''} onChange={setComplaints}/>

                        <div className={styles['containers-00']}>

                            <div className={styles['fields-container']}>
                                <div className={styles['field']}>
                                    <DropdownList text={'Общее состояние'} options={statesList} value={general} label={''}
                                                  onSelect={setGeneral}/>
                                </div>
                                <div className={styles['field']}>
                                    <InputNumber text={'Пульс, уд. в мин.'} value={pulse} label={''} onChange={setPulse}/>
                                </div>

                            </div>


                            <div className={styles['fields-container']}>
                                <div className={styles['field']}>
                                    <InputText text={'Артериальное давление, мм рт. ст.'} value={pressure} label={''}
                                               onChange={setPressure}/>
                                </div>

                                <div className={styles['field']}>
                                    <InputNumber text={'Частота дыхания, в мин.'} value={breathRate} label={''}
                                                 onChange={setBreathRate}/>
                                </div>

                            </div>
                        </div>


                        <InputNumber text={'Пульс, уд. в мин.'} value={pulse} label={''} onChange={setPulse}/>
                        <InputText text={'Артериальное давление, мм рт. ст.'} value={pressure} label={''}
                                   onChange={setPressure}/>
                        <InputNumber text={'Частота дыхания, в мин.'} value={breathRate} label={''}
                                     onChange={setBreathRate}/>
                    </div>

                    <div className={styles['title2']}>
                        Основной диагноз
                    </div>
                    <div className={styles['container2']}>
                        <div className={styles['row-container']}>
                            <InputText text={'МКБ-10'} value={mainDiagnosisMKB} label={''}
                                       onChange={setMainDiagnosisMKB}/>
                            <Button color={'blue'} text={'Скопировать диагноз при поступлении'} onClick={() => {
                            }}/>
                        </div>
                        <InputBigText text={''} value={mainDiagnosis} onChange={setMainDiagnosis}/>
                    </div>

                    <div className={styles['title2']}>
                        Сопутствующий диагноз
                    </div>
                    <div className={styles['container2']}>
                        <div className={styles['row-container']}>
                            <InputText text={'МКБ-10'} value={concomitantDiagnosisMKB} label={''}
                                       onChange={setConcomitantDiagnosisMKB}/>
                            <Button color={'green'} text={'Скопировать диагноз при поступлении'} onClick={() => {
                            }}/>
                        </div>

                        <InputBigText text={''} value={concomitantDiagnosis} onChange={setConcomitantDiagnosis}/>
                    </div>
                    <div className={styles['title2']}>
                        Проведенное лечение
                    </div>
                    <div className={styles['container2']}>
                        <InputBigText text={''} value={therapy} onChange={setTherapy}/>
                    </div>

                    <div className={styles['title2']}>
                        Результат лечения
                    </div>
                    <div className={styles['container2']}>
                        <DropdownList text={'Выписан с результатом'} options={[{id: 'best', fullName: "Значительное улучшение"},
                            {id: 'good', fullName: "Улучшение"},
                            {id: 'normal', fullName: "Без перемен"},
                            {id: 'bad', fullName: "Ухудшение"}]} value={result} label={''}
                                      onSelect={setResult}/>
                        <InputBigText text={'Причины'} isHidden={result!='normal'&&result!='bad'} value={resultReason} onChange={setResultReason}/>
                    </div>

                    <div className={styles['title2']}>
                        Рекомендации
                    </div>
                    <div className={styles['container2']}>
                        <InputBigText text={'Рекомендации пациенту'} value={recomendation} onChange={setRecomendation}/>
                    </div>

                    <br/>
                    <br/>
                    <br/>

                    <Checkbox text={'Лечащий врач все проверил'} value={doctorCheck} onChange={setDoctorCheck}/>
                    {generalError && <p style={{color: "red"}}>{generalError}</p>}

                    <div className={styles['row-container']}>
                        <Button color={'orange'} text={'Сохранить'} onClick={() => {
                        }}/>

                        <Button color={'violet'} text={'На печать'} onClick={() => {
                        }}/>

                    </div>
                </div>

            </div>
        </div>
    )
        ;
};

export default FirstVisitPersonDoctor;