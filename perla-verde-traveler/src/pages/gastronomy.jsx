import Header from "../components/header"

export default function Gastronomy() {
    return (
        <div className="min-h-screen bg-green-50">
            <Header />
            <h1 className="text-3xl font-bold text-center mt-12">Gastronomía</h1>
            <p className="text-center mt-4">
                Explora los mejores lugares para disfrutar de la comida local.
            </p>
        </div>
    );
}