import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/image 1.png";

export default function Footer() {
  const socialLinks = [
    {
      icon: "📘",
      name: "Facebook",
      color: "from-blue-600 to-blue-700",
      link: "#",
    },
    {
      icon: "📸",
      name: "Instagram",
      color: "from-pink-500 to-purple-600",
      link: "#",
    },
    {
      icon: "🐦",
      name: "Twitter",
      color: "from-sky-400 to-blue-500",
      link: "#",
    },
    {
      icon: "💼",
      name: "LinkedIn",
      color: "from-blue-700 to-blue-800",
      link: "#",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&family=Nunito:wght@400;500;600&display=swap');

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }

        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes pulse-glow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.08); }
        }

        .footer-font { font-family: 'Poppins', sans-serif; }
        .footer-body-font { font-family: 'Nunito', sans-serif; }

        .animate-fadeInUp { animation: fadeInUp 0.8s ease-out forwards; }
        .animate-float { animation: float 3.5s ease-in-out infinite; }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }

        .footer-gradient {
          background: linear-gradient(160deg, #7c2d00 0%, #b94000 25%, #e05200 55%, #f97316 80%, #fdba74 100%);
          position: relative;
          overflow: hidden;
        }

        .footer-gradient::before {
          content: '';
          position: absolute;
          top: -60%;
          left: -30%;
          width: 180%;
          height: 180%;
          background: radial-gradient(ellipse, rgba(255,255,255,0.06) 0%, transparent 65%);
          animation: rotate 40s linear infinite;
          pointer-events: none;
        }

        .gradient-text {
          background: linear-gradient(135deg, #fff5e4 0%, #fde68a 40%, #fff 70%, #fde68a 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s linear infinite;
        }

        .footer-link {
          position: relative;
          display: inline-block;
          font-family: 'Nunito', sans-serif;
          transition: all 0.3s ease;
        }
        .footer-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -2px;
          left: 0;
          background: linear-gradient(90deg, #fde68a, #fff);
          transition: width 0.3s ease;
        }
        .footer-link:hover::after { width: 100%; }
        .footer-link:hover { transform: translateX(5px); color: #fde68a !important; }

        .social-btn {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }
        .social-btn::before {
          content: '';
          position: absolute;
          top: 50%; left: 50%;
          width: 0; height: 0;
          border-radius: 50%;
          background: rgba(255,255,255,0.25);
          transform: translate(-50%,-50%);
          transition: width 0.5s ease, height 0.5s ease;
        }
        .social-btn:hover::before { width: 100px; height: 100px; }
        .social-btn:hover {
          transform: translateY(-8px) rotate(5deg) scale(1.1);
          box-shadow: 0 12px 28px rgba(0,0,0,0.35);
        }

        .floating-shapes { position: absolute; width: 100%; height: 100%; overflow: hidden; pointer-events: none; }
        .shape { position: absolute; opacity: 0.08; }

        .section-card { transform-style: preserve-3d; transition: all 0.3s ease; }
        .section-card:hover { transform: translateY(-4px); }

        .contact-item { transition: all 0.3s ease; position: relative; padding-left: 8px; }
        .contact-item::before {
          content: '→';
          position: absolute;
          left: -15px;
          opacity: 0;
          transition: all 0.3s ease;
          color: #fde68a;
        }
        .contact-item:hover::before { left: -4px; opacity: 1; }
        .contact-item:hover { padding-left: 16px; color: #fde68a; }

        .logo-glow { position: relative; display: inline-block; }
        .logo-glow::after {
          content: '';
          position: absolute;
          inset: -4px;
          background: linear-gradient(135deg, #fde68a, #fb923c);
          border-radius: 12px;
          opacity: 0;
          filter: blur(18px);
          transition: opacity 0.3s ease;
          z-index: -1;
        }
        .logo-glow:hover::after { opacity: 0.6; animation: pulse-glow 2s ease-in-out infinite; }

        .divider-wave {
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.35), #fde68a, rgba(255,255,255,0.35), transparent);
          border-radius: 9999px;
        }

        .badge-pill {
          background: rgba(255,255,255,0.15);
          border: 1px solid rgba(255,255,255,0.25);
          backdrop-filter: blur(6px);
          border-radius: 9999px;
          padding: 2px 14px;
          font-size: 0.7rem;
          color: #fde68a;
          letter-spacing: 0.04em;
        }

        .heading-line {
          display: inline-block;
          position: relative;
        }
        .heading-line::after {
          content: '';
          position: absolute;
          bottom: -4px; left: 0;
          width: 36px; height: 3px;
          border-radius: 9999px;
          background: rgba(255,255,255,0.5);
        }
      `}</style>

      <footer className="footer-gradient footer-font text-orange-100 pt-10 pb-5 mt-10 relative">
        {/* Background blobs */}
        <div className="floating-shapes">
          <div className="shape w-40 h-40 bg-yellow-300 rounded-full blur-3xl top-4 left-8 animate-float"></div>
          <div className="shape w-28 h-28 bg-white rounded-full blur-3xl top-8 right-16 animate-float delay-200"></div>
          <div className="shape w-44 h-44 bg-orange-200 rounded-full blur-3xl bottom-4 left-1/3 animate-float delay-300"></div>
          <div className="shape w-20 h-20 bg-yellow-100 rounded-full blur-2xl bottom-8 right-10 animate-float delay-100"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Logo + tagline */}
          <div className="text-center mb-8 opacity-0 animate-fadeInUp">
            <div className="inline-block mb-3">
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
            </div>
            <p className="footer-body-font text-orange-200 max-w-xl mx-auto text-sm mt-1">
              Fast, fresh &amp; reliable grocery delivery — right to your
              doorstep 🥬🍎
            </p>

            {/* Feature pills */}
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {["🛍️ Orders", "📦 Inventory", "📊 Analytics", "🔔 Alerts"].map(
                (label) => (
                  <span key={label} className="badge-pill">
                    {label}
                  </span>
                ),
              )}
            </div>
          </div>

          {/* Main 4-col grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 mb-8">
            {/* About */}
            <div className="section-card opacity-0 animate-fadeInUp delay-100">
              <h3
                className="text-base font-bold mb-3 heading-line"
                style={{ color: "#fde68a" }}
              >
                About Us
              </h3>
              <p className="footer-body-font text-xs leading-relaxed text-orange-200 mb-2">
                RushBaskets is your go-to e-commerce management platform for
                grocery operations — making inventory, orders, and delivery
                seamless.
              </p>
              <p className="footer-body-font text-xs leading-relaxed text-orange-200">
                Our mission: fresh produce, zero hassle, lightning-fast
                fulfilment for every customer order.
              </p>
            </div>

            {/* Quick Links */}
            <div className="section-card opacity-0 animate-fadeInUp delay-200">
              <h3
                className="text-base font-bold mb-3 heading-line"
                style={{ color: "#fde68a" }}
              >
                Quick Links
              </h3>
              <ul className="space-y-2">
                {[
                  { to: "/privacy", label: "🔒 Privacy Policy" },
                  { to: "/terms", label: "📄 Terms & Conditions" },
                ].map(({ to, label }) => (
                  <li key={to}>
                    <Link
                      to={to}
                      className="footer-link text-orange-200 text-xs"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Explore */}
            <div className="section-card opacity-0 animate-fadeInUp delay-300">
              <h3
                className="text-base font-bold mb-3 heading-line"
                style={{ color: "#fde68a" }}
              >
                Explore
              </h3>
              <ul className="space-y-2">
                {[
                  { to: "/", label: "🏠 Home" },
                  { to: "/about", label: "ℹ️ About Us" },
                  { to: "/contact", label: "📬 Contact Us" },
                ].map(({ to, label, isAnchor }) => (
                  <li key={to}>
                    {isAnchor ? (
                      <a
                        href={to}
                        className="footer-link text-orange-200 text-xs"
                      >
                        {label}
                      </a>
                    ) : (
                      <Link
                        to={to}
                        className="footer-link text-orange-200 text-xs"
                      >
                        {label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="section-card opacity-0 animate-fadeInUp delay-400">
              <h3
                className="text-base font-bold mb-3 heading-line"
                style={{ color: "#fde68a" }}
              >
                Contact Us
              </h3>
              <ul className="space-y-3 text-xs footer-body-font">
                <li className="contact-item">
                  <span className="text-orange-300">📞 Phone:</span>{" "}
                  <a
                    href="tel:+918449667337"
                    className="text-orange-100 hover:text-yellow-300 transition-colors ml-1"
                  >
                    +91 84496 67337
                  </a>
                </li>
                <li className="contact-item">
                  <span className="text-orange-300">📧 Email:</span>{" "}
                  <a
                    href="mailto:info.rushbaskets@gmail.com"
                    className="text-orange-100 hover:text-yellow-300 transition-colors break-all ml-1"
                  >
                    info.rushbaskets@gmail.com
                  </a>
                </li>
                <li className="contact-item">
                  <span className="text-orange-300">📍 Address:</span>{" "}
                  <span className="text-orange-100 ml-1">
                    Hathras, Uttar Pradesh, India — 204101
                  </span>
                </li>
              </ul>

              {/* Social icons */}
              <div className="flex gap-2 mt-4">
                {socialLinks.map(({ icon, name, color, link }) => (
                  <a
                    key={name}
                    href={link}
                    title={name}
                    className={`social-btn w-8 h-8 rounded-full bg-gradient-to-br ${color} flex items-center justify-center text-sm shadow-md`}
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="relative mb-5 flex flex-col items-center gap-2">
            <div className="divider-wave"></div>
            <span className="badge-pill">
              🥬 Trusted by thousands of grocery shoppers 🍎
            </span>
          </div>

          {/* Bottom bar */}
          <div className="text-center text-xs opacity-0 animate-fadeInUp delay-400 footer-body-font">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-orange-200">
              <span className="flex items-center gap-2">
                <span className="font-bold gradient-text text-sm">
                  RushBaskets
                </span>
                <span className="text-orange-400">|</span>
              </span>
              <span>2024 © All Rights Reserved</span>
              <span className="text-orange-400 hidden sm:inline">|</span>
              <span className="text-yellow-200">
                Made with 🧡 by{" "}
                <a
                  href="https://www.softfyr.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white underline underline-offset-2 transition-colors"
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
