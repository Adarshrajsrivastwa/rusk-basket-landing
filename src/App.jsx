import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy"; // 👈 Add this import
import TermsCondition from "./pages/TermsCondition";

export default function App() {
  return (
    <Router>
      {/* Navbar always on top */}
      <Navbar />

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/terms" element={<TermsCondition />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />{" "}
        {/* 👈 Privacy Policy Route */}
      </Routes>

      {/* Footer always at the bottom */}
      <Footer />
    </Router>
  );
}
