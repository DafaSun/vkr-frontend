import React, {useState} from "react";
import {LoginInput} from "./components/LoginInput/LoginInput";
import {PasswordInput} from "./components/PasswordInput/PasswordInput";
import {Button1} from "../../components/buttons/Button1/Button1";
import styles from './AuthPage.module.css'


const AuthPage = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
    };

    const handleChangeLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLogin(event.target.value);
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
                        <LoginInput value={login} onChange={handleChangeLogin} autoFocus/>
                        <br/>
                        <div className={styles['auth-text']}>Пароль</div>
                        <PasswordInput value={password} onChange={handleChangePassword} autoFocus/>
                    </form>
                    <div className={styles['error-text']}>{error}</div>
                    <Button1 text={'Войти'}/>
                </div>
            </div>
        </>
    );
};

export default AuthPage;