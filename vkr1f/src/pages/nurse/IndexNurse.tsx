import styles from '../css/Index.module.css'
import {SideBar} from "../../components/SideBar/SideBar.tsx";
import {Header} from "../../components/Header/Header.tsx"
import {OneItem} from "../../types/SideBarItem.tsx";
import {useNavigate} from "react-router-dom";

const IndexDoctor = () => {
    const navigate = useNavigate();

    const sideBarItems: OneItem[] = [
        {onClick: () => navigate('/nurse/procedures'), text: "Процедуры", label: "procedures"},
        {onClick: () => navigate('/nurse/workers-timetable'), text: "Расписание \nработников", label: "workers-timetable"},
        {onClick: () => navigate('/nurse/guests-timetable'), text: "Расписание \nгостей", label: "guests-timetable"},
        {onClick: () => navigate('/nurse/self-timetable'), text: "Свое \nрасписание", label: "self-timetable"}
    ];

    return (
        <div className={styles['page-style']}>

            <SideBar activeItem={""} items={sideBarItems}/>
            <div className={styles['content-container']}>

                <Header name={'Ефремова Светлана Валерьевна'} post={'Медсестра'}/>

                <div className={styles['main-container']}>
                    <h1 className={styles['welcome']}>Добро пожаловать!</h1>
                </div>
            </div>
        </div>
    );
};

export default IndexDoctor;