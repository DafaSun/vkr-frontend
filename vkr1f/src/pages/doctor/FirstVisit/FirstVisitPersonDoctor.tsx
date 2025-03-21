import styles from '../../css/Index.module.css'
import self_styles from './FirstVisitDoctor.module.css'
import {SideBar} from "../../../components/SideBar/SideBar.tsx";
import {Header} from "../../../components/Header/Header.tsx"
import {InfoList, OneItem} from "../../../types/SideBarItem.tsx";
import {useNavigate} from "react-router-dom";
import {InputText} from "../../../components/inputsInText/InputText/InputText.tsx";
import {DatePicker} from "../../../components/inputsInText/DatePicker/DatePicker.tsx";
import {DropdownList} from "../../../components/inputsInText/DropdownList/DpropdownList.tsx";
import {genderList} from "../../../mocks/mock.tsx";
import {useState} from "react";
import {TimePicker} from "../../../components/inputsInText/TimePicker/TimePicker.tsx";
import {Checkbox} from "../../../components/inputsInText/Checkbox/Checkbox.tsx";
import {InputString} from "../../../components/inputsInText/InputString/InputString.tsx";
import {InputNumber} from "../../../components/inputsInText/InputNumber/InputNumber.tsx";
import {Button3} from "../../../components/buttons/Button3/Button3.tsx";

