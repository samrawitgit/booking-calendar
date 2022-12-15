import React from "react";
import { Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Calendar from "./pages/Calendar";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/calendar" element={<Calendar />} />
      </Routes>
    </div>
  );
}
