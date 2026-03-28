import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

// ── Data ──────────────────────────────────────────────────────────────────────

const missionVision = [
  {
    icon: "🎯",
    title: "Our Mission",
    desc: "To create a smarter, faster grocery ecosystem that connects store owners, delivery teams, and customers — making fresh food accessible to every household, every day.",
    borderColor: "#f97316",
    titleColor: "#ea580c",
    bg: "#fff7ed",
  },
  {
    icon: "🚀",
    title: "Our Vision",
    desc: "To become the most trusted grocery management platform in the country — recognised for reliability, innovation, and sustainable growth for every stakeholder.",
    borderColor: "#22c55e",
    titleColor: "#16a34a",
    bg: "#f0fdf4",
  },
];

const howItWorks = [
  {
    icon: "🏪",
    title: "Store Owner",
    desc: "Add products, manage stock levels, set pricing, and monitor daily sales — all from a single intuitive dashboard.",
    borderColor: "#f97316",
    titleColor: "#ea580c",
    bg: "#fff7ed",
  },
  {
    icon: "🚚",
    title: "Delivery Team",
    desc: "Receive dispatch orders, follow optimised routes, and update delivery status in real-time via the driver app.",
    borderColor: "#3b82f6",
    titleColor: "#2563eb",
    bg: "#eff6ff",
  },
  {
    icon: "🛒",
    title: "Customer",
    desc: "Browse fresh products, place orders in seconds, and track the delivery live — right from their phone.",
    borderColor: "#22c55e",
    titleColor: "#16a34a",
    bg: "#f0fdf4",
  },
];

const teamValues = [
  {
    icon: "🌿",
    title: "Freshness First",
    desc: "We prioritise quality at every step — from supplier to doorstep.",
  },
  {
    icon: "⚡",
    title: "Speed & Efficiency",
    desc: "Fast operations mean happy customers and more revenue for stores.",
  },
  {
    icon: "🤝",
    title: "Trust & Transparency",
    desc: "No hidden fees, no surprises. Everything is clear and upfront.",
  },
  {
    icon: "📈",
    title: "Growth Mindset",
    desc: "We build tools that scale with your business as it grows.",
  },
];

const stats = [
  { value: "10K+", label: "Orders Delivered" },
  { value: "500+", label: "Products Listed" },
  { value: "24/7", label: "Support" },
  { value: "4.9★", label: "Customer Rating" },
];

// ── Component ─────────────────────────────────────────────────────────────────

