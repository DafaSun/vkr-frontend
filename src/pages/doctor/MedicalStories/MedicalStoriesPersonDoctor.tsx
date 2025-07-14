// import styles from '../../css/Index.module.css'
// import self_styles from './MedicalStoriesDoctor.module.css'
// import {SideBar} from "../../../components/SideBar/SideBar.tsx";
// import {Header} from "../../../components/Header/Header.tsx"
// import {OneItem} from "../../../types/SideBarItem.tsx";
// import {useNavigate} from "react-router-dom";
// import {InputText} from "../../../components/inputsInText/InputText/InputText.tsx";
// import {DatePicker} from "../../../components/inputsInText/DatePicker/DatePicker.tsx";
// import {DropdownList} from "../../../components/inputsInText/DropdownList/DpropdownList.tsx";
// import {useState} from "react";
// import {TimePicker} from "../../../components/inputsInText/TimePicker/TimePicker.tsx";
// import {Checkbox} from "../../../components/inputsInText/Checkbox/Checkbox.tsx";
// import {InputText} from "../../../components/inputsInText/InputString/InputText.tsx";
// import {InputNumber} from "../../../components/inputsInText/InputNumber/InputNumber.tsx";
// import {Button} from "../../../components/buttons/Button/Button.tsx";
// import {painList, deformList, bodiesList, hepatitisList, statesList, genderList} from "../../../mocks/mock.tsx";
//
// const MedicalStoriesPersonDoctor = () => {
//     const navigate = useNavigate();
//
//     const sideBarItems: OneItem[] = [
//         {onClick: () => navigate('/doctor/timetable'), text: "Расписание", label: "timetable"},
//         {onClick: () => navigate('/doctor/first_visit'), text: "Первичный прием", label: "first_visit"},
//         {onClick: () => navigate('/doctor/second_visit'), text: "Заключительный прием", label: "second_visit"},
//         {onClick: () => navigate('/doctor/dairies'), text: "Дневники", label: "dairies"},
//         {onClick: () => navigate('/doctor/medical_stories'), text: "Истории болезни", label: "medical_stories"}
//     ];
//
//     return (
//         <div className={styles['page-style']}>
//
//             <SideBar activeItem={"medical_stories"} items={sideBarItems}/>
//             <div className={styles['content-container']}>
//
//                 <Header name={'Фролова Клавдия Алексеевна'} post={'Врач'}/>
//
//                 <div className={styles['main-container']}>
//                     <div className={styles['title']}>История болезни</div>
//                     <div className={self_styles['description']}>
//                         <div className={self_styles['main-info']}>
//                             <div>ФИО: Маруся</div>
//                             <div>Пол: </div>
//                             <div>Дата рождения: </div>
//                             <div>Контакты: </div>
//                             <div>Адрес: </div>
//                             <div>Номер проживания: </div>
//                             <div>Работа: </div>
//                         </div>
//                         Резы первого приема
//                         дневники
//                         резы последнего
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default MedicalStoriesPersonDoctor;