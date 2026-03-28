import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

// ── Data ─────────────────────────────────────────────────────────────────────

const services = [
  {
    icon: "🛒",
    title: "Order Management",
    desc: "Track and manage all customer orders in real-time with full visibility — from placement and packing to final doorstep delivery.",
    tags: ["Real-time", "Tracking"],
    tagColors: ["bg-orange-100 text-orange-700", "bg-amber-100 text-amber-700"],
    borderColor: "#f97316",
    titleColor: "#ea580c",
    bg: "#fff7ed",
    accent: "#ff7b1d",
  },
  {
    icon: "📦",
    title: "Inventory Control",
    desc: "Keep stock levels accurate with smart low-stock alerts, category management, expiry tracking, and one-click restocking tools.",
    tags: ["Auto Alerts", "Categories"],
    tagColors: [
      "bg-green-100 text-green-700",
      "bg-emerald-100 text-emerald-700",
    ],
    borderColor: "#22c55e",
    titleColor: "#16a34a",
    bg: "#f0fdf4",
    accent: "#22c55e",
  },
  {
    icon: "📊",
    title: "Analytics Dashboard",
    desc: "Unlock insights on sales trends, customer behaviour, and revenue growth with powerful charts and reporting tools.",
    tags: ["Insights", "Revenue"],
    tagColors: ["bg-blue-100 text-blue-700", "bg-indigo-100 text-indigo-700"],
    borderColor: "#3b82f6",
    titleColor: "#2563eb",
    bg: "#eff6ff",
    accent: "#3b82f6",
  },
  {
    icon: "🚚",
    title: "Delivery Management",
    desc: "Assign, track, and optimise every delivery route. Live driver tracking and automated customer notifications included.",
    tags: ["Live Tracking", "Routes"],
    tagColors: [
      "bg-purple-100 text-purple-700",
      "bg-violet-100 text-violet-700",
    ],
    borderColor: "#a855f7",
    titleColor: "#9333ea",
    bg: "#fdf4ff",
    accent: "#a855f7",
  },
  {
    icon: "🛡️",
    title: "Secure Payments",
    desc: "Accept UPI, cards, wallets, and COD. Every transaction is encrypted and settlement reports are auto-generated daily.",
    tags: ["Encrypted", "Multi-method"],
    tagColors: ["bg-rose-100 text-rose-700", "bg-pink-100 text-pink-700"],
    borderColor: "#f43f5e",
    titleColor: "#e11d48",
    bg: "#fff1f2",
    accent: "#f43f5e",
  },
  {
    icon: "📱",
    title: "Customer App",
    desc: "A smooth, branded shopping app for your customers — easy browsing, smart search, wish-lists, and instant checkout.",
    tags: ["Branded", "App"],
    tagColors: ["bg-teal-100 text-teal-700", "bg-cyan-100 text-cyan-700"],
    borderColor: "#14b8a6",
    titleColor: "#0f766e",
    bg: "#f0fdfa",
    accent: "#14b8a6",
  },
];

const whyChoose = [
  {
    icon: "✅",
    title: "Verified Suppliers",
    desc: "Every supplier is vetted and quality-checked before listing on the platform.",
  },
  {
    icon: "⚡",
    title: "Lightning Fast",
    desc: "Optimised for speed — pages load in under a second, even on slow connections.",
  },
  {
    icon: "🕐",
    title: "24 × 7 Support",
    desc: "Our dedicated team is always ready to help — anytime, anywhere, any device.",
  },
  {
    icon: "📈",
    title: "Scale With You",
    desc: "Whether you run 10 or 10,000 orders a day, RushBaskets grows with your business.",
  },
];

const stats = [
  { value: "10K+", label: "Orders Delivered" },
  { value: "500+", label: "Products Listed" },
  { value: "24/7", label: "Support" },
  { value: "4.9★", label: "Customer Rating" },
];

