import React from "react";
import { Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Experience from "./pages/Experience";
import Data from "./pages/Data";
import Mission from "./pages/Mission";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <ScrollToTop /> {/* ⬅️ This does the magic */}
      <Routes>
        <Route path="/" element={<Experience />} />
        <Route path="/data" element={<Data />} />
        <Route path="/mission" element={<Mission />} />
      </Routes>
    </div>
  );
}

export default App;
