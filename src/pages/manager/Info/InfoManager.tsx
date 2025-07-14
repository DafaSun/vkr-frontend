import styles from '../../css/Index.module.css'
import {SideBar} from "../../../components/SideBar/SideBar.tsx";
import {Header} from "../../../components/Header/Header.tsx"
import {Button} from "../../../components/buttons/Button/Button.tsx";
import {OneItem} from "../../../types/SideBarItem.tsx";
import {useNavigate} from "react-router-dom";

const InfoManager = () => {
    const navigate = useNavigate();


    const sideBarItems: OneItem[] = [
        {onClick: () => navigate('/manager/tour'), text: "Путевки", label: "tour"},
        {onClick: () => navigate('/manager/hotel'), text: "Гостиница", label: "hotel"},
        {onClick: () => navigate('/manager/bookings'), text: "Брони", label: "bookings"},
        {onClick: () => navigate('/manager/guests'), text: "Отдыхающие", label: "guests"},
        {onClick: () => navigate('/manager/rooms'), text: "Номера", label: "rooms"},
        {onClick: () => navigate('/manager/timetable'), text: "Расписания", label: "timetable"},
        {onClick: () => navigate('/manager/info'), text: "Информация", label: "info"},
    ];

    return (
        <div className={styles['page-style']}>

            <SideBar activeItem={"info"} items={sideBarItems}/>
            <div className={styles['content-container']}>

                <Header name={'Иванова Анастасия Сергеевна'} post={'Менеджер'}/>

                <div className={styles['main-container']}>
                    <Button color={'green'} text={'Питание'} onClick={() => {
                        navigate('/manager/info/nutrition')
                    }}/>
                    <Button color={'blue'} text={'Процедуры'} onClick={() => {
                        navigate('/manager/info/therapy')
                    }}/>
                    <Button color={'orange'} text={'Досуг'} onClick={() => {
                        navigate('/manager/info/fun')
                    }}/>

                </div>

            </div>

        </div>
    );
};

export default InfoManager;