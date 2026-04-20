import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/image 1.png";

// ✅ React Icons
import {
  HiHome,
  HiShoppingBag,
  HiInformationCircle,
  HiMail,
} from "react-icons/hi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700&display=swap');

        .rb-nav {
          font-family: 'Poppins', sans-serif;
          background-color: white;
          transition: all 0.3s ease;
        }

        .rb-nav.scrolled-state {
          background-color: white;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        }

        .nav-link {
          color: #000;
          font-weight: 600;
          font-size: 1rem;
          position: relative;
          transition: color 0.2s;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: #e06010;
          border-radius: 2px;
          transition: width 0.25s;
        }

        .nav-link:hover {
          color: #e06010;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .download-btn {
          background: #e06010;
          color: #fff;
          font-weight: 700;
          border-radius: 9999px;
          padding: 8px 22px;
          font-size: 0.9rem;
          transition: all 0.2s ease;
          box-shadow: 0 2px 10px rgba(0,0,0,0.12);
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .download-btn:hover {
          background: #c94f0c;
          box-shadow: 0 4px 18px rgba(0,0,0,0.18);
        }

        .mobile-menu {
          background-color: white;
          border-top: 1px solid rgba(0,0,0,0.1);
        }

        .mobile-link {
          color: #000;
          font-weight: 600;
          width: 100%;
          padding: 12px 16px;
          border-radius: 8px;
          transition: background 0.2s, color 0.2s;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .mobile-link:hover {
          background: rgba(0,0,0,0.05);
          color: #e06010;
        }

        .hamburger-btn {
          color: #000;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
        }
      `}</style>

      <header
        className={`rb-nav sticky top-0 z-50 ${
          scrolled ? "scrolled-state py-2" : "py-3"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <img
              src={logo}
              alt="RushBaskets Logo"
              style={{
                height: "80px",
                width: "280px",
                objectFit: "contain",
              }}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/services" className="nav-link">
              Services
            </Link>
            <Link to="/about" className="nav-link">
              About Us
            </Link>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>

            <a
              href="https://play.google.com/store/games?hl=en_IN"
              className="download-btn"
            >
              Download App
            </a>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden hamburger-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="md:hidden mobile-menu">
            <nav className="flex flex-col px-5 py-3 space-y-1">
              <Link
                to="/"
                className="mobile-link"
                onClick={() => setMenuOpen(false)}
              >
                <HiHome size={20} /> Home
              </Link>

              <Link
                to="/services"
                className="mobile-link"
                onClick={() => setMenuOpen(false)}
              >
                <HiShoppingBag size={20} /> Services
              </Link>

              <Link
                to="/about"
                className="mobile-link"
                onClick={() => setMenuOpen(false)}
              >
                <HiInformationCircle size={20} /> About Us
              </Link>

              <Link
                to="/contact"
                className="mobile-link"
                onClick={() => setMenuOpen(false)}
              >
                <HiMail size={20} /> Contact
              </Link>

              <a
                href="https://play.google.com/store/games?hl=en_IN"
                className="download-btn mt-2 justify-center"
                onClick={() => setMenuOpen(false)}
              >
                Download App
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
