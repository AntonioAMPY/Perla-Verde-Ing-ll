import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className="bg-green-600 text-white">
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
                    </ul>
                </nav>
            </div>
        </header>
    );
}