const FirstVisitPersonDoctor = () => {
    const navigate = useNavigate();

    const empty_string = '';
    const empty_number = 0;
    const empty_boolean = false;

    const [loading, setLoading] = useState(false);
    const [error_r, setError_r] = useState<string | null>(null);

    const [errors, setErrors] = useState({
        surname: false,
        name: false,
        birthday: false,
        gender: false,
        phone: false,
    });

    const sideBarItems: OneItem[] = [
        {onClick: () => navigate('/doctor/timetable'), text: "Расписание", label: "timetable"},
        {onClick: () => navigate('/doctor/first_visit'), text: "Первичный прием", label: "first_visit"},
        {onClick: () => navigate('/doctor/second_visit'), text: "Вторичный прием", label: "second_visit"},
        {onClick: () => navigate('/doctor/dairies'), text: "Дневники", label: "dairies"},
        {onClick: () => navigate('/doctor/medical_stories'), text: "Истории болезни", label: "medical_stories"}
    ];

    const hepatitisList: InfoList[] = [
        {id: 'not', fullName: "Не болел"},
        {id: 'a_hep', fullName: "Гепатит A"},
        {id: 'b_hep', fullName: "Гепатит B"},
        {id: 'c_hep', fullName: "Гепатит C"},
        {id: 'd_hep', fullName: "Гепатит D"},
        {id: 'e_hep', fullName: "Гепатит E"},
        {id: 'g_hep', fullName: "Гепатит G"},
    ];

    const statesList: InfoList[] = [
        {id: 'good', fullName: "Удовлетворительное"},
        {id: 'middle', fullName: "Средней степени тяжести"},
        {id: 'serve', fullName: "Тяжелое"},
        {id: 'extreme', fullName: "Крайней степени тяжести"},
    ];

    const bodiesList: InfoList[] = [
        {id: 'asthenic', fullName: "Астеническое"},
        {id: 'normal', fullName: "Нормостеническое"},
        {id: 'hypersthenic', fullName: "Гиперстеническое"},
    ];

    return (
        <div className={styles['page-style']}>

            <SideBar activeItem={"first_visit"} items={sideBarItems}/>
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
                        <DatePicker text={"Дата осмотра"} value={empty_string}/>
                        <TimePicker text={"Время начала осмотра"} value={empty_string}/>
                    </div>
                    <div className={self_styles['container2']}>
                        <InputText text={"Жалобы"} value={empty_string} label={''}/>
                        <InputText text={"История заболевания"} value={empty_string} label={''}/>
                    </div>
                    <div className={self_styles['title2']}>Анамнез жизни</div>
                    <div className={self_styles['container2']}>
                        <InputText text={"Наследственность"} value={empty_string} label={''}/>
                        <InputText text={"Аллергологический анамнез"} value={empty_string} label={''}/>
                        <InputText text={"Перенесенные заболевания"} value={empty_string} label={''}/>
                        <Checkbox text={'Туберкулез'} value={empty_boolean}/>
                        <DropdownList text={'Гепатит'} options={hepatitisList}/>
                        <InputString text={'Кожно-венерические заболевания'} value={empty_string} label={''}/>
                        <InputText text={'Операции'} value={empty_string} label={''}/>
                        <div className={self_styles['title3']}>Вредные привычки </div>
                        <div className={self_styles['container3']}>
                            <Checkbox text={'Курение'} value={empty_boolean}/>
                            <Checkbox text={'Алкоголь'} value={empty_boolean}/>
                        </div>

                        <div className={self_styles['title3']}>Менструации</div>
                        <div className={self_styles['container3']}>
                            <Checkbox text={'Регулярно'} value={empty_boolean}/>
                            <DatePicker text={"Последняя менструация"} value={empty_string}/>
                            <InputString text={'Менопауза'} value={empty_string} label={''}/>
                        </div>

                    </div>

                    <div className={self_styles['title2']}>Данные объективного исследования</div>

                    <div className={self_styles['container2']}>
                        <DropdownList text={'Общее состояние'} options={statesList}/>
                        <DropdownList text={'Телосложение'} options={bodiesList}/>
                        <div className={self_styles['title3']}>Koжные покровы</div>
                        <div className={self_styles['container3']}>
                            <DropdownList text={'Кожные покровы'} options={[{id: 'clear', fullName: "Чистая кожа"},
                                {id: 'rash', fullName: "С высыпаниями"}]}/>
                            <InputString value={empty_string} label={''}/>
                            <DropdownList text={'Влажность кожи'} options={[{id: 'normal', fullName: "Нормальная"},
                                {id: 'dry', fullName: "Пониженная"},
                                {id: 'wet', fullName: "Повышенная"}]}/>

                            <InputNumber text={'Пульс, уд. в мин.'} value={empty_number} label={''}/>
                            <InputNumber text={'Артериальное давление, мм рт. ст.'} value={empty_number} label={''}/>
                        </div>
                        <div className={self_styles['title3']}>Дыхание</div>

                        <div className={self_styles['container3']}>
                            <DropdownList text={'Тип дыхания'} options={[{id: 'vesicular', fullName: "Визикулярное"},
                                {id: 'rigid', fullName: "Жёсткое"},
                                {id: 'weak', fullName: "Ослабленное"}]}/>
                            <InputString value={empty_string} label={''}/>
                            <DropdownList text={'Хрипы'} options={[{id: 'not', fullName: "Нет"},
                                {id: 'dry', fullName: "Сухие"},
                                {id: 'wet', fullName: "Влажные"}]}/>
                            <InputNumber text={'Частота дыхания, в мин.'} value={empty_number} label={''}/>
                        </div>

                        <div className={self_styles['title3']}>Тоны сердца</div>
                        <div className={self_styles['container3']}>
                            <DropdownList text={'Ритм сердца'} options={[{id: 'rhythmic', fullName: "Ритмичный"},
                                {id: 'arrhythmic', fullName: "Аритмичный"}]}/>
                            <DropdownList text={'Ясность'} options={[{id: 'clear', fullName: "Ясные"},
                                {id: 'muted', fullName: "Приглушенные"}]}/>
                            <InputNumber text={'Частота сердечных сокращений, в мин.'} value={empty_number} label={''}/>

                            <DropdownList text={'Шумы'} options={[{id: 'not', fullName: "Нет"},
                                {id: 'systolic', fullName: "Систолический"},
                                {id: 'diastolic', fullName: "Диастолический"}]}/>
                            <InputString value={empty_string} label={''}/>

                            <DropdownList text={'Акцент'} options={[{id: 'not', fullName: "Нет"},
                                {id: 'has', fullName: "Есть"}]}/>
                            <InputString value={empty_string} label={''}/>
                        </div>

                        <div className={self_styles['title3']}>Язык</div>
                        <div className={self_styles['container3']}>
                            <DropdownList text={'Влажность'} options={[{id: 'wet', fullName: "Влажный"},
                                {id: 'dry', fullName: "Сухой"}]}/>
                            <DropdownList text={'Налет'} options={[{id: 'clear', fullName: "Чистый"},
                                {id: 'raid', fullName: "Обложен налетом"}]}/>
                            <InputString text={'Налет'} value={empty_string} label={''}/>
                        </div>

                        <div className={self_styles['title3']}>Живот при пульпации</div>
                        <div className={self_styles['container3']}>
                            <DropdownList options={[{id: 'soft', fullName: "Мягкий"},
                                {id: 'tense', fullName: "Напряженный"}]}/>
                            <DropdownList text={'Налет'} options={[{id: 'painful', fullName: "Болезненный"},
                                {id: 'painless', fullName: "Безболезнненый"}]}/>
                            <InputString value={empty_string} label={''}/>
                        </div>

                        <div className={self_styles['title3']}>Печень</div>
                        <div className={self_styles['container3']}>
                            <DropdownList text={'Налет'} options={[{id: 'normal', fullName: "Неувеличенная"},
                                {id: 'increase', fullName: "Увеличенная"}]}/>
                            <InputString value={empty_string} label={''}/>
                            <DropdownList options={[{id: 'painful', fullName: "Болезненный"},
                                {id: 'painless', fullName: "Безболезнненый"}]}/>
                        </div>

                        <div className={self_styles['title3']}>Почки</div>
                        <div className={self_styles['container3']}>
                            <DropdownList text={'Симпатические покалачивания по поясничной области'} options={[{id: 'neg', fullName: "Негативное"},
                                {id: 'left', fullName: "Позитивное слева"},
                                {id: 'right', fullName: "Позитивное справа"},
                                {id: 'pos', fullName: "Позитивное слева и справа"}]}/>

                            <DropdownList text={'Мочеиспускание'} options={[{id: 'painful', fullName: "Болезненный"},
                                {id: 'painless', fullName: "Безболезнненый"}]}/>

                            <DropdownList text={'Мочеиспускание'} options={[{id: 'free', fullName: "Свободное"},
                                {id: 'difficult', fullName: "Затрудненное"}]}/>
                        </div>

                            <DropdownList text={'Периферичные отеки'} options={[{id: 'has', fullName: "Есть"},
                                {id: 'not', fullName: "Нет"}]}/>
                            <InputString value={empty_string} label={''}/>


                        <div className={self_styles['title3']}>Стул</div>
                        <div className={self_styles['container3']}>
                            <DropdownList options={[{id: 'reg', fullName: "Оформленный"},
                                {id: 'not_reg', fullName: "Неоформленный"}]}/>
                            <DropdownList text={'Налет'} options={[{id: 'regular', fullName: "Регулярный"},
                                {id: 'not_regular', fullName: "Нерегулярный"}]}/>
                            <InputString value={empty_string} label={''}/>
                        </div>
                    </div>

                    <div className={self_styles['title2']}>Неврологическая статистика</div>
                    <div className={self_styles['container2']}>
                        <DropdownList text={'Сознание'} options={[{id: 'a1', fullName: "Мягкий"},
                            {id: 'b1', fullName: "Гепатит B1"}]}/>
                        <InputString text={'Налет'} value={empty_string} label={''}/>

                        <DropdownList text={'Ориентирование в месте, времени, своей личности'}
                                      options={[{id: 'a1', fullName: "Мягкий"},
                                          {id: 'b1', fullName: "Гепатит B1"}]}/>

                        <InputString text={'Черепномозговые нервы'} value={empty_string} label={''}/>
                        <InputString text={'Мышечный тонус'} value={empty_string} label={''}/>
                        <InputString text={'Мышечная сила'} value={empty_string} label={''}/>
                        <InputString text={'Сухожильные рефлексы'} value={empty_string} label={''}/>
                        <InputString text={'Сухожильные рефлексы'} value={empty_string} label={''}/>


                        <DropdownList text={'Чувствительность'} options={[{id: 'a1', fullName: "Мягкий"},
                            {id: 'b1', fullName: "Гепатит B1"}]}/>
                        <InputString text={'Налет'} value={empty_string} label={''}/>


                        <DropdownList text={'В позе ромберга'} options={[{id: 'a1', fullName: "Мягкий"},
                            {id: 'b1', fullName: "Гепатит B1"}]}/>
                        <InputString text={'Налет'} value={empty_string} label={''}/>


                        <DropdownList text={'Пальценосовая проба'} options={[{id: 'a1', fullName: "Мягкий"},
                            {id: 'b1', fullName: "Гепатит B1"}]}/>
                        <InputString text={'Налет'} value={empty_string} label={''}/>


                        <DropdownList text={'Позвоночник'} options={[{id: 'a1', fullName: "Мягкий"},
                            {id: 'b1', fullName: "Гепатит B1"}]}/>
                        <InputString text={'Налет'} value={empty_string} label={''}/>


                        <div className={self_styles['title3']}>Движения в позвоночнике</div>
                        <div className={self_styles['container3']}>
                            <DropdownList text={'Ограниченность'} options={[{id: 'a1', fullName: "Мягкий"},
                                {id: 'b1', fullName: "Гепатит B1"}]}/>
                            <DropdownList text={'Болезненнсть'} options={[{id: 'a1', fullName: "Мягкий"},
                                {id: 'b1', fullName: "Гепатит B1"}]}/>
                            <InputString text={'Налет'} value={empty_string} label={''}/>
                        </div>

                        <DropdownList text={'Пульпация паравертебальных точек'}
                                      options={[{id: 'a1', fullName: "Мягкий"},
                                          {id: 'b1', fullName: "Гепатит B1"}]}/>
                        <InputString text={'Налет'} value={empty_string} label={''}/>

                        <div className={self_styles['title3']}>
                            Симптом Ласега
                        </div>
                        <div className={self_styles['container3']}>
                            <InputNumber text={'Справа'} value={empty_number} label={''}/>
                            <InputNumber text={'Слева'} value={empty_number} label={''}/>
                        </div>


                        <div className={self_styles['title3']}>
                            Суставы
                        </div>
                        <div className={self_styles['container3']}>
                            <DropdownList text={'Суставы диформации'} options={[{id: 'a1', fullName: "Мягкий"},
                                {id: 'b1', fullName: "Гепатит B1"}]}/>
                            <InputString text={'Налет'} value={empty_string} label={''}/>

                            <DropdownList text={'Пульпация суставов'} options={[{id: 'a1', fullName: "Мягкий"},
                                {id: 'b1', fullName: "Гепатит B1"}]}/>
                            <InputString text={'Налет'} value={empty_string} label={''}/>
                            <DropdownList text={'Активные движения болезн'} options={[{id: 'a1', fullName: "Мягкий"},
                                {id: 'b1', fullName: "Гепатит B1"}]}/>
                            <InputString text={''} value={empty_string} label={''}/>
                            <DropdownList text={'Активные движения объем'} options={[{id: 'a1', fullName: "Мягкий"},
                                {id: 'b1', fullName: "Гепатит B1"}]}/>
                            <InputString text={'Налет'} value={empty_string} label={''}/>
                        </div>
                    </div>

                    <div className={self_styles['title3']}>
                        Основной диагноз
                    </div>
                    <InputText text={''} value={empty_string}/>

                    <div className={self_styles['title3']}>
                        Сопутствующий диагноз
                    </div>
                    <InputText text={''} value={empty_string}/>
                    <div className={self_styles['title3']}>
                        План обследования
                    </div>
                    <InputText text={''} value={empty_string}/>

                    <br/>
                    <br/>
                    <br/>

                    <Checkbox text={'Лечащий врач все проверил'} value={empty_boolean}/>
                    <Button3 text={'Сохранить'} onClick={() => {}}/>

                </div>
            </div>
        </div>
    );
};

export default FirstVisitPersonDoctor;