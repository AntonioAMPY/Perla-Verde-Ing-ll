import { useState } from "react";
import { Star, MapPin, Calendar, CreditCard } from "lucide-react";
import Header from "../components/header"



export default function Home() {
    const [rating, setRating] = useState(0);

    return (
        <div className="min-h-screen bg-green-50">
            <Header />
            <section className="relative bg-green-500 text-white py-32">
                <div className="absolute inset-0 z-0">
                    <img
                        src="panoramica_san_luis.webp"
                        alt="Panorámica de San Luis"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50" />{" "}
                </div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h2 className="text-4xl font-bold mb-4">Descubre San Luis</h2>
                    <p className="text-xl mb-8">
                        Tu guía completa para explorar la belleza de San Luis
                    </p>
                    <button className="bg-white text-green-600 font-bold py-2 px-4 rounded hover:bg-green-100 transition duration-300">
                        Comienza tu aventura
                    </button>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Características principales
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <Calendar className="w-12 h-12 text-green-600 mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Reservas en línea</h3>
                            <p>Reserva hoteles, restaurantes y atracciones con facilidad.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <MapPin className="w-12 h-12 text-green-600 mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Mapa interactivo</h3>
                            <p>Explora San Luis con nuestro mapa interactivo detallado.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <Star className="w-12 h-12 text-green-600 mb-4" />
                            <h3 className="text-xl font-semibold mb-2">
                                Calificaciones y comentarios
                            </h3>
                            <p>Lee y comparte experiencias de otros viajeros.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <CreditCard className="w-12 h-12 text-green-600 mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Pagos seguros</h3>
                            <p>
                                Realiza pagos de forma segura con nuestra pasarela integrada.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="bg-white py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Explora San Luis
                    </h2>
                    <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
                        <p className="text-xl text-gray-600">
                            Mapa interactivo de San Luis
                        </p>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Lo que dicen nuestros visitantes
                    </h2>
                    <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto">
                        <div className="flex items-center mb-4">
                            <img
                                src="/user.svg"
                                alt="Usuario"
                                className="w-12 h-12 rounded-full mr-4"
                            />
                            <div>
                                <h3 className="font-semibold">María González</h3>
                                <div className="flex">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <Star
                                            key={star}
                                            className={`w-5 h-5 ${star <= rating ? "text-yellow-400" : "text-gray-300"
                                                } cursor-pointer`}
                                            onClick={() => setRating(star)}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <p className="text-gray-600 mb-4">
                            &ldquo;¡Una experiencia increíble! La aplicación hizo que mi
                            visita a San Luis fuera mucho más fácil y agradable. Altamente
                            recomendado.&rdquo;
                        </p>
                        <textarea
                            className="w-full p-2 border rounded-md"
                            placeholder="Deja tu comentario..."
                            rows={3}
                        ></textarea>
                        <button className="mt-2 bg-green-600 text-white font-bold py-2 px-4 rounded hover:bg-green-700 transition duration-300">
                            Enviar comentario
                        </button>
                    </div>
                </div>
            </section>

            {/* Call-to-Action Section */}
            <section className="bg-green-600 text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        ¿Listo para explorar San Luis?
                    </h2>
                    <p className="text-xl mb-8">
                        Únete a Perla Verde Traveler y descubre todo lo que San Luis tiene
                        para ofrecer.
                    </p>
                    <button className="bg-white text-green-600 font-bold py-2 px-4 rounded hover:bg-green-100 transition duration-300">
                        Regístrate ahora
                    </button>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-green-800 text-white py-8">
                <div className="container mx-auto px-4 text-center">
                    <p>
                        &copy; 2023 Perla Verde Traveler. Todos los derechos reservados.
                    </p>
                </div>
            </footer>
        </div>
    );
}
