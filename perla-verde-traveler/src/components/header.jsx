import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { useUser } from "../provider/user_context";

export default function Header() {
    const { user, logout } = useUser();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const profileRef = useRef(null);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const toggleProfile = () => setIsProfileOpen(!isProfileOpen);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (profileRef.current && !profileRef.current.contains(event.target)) {
                setIsProfileOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleLogout = () => {
        logout();
    };

    return (
        <header className="bg-green-600 text-white relative">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold">Perla Verde Traveler</h1>
                <button onClick={toggleMenu} className="md:hidden">
                    <Menu />
                </button>
                <nav className={`${isMenuOpen ? "block" : "hidden"} md:block`}>
                    <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
                        <li>
                            <Link to="/" className="hover:text-green-200">
                                Inicio
                            </Link>
                        </li>
                        <li>
                            <Link to="/gastronomia" className="hover:text-green-200">
                                Gastronomía
                            </Link>
                        </li>
                        <li>
                            <Link to="/hoteleria" className="hover:text-green-200">
                                Hotelería
                            </Link>
                        </li>
                        <li>
                            <Link to="/atracciones" className="hover:text-green-200">
                                Atracciones
                            </Link>
                        </li>
                        {user ? (
                            <li className="relative">
                                <button
                                    onClick={toggleProfile}
                                    className="hover:text-green-200 focus:outline-none"
                                >
                                    {user.first_name} {user.last_name}
                                </button>
                                {isProfileOpen && (
                                    <div
                                        ref={profileRef}
                                        className="absolute right-0 mt-2 bg-white text-black shadow-md rounded-lg w-48 z-50"
                                    >
                                        <ul className="p-2">
                                            <li className="font-bold border-b py-2">
                                                {user.getFullName}
                                            </li>
                                            <li className="py-2">Usuario: {user.user_name}</li>
                                            <li className="py-2">
                                                <Link
                                                    to="/profile"
                                                    className="text-green-600 hover:underline"
                                                >
                                                    Ver Perfil Completo
                                                </Link>
                                            </li>
                                            <li className="py-2">
                                                <button
                                                    onClick={handleLogout}
                                                    className="text-red-600 hover:underline"
                                                >
                                                    Cerrar Sesión
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </li>
                        ) : (
                            <li>
                                <Link to="/login" className="hover:text-green-200">
                                    Login
                                </Link>
                            </li>
                        )}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
