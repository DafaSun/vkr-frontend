import styles from '../../css/Index.module.css'
import self_styles from './MedicalStoriesDoctor.module.css'
import {SideBar} from "../../../components/SideBar/SideBar.tsx";
import {Header} from "../../../components/Header/Header.tsx"
import {OneItem} from "../../../types/SideBarItem.tsx";
import {useNavigate} from "react-router-dom";
import {InputText} from "../../../components/inputsInText/InputText/InputText.tsx";
import {DatePicker} from "../../../components/inputsInText/DatePicker/DatePicker.tsx";
import {DropdownList} from "../../../components/inputsInText/DropdownList/DpropdownList.tsx";
import {useState} from "react";
import {TimePicker} from "../../../components/inputsInText/TimePicker/TimePicker.tsx";
import {Checkbox} from "../../../components/inputsInText/Checkbox/Checkbox.tsx";
import {InputString} from "../../../components/inputsInText/InputString/InputString.tsx";
import {InputNumber} from "../../../components/inputsInText/InputNumber/InputNumber.tsx";
import {Button3} from "../../../components/buttons/Button3/Button3.tsx";
import {painList, deformList, bodiesList, hepatitisList, statesList, genderList} from "../../../mocks/mock.tsx";

const MedicalStoriesPersonDoctor = () => {
    const navigate = useNavigate();

    const empty_string = '';

    const viewDate= new Date().toISOString().split("T")[0];
    const gender="female";
    const [viewTime, setViewTime] = useState<string>();
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
    const [skinRashDetails, setSkinRashDetails] = useState<string>();
    const [skinWetness, setSkinWetness] = useState<string>();
    const [pulse, setPulse] = useState<number>();
    const [pressure, setPressure] = useState<string>();
    const [breathType, setBreathType] = useState<string>();
    const [breathTypeDetails, setBreathTypeDetails] = useState<string>();
    const [rales, setRales] = useState<string>();
    const [ralesDetails, setRalesDetails] = useState<string>();
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

    const [loading, setLoading] = useState(false);
    const [error_r, setError_r] = useState<string | null>(null);
    const [generalError, setGeneralError] = useState<string | null>(null);

    const [errors, setErrors] = useState({
        complaints : false,
        medicalStory : false,
        genetics : false,
        allergy : false,
        previousIlls : false,
        tuberculosis : false,
        hepatitis : false,
        venerealIlls : false,
        operations : false,
        smoking : false,
        alcohol : false,
        menstruationReg : false,
        lastMenstruation : false,
        menopause : false,
        general : false,
        body : false,
        skin : false,
        skinRash : false,
        skinWetness : false,
        pulse : false,
        pressure : false,
        breathType : false,
        rales : false,
        breathRate : false,
        heartRhythm : false,
        heartClarity : false,
        heartRate : false,
        heartMurmurs : false,
        accents : false,
        tongueWetness : false,
        tongueRaid : false,
        bellySoftness : false,
        bellyPainnnes : false,
        liverSize : false,
        liverPainness : false,
        kidneysShaking : false,
        urinationPainness : false,
        urinationFreeness : false,
        edema : false,
        chairDec : false,
        chairReg : false,
        conscience : false,
        orientation : false,
        cranialNervous : false,
        muscleTone : false,
        musclePower : false,
        tendonReflexes : false,
        sensitivity : false,
        rombergPose : false,
        fingerTest : false,
        spineDeform : false,
        spineMotionLimit : false,
        spineMotionPainness : false,
        paravertebralPoints : false,
        lasegaSypthomRight : false,
        lasegaSypthomLeft : false,
        jointsDeform : false,
        jointsPalpationPainness : false,
        jointsMotionPainness : false,
        jointsMotionVolume : false,
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
        {onClick: () => navigate('/doctor/first_visit'), text: "Первичный прием", label: "first_visit"},
        {onClick: () => navigate('/doctor/second_visit'), text: "Заключительный прием", label: "second_visit"},
        {onClick: () => navigate('/doctor/dairies'), text: "Дневники", label: "dairies"},
        {onClick: () => navigate('/doctor/medical_stories'), text: "Истории болезни", label: "medical_stories"}
    ];

    return (
        <div className={styles['page-style']}>

            <SideBar activeItem={"medical_stories"} items={sideBarItems}/>
            <div className={styles['content-container']}>

                <Header name={'Иванова Анастасия Сергеевна'} post={'Врач'}/>

                <div className={styles['main-container']}>
                    <div className={self_styles['title2']}>Первичный прием</div>
                    <div className={self_styles['person-container']}>
                        <InputString text={'ФИО'} value={empty_string} label={''} isEdit={false}/>
                        <DatePicker text={"Дата рождения"} value={empty_string}
                                    isEdit={false}/>
                        <DropdownList text={'Пол'} value={empty_string} label={''} options={genderList} isEdit={false}/>
                    </div>

                    <div className={self_styles['container1']}>
                        <DatePicker text={"Дата осмотра"} value={viewDate} isEdit={false}/>
                        <TimePicker text={"Время начала осмотра"} value={viewTime} onSelect={setViewTime}/>
                    </div>
                    <div className={self_styles['container2']}>
                        <InputText text={"Жалобы"} value={complaints} label={''} onChange={setComplaints}/>
                        <InputText text={"История заболевания"} value={medicalStory} label={''}  onChange={setMedicalStory}/>
                    </div>
                    <div className={self_styles['title2']}>Анамнез жизни</div>
                    <div className={self_styles['container2']}>
                        <InputText text={"Наследственность"} value={genetics} label={''} onChange={setGenetics}/>
                        <InputText text={"Аллергологический анамнез"} value={allergy} label={''} onChange={setAllergy}/>
                        <InputText text={"Перенесенные заболевания"} value={previousIlls} label={''} onChange={setPreviousIlls}/>
                        <Checkbox text={'Туберкулез'} value={tuberculosis} onChange={setTuberculosis}/>
                        <DropdownList text={'Гепатит'} options={hepatitisList} value={hepatitis} label={''} onSelect={setHepatitis}/>
                        <InputString text={'Кожно-венерические заболевания'} value={venerealIlls} label={''} onChange={setVenerealIlls}/>
                        <InputText text={'Операции'} value={operations} label={''} onChange={setOperations}/>
                        <div className={self_styles['title3']}>Вредные привычки</div>
                        <div className={self_styles['container3']}>
                            <Checkbox text={'Курение'} value={smoking} onChange={setSmoking}/>
                            <Checkbox text={'Алкоголь'} value={alcohol} onChange={setAlcohol}/>
                        </div>

                        <div className={gender=='male'?self_styles['hidden']:self_styles['title3']}>Менструации</div>
                        <div className={gender=='male'?self_styles['hidden']:self_styles['container3']}>
                            <Checkbox text={'Регулярно'} value={menstruationReg} onChange={setMenstruationReg}/>
                            <DatePicker text={"Последняя менструация"} value={lastMenstruation} onSelect={setLastMenstruation} maxDate={viewDate}/>
                            <InputString text={'Менопауза'} value={menopause} label={''} onChange={setMenopause}/>
                        </div>

                    </div>

                    <div className={self_styles['title2']}>Данные объективного исследования</div>

                    <div className={self_styles['container2']}>
                        <DropdownList text={'Общее состояние'} options={statesList} value={general} label={''} onSelect={setGeneral}/>
                        <DropdownList text={'Телосложение'} options={bodiesList} value={body} label={''} onSelect={setBody}/>
                        <div className={self_styles['title3']}>Koжные покровы</div>
                        <div className={self_styles['container3']}>
                            <div className={self_styles['container4']}>
                                <DropdownList text={'Кожные покровы'} value={skin} label={''}
                                              options={[{id: 'clear', fullName: "Чистые"},
                                                  {id: 'rash', fullName: "С высыпаниями"}]} onSelect={setSkin}/>
                                <InputString isHidden={skin!='rash'} value={skinRashDetails} label={''} onChange={setSkinRashDetails}/>
                            </div>
                            <DropdownList text={'Влажность кожи'} options={[{id: 'normal', fullName: "Нормальная"},
                                {id: 'dry', fullName: "Пониженная"},
                                {id: 'wet', fullName: "Повышенная"}]}
                                          value={skinWetness} label={''} onSelect={setSkinWetness}/>

                            <InputNumber text={'Пульс, уд. в мин.'} value={pulse} label={''} onChange={setPulse}/>
                            <InputString text={'Артериальное давление, мм рт. ст.'} value={pressure} label={''} onChange={setPressure}/>
                        </div>
                        <div className={self_styles['title3']}>Дыхание</div>

                        <div className={self_styles['container3']}>
                            <div className={self_styles['container4']}>
                                <DropdownList  options={[{id: 'vesicular', fullName: "Визикулярное"},
                                                  {id: 'rigid', fullName: "Жёсткое"},
                                                  {id: 'weak', fullName: "Ослабленное"}]}
                                              value={breathType} label={''} onSelect={setBreathType}/>
                                <InputString isHidden={breathType!='rigid'&&breathType!='weak'} value={breathTypeDetails} label={''} onChange={setBreathTypeDetails}/>
                            </div>
                            <div className={self_styles['container4']}>
                                <DropdownList text={'Хрипы'} options={[{id: 'not', fullName: "Нет"},
                                    {id: 'dry', fullName: "Сухие"},
                                    {id: 'wet', fullName: "Влажные"}]}
                                              value={rales} label={''} onSelect={setRales}/>
                                <InputString isHidden={rales!='dry'&&rales!='wet'} value={ralesDetails} label={''} onChange={setRalesDetails}/>
                            </div>
                            <InputNumber text={'Частота дыхания, в мин.'} value={breathRate} label={''} onChange={setBreathRate}/>
                        </div>

                        <div className={self_styles['title3']}>Тоны сердца</div>
                        <div className={self_styles['container3']}>
                            <DropdownList options={[{id: 'rhythmic', fullName: "Ритмичные"},
                                {id: 'arrhythmic', fullName: "Аритмичные"}]}
                                          value={heartRhythm} label={''} onSelect={setHeartRhythm}/>
                            <DropdownList options={[{id: 'clear', fullName: "Ясные"},
                                {id: 'muted', fullName: "Приглушенные"}]} value={heartClarity} label={''} onSelect={setHeartClarity}/>
                            <InputNumber text={'Частота сердечных сокращений, в мин.'} value={heartRate} label={''} onChange={setHeartRate}/>

                            <div className={self_styles['container4']}>
                                <DropdownList text={'Шумы'} options={[{id: 'not', fullName: "Нет"},
                                    {id: 'systolic', fullName: "Систолические"},
                                    {id: 'diastolic', fullName: "Диастолические"}]}
                                              value={heartMurmurs} label={''} onSelect={setHeartMurmurs}/>
                                <InputString isHidden={heartMurmurs!='systolic'&&heartMurmurs!='diastolic'} value={heartMurmursDetails} label={''} onChange={setHeartMurmursDetails}/>
                            </div>

                            <div className={self_styles['container4']}>
                                <DropdownList text={'Акцент'} options={[{id: 'not', fullName: "Нет"},
                                    {id: 'has', fullName: "Есть"}]} value={accents} label={''} onSelect={setAccents}/>
                                <InputString  isHidden={accents!='has'} value={accentsDetails} label={''} onChange={setAccentsDetails}/>
                            </div>
                        </div>

                        <div className={self_styles['title3']}>Язык</div>
                        <div className={self_styles['container3']}>
                            <DropdownList  options={[{id: 'wet', fullName: "Влажный"},
                                {id: 'dry', fullName: "Сухой"}]} value={tongueWetness} label={''} onSelect={setTongueWetness}/>
                            <div className={self_styles['container4']}>
                                <DropdownList text={'Налет'} options={[{id: 'clear', fullName: "Чистый"},
                                    {id: 'raid', fullName: "Обложен налетом"}]} value={tongueRaid} label={''} onSelect={setTongueRaid}/>
                                <InputString  isHidden={tongueRaid!='raid'} value={tongueRaidDetails} label={''} onChange={setTongueRaidDetails}/>
                            </div>
                        </div>

                        <div className={self_styles['title3']}>Живот при пульпации</div>
                        <div className={self_styles['container3']}>
                            <DropdownList options={[{id: 'soft', fullName: "Мягкий"},
                                {id: 'tense', fullName: "Напряженный"}]} value={bellySoftness} label={''} onSelect={setBellySoftness}/>
                            <div className={self_styles['container4']}>
                                <DropdownList options={painList} value={bellyPainnnes} label={''} onSelect={setBellyPainnnes}/>
                                <InputString  isHidden={bellyPainnnes!='painful'} value={bellyPainnnesDetails} label={''} onChange={setBellyPainnnesDetails}/>
                            </div>
                        </div>

                        <div className={self_styles['title3']}>Печень</div>
                        <div className={self_styles['container3']}>
                            <div className={self_styles['container4']}>
                                <DropdownList options={[{id: 'normal', fullName: "Неувеличенная"},
                                    {id: 'increase', fullName: "Увеличенная"}]} value={liverSize} label={''} onSelect={setLiverSize}/>
                                <InputString  isHidden={liverSize!='increase'} text={'Выступает из-за края ребер на, см'} value={liverSizeDetails}
                                             label={''} onChange={setLiverSizeDetails}/>
                            </div>
                            <DropdownList options={painList} value={liverPainness} label={''} onSelect={setLiverPainness}/>
                        </div>

                        <div className={self_styles['title3']}>Почки</div>
                        <div className={self_styles['container3']}>
                            <DropdownList text={'Симпатические покалачивания по поясничной области'}
                                          options={[{id: 'neg', fullName: "Негативное"},
                                              {id: 'left', fullName: "Позитивное слева"},
                                              {id: 'right', fullName: "Позитивное справа"},
                                              {id: 'pos', fullName: "Позитивное слева и справа"}]}
                                          value={kidneysShaking} label={''} onSelect={setKidneysShaking}/>

                            <DropdownList text={'Мочеиспускание'} options={painList} value={urinationPainness}
                                          label={''} onSelect={setUrinationPainness}/>

                            <DropdownList text={'Мочеиспускание'} options={[{id: 'free', fullName: "Свободное"},
                                {id: 'difficult', fullName: "Затрудненное"}]} value={urinationFreeness} label={''} onSelect={setUrinationFreeness}/>
                        </div>
                        <div className={self_styles['container4']}>
                            <DropdownList text={'Периферичные отеки'} options={[{id: 'has', fullName: "Есть"},
                                {id: 'not', fullName: "Нет"}]} value={edema} label={''} onSelect={setEdema}/>
                            <InputString  isHidden={edema!='has'} value={edemaDetails} label={''} onChange={setEdemaDetails}/>
                        </div>

                        <div className={self_styles['title3']}>Стул</div>
                        <div className={self_styles['container3']}>
                            <DropdownList options={[{id: 'dec', fullName: "Оформленный"},
                                {id: 'not_dec', fullName: "Неоформленный"}]} value={chairDec} label={''} onSelect={setChairDec}/>
                            <div className={self_styles['container4']}>
                                <DropdownList options={[{id: 'regular', fullName: "Регулярный"},
                                    {id: 'not_regular', fullName: "Нерегулярный"}]} value={chairReg} label={''} onSelect={setChairReg}/>
                                <InputString  isHidden={chairReg!='not_regular'} value={chairRegDetails} label={''} onChange={setChairRegDetails}/>
                            </div>
                        </div>
                    </div>

                    <div className={self_styles['title2']}>Неврологическая статистика</div>
                    <div className={self_styles['container2']}>
                        <div className={self_styles['container4']}>
                            <DropdownList text={'Сознание'} options={[{id: 'clear', fullName: "Ясное"},
                                {id: 'not', fullName: "Нет"}]} value={conscience} label={''} onSelect={setConscience}/>
                            <InputString  isHidden={conscience!='not'} value={conscienceDetails} label={''} onChange={setConscienceDetails}/>
                        </div>

                        <DropdownList text={'Ориентирование в месте, времени, своей личности'}
                                      options={[{id: 'true', fullName: "Правильно"},
                                          {id: 'false', fullName: "Неправильно"}]} value={orientation} label={''} onSelect={setOrientation}/>

                        <InputString text={'Черепномозговые нервы'} value={cranialNervous} label={''} onChange={setCranialNervous}/>
                        <InputString text={'Мышечный тонус'} value={muscleTone} label={''} onChange={setMuscleTone}/>
                        <InputString text={'Мышечная сила'} value={musclePower} label={''} onChange={setMusclePower}/>
                        <InputString text={'Сухожильные рефлексы'} value={tendonReflexes} label={''} onChange={setTendonReflexes}/>

                        <div className={self_styles['container4']}>
                            <DropdownList text={'Чувствительность'} options={[{id: 'normal', fullName: "Не нарушена"},
                                {id: 'hypo', fullName: "Гипостезия"},
                                {id: 'hyper', fullName: "Гиперстезия"}]} value={sensitivity} label={''} onSelect={setSensitivity}/>
                            <InputString  isHidden={sensitivity!='hypo'&&sensitivity!='hyper'} value={sensitivityDetails} label={''} onChange={setSensitivityDetails}/>
                        </div>

                        <div className={self_styles['container4']}>
                            <DropdownList text={'В позе ромберга'} options={[{id: 'stable', fullName: "Устойчивый"},
                                {id: 'unstable', fullName: "Неустойчивый"}]} value={rombergPose} label={''} onSelect={setRombergPose}/>
                            <InputString  isHidden={rombergPose!='unstable'} value={rombergPoseDetails} label={''} onChange={setRombergPoseDetails}/>
                        </div>

                        <div className={self_styles['container4']}>
                            <DropdownList text={'Пальценосовая проба'}
                                          options={[{id: 'good', fullName: "Удовлетворительная"},
                                              {id: 'bad', fullName: "Неудовлетворительная"}]} value={fingerTest}
                                          label={''} onSelect={setFingerTest}/>
                            <InputString  isHidden={fingerTest!='bad'} value={fingerTestDetails} label={''} onChange={setFingerTestDetails}/>
                        </div>

                        <div className={self_styles['container4']}>
                            <DropdownList text={'Позвоночник'} options={deformList} value={spineDeform} label={''} onSelect={setSpineDeform}/>
                            <InputString  isHidden={spineDeform!='has'} value={spineDeformDetails} label={''} onChange={setSpineDeformDetails}/>
                        </div>

                        <div className={self_styles['title3']}>Движения в позвоночнике</div>
                        <div className={self_styles['container3']}>
                            <DropdownList options={[{id: 'unlimit', fullName: "Неограничены"},
                                {id: 'neck_limit', fullName: "Ограничены в шейном отделе"},
                                {id: 'chest_limit', fullName: "Ограничены в грудном отделе"},
                                {id: 'back_limit', fullName: "Ограничены в поясничном отделе"}]}
                                          value={spineMotionLimit} label={''} onSelect={setSpineMotionLimit}/>
                            <div className={self_styles['container4']}>
                                <DropdownList options={painList} value={spineMotionPainness} label={''} onSelect={setSpineMotionPainness}/>
                                <InputString  isHidden={spineMotionPainness!='painfull'} value={spineMotionPainnessDetails} label={''} onChange={setSpineMotionPainnessDetails}/>
                            </div>
                        </div>

                        <div className={self_styles['container4']}>
                            <DropdownList text={'Пульпация паравертебальных точек'}
                                          options={painList} value={paravertebralPoints} label={''} onSelect={setParavertebralPoints}/>
                            <InputString  isHidden={paravertebralPoints!='painful'} value={paravertebralPointsDetails} label={''} onChange={setParavertebralPointsDetails}/>
                        </div>

                        <div className={self_styles['title3']}>
                            Симптом Ласега
                        </div>
                        <div className={self_styles['container3']}>
                            <InputNumber text={'Справа'} value={lasegaSypthomRight} label={''} onChange={setLasegaSypthomRight}/>
                            <InputNumber text={'Слева'} value={lasegaSypthomLeft} label={''} onChange={setLasegaSypthomRight}/>
                        </div>


                        <div className={self_styles['title3']}>
                            Суставы
                        </div>
                        <div className={self_styles['container3']}>
                            <div className={self_styles['container4']}>
                                <DropdownList options={deformList} value={jointsDeform} label={''} onSelect={setJointsDeform}/>
                                <InputString  isHidden={jointsDeform!='has'} value={jointsDeformDetails} label={''} onChange={setJointsDeformDetails}/>
                            </div>

                            <div className={self_styles['container4']}>
                                <DropdownList text={'Пульпация суставов'} options={painList}
                                              value={jointsPalpationPainness} label={''} onSelect={setJointsPalpationPainness}/>
                                <InputString  isHidden={jointsPalpationPainness!='painful'} value={jointsPalpationPainnessDetails} label={''} onChange={setJointsPalpationPainnessDetails}/>
                            </div>
                            <div className={self_styles['container4']}>
                                <DropdownList text={'Активные движения в суставах'} options={painList}
                                              value={jointsMotionPainness} label={''} onSelect={setJointsMotionPainness}/>
                                <InputString isHidden={jointsMotionPainness!='painful'} value={jointsMotionPainnessDetails} label={''} onChange={setJointsMotionPainnessDetails}/>
                            </div>
                            <div className={self_styles['container4']}>
                                <DropdownList text={'Активные движения в суставах'}
                                              options={[{id: 'full', fullName: "В полном объеме"},
                                                  {id: 'limit', fullName: "Ограничены"}]} value={jointsMotionVolume}
                                              label={''} onSelect={setJointsMotionVolume}/>
                                <InputString  isHidden={jointsMotionVolume!='limit'} value={jointsMotionVolumeDetails} label={''} onChange={setJointsMotionVolumeDetails}/>
                            </div>
                        </div>
                    </div>

                    <div className={self_styles['title2']}>
                        Основной диагноз
                    </div>
                    <div className={self_styles['container2']}>
                        <InputString text={'МКБ-10'} value={mainDiagnosisMKB} label={''} onChange={setMainDiagnosisMKB}/>
                        <InputText text={''} value={mainDiagnosis} onChange={setMainDiagnosis}/>
                    </div>

                    <div className={self_styles['title2']}>
                        Сопутствующий диагноз
                    </div>
                    <div className={self_styles['container2']}>
                        <InputString text={'МКБ-10'} value={concomitantDiagnosisMKB} label={''} onChange={setConcomitantDiagnosisMKB}/>
                        <InputText text={''} value={concomitantDiagnosis} onChange={setConcomitantDiagnosis}/>
                    </div>
                    <div className={self_styles['title2']}>
                        Лист назначения
                    </div>
                    <div className={self_styles['container2']}>
                        <InputText text={''} value={therapyPlan} onChange={setTherapyPlan}/>
                    </div>

                    <br/>
                    <br/>
                    <br/>

                    <Checkbox text={'Лечащий врач все проверил'} value={doctorCheck} onChange={setDoctorCheck}/>
                    {generalError && <p style={{color: "red"}}>{generalError}</p>}
                    <Button3 text={'Сохранить'} onClick={() => {
                    }}/>

                </div>
            </div>
        </div>
    );
};

export default MedicalStoriesPersonDoctor;