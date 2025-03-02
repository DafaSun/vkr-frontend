import React, { useState } from "react";

const AuthPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleLogin = async () => {
        setLoading(true);
        setError("");

        try {
            const response = await fetch("http://localhost:8000/api/auth/login/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) throw new Error("Ошибка входа");

            const data = await response.json();
            localStorage.setItem("token", data.access);
            alert("Вход выполнен!");
        } catch (err) {
            setError("Неверный email или пароль");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ maxWidth: "400px", margin: "auto", textAlign: "center" }}>
            <h2>Вход</h2>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <div style={{ marginBottom: "10px" }}>
                <label>Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ width: "100%", padding: "8px", marginTop: "5px" }}
                />
            </div>
            <div style={{ marginBottom: "10px" }}>
                <label>Пароль</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ width: "100%", padding: "8px", marginTop: "5px" }}
                />
            </div>
            <button
                onClick={handleLogin}
                disabled={loading}
                style={{
                    backgroundColor: "#3498db",
                    color: "white",
                    padding: "10px",
                    border: "none",
                    width: "100%",
                    cursor: "pointer",
                }}
            >
                Войти
            </button>
        </div>
    );
};

export default AuthPage;