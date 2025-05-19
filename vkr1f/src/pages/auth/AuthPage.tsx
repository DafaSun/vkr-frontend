import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import {LoginInput} from "./components/LoginInput/LoginInput";
import {PasswordInput} from "./components/PasswordInput/PasswordInput";
import {Button} from "../../components/buttons/Button/Button";
import styles from './AuthPage.module.css'
import { login } from "../../services/authService";


const AuthPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setError("");

        if (!/^[a-zA-Z.-]+$/.test(username)) {
            setError("Логин может содержать только латинские буквы, точку и дефис");
            return;
        }

        try {
            await login(username, password);
            navigate("/dashboard"); // Перенаправляем после входа
        } catch (err) {
            setError(err);
        }
    };

    const handleChangeUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;

        // if (/^[a-zA-Z.-]*$/.test(value)) {
            setUsername(value);
        //     setError("");
        // }
    };
    const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    return (
        <>
            <div className={styles['main-container']}>
                <div className={styles['auth-container']}>
                    <div className={styles['auth-title']}>Вход</div>
                    <form onSubmit={handleSubmit} className={styles['auth-form']}>
                        <div className={styles['auth-text']}>Логин</div>
                        <LoginInput value={username} onChange={handleChangeUserName} autoFocus/>
                        <br/>
                        <div className={styles['auth-text']}>Пароль</div>
                        <PasswordInput value={password} onChange={handleChangePassword} autoFocus/>
                    </form>
                    <div className={styles['error-text']}>{error}</div>
                    <Button color={'orange'} text={'Войти'} onClick={handleSubmit} />
                </div>
            </div>
        </>
    );
};

export default AuthPage;