const howItWorks = [
  {
    step: "01",
    icon: "📋",
    title: "Set Up Your Store",
    desc: "Add your products, prices, and categories in minutes using our guided onboarding flow.",
  },
  {
    step: "02",
    icon: "📣",
    title: "Start Receiving Orders",
    desc: "Customers browse and place orders through your branded app or web storefront.",
  },
  {
    step: "03",
    icon: "🚀",
    title: "Fulfil & Deliver",
    desc: "Pick, pack, and dispatch with one-tap delivery assignment and live route optimisation.",
  },
  {
    step: "04",
    icon: "💰",
    title: "Get Paid Instantly",
    desc: "Settlements hit your account daily. Track revenue and growth from your dashboard.",
  },
];

// ── Component ─────────────────────────────────────────────────────────────────

export default function Services() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState({});
  const sectionRefs = useRef({});

  useEffect(() => {
    const observers = [];
    Object.entries(sectionRefs.current).forEach(([key, el]) => {
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
    sectionRefs.current[key] = el;
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');
        * { font-family: 'Poppins', sans-serif; box-sizing: border-box; }
        body { margin: 0; padding: 0; background: #fff; }

        /* ── Animations ── */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
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
          50%      { transform: translateY(-16px); }
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .anim-fadeUp   { animation: fadeUp   0.7s ease-out forwards; }
        .anim-slideDown{ animation: slideDown 0.7s ease-out forwards; }
        .anim-scaleUp  { animation: scaleUp  0.6s ease-out forwards; }
        .anim-fadeIn   { animation: fadeIn   0.8s ease-out forwards; }
        .anim-float    { animation: float 4s ease-in-out infinite; }

        .d0  { animation-delay: 0s; }
        .d1  { animation-delay: .1s; }
        .d2  { animation-delay: .2s; }
        .d3  { animation-delay: .3s; }
        .d4  { animation-delay: .4s; }
        .d5  { animation-delay: .5s; }
        .d6  { animation-delay: .6s; }
        .d7  { animation-delay: .7s; }

        /* ── Hero ── */
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

        /* ── Section tag ── */
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

        /* ── Service cards ── */
        .svc-card {
          background: #fff;
          border-radius: 18px;
          box-shadow: 0 4px 20px rgba(0,0,0,.07);
          padding: 32px 26px;
          border-top: 4px solid;
          transition: transform .28s ease, box-shadow .28s ease;
          opacity: 0;
        }
        .svc-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 14px 36px rgba(0,0,0,.12);
        }
        .svc-card .tag {
          display: inline-block;
          border-radius: 9999px;
          padding: 3px 12px;
          font-size: .72rem;
          font-weight: 600;
        }

        /* ── Why choose cards ── */
        .why-card {
          background: #fff;
          border-radius: 16px;
          box-shadow: 0 4px 18px rgba(0,0,0,.06);
          padding: 28px 24px;
          border-left: 4px solid #ff7b1d;
          transition: transform .25s ease, box-shadow .25s ease;
          opacity: 0;
        }
        .why-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,.12);
        }

        /* ── How it works ── */
        .step-card {
          background: #fff;
          border-radius: 16px;
          box-shadow: 0 4px 18px rgba(0,0,0,.07);
          padding: 32px 24px;
          text-align: center;
          transition: transform .25s ease, box-shadow .25s ease;
          opacity: 0;
          position: relative;
        }
        .step-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 32px rgba(0,0,0,.12);
        }
        .step-badge {
          position: absolute;
          top: -16px;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(135deg, #ff7b1d, #c2410c);
          color: #fff;
          font-size: .72rem;
          font-weight: 800;
          letter-spacing: .1em;
          padding: 4px 14px;
          border-radius: 9999px;
          box-shadow: 0 4px 12px rgba(255,123,29,.4);
        }

        /* ── CTA button ── */
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
        .btn-white-outline {
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
        .btn-white-outline:hover {
          background: rgba(255,255,255,.12);
          border-color: #fff;
        }

        /* ── Floating blob ── */
        .blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          opacity: .12;
          pointer-events: none;
        }
      `}</style>

      <div className="text-gray-800">
        {/* ── HERO ── */}
        <section className="hero-bg text-white py-24 px-6 md:px-12 overflow-hidden relative">
          <div
            className="blob w-72 h-72 bg-yellow-300 top-0 left-0 anim-float"
            style={{ position: "absolute" }}
          ></div>
          <div
            className="blob w-80 h-80 bg-white bottom-0 right-0 anim-float"
            style={{ position: "absolute", animationDelay: "1.5s" }}
          ></div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <span
              className="section-tag anim-slideDown d0"
              style={{ background: "rgba(255,255,255,.2)", color: "#fff" }}
            >
              ⚡ WHAT WE OFFER
            </span>

            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mt-2 mb-5 anim-slideDown d1">
              Our <span className="gradient-text">Services</span>
            </h1>

            <p className="text-xl text-orange-100 leading-relaxed max-w-2xl mx-auto mb-10 anim-fadeUp d2">
              Fast, fresh, and reliable — discover every tool RushBaskets gives
              you to run a modern grocery business effortlessly.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center anim-fadeUp d3">
              <button
                onClick={() => navigate("/contact")}
                className="btn-primary"
              >
                🤝 Get In Touch
              </button>
              <button
                onClick={() => navigate("/")}
                className="btn-white-outline"
              >
                ← Back to Home
              </button>
            </div>
          </div>
        </section>

        {/* ── SERVICES GRID ── */}
        <section
          ref={ref("services")}
          className="py-20 px-6 md:px-12"
          style={{ background: "#fff7ed" }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="section-tag">🛍️ CORE SERVICES</span>
              <h2 className="text-3xl font-extrabold text-gray-800">
                Everything You Need
              </h2>
              <p className="text-gray-500 mt-2">
                A complete toolkit to power your grocery operation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {services.map((s, i) => (
                <div
                  key={s.title}
                  className={`svc-card ${visible.services ? `anim-scaleUp d${i}` : ""}`}
                  style={{ borderTopColor: s.borderColor }}
                >
                  <div className="text-5xl mb-4">{s.icon}</div>
                  <h3
                    className="text-xl font-bold mb-3"
                    style={{ color: s.titleColor }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    {s.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {s.tags.map((tag, ti) => (
                      <span key={tag} className={`tag ${s.tagColors[ti]}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section ref={ref("how")} className="py-20 px-6 md:px-12 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="section-tag">🗺️ HOW IT WORKS</span>
              <h2 className="text-3xl font-extrabold text-gray-800">
                From Setup to Sales in 4 Steps
              </h2>
              <p className="text-gray-500 mt-2">
                Get your grocery store live and earning, fast
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {howItWorks.map((h, i) => (
                <div
                  key={h.step}
                  className={`step-card ${visible.how ? `anim-fadeUp d${i}` : ""}`}
                >
                  <div className="step-badge">{h.step}</div>
                  <div className="text-5xl mb-4 mt-4">{h.icon}</div>
                  <h3 className="font-bold text-gray-800 text-lg mb-2">
                    {h.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {h.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY CHOOSE US ── */}
        <section
          ref={ref("why")}
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
              <span className="section-tag">🌿 WHY RUSHBASKETS</span>
              <h2 className="text-3xl font-extrabold text-gray-800">
                Built for Grocery, By Grocery Experts
              </h2>
              <p className="text-gray-500 mt-2">
                Premium features that give your business a real edge
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {whyChoose.map((w, i) => (
                <div
                  key={w.title}
                  className={`why-card ${visible.why ? `anim-fadeUp d${i}` : ""}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="text-4xl flex-shrink-0">{w.icon}</div>
                    <div>
                      <h3
                        className="font-bold text-gray-800 text-lg mb-1"
                        style={{ color: "#ea580c" }}
                      >
                        {w.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {w.desc}
                      </p>
                    </div>
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
                <div className="text-orange-100 text-sm font-500">{label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── FEATURE BANNER ── */}
        <section className="py-12 bg-white border-b border-orange-100">
          <div className="max-w-5xl mx-auto px-6">
            <div className="flex flex-wrap justify-center gap-8 text-center">
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
            <div className="text-5xl mb-5 anim-float">🛒</div>
            <h2 className="text-4xl font-extrabold text-white mb-4">
              Ready to Supercharge Your Grocery Store?
            </h2>
            <p className="text-orange-100 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Join thousands of happy store owners using RushBaskets to manage
              orders, inventory, and deliveries — all from one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate("/contact")}
                className="btn-primary text-lg px-10 py-4"
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
