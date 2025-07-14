import styles from './FirstVisitPersonDoctor.module.css'
import {SideBar} from "../../../components/SideBar/SideBar.tsx";
import {Header} from "../../../components/Header/Header.tsx"
import {OneItem} from "../../../types/SideBarItem.tsx";
import {useNavigate} from "react-router-dom";
import {DatePicker} from "../../../components/inputs/DatePicker/DatePicker.tsx";
import {DropdownList} from "../../../components/inputs/DropdownList/DpropdownList.tsx";
import {useState} from "react";
import {TimePicker} from "../../../components/inputs/TimePicker/TimePicker.tsx";
import {Checkbox} from "../../../components/inputs/Checkbox/Checkbox.tsx";
import {InputNumber} from "../../../components/inputs/InputNumber/InputNumber.tsx";
import {Button} from "../../../components/buttons/Button/Button.tsx";
import {
    painList,
    deformList,
    bodiesList,
    hepatitisList,
    statesList,
    genderList,
} from "../../../mocks/mock.tsx";
import {InputBigText} from "../../../components/inputs/InputBigText/InputBigText.tsx";

const FirstVisitPersonDoctor = () => {
    const navigate = useNavigate();

    const viewDate = new Date().toISOString().split("T")[0];
    // const gender = "female";
    // const [viewTime, setViewTime] = useState<string>();
    const [complaints, setComplaints] = useState<string>();
    const [medicalStory, setMedicalStory] = useState<string>();
    const [genetics, setGenetics] = useState<string>();
    const [allergy, setAllergy] = useState<string>();
    const [previousIlls, setPreviousIlls] = useState<string>();
    const [tuberculosis, setTuberculosis] = useState<boolean>();
    const [hepatitis, setHepatitis] = useState<string>();
    const [venerealIlls, setVenerealIlls] = useState<string>();
    const [operations, setOperations] = useState<string>();
    const [smoking, setSmoking] = useState<boolean>();
    const [alcohol, setAlcohol] = useState<boolean>();
    const [menstruationReg, setMenstruationReg] = useState<boolean>();
    const [lastMenstruation, setLastMenstruation] = useState<string>();
    const [menopause, setMenopause] = useState<string>();
    const [general, setGeneral] = useState<string>();
    const [body, setBody] = useState<string>();
    const [skin, setSkin] = useState<string>();
    const [skinWetness, setSkinWetness] = useState<string>();
    const [pulse, setPulse] = useState<number>();
    const [pressure, setPressure] = useState<string>();
    const [breathType, setBreathType] = useState<string>();
    const [rales, setRales] = useState<string>();
    const [breathRate, setBreathRate] = useState<number>();
    const [heartRhythm, setHeartRhythm] = useState<string>();
    const [heartClarity, setHeartClarity] = useState<string>();
    const [heartRate, setHeartRate] = useState<number>();
    const [heartMurmurs, setHeartMurmurs] = useState<string>();
    const [heartMurmursDetails, setHeartMurmursDetails] = useState<string>();
    const [accents, setAccents] = useState<string>();
    const [accentsDetails, setAccentsDetails] = useState<string>();
    const [tongueWetness, setTongueWetness] = useState<string>();
    const [tongueRaid, setTongueRaid] = useState<string>();
    const [tongueRaidDetails, setTongueRaidDetails] = useState<string>();
    const [bellySoftness, setBellySoftness] = useState<string>();
    const [bellyPainnnes, setBellyPainnnes] = useState<string>();
    const [bellyPainnnesDetails, setBellyPainnnesDetails] = useState<string>();
    const [liverSize, setLiverSize] = useState<string>();
    const [liverSizeDetails, setLiverSizeDetails] = useState<string>();
    const [liverPainness, setLiverPainness] = useState<string>();
    const [kidneysShaking, setKidneysShaking] = useState<string>();
    const [urinationPainness, setUrinationPainness] = useState<string>();
    const [urinationFreeness, setUrinationFreeness] = useState<string>();
    const [edema, setEdema] = useState<string>();
    const [edemaDetails, setEdemaDetails] = useState<string>();
    const [chairDec, setChairDec] = useState<string>();
    const [chairReg, setChairReg] = useState<string>();
    const [chairRegDetails, setChairRegDetails] = useState<string>();
    const [conscience, setConscience] = useState<string>();
    const [conscienceDetails, setConscienceDetails] = useState<string>();
    const [orientation, setOrientation] = useState<string>();
    const [cranialNervous, setCranialNervous] = useState<string>();
    const [muscleTone, setMuscleTone] = useState<string>();
    const [musclePower, setMusclePower] = useState<string>();
    const [tendonReflexes, setTendonReflexes] = useState<string>();
    const [sensitivity, setSensitivity] = useState<string>();
    const [sensitivityDetails, setSensitivityDetails] = useState<string>();
    const [rombergPose, setRombergPose] = useState<string>();
    const [rombergPoseDetails, setRombergPoseDetails] = useState<string>();
    const [fingerTest, setFingerTest] = useState<string>();
    const [fingerTestDetails, setFingerTestDetails] = useState<string>();
    const [spineDeform, setSpineDeform] = useState<string>();
    const [spineDeformDetails, setSpineDeformDetails] = useState<string>();
    const [spineMotionLimit, setSpineMotionLimit] = useState<string>();
    const [spineMotionPainness, setSpineMotionPainness] = useState<string>();
    const [spineMotionPainnessDetails, setSpineMotionPainnessDetails] = useState<string>();
    const [paravertebralPoints, setParavertebralPoints] = useState<string>();
    const [paravertebralPointsDetails, setParavertebralPointsDetails] = useState<string>();
    const [lasegaSypthomRight, setLasegaSypthomRight] = useState<number>();
    const [lasegaSypthomLeft, setLasegaSypthomLeft] = useState<number>();
    const [jointsDeform, setJointsDeform] = useState<string>();
    const [jointsDeformDetails, setJointsDeformDetails] = useState<string>();
    const [jointsPalpationPainness, setJointsPalpationPainness] = useState<string>();
    const [jointsPalpationPainnessDetails, setJointsPalpationPainnessDetails] = useState<string>();
    const [jointsMotionPainness, setJointsMotionPainness] = useState<string>();
    const [jointsMotionPainnessDetails, setJointsMotionPainnessDetails] = useState<string>();
    const [jointsMotionVolume, setJointsMotionVolume] = useState<string>();
    const [jointsMotionVolumeDetails, setJointsMotionVolumeDetails] = useState<string>();
    const [mainDiagnosisMKB, setMainDiagnosisMKB] = useState<string>();
    const [mainDiagnosis, setMainDiagnosis] = useState<string>();
    const [concomitantDiagnosisMKB, setConcomitantDiagnosisMKB] = useState<string>();
    const [concomitantDiagnosis, setConcomitantDiagnosis] = useState<string>();
    const [therapyPlan, setTherapyPlan] = useState<string>();
    const [doctorCheck, setDoctorCheck] = useState<boolean>();

    // const [errors, setErrors] = useState({
    //     complaints: false,
    //     medicalStory: false,
    //     genetics: false,
    //     allergy: false,
    //     previousIlls: false,
    //     tuberculosis: false,
    //     hepatitis: false,
    //     venerealIlls: false,
    //     operations: false,
    //     smoking: false,
    //     alcohol: false,
    //     menstruationReg: false,
    //     lastMenstruation: false,
    //     menopause: false,
    //     general: false,
    //     body: false,
    //     skin: false,
    //     skinRash: false,
    //     skinWetness: false,
    //     pulse: false,
    //     pressure: false,
    //     breathType: false,
    //     rales: false,
    //     breathRate: false,
    //     heartRhythm: false,
    //     heartClarity: false,
    //     heartRate: false,
    //     heartMurmurs: false,
    //     accents: false,
    //     tongueWetness: false,
    //     tongueRaid: false,
    //     bellySoftness: false,
    //     bellyPainnnes: false,
    //     liverSize: false,
    //     liverPainness: false,
    //     kidneysShaking: false,
    //     urinationPainness: false,
    //     urinationFreeness: false,
    //     edema: false,
    //     chairDec: false,
    //     chairReg: false,
    //     conscience: false,
    //     orientation: false,
    //     cranialNervous: false,
    //     muscleTone: false,
    //     musclePower: false,
    //     tendonReflexes: false,
    //     sensitivity: false,
    //     rombergPose: false,
    //     fingerTest: false,
    //     spineDeform: false,
    //     spineMotionLimit: false,
    //     spineMotionPainness: false,
    //     paravertebralPoints: false,
    //     lasegaSypthomRight: false,
    //     lasegaSypthomLeft: false,
    //     jointsDeform: false,
    //     jointsPalpationPainness: false,
    //     jointsMotionPainness: false,
    //     jointsMotionVolume: false,
    //     mainDiagnosisMKB: false,
    //     mainDiagnosis: false,
    //     concomitantDiagnosisMKB: false,
    //     concomitantDiagnosis: false,
    //     therapyPlan: false,
    //     doctorCheck: false
    // });

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

            <SideBar activeItem={"first_visit"} items={sideBarItems}/>
            <div className={styles['content-container']}>

                <Header name={'Фролова Клавдия Алексеевна'} post={'Врач'}/>

                <div className={styles['main-container']}>

                    <div className={styles['table-title']}>
                        Первичный прием
                    </div>

                    <div className={styles['person-container']}>
                        <div className={styles['containers-00']}>

                            <div className={styles['fields-container']}>
                                <div className={styles['field']}>
                                    <InputBigText text={'Фамилия*'} value={'Старушкова'} label={''} />
                                </div>
                                <div className={styles['field']}>
                                    <InputBigText text={'Имя*'} value={'Елена'} />

                                </div>
                                <div className={styles['field']}>
                                    <InputBigText text={'Отчество'} value={'Георгиевна'} />
                                </div>
                            </div>


                            <div className={styles['fields-container']}>
                                <div className={styles['field']}>
                                    <DropdownList text={'Пол'} value={'female'} label={''} options={genderList} isEdit={true}/>
                                </div>

                                <div className={styles['field']}>
                                    <DatePicker text={"Дата осмотра"} value={viewDate} isEdit={false}/>
                                </div>
                                <div className={styles['field']}>
                                    <TimePicker text={"Время начала осмотра"} value={'12:30'} onSelect={()=>{}}/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles['container2']}>
                        <InputBigText text={"Жалобы"} value={complaints} label={''} onChange={setComplaints}/>
                        <InputBigText text={"История заболевания"} value={medicalStory} label={''}
                                   onChange={setMedicalStory}/>
                    </div>
                    <div className={styles['table-title']}>Анамнез жизни</div>
                    <div className={styles['container2']}>
                        <div className={styles['containers-00']}>

                            <div className={styles['fields-container']}>
                                <div className={styles['field']}>
                                    <DropdownList text={'Гепатит'} options={hepatitisList} value={hepatitis} label={''}
                                                  onSelect={setHepatitis}/>
                                </div>
                            </div>


                            <div className={styles['fields-container']}>
                                <div className={styles['field']}>
                                    <DropdownList text={'Туберкулез'} options={hepatitisList} value={hepatitis} label={''}
                                                  onSelect={setHepatitis}/>
                                </div>
                            </div>
                        </div>

                        <div className={styles['container2']}>
                            <InputBigText text={"Аллергологический анамнез"} value={allergy} label={''} onChange={setAllergy}/>
                            <InputBigText text={"Наследственность"} value={genetics} label={''} onChange={setGenetics}/>
                            <InputBigText text={"Перенесенные заболевания"} value={previousIlls} label={''}
                                          onChange={setPreviousIlls}/>
                            <InputBigText text={'Кожно-венерические заболевания'} value={venerealIlls} label={''}
                                       onChange={setVenerealIlls}/>
                            <InputBigText text={'Операции'} value={operations} label={''} onChange={setOperations}/>
                        </div>
                        <Checkbox text={'Туберкулез'} value={tuberculosis} onChange={setTuberculosis}/>
                        <DropdownList text={'Гепатит'} options={hepatitisList} value={hepatitis} label={''}
                                      onSelect={setHepatitis}/>

                        <div className={styles['title3']}>Вредные привычки</div>
                        <div className={styles['container3']}>
                            <Checkbox text={'Курение'} value={smoking} onChange={setSmoking}/>
                            <Checkbox text={'Алкоголь'} value={alcohol} onChange={setAlcohol}/>
                        </div>

                        <div className={styles['title3']}>Менструации
                        </div>
                        <div className={styles['container3']}>
                            <Checkbox text={'Регулярно'} value={menstruationReg} onChange={setMenstruationReg}/>
                            <DatePicker text={"Последняя менструация"} value={lastMenstruation}
                                        onSelect={setLastMenstruation} maxDate={viewDate}/>
                            <InputBigText text={'Менопауза'} value={menopause} label={''} onChange={setMenopause}/>
                        </div>

                    </div>

                    <div className={styles['table-title']}>Данные объективного исследования</div>

                    <div className={styles['container2']}>
                        <div className={styles['containers-00']}>

                            <div className={styles['fields-container']}>
                                <div className={styles['field']}>
                                    <DropdownList text={'Общее состояние'} options={statesList} value={general} label={''}
                                        onSelect={setGeneral}/>
                                </div>
                                <div className={styles['field']}>
                                    <DropdownList text={'Кожные покровы'} value={skin} label={''}
                                                  options={[{id: 'clear', fullName: "Чистые"},
                                                      {id: 'rash', fullName: "С высыпаниями"}]} onSelect={setSkin}/>
                                </div>
                                <div className={styles['field']}>
                                    <InputNumber text={'Пульс, уд. в мин.'} value={pulse} label={''} onChange={setPulse}/>
                                </div>
                            </div>


                            <div className={styles['fields-container']}>
                                <div className={styles['field']}>
                                    <DropdownList text={'Телосложение'} options={bodiesList} value={body} label={''}
                                                  onSelect={setBody}/>
                                </div>
                                <div className={styles['field']}>
                                    <DropdownList text={'Влажность кожи'} options={[{id: 'normal', fullName: "Нормальная"},
                                        {id: 'dry', fullName: "Пониженная"},
                                        {id: 'wet', fullName: "Повышенная"}]}
                                                  value={skinWetness} label={''} onSelect={setSkinWetness}/>
                                </div>
                                <div className={styles['field']}>
                                    <InputBigText text={'Артериальное давление, мм рт. ст.'} value={pressure} label={''}
                                                  onChange={setPressure}/>
                                </div>
                            </div>
                        </div>


                        <div className={styles['table-title--0']}>Дыхание</div>

                        <div className={styles['container3']}>
                            <div className={styles['containers-00']}>

                                <div className={styles['fields-container']}>
                                    <div className={styles['field']}>
                                        <DropdownList text={'Тип дыхания'} options={[{id: 'vesicular', fullName: "Визикулярное"},
                                            {id: 'rigid', fullName: "Жёсткое"},
                                            {id: 'weak', fullName: "Ослабленное"}]}
                                                      value={breathType} label={''} onSelect={setBreathType}/>
                                    </div>
                                    <div className={styles['field']}>
                                        <InputNumber text={'Частота дыхания, в мин.'} value={breathRate} label={''}
                                                     onChange={setBreathRate}/>
                                    </div>

                                </div>


                                <div className={styles['fields-container']}>
                                    <div className={styles['field']}>
                                        <DropdownList text={'Хрипы'} options={[{id: 'not', fullName: "Нет"},
                                            {id: 'dry', fullName: "Сухие"},
                                            {id: 'wet', fullName: "Влажные"}]}
                                                      value={rales} label={''} onSelect={setRales}/>
                                    </div>
                                    <div className={styles['field']}>

                                    </div>

                                </div>
                            </div>


                        </div>

                        <div className={styles['table-title--1']}>Тоны сердца</div>
                        <div className={styles['container3']}>

                            <div className={styles['containers-00']}>

                                <div className={styles['fields-container']}>
                                    <div className={styles['field']}>
                                        <InputNumber text={'Частота дыхания, в мин.'} value={breathRate} label={''}
                                                     onChange={setBreathRate}/>

                                    </div>
                                    <div className={styles['field']}>
                                        <DropdownList options={[{id: 'clear', fullName: "Ясные"},
                                            {id: 'muted', fullName: "Приглушенные"}]} value={heartClarity} label={''}
                                                      onSelect={setHeartClarity}/>
                                    </div>

                                </div>


                                <div className={styles['fields-container']}>
                                    <div className={styles['field']}>
                                        <DropdownList text={'Тоны сердца'}  options={[{id: 'rhythmic', fullName: "Ритмичные"},
                                            {id: 'arrhythmic', fullName: "Аритмичные"}]}
                                                      value={heartRhythm} label={''} onSelect={setHeartRhythm}/>

                                    </div>
                                    <div className={styles['field']}>

                                    </div>

                                </div>
                            </div>

                            <DropdownList options={[{id: 'rhythmic', fullName: "Ритмичные"},
                                {id: 'arrhythmic', fullName: "Аритмичные"}]}
                                          value={heartRhythm} label={''} onSelect={setHeartRhythm}/>
                            <DropdownList options={[{id: 'clear', fullName: "Ясные"},
                                {id: 'muted', fullName: "Приглушенные"}]} value={heartClarity} label={''}
                                          onSelect={setHeartClarity}/>
                            <InputNumber text={'Частота сердечных сокращений, в мин.'} value={heartRate} label={''}
                                         onChange={setHeartRate}/>

                            <div className={styles['container4']}>
                                <DropdownList text={'Шумы'} options={[{id: 'not', fullName: "Нет"},
                                    {id: 'systolic', fullName: "Систолические"},
                                    {id: 'diastolic', fullName: "Диастолические"}]}
                                              value={heartMurmurs} label={''} onSelect={setHeartMurmurs}/>
                                <InputBigText text={''} isHidden={heartMurmurs != 'systolic' && heartMurmurs != 'diastolic'}
                                              value={heartMurmursDetails} label={''} onChange={setHeartMurmursDetails}/>
                            </div>

                            <div className={styles['container4']}>
                                <DropdownList text={'Акцент'} options={[{id: 'not', fullName: "Нет"},
                                    {id: 'has', fullName: "Есть"}]} value={accents} label={''} onSelect={setAccents}/>
                                <InputBigText text={''}  isHidden={accents != 'has'} value={accentsDetails} label={''}
                                              onChange={setAccentsDetails}/>
                            </div>
                        </div>

                        <div className={styles['title3']}>Язык</div>
                        <div className={styles['container3']}>
                            <DropdownList options={[{id: 'wet', fullName: "Влажный"},
                                {id: 'dry', fullName: "Сухой"}]} value={tongueWetness} label={''}
                                          onSelect={setTongueWetness}/>
                            <div className={styles['container4']}>
                                <DropdownList text={'Налет'} options={[{id: 'clear', fullName: "Чистый"},
                                    {id: 'raid', fullName: "Обложен налетом"}]} value={tongueRaid} label={''}
                                              onSelect={setTongueRaid}/>
                                <InputBigText text={''}  isHidden={tongueRaid != 'raid'} value={tongueRaidDetails} label={''}
                                              onChange={setTongueRaidDetails}/>
                            </div>
                        </div>

                        <div className={styles['title3']}>Живот при пульпации</div>
                        <div className={styles['container3']}>
                            <DropdownList options={[{id: 'soft', fullName: "Мягкий"},
                                {id: 'tense', fullName: "Напряженный"}]} value={bellySoftness} label={''}
                                          onSelect={setBellySoftness}/>
                            <div className={styles['container4']}>
                                <DropdownList options={painList} value={bellyPainnnes} label={''}
                                              onSelect={setBellyPainnnes}/>
                                <InputBigText text={''}  isHidden={bellyPainnnes != 'painful'} value={bellyPainnnesDetails}
                                              label={''} onChange={setBellyPainnnesDetails}/>
                            </div>
                        </div>

                        <div className={styles['title3']}>Печень</div>
                        <div className={styles['container3']}>
                            <div className={styles['container4']}>
                                <DropdownList options={[{id: 'normal', fullName: "Неувеличенная"},
                                    {id: 'increase', fullName: "Увеличенная"}]} value={liverSize} label={''}
                                              onSelect={setLiverSize}/>
                                <InputBigText isHidden={liverSize != 'increase'}
                                              text={'Выступает из-за края ребер на, см'} value={liverSizeDetails}
                                              label={''} onChange={setLiverSizeDetails}/>
                            </div>
                            <DropdownList options={painList} value={liverPainness} label={''}
                                          onSelect={setLiverPainness}/>
                        </div>

                        <div className={styles['title3']}>Почки</div>
                        <div className={styles['container3']}>
                            <DropdownList text={'Симпатические покалачивания по поясничной области'}
                                          options={[{id: 'neg', fullName: "Негативное"},
                                              {id: 'left', fullName: "Позитивное слева"},
                                              {id: 'right', fullName: "Позитивное справа"},
                                              {id: 'pos', fullName: "Позитивное слева и справа"}]}
                                          value={kidneysShaking} label={''} onSelect={setKidneysShaking}/>

                            <DropdownList text={'Мочеиспускание'} options={painList} value={urinationPainness}
                                          label={''} onSelect={setUrinationPainness}/>

                            <DropdownList text={'Мочеиспускание'} options={[{id: 'free', fullName: "Свободное"},
                                {id: 'difficult', fullName: "Затрудненное"}]} value={urinationFreeness} label={''}
                                          onSelect={setUrinationFreeness}/>
                        </div>
                        <div className={styles['container4']}>
                            <DropdownList text={'Периферичные отеки'} options={[{id: 'has', fullName: "Есть"},
                                {id: 'not', fullName: "Нет"}]} value={edema} label={''} onSelect={setEdema}/>
                            <InputBigText text={''}  isHidden={edema != 'has'} value={edemaDetails} label={''}
                                          onChange={setEdemaDetails}/>
                        </div>

                        <div className={styles['title3']}>Стул</div>
                        <div className={styles['container3']}>
                            <DropdownList options={[{id: 'dec', fullName: "Оформленный"},
                                {id: 'not_dec', fullName: "Неоформленный"}]} value={chairDec} label={''}
                                          onSelect={setChairDec}/>
                            <div className={styles['container4']}>
                                <DropdownList options={[{id: 'regular', fullName: "Регулярный"},
                                    {id: 'not_regular', fullName: "Нерегулярный"}]} value={chairReg} label={''}
                                              onSelect={setChairReg}/>
                                <InputBigText text={''}  isHidden={chairReg != 'not_regular'} value={chairRegDetails} label={''}
                                              onChange={setChairRegDetails}/>
                            </div>
                        </div>
                    </div>

                    <div className={styles['title2']}>Неврологическая статистика</div>
                    <div className={styles['container2']}>
                        <div className={styles['container4']}>
                            <DropdownList text={'Сознание'} options={[{id: 'clear', fullName: "Ясное"},
                                {id: 'not', fullName: "Нет"}]} value={conscience} label={''} onSelect={setConscience}/>
                            <InputBigText text={''}  isHidden={conscience != 'not'} value={conscienceDetails} label={''}
                                          onChange={setConscienceDetails}/>
                        </div>

                        <DropdownList text={'Ориентирование в месте, времени, своей личности'}
                                      options={[{id: 'true', fullName: "Правильно"},
                                          {id: 'false', fullName: "Неправильно"}]} value={orientation} label={''}
                                      onSelect={setOrientation}/>

                        <InputBigText text={'Черепномозговые нервы'} value={cranialNervous} label={''}
                                      onChange={setCranialNervous}/>
                        <InputBigText text={'Мышечный тонус'} value={muscleTone} label={''} onChange={setMuscleTone}/>
                        <InputBigText text={'Мышечная сила'} value={musclePower} label={''} onChange={setMusclePower}/>
                        <InputBigText text={'Сухожильные рефлексы'} value={tendonReflexes} label={''}
                                      onChange={setTendonReflexes}/>

                        <div className={styles['container4']}>
                            <DropdownList text={'Чувствительность'} options={[{id: 'normal', fullName: "Не нарушена"},
                                {id: 'hypo', fullName: "Гипостезия"},
                                {id: 'hyper', fullName: "Гиперстезия"}]} value={sensitivity} label={''}
                                          onSelect={setSensitivity}/>
                            <InputBigText text={''}  isHidden={sensitivity != 'hypo' && sensitivity != 'hyper'}
                                          value={sensitivityDetails} label={''} onChange={setSensitivityDetails}/>
                        </div>

                        <div className={styles['container4']}>
                            <DropdownList text={'В позе ромберга'} options={[{id: 'stable', fullName: "Устойчивый"},
                                {id: 'unstable', fullName: "Неустойчивый"}]} value={rombergPose} label={''}
                                          onSelect={setRombergPose}/>
                            <InputBigText text={''}  isHidden={rombergPose != 'unstable'} value={rombergPoseDetails} label={''}
                                          onChange={setRombergPoseDetails}/>
                        </div>

                        <div className={styles['container4']}>
                            <DropdownList text={'Пальценосовая проба'}
                                          options={[{id: 'good', fullName: "Удовлетворительная"},
                                              {id: 'bad', fullName: "Неудовлетворительная"}]} value={fingerTest}
                                          label={''} onSelect={setFingerTest}/>
                            <InputBigText text={''}  isHidden={fingerTest != 'bad'} value={fingerTestDetails} label={''}
                                          onChange={setFingerTestDetails}/>
                        </div>

                        <div className={styles['container4']}>
                            <DropdownList text={'Позвоночник'} options={deformList} value={spineDeform} label={''}
                                          onSelect={setSpineDeform}/>
                            <InputBigText text={''}  isHidden={spineDeform != 'has'} value={spineDeformDetails} label={''}
                                          onChange={setSpineDeformDetails}/>
                        </div>

                        <div className={styles['title3']}>Движения в позвоночнике</div>
                        <div className={styles['container3']}>
                            <DropdownList options={[{id: 'unlimit', fullName: "Неограничены"},
                                {id: 'neck_limit', fullName: "Ограничены в шейном отделе"},
                                {id: 'chest_limit', fullName: "Ограничены в грудном отделе"},
                                {id: 'back_limit', fullName: "Ограничены в поясничном отделе"}]}
                                          value={spineMotionLimit} label={''} onSelect={setSpineMotionLimit}/>
                            <div className={styles['container4']}>
                                <DropdownList options={painList} value={spineMotionPainness} label={''}
                                              onSelect={setSpineMotionPainness}/>
                                <InputBigText  text={''}  isHidden={spineMotionPainness != 'painfull'}
                                              value={spineMotionPainnessDetails} label={''}
                                              onChange={setSpineMotionPainnessDetails}/>
                            </div>
                        </div>

                        <div className={styles['container4']}>
                            <DropdownList text={'Пульпация паравертебальных точек'}
                                          options={painList} value={paravertebralPoints} label={''}
                                          onSelect={setParavertebralPoints}/>
                            <InputBigText  text={''}  isHidden={paravertebralPoints != 'painful'} value={paravertebralPointsDetails}
                                          label={''} onChange={setParavertebralPointsDetails}/>
                        </div>

                        <div className={styles['title3']}>
                            Симптом Ласега
                        </div>
                        <div className={styles['container3']}>
                            <InputNumber text={'Справа'} value={lasegaSypthomRight} label={''}
                                         onChange={setLasegaSypthomRight}/>
                            <InputNumber text={'Слева'} value={lasegaSypthomLeft} label={''}
                                         onChange={setLasegaSypthomLeft}/>
                        </div>


                        <div className={styles['title3']}>
                            Суставы
                        </div>
                        <div className={styles['container3']}>
                            <div className={styles['container4']}>
                                <DropdownList options={deformList} value={jointsDeform} label={''}
                                              onSelect={setJointsDeform}/>
                                <InputBigText  text={''}  isHidden={jointsDeform != 'has'} value={jointsDeformDetails} label={''}
                                              onChange={setJointsDeformDetails}/>
                            </div>

                            <div className={styles['container4']}>
                                <DropdownList text={'Пульпация суставов'} options={painList}
                                              value={jointsPalpationPainness} label={''}
                                              onSelect={setJointsPalpationPainness}/>
                                <InputBigText  text={''}  isHidden={jointsPalpationPainness != 'painful'}
                                              value={jointsPalpationPainnessDetails} label={''}
                                              onChange={setJointsPalpationPainnessDetails}/>
                            </div>
                            <div className={styles['container4']}>
                                <DropdownList text={'Активные движения в суставах'} options={painList}
                                              value={jointsMotionPainness} label={''}
                                              onSelect={setJointsMotionPainness}/>
                                <InputBigText  text={''}  isHidden={jointsMotionPainness != 'painful'}
                                              value={jointsMotionPainnessDetails} label={''}
                                              onChange={setJointsMotionPainnessDetails}/>
                            </div>
                            <div className={styles['container4']}>
                                <DropdownList text={'Активные движения в суставах'}
                                              options={[{id: 'full', fullName: "В полном объеме"},
                                                  {id: 'limit', fullName: "Ограничены"}]} value={jointsMotionVolume}
                                              label={''} onSelect={setJointsMotionVolume}/>
                                <InputBigText  text={''}  isHidden={jointsMotionVolume != 'limit'} value={jointsMotionVolumeDetails}
                                              label={''} onChange={setJointsMotionVolumeDetails}/>
                            </div>
                        </div>
                    </div>

                    <div className={styles['title2']}>
                        Основной диагноз
                    </div>
                    <div className={styles['container2']}>
                        <InputBigText text={'МКБ-10'} value={mainDiagnosisMKB} label={''}
                                      onChange={setMainDiagnosisMKB}/>
                        <InputBigText text={''} value={mainDiagnosis} onChange={setMainDiagnosis}/>
                    </div>

                    <div className={styles['title2']}>
                        Сопутствующий диагноз
                    </div>
                    <div className={styles['container2']}>
                        <InputBigText text={'МКБ-10'} value={concomitantDiagnosisMKB} label={''}
                                      onChange={setConcomitantDiagnosisMKB}/>
                        <InputBigText text={''} value={concomitantDiagnosis} onChange={setConcomitantDiagnosis}/>
                    </div>
                    <div className={styles['title2']}>
                        Лист назначения
                    </div>
                    <div className={styles['container2']}>
                        <InputBigText text={''} value={therapyPlan} onChange={setTherapyPlan}/>
                    </div>

                    <br/>
                    <br/>
                    <br/>

                    <Checkbox text={'Лечащий врач все проверил'} value={doctorCheck} onChange={setDoctorCheck}/>
                    {/*{generalError && <p style={{color: "red"}}>{generalError}</p>}*/}

                    <div className={styles['rowContainer']}>
                        <Button color={'violet'} text={'Сохранить'} onClick={() => {
                        }}/>

                        <Button color={'blue'} text={'На печать'} onClick={() => {
                        }}/>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default FirstVisitPersonDoctor;