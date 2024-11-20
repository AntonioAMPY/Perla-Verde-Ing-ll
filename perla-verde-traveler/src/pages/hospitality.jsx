import Header from "../components/header"

export default function Hospitality() {
    return (
        <div className="min-h-screen bg-green-50">
            <Header />
            <h1 className="text-3xl font-bold text-center mt-12">Hotelería</h1>
            <p className="text-center mt-4">
                Encuentra los mejores hoteles para tu estancia en San Luis.
            </p>
        </div>
    );
}
