import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/image 1.png";
import {
  FaFacebook,
  FaInstagram,
  FaShoppingBag,
  FaBoxOpen,
  FaChartBar,
  FaBell,
  FaLock,
  FaFileAlt,
  FaUndoAlt,
  FaHome,
  FaInfoCircle,
  FaEnvelope,
  FaHeart,
} from "react-icons/fa";

export default function Footer() {
  const socialLinks = [
    {
      icon: <FaFacebook />,
      name: "Facebook",
      color: "#1877f2",
      link: "https://www.facebook.com/share/1H7pvtXUFV/",
    },
    {
      icon: <FaInstagram />,
      name: "Instagram",
      color: "#e1306c",
      link: "https://www.instagram.com/rushbaskets",
    },
  ];

  const featurePills = [
    { icon: <FaShoppingBag />, label: "Orders" },
    { icon: <FaBoxOpen />, label: "Inventory" },
    { icon: <FaChartBar />, label: "Analytics" },
    { icon: <FaBell />, label: "Alerts" },
  ];

  const quickLinks = [
    { to: "/privacy", label: "Privacy Policy", icon: <FaLock /> },
    { to: "/terms", label: "Terms & Conditions", icon: <FaFileAlt /> },
    { to: "/refund", label: "Refund & Return Policy", icon: <FaUndoAlt /> },
  ];

  const exploreLinks = [
    { to: "/", label: "Home", icon: <FaHome /> },
    { to: "/about", label: "About Us", icon: <FaInfoCircle /> },
    { to: "/contact", label: "Contact Us", icon: <FaEnvelope /> },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Nunito:wght@400;600&display=swap');

        .footer-blue {
          background: #1e3a5f;
        }

        .footer-font { font-family: 'Poppins', sans-serif; }
        .footer-body-font { font-family: 'Nunito', sans-serif; }

        .badge-pill {
          background: rgba(255,255,255,0.15);
          border: 1px solid rgba(255,255,255,0.25);
          border-radius: 9999px;
          padding: 4px 12px;
          font-size: 0.7rem;
          color: #bfdbfe;
          display: inline-flex;
          align-items: center;
          gap: 5px;
        }

        .footer-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: 0.3s;
        }
        .footer-link:hover {
          transform: translateX(5px);
          color: #bfdbfe !important;
        }

        .social-btn {
          transition: 0.3s;
        }
        .social-btn:hover {
          transform: translateY(-6px) scale(1.1);
        }

        .divider {
          width: 100%;
          height: 1px;
          background: rgba(255,255,255,0.2);
        }
      `}</style>

      <footer className="footer-blue footer-font text-blue-100 pt-10 pb-5 mt-10">
        <div className="max-w-7xl mx-auto px-6">
          {/* Logo */}
          <div className="text-center mb-8">
            <img
              src={logo}
              alt="RushBaskets Logo"
              style={{
                height: "75px",
                width: "240px",
                objectFit: "contain",
                background: "#fff",
                borderRadius: "12px",
                padding: "6px",
              }}
            />

            <p className="text-blue-200 mt-2 text-sm">
              Fast, fresh & reliable grocery delivery
            </p>

            <div className="flex flex-wrap justify-center gap-2 mt-3">
              {featurePills.map(({ icon, label }) => (
                <span key={label} className="badge-pill">
                  {icon} {label}
                </span>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* About */}
            <div>
              <h3 className="font-bold mb-3 text-blue-200">About Us</h3>
              <p className="text-xs text-blue-100">
                RushBaskets helps manage grocery operations seamlessly — from
                orders to delivery.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold mb-3 text-blue-200">Quick Links</h3>
              <ul className="space-y-2 text-xs">
                {quickLinks.map(({ to, label, icon }) => (
                  <li key={to}>
                    <Link to={to} className="footer-link text-blue-100">
                      {icon} {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Explore */}
            <div>
              <h3 className="font-bold mb-3 text-blue-200">Explore</h3>
              <ul className="space-y-2 text-xs">
                {exploreLinks.map(({ to, label, icon }) => (
                  <li key={to}>
                    <Link to={to} className="footer-link text-blue-100">
                      {icon} {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact + QR */}
            <div className="text-center lg:text-left">
              <p className="text-xs mb-2 text-blue-200">Scan to Download App</p>

              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://play.google.com/store/apps"
                alt="QR Code"
                className="mx-auto lg:mx-0 mb-3 bg-white p-2 rounded-lg"
              />

              <p className="text-xs mb-2 flex items-center justify-center lg:justify-start gap-2">
                <FaEnvelope /> info.rushbaskets@gmail.com
              </p>

              <div className="flex gap-2 justify-center lg:justify-start mt-3">
                {socialLinks.map(({ icon, name, color, link }) => (
                  <a
                    key={name}
                    href={link}
                    className="social-btn w-8 h-8 flex items-center justify-center rounded-full text-white"
                    style={{ background: color }}
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="divider mb-4"></div>

          {/* Bottom Bar */}
          <div className="text-center text-xs footer-body-font text-blue-200">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
              <span className="flex items-center gap-2">
                <span className="font-bold text-sm">RushBaskets</span>
                <span className="text-blue-400">|</span>
              </span>
              <span>2024 © All Rights Reserved</span>
              <span className="text-blue-400 hidden sm:inline">|</span>
              <span className="inline-flex items-center gap-1">
                Made with <FaHeart /> by{" "}
                <a
                  href="https://www.softfyr.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white underline underline-offset-2"
                >
                  SoftFYR Labs
                </a>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
