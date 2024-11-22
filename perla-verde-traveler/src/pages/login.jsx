import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../provider/user_context";

export default function LoginPage() {
    const { login } = useUser();
    const navigate = useNavigate();
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        const mockUsers = [
            { user_name: "pepito", password: "1234", first_name: "Pepito", last_name: "Perez" },
            { user_name: "pascual", password: "1234", first_name: "Pascual", last_name: "Rodriguez" },
            { user_name: "falcao", password: "1234", first_name: "Falcao", last_name: "Garcia" },
        ];

        const user = mockUsers.find(u => u.user_name === userName && u.password === password);

        if (user) {
            login(user);
            setErrorMessage("");
            navigate("/");
        } else {
            setErrorMessage("Usuario o contraseña incorrectos.");
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md w-80">
                <h2 className="text-2xl mb-4 text-center">Iniciar sesión</h2>

                <div className="mb-4">
                    <label htmlFor="user_name" className="block text-sm font-medium text-gray-700">Nombre de usuario</label>
                    <input
                        type="text"
                        id="user_name"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        className="w-full px-4 py-2 border rounded-md"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Contraseña</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-2 border rounded-md"
                        required
                    />
                </div>

                {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}

                <button type="submit" className="w-full py-2 mt-4 bg-green-600 text-white rounded-md">
                    Iniciar sesión
                </button>
            </form>
        </div>
    );
}
