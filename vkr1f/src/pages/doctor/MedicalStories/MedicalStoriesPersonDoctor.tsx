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

                    <div className={self_styles['title2']}>Дневники</div>

                    <div className={self_styles['title2']}>Выписной эпикриз</div>
                </div>
            </div>
        </div>
    );
};

export default MedicalStoriesPersonDoctor;