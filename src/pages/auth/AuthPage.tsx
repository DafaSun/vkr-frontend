import {useState} from "react";
import {Button} from "../../components/buttons/Button/Button";
import styles from './AuthPage.module.css'
import {InputText} from "../../components/inputs/InputText/InputText.tsx";

const AuthPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    // const [error, setError] = useState("");
    // const navigate = useNavigate();

    // const handleSubmit = async (event: React.FormEvent) => {
    //     event.preventDefault();
    //     setError("");
    //
    //     if (!/^[a-zA-Z.-]+$/.test(username)) {
    //         setError("Логин может содержать только латинские буквы, точку и дефис");
    //         return;
    //     }
    //
    //     try {
    //         await login(username, password);
    //         navigate("/dashboard"); // Перенаправляем после входа
    //     } catch (err) {
    //         setError(err);
    //     }
    // };

    const handleChangeUserName = (event: string) => {
        const value = event;

        // if (/^[a-zA-Z.-]*$/.test(value)) {
            setUsername(value);
        //     setError("");
        // }
    };
    const handleChangePassword = (event: string) => {
        setPassword(event);
    };

    return (
        <>
            <div className={styles['main-container']}>
                <div className={styles['auth-container']}>
                    <div className={styles['table-title']}>Авторизация</div>
                    <form  className={styles['auth-form']}>
                        <InputText text={'Логин'} label={'Введите логин'} value={username} onChange={handleChangeUserName}/>
                        <br/>
                        <InputText text={'Пароль'} label={'Введите пароль'}  value={password} onChange={handleChangePassword}/>
                    </form>
                    <br/>
                    <Button color={'orange'} text={'Войти'} onClick={()=>{}} />
                </div>
            </div>
        </>
    );
};

export default AuthPage;