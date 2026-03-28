import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import groceryHero from "../assets/img104.jpg";
import aboutImg from "../assets/img105.jpg";

// Grocery SVG illustrations as inline components
const GroceryBasketSVG = () => (
  <svg
    viewBox="0 0 400 320"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full max-w-md"
  >
    {/* Background circle */}
    <circle cx="200" cy="170" r="130" fill="rgba(255,255,255,0.15)" />
    <circle cx="200" cy="170" r="100" fill="rgba(255,255,255,0.1)" />

    {/* Basket */}
    <path
      d="M100 190 L120 270 L280 270 L300 190 Z"
      fill="#fff"
      opacity="0.95"
    />
    <path d="M100 190 L300 190" stroke="#e06010" strokeWidth="4" fill="none" />
    {/* Basket weave lines */}
    <line
      x1="140"
      y1="190"
      x2="128"
      y2="270"
      stroke="#f0d0b0"
      strokeWidth="2"
    />
    <line
      x1="180"
      y1="190"
      x2="180"
      y2="270"
      stroke="#f0d0b0"
      strokeWidth="2"
    />
    <line
      x1="220"
      y1="190"
      x2="220"
      y2="270"
      stroke="#f0d0b0"
      strokeWidth="2"
    />
    <line
      x1="260"
      y1="190"
      x2="272"
      y2="270"
      stroke="#f0d0b0"
      strokeWidth="2"
    />
    <line
      x1="110"
      y1="220"
      x2="290"
      y2="220"
      stroke="#f0d0b0"
      strokeWidth="2"
    />
    <line
      x1="115"
      y1="248"
      x2="285"
      y2="248"
      stroke="#f0d0b0"
      strokeWidth="2"
    />
    {/* Handle */}
    <path
      d="M150 190 Q200 130 250 190"
      stroke="#fff"
      strokeWidth="8"
      fill="none"
      strokeLinecap="round"
    />

    {/* Carrot */}
    <ellipse
      cx="155"
      cy="175"
      rx="10"
      ry="28"
      fill="#ff7b1d"
      transform="rotate(-20 155 175)"
    />
    <path
      d="M148 150 L143 135 M155 148 L153 133 M162 151 L160 136"
      stroke="#4ade80"
      strokeWidth="3"
      strokeLinecap="round"
    />

    {/* Apple red */}
    <circle cx="200" cy="172" r="22" fill="#ef4444" />
    <path
      d="M200 152 Q205 145 210 148"
      stroke="#4ade80"
      strokeWidth="2.5"
      fill="none"
      strokeLinecap="round"
    />
    <ellipse
      cx="193"
      cy="165"
      rx="5"
      ry="8"
      fill="rgba(255,255,255,0.25)"
      transform="rotate(-20 193 165)"
    />

    {/* Broccoli */}
    <rect x="235" y="175" width="8" height="20" fill="#16a34a" />
    <circle cx="239" cy="165" r="14" fill="#22c55e" />
    <circle cx="228" cy="168" r="10" fill="#22c55e" />
    <circle cx="250" cy="168" r="10" fill="#22c55e" />
    <circle cx="233" cy="158" r="9" fill="#16a34a" />
    <circle cx="245" cy="158" r="9" fill="#16a34a" />

    {/* Milk carton */}
    <rect
      x="265"
      y="155"
      width="28"
      height="38"
      rx="3"
      fill="#fff"
      opacity="0.95"
    />
    <path d="M265 155 L279 142 L293 155" fill="#e2e8f0" />
    <rect
      x="270"
      y="165"
      width="18"
      height="12"
      rx="2"
      fill="#3b82f6"
      opacity="0.7"
    />
    <text
      x="279"
      y="174"
      fontSize="7"
      fontWeight="bold"
      fill="#fff"
      textAnchor="middle"
    >
      MILK
    </text>

    {/* Lemon */}
    <ellipse cx="130" cy="165" rx="16" ry="12" fill="#fbbf24" />
    <ellipse
      cx="127"
      cy="163"
      rx="5"
      ry="4"
      fill="rgba(255,255,255,0.3)"
      transform="rotate(-20 127 163)"
    />

    {/* Sparkle dots */}
    <circle cx="80" cy="140" r="4" fill="rgba(255,255,255,0.6)" />
    <circle cx="320" cy="150" r="3" fill="rgba(255,255,255,0.5)" />
    <circle cx="90" cy="220" r="3" fill="rgba(255,255,255,0.4)" />
    <circle cx="315" cy="230" r="5" fill="rgba(255,255,255,0.4)" />
  </svg>
);

