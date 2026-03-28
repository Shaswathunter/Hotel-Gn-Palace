import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Claim from "./pages/Claim";
import Payment from "./pages/Payment";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offer" element={<Offer />} />
        <Route path="/claim" element={<Claim />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </Router>
  );
}