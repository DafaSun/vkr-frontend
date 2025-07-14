import styles from './about.module.css'
import {Header} from "../components/Header/Header.tsx"
import {DatePicker} from "../components/inputs/DatePicker/DatePicker.tsx";
import {TimePicker} from "../components/inputs/TimePicker/TimePicker.tsx";
import {InputNumber} from "../components/inputs/InputNumber/InputNumber.tsx";
import {Checkbox} from "../components/inputs/Checkbox/Checkbox.tsx"


const About = () => {
    const handleDateSelect = (date: string) => {
        console.log("Выбранная дата:", date);
    };

    const handleTimeSelect = (time: string) => {
        console.log("Выбранное время:", time);
    };

    const handleNumberChange = (value: number) => {
        console.log("Введенное число:", value);
    };

    return (
        <div className={styles['page-style']}>
            {/*<SideBar/>*/}
            <div className={styles['content-container']}>

                <Header name={'Иванова Анастасия Сергеевна'} post={'Главная медсестра'}/>

                <div className={styles['main-container']}>

                    {/*<Button1 text={'Button1'}/>*/}
                    {/*<Button2 text={'Button2'}/>*/}
                    {/*<Button3 text={'Button3'}/>*/}
                    {/*<DropdownList options={people} label={"DropdownList"} text={'Выберите ФИО отдыхающего из списка'} onSelect={handleSelect} />*/}
                    <DatePicker text={"Выберите дату процедуры"} onSelect={handleDateSelect} />
                    <TimePicker text={"Выберите время процедуры"} onSelect={handleTimeSelect} />
                    <InputNumber text={'Введите кол-во процедур'} onChange={handleNumberChange} min={1} max={100} label={''} />
<Checkbox text={'asdfgh;lmnbvcaertyu'}/>

                </div>

            </div>


        </div>
    );
};

export default About;