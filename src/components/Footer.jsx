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
          padding: 5px 12px;
          font-size: 0.75rem;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .footer-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.85rem;
          transition: 0.3s;
        }

        .footer-link:hover {
          transform: translateX(4px);
          color: #bfdbfe !important;
        }

        .social-btn {
          width: 34px;
          height: 34px;
          font-size: 15px;
          transition: 0.3s;
        }

        .social-btn:hover {
          transform: translateY(-5px) scale(1.1);
        }

        .divider {
          height: 1px;
          background: rgba(255,255,255,0.2);
        }
      `}</style>

      <footer className="footer-blue footer-font text-blue-100 pt-10 pb-5 mt-10">
        <div className="max-w-7xl mx-auto px-6">
          {/* Logo Section */}
          <div className="text-center mb-6">
            <img
              src={logo}
              alt="RushBaskets Logo"
              style={{
                height: "80px",
                width: "250px",
                objectFit: "contain",
                background: "#fff",
                borderRadius: "10px",
                padding: "6px",
              }}
            />

            <p className="text-blue-200 mt-2 text-sm">
              Fast, fresh & reliable grocery delivery
            </p>

            <div className="flex flex-wrap justify-center gap-2 mt-2">
              {featurePills.map(({ icon, label }) => (
                <span key={label} className="badge-pill">
                  {icon} {label}
                </span>
              ))}
            </div>
          </div>

          {/* Grid Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {/* About */}
            <div>
              <h3 className="font-bold mb-2 text-blue-200 text-sm">About Us</h3>
              <p className="text-sm text-blue-100">
                RushBaskets helps manage grocery operations seamlessly — from
                orders to delivery.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold mb-2 text-blue-200 text-sm">
                Quick Links
              </h3>
              <ul className="space-y-1">
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
              <h3 className="font-bold mb-2 text-blue-200 text-sm">Explore</h3>
              <ul className="space-y-1">
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
              <p className="text-sm mb-1 text-blue-200">Scan to Download App</p>

              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=140x140&data=https://play.google.com/store/apps"
                alt="QR Code"
                className="mx-auto lg:mx-0 mb-2 bg-white p-2 rounded-lg"
              />

              <p className="text-sm mb-1 flex items-center justify-center lg:justify-start gap-2">
                <FaEnvelope /> info.rushbaskets@gmail.com
              </p>

              <div className="flex gap-2 justify-center lg:justify-start mt-2">
                {socialLinks.map(({ icon, name, color, link }) => (
                  <a
                    key={name}
                    href={link}
                    className="social-btn flex items-center justify-center rounded-full text-white"
                    style={{ background: color }}
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="divider mb-3"></div>

          {/* Bottom Bar */}
          <div className="text-center text-xs footer-body-font text-blue-200">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
              <span className="font-bold text-sm">Rush Baskets Groser</span>
              <span>2024 © All Rights Reserved</span>
              <span className="flex items-center gap-1">
                Made with <FaHeart /> by{" "}
                <a
                  href="https://www.softfyr.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white underline"
                >
                  SoftFYR Technologies
                </a>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
