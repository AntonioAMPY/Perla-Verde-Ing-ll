export const mockHotels = [
    {
        id: 1,
        name: "Hotel Cordillera",
        description: "Un hotel de lujo con todas las comodidades.",
        rooms: [
            { id: 1, type: "Habitación Standard", description: "Habitación estándar con cama sencilla y baño privado.", price: "100", imageUrl: "images/habitacion_sencilla_cordillera.jpg" },
            { id: 2, type: "Habitación Suite", description: "Suite de lujo con jacuzzi y vista panorámica.", price: "250", imageUrl: "https://via.placeholder.com/300" },
        ]
    },
    {
        id: 2,
        name: "Hotel El Paraíso",
        description: "Hotel exclusivo con vistas espectaculares.",
        rooms: [
            { id: 3, type: "Habitación Deluxe", description: "Habitación de lujo con cama king size y balcón privado.", price: "200", imageUrl: "https://via.placeholder.com/300" },
            { id: 4, type: "Habitación Familiar", description: "Habitación amplia ideal para familias con niños.", price: "180", imageUrl: "https://via.placeholder.com/300" },
        ]
    },
    {
        id: 3,
        name: "Hotel Oasis",
        description: "Hotel con piscina exterior y jardín tropical.",
        rooms: [
            { id: 5, type: "Habitación Doble", description: "Habitación doble con vistas al jardín.", price: "120", imageUrl: "https://via.placeholder.com/300" },
            { id: 6, type: "Habitación con Piscina", description: "Habitación con acceso directo a la piscina y terraza.", price: "250", imageUrl: "https://via.placeholder.com/300" },
        ]
    }
];