import styles from '../css/Index.module.css'
import {SideBar} from "../../components/SideBar/SideBar.tsx";
import {Header} from "../../components/Header/Header.tsx"

type OneItem = {
    onClick: () => void;
    text: string;
    label: string;
}

const IndexReport = () => {
    const sideBarItems: OneItem[] = [
        {
            onClick: () => {},
            text: "Бухгалтерия",
            label: "accounting"
        },
        {
            onClick: () => {},
            text: "Отчеты",
            label: "reports"
        },
        {
            onClick: () => {},
            text: "Сотрудники",
            label: "employees"
        }
    ];

    return (
        <div className={styles['page-style']}>

            <SideBar activeItem={""} items={sideBarItems}/>
            <div className={styles['content-container']}>

                <Header name={'Иванова Анастасия Сергеевна'} post={'Отчеты'}/>

                <div className={styles['main-container']}>
                    <h1 className={styles['welcome']}>Добро пожаловать!</h1>



                </div>

            </div>


        </div>
    );
};

export default IndexReport;