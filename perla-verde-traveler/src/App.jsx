import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { UserProvider } from "./provider/user_context";
import Header from "./components/header";
import Login from "./pages/login";
import Home from "./pages/home";
import Gastronomy from "./pages/gastronomy";
import Hotel from "./pages/hotel";
import Attractions from "./pages/attractions";
import NotFound from "./not_found";

export default function App() {

  const [authenticatedUser, setAuthenticatedUser] = useState(null);

  return (
    <UserProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home user={authenticatedUser} />} />
        <Route path="/login" element={<Login onLogin={setAuthenticatedUser} />} />
        <Route path="/gastronomia" element={<Gastronomy />} />
        <Route path="/hoteleria" element={<Hotel />} />
        <Route path="/atracciones" element={<Attractions />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </UserProvider>
  );
}