const FreshDeliverySVG = () => (
  <svg
    viewBox="0 0 300 260"
    xmlns="http://www.w3.org/2000/svg"
    className="w-64 h-64 mx-auto"
  >
    <circle cx="150" cy="130" r="110" fill="#fff7ed" />
    <rect x="70" y="130" width="160" height="90" rx="6" fill="#ff7b1d" />
    <rect x="70" y="130" width="160" height="20" rx="6" fill="#e06010" />
    <rect x="115" y="130" width="70" height="35" rx="3" fill="#fde68a" />
    <text
      x="150"
      y="154"
      fontSize="10"
      fontWeight="bold"
      fill="#7c2d00"
      textAnchor="middle"
    >
      FRESH
    </text>
    <path d="M100 130 Q110 100 120 130" fill="#22c55e" />
    <circle cx="150" cy="118" r="14" fill="#ef4444" />
    <path
      d="M150 105 Q155 98 160 101"
      stroke="#22c55e"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
    />
    <path d="M180 130 Q190 105 200 130" fill="#fbbf24" />
    <circle cx="100" cy="220" r="18" fill="#374151" />
    <circle cx="100" cy="220" r="9" fill="#9ca3af" />
    <circle cx="200" cy="220" r="18" fill="#374151" />
    <circle cx="200" cy="220" r="9" fill="#9ca3af" />
    <line
      x1="30"
      y1="160"
      x2="65"
      y2="160"
      stroke="#ff7b1d"
      strokeWidth="3"
      strokeLinecap="round"
      opacity="0.5"
    />
    <line
      x1="20"
      y1="175"
      x2="65"
      y2="175"
      stroke="#ff7b1d"
      strokeWidth="3"
      strokeLinecap="round"
      opacity="0.4"
    />
    <line
      x1="35"
      y1="190"
      x2="65"
      y2="190"
      stroke="#ff7b1d"
      strokeWidth="3"
      strokeLinecap="round"
      opacity="0.3"
    />
  </svg>
);

const features = [
  {
    icon: "🛒",
    title: "Order Management",
    desc: "Track and manage all customer orders in real-time with full visibility from placement to delivery.",
    tags: ["Real-time", "Tracking"],
    tagColors: ["bg-orange-100 text-orange-700", "bg-amber-100 text-amber-700"],
    border: "border-orange-500",
    titleColor: "text-orange-600",
  },
  {
    icon: "📦",
    title: "Inventory Control",
    desc: "Keep stock levels accurate with smart inventory alerts, category management, and restocking tools.",
    tags: ["Auto Alerts", "Categories"],
    tagColors: [
      "bg-green-100 text-green-700",
      "bg-emerald-100 text-emerald-700",
    ],
    border: "border-green-500",
    titleColor: "text-green-600",
  },
  {
    icon: "📊",
    title: "Analytics Dashboard",
    desc: "Gain insights on sales trends, customer behavior, and revenue with powerful reporting tools.",
    tags: ["Insights", "Revenue"],
    tagColors: ["bg-blue-100 text-blue-700", "bg-indigo-100 text-indigo-700"],
    border: "border-blue-500",
    titleColor: "text-blue-600",
  },
];

