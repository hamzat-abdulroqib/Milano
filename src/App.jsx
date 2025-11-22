import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReservationWidget from "./Pages/ReservationWidget";
import Home from "./Pages/Home";
import MilanoMenu from "./Pages/MilanoMenu";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reseved" element={<ReservationWidget />} />
          <Route path="/milano" element={<MilanoMenu />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
