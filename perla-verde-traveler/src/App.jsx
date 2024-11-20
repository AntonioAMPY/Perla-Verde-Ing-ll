import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Gastronomy from "./pages/gastronomy";
import Hospitality from "./pages/hospitality";
import Attractions from "./pages/attractions";
import NotFound from "./not_found";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gastronomia" element={<Gastronomy />} />
      <Route path="/hoteleria" element={<Hospitality />} />
      <Route path="/atracciones" element={<Attractions />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}


