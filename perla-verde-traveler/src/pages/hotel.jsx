import CardProduct from "../components/card_product";
import { mockHotels } from "../constants/mock_hotels";

export default function Hotel() {
    return (
        <div className="min-h-screen bg-green-50 p-6">
            <h1 className="text-3xl font-bold text-center mt-12 text-green-700">
                Hotelería
            </h1>
            <p className="text-center mt-4 mb-8 text-lg font-semibold text-gray-800">
                ¡Tu próxima aventura empieza aquí! Descubre los <span className="text-green-600 font-bold">mejores hoteles</span> de San Luis,
                donde la comodidad, el lujo y las vistas espectaculares se combinan para ofrecerte una estancia inolvidable.
                Desde acogedoras habitaciones hasta exclusivos resorts, cada opción está diseñada para hacer de tu viaje una experiencia única.
                ¡Reserva ahora y vive lo mejor de San Luis!
            </p>

            {/* Renderizar las secciones de hoteles */}
            {mockHotels.map((hotel) => (
                <div key={hotel.id} className="mt-8 w-full max-w-4xl mx-auto">
                    <h2 className="text-2xl font-semibold text-center text-green-600">{hotel.name}</h2>
                    <p className="text-center mt-2 text-gray-600">{hotel.description}</p>

                    {/* Contenedor de tarjetas de habitaciones */}
                    <div className="mt-6 flex justify-center items-center flex-wrap gap-6">
                        {hotel.rooms.map((room) => (
                            <CardProduct
                                key={room.id}
                                imageUrl={room.imageUrl}
                                title={room.type}
                                text={room.description}
                                price={room.price}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