const stats = [
  { value: "10K+", label: "Orders Delivered" },
  { value: "2500+", label: "Products Listed" },
  { value: "24/7", label: "Support" },
  { value: "4.9★", label: "Customer Rating" },
];

const groceryItems = [
  { emoji: "🥦", name: "Vegetables" },
  { emoji: "🍎", name: "Fruits" },
  { emoji: "🥛", name: "Dairy" },
  { emoji: "🌾", name: "Grains" },
  { emoji: "🧴", name: "Personal Care" },
];

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

        * { font-family: 'Poppins', sans-serif; }

        body {
          margin: 0;
          padding: 0;
          background: #fff;
        }

        .hero-bg {
          background: linear-gradient(135deg, #ff7b1d 0%, #e06010 60%, #c2410c 100%);
        }

        .btn-primary {
          background: #fff;
          color: #ff7b1d;
          font-weight: 700;
          border-radius: 9999px;
          padding: 14px 32px;
          font-size: 1rem;
          transition: background 0.2s, box-shadow 0.2s;
          box-shadow: 0 4px 16px rgba(0,0,0,0.15);
          display: inline-flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          border: none;
        }
        .btn-primary:hover {
          background: #fff7ed;
          box-shadow: 0 6px 24px rgba(0,0,0,0.2);
        }

        .btn-outline {
          background: transparent;
          color: #fff;
          font-weight: 600;
          border-radius: 9999px;
          padding: 13px 32px;
          font-size: 1rem;
          border: 2px solid rgba(255,255,255,0.7);
          transition: background 0.2s, border-color 0.2s;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
        }
        .btn-outline:hover {
          background: rgba(255,255,255,0.12);
          border-color: #fff;
        }

        .feature-card {
          background: #fff;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.07);
          padding: 32px;
          transition: box-shadow 0.25s, transform 0.25s;
          border-top: 4px solid;
        }
        .feature-card:hover {
          box-shadow: 0 8px 32px rgba(0,0,0,0.13);
          transform: translateY(-4px);
        }

        .stat-card {
          text-align: center;
          padding: 16px;
        }

        .grocery-chip {
          background: #fff7ed;
          border: 1px solid #fed7aa;
          border-radius: 9999px;
          padding: 10px 20px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 500;
          color: #7c2d00;
          font-size: 0.95rem;
          transition: background 0.2s, box-shadow 0.2s;
          cursor: default;
        }
        .grocery-chip:hover {
          background: #ffedd5;
          box-shadow: 0 2px 8px rgba(255,123,29,0.15);
        }

        .section-tag {
          display: inline-block;
          background: #ffedd5;
          color: #ff7b1d;
          border-radius: 9999px;
          padding: 4px 16px;
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          margin-bottom: 12px;
        }
      `}</style>

      <div className="text-gray-800">
        {/* ── Hero ── */}
        <section className="hero-bg text-white py-20 px-6 md:px-12 overflow-hidden">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Text */}
            <div className="md:w-1/2">
              <span
                className="section-tag"
                style={{ background: "rgba(255,255,255,0.2)", color: "#fff" }}
              >
                🛒 E-COMMERCE MANAGEMENT
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-5 mt-2">
                Manage Your Grocery
                <br />
                <span style={{ color: "#fde68a" }}>Business Smarter</span>
              </h1>
              <p className="text-lg mb-8 text-orange-100 leading-relaxed">
                RushBaskets gives you a powerful admin platform to manage
                orders, inventory, analytics, and deliveries — all in one place.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#download" className="btn-primary">
                  📱 Download App
                </a>
                <a href="#about" className="btn-outline">
                  Learn More →
                </a>
              </div>
            </div>

            {/* Hero Image */}
            <div className="md:w-1/2 flex justify-center">
              <img
                src={groceryHero}
                alt="Family grocery shopping"
                style={{
                  width: "100%",
                  maxWidth: "480px",
                  borderRadius: "20px",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
                  objectFit: "cover",
                  height: "360px",
                  border: "4px solid rgba(255,255,255,0.3)",
                }}
              />
            </div>
          </div>
        </section>

        {/* ── Category Chips ── */}
        <section className="py-10 px-6 bg-white border-b border-orange-100">
          <div className="max-w-5xl mx-auto">
            <p className="text-center text-sm font-600 text-gray-400 mb-5 uppercase tracking-widest">
              Browse Categories
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {groceryItems.map(({ emoji, name }) => (
                <div key={name} className="grocery-chip">
                  <span className="text-xl">{emoji}</span>
                  <span>{name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── About ── */}
        <section id="about" className="py-20 px-6 md:px-12 bg-white">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-14">
            {/* About Image */}
            <div className="md:w-1/2 flex justify-center">
              <img
                src={aboutImg}
                alt="Fresh grocery delivery"
                style={{
                  width: "100%",
                  maxWidth: "420px",
                  borderRadius: "20px",
                  boxShadow: "0 12px 40px rgba(0,0,0,0.12)",
                  objectFit: "cover",
                  height: "320px",
                  border: "1px solid #fed7aa",
                }}
              />
            </div>

            {/* Text */}
            <div className="md:w-1/2">
              <span className="section-tag">🌿 ABOUT US</span>
              <h2 className="text-3xl font-extrabold text-gray-800 mb-4">
                Fast, Fresh & <span style={{ color: "#ff7b1d" }}>Reliable</span>
              </h2>
              <p className="text-gray-600 leading-relaxed text-base mb-4">
                RushBaskets is an advanced grocery e-commerce management
                platform designed for store owners, delivery managers, and
                admins. Control your entire operation from a single dashboard.
              </p>
              <p className="text-gray-500 leading-relaxed text-base mb-6">
                From tracking fresh produce inventory to managing customer
                orders and analyzing sales — we make grocery management
                effortless.
              </p>
              <div className="flex flex-wrap gap-6">
                {[
                  { icon: "✅", text: "Verified Suppliers" },
                  { icon: "🚚", text: "Fast Delivery" },
                  { icon: "📦", text: "Stock Alerts" },
                  { icon: "🛡️", text: "Secure Payments" },
                ].map(({ icon, text }) => (
                  <div
                    key={text}
                    className="flex items-center gap-2 font-semibold text-sm"
                    style={{ color: "#ff7b1d" }}
                  >
                    <span className="text-xl">{icon}</span>
                    <span className="text-gray-700">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Features ── */}
        <section
          className="py-20 px-6 md:px-12"
          style={{ background: "#fff7ed" }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="section-tag">⚡ FEATURES</span>
              <h2 className="text-3xl font-extrabold text-gray-800">
                Our Core Features
              </h2>
              <p className="text-gray-500 mt-2">
                Everything you need to run a modern grocery business
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map(
                ({
                  icon,
                  title,
                  desc,
                  tags,
                  tagColors,
                  border,
                  titleColor,
                }) => (
                  <div
                    key={title}
                    className="feature-card"
                    style={{
                      borderTopColor: border
                        .replace("border-", "")
                        .includes("orange")
                        ? "#f97316"
                        : border.includes("green")
                          ? "#22c55e"
                          : "#3b82f6",
                    }}
                  >
                    <div className="text-5xl mb-4">{icon}</div>
                    <h3 className={`text-xl font-bold mb-3 ${titleColor}`}>
                      {title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed text-sm mb-4">
                      {desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {tags.map((tag, i) => (
                        <span
                          key={tag}
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${tagColors[i]}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        </section>

        {/* ── Stats ── */}
        <section className="py-16 px-6" style={{ background: "#ff7b1d" }}>
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map(({ value, label }) => (
              <div key={label} className="stat-card">
                <div className="text-4xl font-extrabold text-white mb-1">
                  {value}
                </div>
                <div className="text-orange-100 text-sm font-500">{label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Fresh Picks Banner ── */}
        <section className="py-16 px-6 md:px-12 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <span className="section-tag">🍃 FRESH PICKS</span>
              <h2 className="text-3xl font-extrabold text-gray-800">
                What We Deliver
              </h2>
              <p className="text-gray-500 mt-2 text-sm">
                Quality products across all grocery categories
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
              {[
                {
                  emoji: "🥦🥕🌽",
                  label: "Fresh Vegetables",
                  bg: "#f0fdf4",
                  border: "#bbf7d0",
                  text: "#15803d",
                },
                {
                  emoji: "🍎🍌🍊",
                  label: "Seasonal Fruits",
                  bg: "#fff7ed",
                  border: "#fed7aa",
                  text: "#c2410c",
                },
                {
                  emoji: "🥛🧀🧈",
                  label: "Dairy & Eggs",
                  bg: "#eff6ff",
                  border: "#bfdbfe",
                  text: "#1d4ed8",
                },

                {
                  emoji: "🌾🍞🥐",
                  label: "Bakery & Grains",
                  bg: "#fffbeb",
                  border: "#fde68a",
                  text: "#b45309",
                },
                {
                  emoji: "🧴🧼🪥",
                  label: "Personal Care",
                  bg: "#fdf4ff",
                  border: "#e9d5ff",
                  text: "#7e22ce",
                },
              ].map(({ emoji, label, bg, border, text }) => (
                <div
                  key={label}
                  className="rounded-2xl p-6 text-center"
                  style={{ background: bg, border: `1px solid ${border}` }}
                >
                  <div className="text-4xl mb-3">{emoji}</div>
                  <div
                    className="font-semibold text-sm"
                    style={{ color: text }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Download ── */}
        <section
          id="download"
          className="py-20 px-6 text-center"
          style={{
            background: "linear-gradient(135deg, #ff7b1d 0%, #c2410c 100%)",
          }}
        >
          <div className="max-w-3xl mx-auto">
            <div className="text-5xl mb-4">📱</div>
            <h2 className="text-4xl font-extrabold text-white mb-4">
              Download the RushBaskets App
            </h2>
            <p className="text-orange-100 mb-8 text-lg">
              Manage your grocery store on the go — orders, stock, deliveries
              and more.
            </p>
            <a
              href="https://play.google.com/store/games?hl=en_IN"
              className="btn-primary text-lg px-10 py-4 inline-flex"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3.18 23.76c.3.17.64.24.99.24.5 0 1.01-.16 1.44-.47L17.5 16l-3.36-3.36L3.18 23.76zM20.49 10.06l-2.76-1.6-3.71 3.71 3.71 3.71 2.79-1.62c.8-.46 1.28-1.28 1.28-2.1-.01-.83-.49-1.64-1.31-2.1zM1.04.32C.98.5.96.71.96.93v22.14c0 .22.02.43.08.62l.12.12 12.41-12.4v-.3L1.16.2 1.04.32zM5.62.47L17.5 8l-3.36 3.36L2.61.28c.43-.31.95-.47 1.44-.47.35 0 .69.08.99.24l.58.42z" />
              </svg>
              Get it on Play Store
            </a>
          </div>
        </section>

        {/* ── Contact CTA ── */}
        <section className="py-20 px-6 text-center bg-white">
          <div className="max-w-2xl mx-auto">
            <div className="text-4xl mb-3">🤝</div>
            <h2 className="text-3xl font-extrabold text-gray-800 mb-3">
              Need Help?
            </h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Get in touch with our support team. We're available 24/7 to help
              you manage your grocery operations seamlessly.
            </p>
            <button
              onClick={() => navigate("/contact")}
              className="btn-primary"
              style={{ background: "#ff7b1d", color: "#fff" }}
            >
              Contact Us →
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