export default function About() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState({});
  const refs = useRef({});

  useEffect(() => {
    const observers = [];
    Object.entries(refs.current).forEach(([key, el]) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setVisible((v) => ({ ...v, [key]: true }));
        },
        { threshold: 0.15 },
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const ref = (key) => (el) => {
    refs.current[key] = el;
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');
        * { font-family: 'Poppins', sans-serif; box-sizing: border-box; }
        body { margin: 0; padding: 0; background: #fff; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideLeft {
          from { opacity: 0; transform: translateX(-36px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideRight {
          from { opacity: 0; transform: translateX(36px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleUp {
          from { opacity: 0; transform: scale(0.88); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes shimmerSlide {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes float {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(-14px); }
        }

        .anim-fadeUp    { animation: fadeUp    0.7s ease-out forwards; }
        .anim-slideLeft { animation: slideLeft  0.7s ease-out forwards; }
        .anim-slideRight{ animation: slideRight 0.7s ease-out forwards; }
        .anim-slideDown { animation: slideDown  0.7s ease-out forwards; }
        .anim-scaleUp   { animation: scaleUp   0.65s ease-out forwards; }
        .anim-float     { animation: float 4s ease-in-out infinite; }

        .d0{animation-delay:0s} .d1{animation-delay:.1s} .d2{animation-delay:.2s}
        .d3{animation-delay:.3s} .d4{animation-delay:.4s} .d5{animation-delay:.5s}

        /* hero */
        .hero-bg {
          background: linear-gradient(135deg, #ff7b1d 0%, #e06010 60%, #c2410c 100%);
        }
        .gradient-text {
          background: linear-gradient(90deg, #fde68a, #fff 60%, #fde68a);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmerSlide 3s linear infinite;
        }

        /* section tag */
        .section-tag {
          display: inline-block;
          background: #ffedd5;
          color: #ff7b1d;
          border-radius: 9999px;
          padding: 4px 16px;
          font-size: .78rem;
          font-weight: 600;
          letter-spacing: .06em;
          margin-bottom: 10px;
        }

        /* cards */
        .info-card {
          background: #fff;
          border-radius: 18px;
          box-shadow: 0 4px 20px rgba(0,0,0,.07);
          padding: 32px 26px;
          border-top: 4px solid;
          transition: transform .28s ease, box-shadow .28s ease;
          opacity: 0;
        }
        .info-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 14px 36px rgba(0,0,0,.12);
        }

        .value-card {
          background: #fff;
          border-radius: 16px;
          box-shadow: 0 4px 18px rgba(0,0,0,.06);
          padding: 28px 24px;
          border-left: 4px solid #ff7b1d;
          transition: transform .25s ease, box-shadow .25s ease;
          opacity: 0;
          display: flex;
          align-items: flex-start;
          gap: 16px;
        }
        .value-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,.12);
        }

        /* blob */
        .blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          opacity: .12;
          pointer-events: none;
        }

        /* buttons */
        .btn-primary {
          background: #fff;
          color: #ff7b1d;
          font-weight: 700;
          border-radius: 9999px;
          padding: 14px 34px;
          font-size: 1rem;
          transition: background .2s, box-shadow .2s, transform .2s;
          box-shadow: 0 4px 16px rgba(0,0,0,.15);
          display: inline-flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          border: none;
        }
        .btn-primary:hover {
          background: #fff7ed;
          box-shadow: 0 8px 28px rgba(0,0,0,.2);
          transform: translateY(-2px);
        }
        .btn-outline {
          background: transparent;
          color: #fff;
          font-weight: 600;
          border-radius: 9999px;
          padding: 13px 32px;
          font-size: 1rem;
          border: 2px solid rgba(255,255,255,.7);
          transition: background .2s, border-color .2s;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
        }
        .btn-outline:hover {
          background: rgba(255,255,255,.12);
          border-color: #fff;
        }

        /* icon blob on about image */
        .img-placeholder {
          width: 100%;
          max-width: 440px;
          height: 320px;
          border-radius: 20px;
          background: linear-gradient(135deg,#ffedd5,#fed7aa);
          border: 1px solid #fed7aa;
          box-shadow: 0 12px 40px rgba(0,0,0,.1);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          overflow: hidden;
          position: relative;
        }
      `}</style>

      <div className="text-gray-800">
        {/* ── HERO ── */}
        <section className="hero-bg text-white py-24 px-6 md:px-12 overflow-hidden relative">
          <div
            className="blob w-72 h-72 bg-yellow-300 top-0 left-0"
            style={{ position: "absolute" }}
          ></div>
          <div
            className="blob w-80 h-80 bg-white bottom-0 right-0"
            style={{ position: "absolute", animationDelay: "1.5s" }}
          ></div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <span
              className="section-tag anim-slideDown d0"
              style={{ background: "rgba(255,255,255,.2)", color: "#fff" }}
            >
              🌿 ABOUT US
            </span>

            <div className="text-6xl my-4 anim-float">🛒</div>

            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-5 anim-slideDown d1">
              About <span className="gradient-text">RushBaskets</span>
            </h1>

            <p className="text-xl text-orange-100 leading-relaxed max-w-2xl mx-auto mb-10 anim-fadeUp d2">
              Fast, fresh, and reliable — RushBaskets is the all-in-one grocery
              management platform built for store owners, delivery teams, and
              customers who demand better.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center anim-fadeUp d3">
              <button
                onClick={() => navigate("/contact")}
                className="btn-primary"
              >
                🤝 Get In Touch
              </button>
              <button onClick={() => navigate("/")} className="btn-outline">
                ← Back to Home
              </button>
            </div>
          </div>
        </section>

        {/* ── WHO WE ARE ── */}
        <section ref={ref("who")} className="py-20 px-6 md:px-12 bg-white">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-14">
            {/* Illustration */}
            <div
              className={`md:w-1/2 flex justify-center ${visible.who ? "anim-slideLeft d0" : "opacity-0"}`}
            >
              <div className="img-placeholder">
                <div
                  className="blob w-40 h-40 bg-orange-300"
                  style={{ position: "absolute", top: "-20px", left: "-20px" }}
                ></div>
                <div
                  className="blob w-32 h-32 bg-yellow-200"
                  style={{
                    position: "absolute",
                    bottom: "-10px",
                    right: "-10px",
                  }}
                ></div>
                <div className="text-8xl anim-float relative z-10">🛒</div>
                <p className="font-bold text-orange-600 text-lg relative z-10">
                  RushBaskets
                </p>
                <p className="text-orange-400 text-sm relative z-10">
                  Fresh Grocery Management
                </p>
              </div>
            </div>

            {/* Text */}
            <div
              className={`md:w-1/2 ${visible.who ? "anim-slideRight d1" : "opacity-0"}`}
            >
              <span className="section-tag">🌿 WHO WE ARE</span>
              <h2 className="text-3xl font-extrabold text-gray-800 mb-4">
                Fast, Fresh & <span style={{ color: "#ff7b1d" }}>Reliable</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                RushBaskets was founded to revolutionise how grocery businesses
                operate. We built an advanced e-commerce management platform for
                store owners, delivery managers, and admins — so you can control
                your entire operation from a single dashboard.
              </p>
              <p className="text-gray-500 leading-relaxed mb-6">
                From tracking fresh produce inventory to managing customer
                orders and analysing sales trends — we make grocery management
                effortless, scalable, and profitable.
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
                  >
                    <span className="text-xl">{icon}</span>
                    <span className="text-gray-700">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── MISSION & VISION ── */}
        <section
          ref={ref("mv")}
          className="py-20 px-6 md:px-12"
          style={{ background: "#fff7ed" }}
        >
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="section-tag">🎯 PURPOSE</span>
              <h2 className="text-3xl font-extrabold text-gray-800">
                Our Mission & Vision
              </h2>
              <p className="text-gray-500 mt-2">
                What drives us every single day
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {missionVision.map((item, i) => (
                <div
                  key={item.title}
                  className={`info-card ${visible.mv ? `anim-scaleUp d${i}` : ""}`}
                  style={{
                    borderTopColor: item.borderColor,
                    background: item.bg,
                  }}
                >
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3
                    className="text-xl font-bold mb-3"
                    style={{ color: item.titleColor }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section ref={ref("how")} className="py-20 px-6 md:px-12 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="section-tag">⚙️ HOW IT WORKS</span>
              <h2 className="text-3xl font-extrabold text-gray-800">
                A Connected Ecosystem
              </h2>
              <p className="text-gray-500 mt-2">
                Store owners, delivery teams, and customers — all in sync
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {howItWorks.map((item, i) => (
                <div
                  key={item.title}
                  className={`info-card ${visible.how ? `anim-fadeUp d${i}` : ""}`}
                  style={{
                    borderTopColor: item.borderColor,
                    background: item.bg,
                  }}
                >
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3
                    className="text-xl font-bold mb-3"
                    style={{ color: item.titleColor }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── OUR VALUES ── */}
        <section
          ref={ref("values")}
          className="py-20 px-6 md:px-12 relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg,#fff7ed 0%,#ffedd5 100%)",
          }}
        >
          <div
            className="blob w-96 h-96 bg-orange-300 top-0 right-0"
            style={{ position: "absolute" }}
          ></div>
          <div
            className="blob w-72 h-72 bg-yellow-200 bottom-0 left-0"
            style={{ position: "absolute" }}
          ></div>

          <div className="max-w-5xl mx-auto relative z-10">
            <div className="text-center mb-12">
              <span className="section-tag">💡 OUR VALUES</span>
              <h2 className="text-3xl font-extrabold text-gray-800">
                What We Stand For
              </h2>
              <p className="text-gray-500 mt-2">
                The principles that shape everything we build
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {teamValues.map((v, i) => (
                <div
                  key={v.title}
                  className={`value-card ${visible.values ? `anim-fadeUp d${i}` : ""}`}
                >
                  <div className="text-4xl flex-shrink-0">{v.icon}</div>
                  <div>
                    <h3
                      className="font-bold text-gray-800 text-lg mb-1"
                      style={{ color: "#ea580c" }}
                    >
                      {v.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── STATS ── */}
        <section className="py-16 px-6" style={{ background: "#ff7b1d" }}>
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map(({ value, label }) => (
              <div key={label}>
                <div className="text-4xl font-extrabold text-white mb-1">
                  {value}
                </div>
                <div className="text-orange-100 text-sm">{label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── FEATURE STRIP ── */}
        <section className="py-12 bg-white border-b border-orange-100">
          <div className="max-w-5xl mx-auto px-6">
            <div className="flex flex-wrap justify-center gap-8">
              {[
                {
                  icon: "🔒",
                  title: "Secure Payments",
                  sub: "Multiple payment options",
                },
                { icon: "📱", title: "Easy Booking", sub: "Order in seconds" },
                {
                  icon: "⭐",
                  title: "Rated Suppliers",
                  sub: "Quality assured",
                },
                {
                  icon: "🎯",
                  title: "Live Tracking",
                  sub: "Real-time updates",
                },
              ].map(({ icon, title, sub }) => (
                <div key={title} className="flex items-center gap-3">
                  <span className="text-3xl">{icon}</span>
                  <div className="text-left">
                    <div className="font-bold text-gray-800 text-sm">
                      {title}
                    </div>
                    <div className="text-xs text-gray-500">{sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section
          className="py-24 px-6 text-center relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #ff7b1d 0%, #c2410c 100%)",
          }}
        >
          <div
            className="blob w-64 h-64 bg-white top-0 left-10"
            style={{ position: "absolute" }}
          ></div>
          <div
            className="blob w-80 h-80 bg-yellow-300 bottom-0 right-10"
            style={{ position: "absolute" }}
          ></div>

          <div className="max-w-3xl mx-auto relative z-10">
            <div className="text-5xl mb-5 anim-float">🚀</div>
            <h2 className="text-4xl font-extrabold text-white mb-4">
              Join the Future of Grocery Management
            </h2>
            <p className="text-orange-100 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Whether you're a store owner, delivery manager, or just someone
              who loves fresh groceries — RushBaskets is built for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://play.google.com/store/games?hl=en_IN"
                className="btn-primary text-lg px-10 py-4"
              >
                📱 Download the App
              </a>
              <button
                onClick={() => navigate("/contact")}
                className="btn-outline text-lg px-10 py-4"
              >
                🤝 Contact Us →
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
