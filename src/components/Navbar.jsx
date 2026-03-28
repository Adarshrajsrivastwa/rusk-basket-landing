import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/image 1.png";

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
          background-color: #ff7b1d;
        }

        .rb-nav.scrolled-state {
          background-color: #e06010;
          box-shadow: 0 2px 16px rgba(0,0,0,0.18);
        }

        .nav-link {
          color: #fff;
          font-weight: 600;
          font-size: 1rem;
          position: relative;
          transition: color 0.2s;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px; left: 0;
          width: 0; height: 2px;
          background: #fff;
          border-radius: 2px;
          transition: width 0.25s;
        }
        .nav-link:hover { color: #fff3e0; }
        .nav-link:hover::after { width: 100%; }

        .download-btn {
          background: #fff;
          color: #ff7b1d;
          font-weight: 700;
          border-radius: 9999px;
          padding: 8px 22px;
          font-size: 0.9rem;
          transition: background 0.2s, color 0.2s, box-shadow 0.2s;
          box-shadow: 0 2px 10px rgba(0,0,0,0.12);
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .download-btn:hover {
          background: #fff3e0;
          color: #e06010;
          box-shadow: 0 4px 18px rgba(0,0,0,0.18);
        }

        .mobile-menu {
          background-color: #e06010;
          border-top: 1px solid rgba(255,255,255,0.2);
        }

        .mobile-link {
          color: #fff;
          font-weight: 600;
          width: 100%;
          padding: 12px 16px;
          border-radius: 8px;
          transition: background 0.2s, color 0.2s;
          display: block;
        }
        .mobile-link:hover {
          background: rgba(255,255,255,0.15);
          color: #fff3e0;
        }

        .hamburger-btn {
          color: #fff;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
        }
      `}</style>

      <header
        className={`rb-nav text-white sticky top-0 z-50 transition-all duration-300 ${
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
                height: "75px",
                width: "240px",
                objectFit: "contain",
                background: "#ffffff",
                borderRadius: "12px",
                padding: "6px 12px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              }}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { to: "/", label: "Home" },
              { to: "/services", label: "Services" },
              { to: "/about", label: "About Us" },
              { to: "/contact", label: "Contact" },
            ].map(({ to, label }) => (
              <Link key={to} to={to} className="nav-link">
                {label}
              </Link>
            ))}

            <a
              href="https://play.google.com/store/games?hl=en_IN"
              className="download-btn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
                />
              </svg>
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
              {[
                { to: "/", label: "🏠 Home" },
                { to: "/services", label: "🛍️ Services" },
                { to: "/about", label: "ℹ️ About Us" },
                { to: "/contact", label: "📬 Contact" },
              ].map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className="mobile-link"
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}

              <a
                href="https://play.google.com/store/games?hl=en_IN"
                className="download-btn mt-2 justify-center"
                onClick={() => setMenuOpen(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
                  />
                </svg>
                Download App
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
