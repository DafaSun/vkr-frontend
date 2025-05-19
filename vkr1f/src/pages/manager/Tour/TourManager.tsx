import styles from '../../css/Index.module.css'
import {SideBar} from "../../../components/SideBar/SideBar.tsx";
import {Header} from "../../../components/Header/Header.tsx"
import {Button} from "../../../components/buttons/Button/Button.tsx";
import {OneItem} from "../../../types/SideBarItem.tsx";
import {useNavigate} from "react-router-dom";

const TourManager = () => {
    const navigate = useNavigate();

    const sideBarItems: OneItem[] = [
        {onClick: () => navigate('/manager/tour'), text: "Путевки", label: "tour"},
        {onClick: () => navigate('/manager/hotel'), text: "Гостиница", label: "hotel"},
        {onClick: () => navigate('/manager/bookings'), text: "Брони", label: "bookings"},
        {onClick: () => navigate('/manager/guests'), text: "Отдыхающие", label: "guests"},
        {onClick: () => navigate('/manager/rooms'), text: "Номера", label: "rooms"},
        {onClick: () => navigate('/manager/info'), text: "Информация", label: "info"}
    ];

    return (
        <div className={styles['page-style']}>

            <SideBar activeItem={"tour"} items={sideBarItems}/>
            <div className={styles['content-container']}>

                <Header name={'Иванова Анастасия Сергеевна'} post={'Менеджер'}/>

                <div className={styles['main-container']}>
                    <Button text={'Социальная путевка (льготная)'} color={'violet'} onClick={() => {
                        navigate('/manager/tour/social')
                    }}/>
                    <Button text={'Обычная за свои деньги'} color={'green'} onClick={() => {
                        navigate('/manager/tour/tour')
                    }}/>
                </div>
            </div>
        </div>
    );
};

export default TourManager;