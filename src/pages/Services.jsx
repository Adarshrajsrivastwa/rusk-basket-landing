import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  ShoppingCart,
  Package,
  BarChart3,
  Truck,
  Shield,
  Smartphone,
  CheckCircle,
  Zap,
  Clock,
  TrendingUp,
  MapPin,
  CreditCard,
  Store,
  Megaphone,
  Rocket,
  DollarSign,
  BadgeCheck,
  HeartHandshake,
  Star,
  ChevronRight,
  ArrowLeft,
  Users,
  Activity,
  Leaf,
} from "lucide-react";

// ── Data ─────────────────────────────────────────────────────────────────────

const services = [
  {
    icon: ShoppingCart,
    title: "Order Management",
    desc: "Track and manage all customer orders in real-time with full visibility — from placement and packing to final doorstep delivery.",
    tags: ["Real-time", "Tracking"],
    tagColors: ["bg-orange-100 text-orange-700", "bg-amber-100 text-amber-700"],
    borderColor: "#f97316",
    titleColor: "#ea580c",
    bg: "#fff7ed",
    grad: "from-orange-400 to-orange-600",
  },
  {
    icon: Package,
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
    grad: "from-green-500 to-emerald-600",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    desc: "Unlock insights on sales trends, customer behaviour, and revenue growth with powerful charts and reporting tools.",
    tags: ["Insights", "Revenue"],
    tagColors: ["bg-blue-100 text-blue-700", "bg-indigo-100 text-indigo-700"],
    borderColor: "#3b82f6",
    titleColor: "#2563eb",
    bg: "#eff6ff",
    grad: "from-blue-500 to-blue-700",
  },
  {
    icon: Truck,
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
    grad: "from-purple-500 to-violet-600",
  },
  {
    icon: Shield,
    title: "Secure Payments",
    desc: "Accept UPI, cards, wallets, and COD. Every transaction is encrypted and settlement reports are auto-generated daily.",
    tags: ["Encrypted", "Multi-method"],
    tagColors: ["bg-rose-100 text-rose-700", "bg-pink-100 text-pink-700"],
    borderColor: "#f43f5e",
    titleColor: "#e11d48",
    bg: "#fff1f2",
    grad: "from-rose-500 to-pink-600",
  },
  {
    icon: Smartphone,
    title: "Customer App",
    desc: "A smooth, branded shopping app for your customers — easy browsing, smart search, wish-lists, and instant checkout.",
    tags: ["Branded", "App"],
    tagColors: ["bg-teal-100 text-teal-700", "bg-cyan-100 text-cyan-700"],
    borderColor: "#14b8a6",
    titleColor: "#0f766e",
    bg: "#f0fdfa",
    grad: "from-teal-500 to-cyan-600",
  },
];

const whyChoose = [
  {
    icon: BadgeCheck,
    title: "Verified Suppliers",
    desc: "Every supplier is vetted and quality-checked before listing on the platform.",
    color: "text-green-500",
    bg: "bg-green-50",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    desc: "Optimised for speed — pages load in under a second, even on slow connections.",
    color: "text-amber-500",
    bg: "bg-amber-50",
  },
  {
    icon: Clock,
    title: "24 × 7 Support",
    desc: "Our dedicated team is always ready to help — anytime, anywhere, any device.",
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    icon: TrendingUp,
    title: "Scale With You",
    desc: "Whether you run 10 or 10,000 orders a day, RushBaskets grows with your business.",
    color: "text-orange-500",
    bg: "bg-orange-50",
  },
];

const stats = [
  { value: "10K+", label: "Orders Delivered", icon: ShoppingCart },
  { value: "2500+", label: "Products Listed", icon: Package },
  { value: "24/7", label: "Support", icon: HeartHandshake },
  { value: "4.9★", label: "Customer Rating", icon: Star },
];

const howItWorks = [
  {
    step: "01",
    icon: Store,
    title: "Set Up Your Store",
    desc: "Add your products, prices, and categories in minutes using our guided onboarding flow.",
    color: "from-orange-400 to-orange-600",
  },
  {
    step: "02",
    icon: Megaphone,
    title: "Start Receiving Orders",
    desc: "Customers browse and place orders through your branded app or web storefront.",
    color: "from-blue-400 to-blue-600",
  },
  {
    step: "03",
    icon: Rocket,
    title: "Fulfil & Deliver",
    desc: "Pick, pack, and dispatch with one-tap delivery assignment and live route optimisation.",
    color: "from-purple-400 to-purple-600",
  },
  {
    step: "04",
    icon: DollarSign,
    title: "Get Paid Instantly",
    desc: "Settlements hit your account daily. Track revenue and growth from your dashboard.",
    color: "from-green-400 to-emerald-600",
  },
];

const featureBanner = [
  {
    icon: Shield,
    title: "Secure Payments",
    sub: "Multiple payment options",
    color: "text-orange-500",
    bg: "bg-orange-50",
  },
  {
    icon: Smartphone,
    title: "Easy Booking",
    sub: "Order in seconds",
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    icon: Star,
    title: "Rated Suppliers",
    sub: "Quality assured",
    color: "text-amber-500",
    bg: "bg-amber-50",
  },
  {
    icon: MapPin,
    title: "Live Tracking",
    sub: "Real-time updates",
    color: "text-green-500",
    bg: "bg-green-50",
  },
];

// ── Component ─────────────────────────────────────────────────────────────────

export default function Services() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState({});
  const sectionRefs = useRef({});

  // Scroll to top on page enter
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  useEffect(() => {
    const observers = [];
    Object.entries(sectionRefs.current).forEach(([key, el]) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setVisible((v) => ({ ...v, [key]: true }));
        },
        { threshold: 0.12 },
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
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=Fraunces:wght@700;900&display=swap');
        *,*::before,*::after { box-sizing:border-box; font-family:'Plus Jakarta Sans',sans-serif; }
        body { margin:0; padding:0; background:#fff; }

        @keyframes blob {
          0%,100%{ transform:translate(0,0) scale(1); }
          33%    { transform:translate(26px,-42px) scale(1.07); }
          66%    { transform:translate(-16px,16px) scale(0.94); }
        }
        .blob { animation:blob 9s infinite ease-in-out; }
        .bd2  { animation-delay:2.4s; }
        .bd4  { animation-delay:4.7s; }

        @keyframes fadeUp {
          from { opacity:0; transform:translateY(32px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes slideDown {
          from { opacity:0; transform:translateY(-28px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes scaleUp {
          from { opacity:0; transform:scale(0.88); }
          to   { opacity:1; transform:scale(1); }
        }
        @keyframes shimmerSlide {
          0%   { background-position:-200% center; }
          100% { background-position:200% center; }
        }
        @keyframes float {
          0%,100% { transform:translateY(0); }
          50%     { transform:translateY(-14px); }
        }

        .fu  { animation:fadeUp .75s ease both; }
        .fu2 { animation:fadeUp .75s .15s ease both; }
        .fu3 { animation:fadeUp .75s .30s ease both; }
        .anim-slideDown { animation:slideDown .7s ease-out forwards; }
        .anim-scaleUp   { animation:scaleUp .6s ease-out forwards; }
        .anim-fadeUp    { animation:fadeUp .7s ease-out forwards; }
        .anim-float     { animation:float 4s ease-in-out infinite; }

        .d0{animation-delay:0s}   .d1{animation-delay:.1s}
        .d2{animation-delay:.2s}  .d3{animation-delay:.3s}
        .d4{animation-delay:.4s}  .d5{animation-delay:.5s}

        /* pill — same as Home */
        .pill {
          display:inline-flex; align-items:center; gap:6px;
          background:#fff7ed; color:#c2410c;
          border:1.5px solid #fed7aa; border-radius:9999px;
          padding:7px 16px; font-size:.74rem; font-weight:800; letter-spacing:.06em;
        }

        /* gradient shimmer text */
        .gradient-text {
          background:linear-gradient(90deg,#fde68a,#fff 60%,#fde68a);
          background-size:200% auto;
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
          background-clip:text;
          animation:shimmerSlide 3s linear infinite;
        }

        /* service cards */
        .svc-card {
          background:#fff; border-radius:24px;
          border:1.5px solid #ffedd5;
          box-shadow:0 4px 20px rgba(0,0,0,.05);
          padding:32px 26px; border-top:4px solid;
          transition:transform .3s ease, box-shadow .3s ease, border-color .3s;
          opacity:0;
        }
        .svc-card:hover {
          transform:translateY(-10px);
          box-shadow:0 24px 56px rgba(249,115,22,.13);
          border-color:#fb923c;
        }
        .svc-card:hover .icon-wrap { transform:scale(1.1) rotate(5deg); }
        .icon-wrap {
          display:inline-flex; align-items:center; justify-content:center;
          width:60px; height:60px; border-radius:18px; color:#fff;
          margin-bottom:18px; box-shadow:0 8px 20px rgba(0,0,0,.16);
          transition:transform .3s;
        }
        .tag-chip {
          display:inline-block; border-radius:9999px;
          padding:3px 12px; font-size:.72rem; font-weight:700;
        }

        /* why card */
        .why-card {
          background:#fff; border-radius:20px;
          border:1.5px solid #f1f5f9;
          box-shadow:0 4px 18px rgba(0,0,0,.05);
          padding:28px 24px;
          transition:transform .3s, box-shadow .3s, border-color .3s;
          opacity:0;
        }
        .why-card:hover {
          transform:translateY(-8px);
          box-shadow:0 20px 48px rgba(249,115,22,.12);
          border-color:#fb923c;
        }

        /* step card */
        .step-card {
          background:#fff; border-radius:22px;
          border:1.5px solid #ffedd5;
          box-shadow:0 4px 18px rgba(0,0,0,.06);
          padding:36px 24px; text-align:center;
          transition:transform .3s, box-shadow .3s, border-color .3s;
          opacity:0; position:relative;
        }
        .step-card:hover {
          transform:translateY(-10px);
          box-shadow:0 24px 56px rgba(249,115,22,.13);
          border-color:#fb923c;
        }
        .step-badge {
          position:absolute; top:-16px; left:50%;
          transform:translateX(-50%);
          background:linear-gradient(135deg,#f97316,#c2410c);
          color:#fff; font-size:.72rem; font-weight:900;
          letter-spacing:.1em; padding:4px 14px;
          border-radius:9999px;
          box-shadow:0 4px 12px rgba(249,115,22,.4);
        }

        /* stat card — same as Home */
        .stat-card {
          background:rgba(255,255,255,.15); backdrop-filter:blur(12px);
          border-radius:22px; padding:28px; text-align:center;
          box-shadow:0 8px 32px rgba(0,0,0,.1);
          transition:background .3s, transform .3s;
        }
        .stat-card:hover { background:rgba(255,255,255,.25); transform:translateY(-5px); }

        /* feature banner */
        .feat-banner-item {
          display:flex; align-items:center; gap:14px;
          background:#fff; border:1.5px solid #ffedd5;
          border-radius:18px; padding:16px 20px;
          transition:all .25s;
          box-shadow:0 2px 10px rgba(0,0,0,.04);
        }
        .feat-banner-item:hover {
          border-color:#fb923c;
          box-shadow:0 8px 28px rgba(249,115,22,.12);
          transform:translateY(-4px);
        }

        /* CTA buttons — same as Home */
        .btn-primary {
          display:inline-flex; align-items:center; gap:8px;
          background:linear-gradient(to right,#f97316,#ea580c);
          color:#fff; font-weight:800; border-radius:18px;
          padding:16px 36px; font-size:1rem;
          box-shadow:0 8px 28px rgba(249,115,22,.35);
          transition:all .25s; border:none; cursor:pointer;
        }
        .btn-primary:hover {
          background:linear-gradient(to right,#ea580c,#dc2626);
          transform:scale(1.05); box-shadow:0 12px 36px rgba(249,115,22,.45);
        }
        .btn-outline {
          display:inline-flex; align-items:center; gap:8px;
          background:transparent; color:#fff; font-weight:700;
          border-radius:18px; padding:15px 34px; font-size:1rem;
          border:2px solid rgba(255,255,255,.7); cursor:pointer;
          transition:all .25s;
        }
        .btn-outline:hover {
          background:rgba(255,255,255,.12); border-color:#fff;
        }
      `}</style>

      <div className="text-gray-800">
        {/* ── HERO ── */}
        <section
          className="relative overflow-hidden text-white py-28 px-6 md:px-14"
          style={{
            background:
              "linear-gradient(135deg,#ff7b1d 0%,#e06010 60%,#c2410c 100%)",
          }}
        >
          <div className="absolute top-8 left-8 w-80 h-80 bg-yellow-300 rounded-full blur-3xl opacity-10 blob" />
          <div className="absolute bottom-8 right-8 w-96 h-96 bg-white rounded-full blur-3xl opacity-10 blob bd2" />

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div
              className="pill mb-6 justify-center anim-slideDown d0"
              style={{
                background: "rgba(255,255,255,.2)",
                color: "#fff",
                border: "1.5px solid rgba(255,255,255,.35)",
              }}
            >
              <Zap className="w-4 h-4" />
              WHAT WE OFFER
            </div>

            <h1
              className="text-5xl md:text-6xl font-black leading-tight mb-5 anim-slideDown d1"
              style={{ fontFamily: "'Fraunces',serif" }}
            >
              Our <span className="gradient-text">Services</span>
            </h1>

            <p className="text-xl text-orange-100 leading-relaxed max-w-2xl mx-auto mb-10 anim-fadeUp d2 font-medium">
              Fast, fresh, and reliable — discover every tool RushBaskets gives
              you to run a modern grocery business effortlessly.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center anim-fadeUp d3">
              <button
                onClick={() => navigate("/contact")}
                className="btn-primary"
                style={{ background: "#fff", color: "#f97316" }}
              >
                <HeartHandshake className="w-5 h-5" />
                Get In Touch
                <ChevronRight className="w-4 h-4" />
              </button>
              <button onClick={() => navigate("/")} className="btn-outline">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </button>
            </div>
          </div>
        </section>

        {/* Wave: Hero → Services */}
        <div
          style={{
            background: "linear-gradient(135deg,#ff7b1d,#c2410c)",
            marginTop: "-2px",
          }}
        >
          <svg
            viewBox="0 0 1440 80"
            className="w-full block"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,0 C360,80 1080,0 1440,60 L1440,80 L0,80 Z"
              fill="#fff7ed"
            />
          </svg>
        </div>

        {/* ── SERVICES GRID ── */}
        <section
          ref={ref("services")}
          className="py-24 px-6 md:px-14"
          style={{ background: "linear-gradient(to bottom,#fff7ed,#fff)" }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <div className="pill mb-5 justify-center">
                <ShoppingCart className="w-4 h-4" />
                CORE SERVICES
              </div>
              <h2
                className="text-4xl md:text-5xl font-black text-gray-900 mb-3"
                style={{ fontFamily: "'Fraunces',serif" }}
              >
                Everything You{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-red-500">
                  Need
                </span>
              </h2>
              <p className="text-gray-500 text-lg max-w-xl mx-auto font-medium">
                A complete toolkit to power your grocery operation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {services.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.title}
                    className={`svc-card ${visible.services ? `anim-scaleUp d${i}` : ""}`}
                    style={{ borderTopColor: s.borderColor }}
                  >
                    <div className={`icon-wrap bg-gradient-to-br ${s.grad}`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3
                      className="text-xl font-black mb-3"
                      style={{ color: s.titleColor }}
                    >
                      {s.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4 font-medium">
                      {s.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {s.tags.map((tag, ti) => (
                        <span
                          key={tag}
                          className={`tag-chip ${s.tagColors[ti]}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Wave: Services → How It Works */}
        <div style={{ background: "#fff", marginTop: "-2px" }}>
          <svg
            viewBox="0 0 1440 80"
            className="w-full block"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,60 C480,0 960,80 1440,20 L1440,80 L0,80 Z"
              fill="#fff7ed"
            />
          </svg>
        </div>

        {/* ── HOW IT WORKS ── */}
        <section ref={ref("how")} className="py-24 px-6 md:px-14 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="pill mb-5 justify-center">
                <Activity className="w-4 h-4" />
                HOW IT WORKS
              </div>
              <h2
                className="text-4xl md:text-5xl font-black text-gray-900 mb-3"
                style={{ fontFamily: "'Fraunces',serif" }}
              >
                From Setup to Sales in{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-red-500">
                  4 Steps
                </span>
              </h2>
              <p className="text-gray-500 text-lg max-w-xl mx-auto font-medium">
                Get your grocery store live and earning, fast
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {howItWorks.map((h, i) => {
                const Icon = h.icon;
                return (
                  <div
                    key={h.step}
                    className={`step-card ${visible.how ? `anim-fadeUp d${i}` : ""}`}
                  >
                    <div className="step-badge">{h.step}</div>
                    <div
                      className={`icon-wrap bg-gradient-to-br ${h.color} mx-auto mt-2`}
                    >
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="font-black text-gray-900 text-lg mb-2">
                      {h.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed font-medium">
                      {h.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Wave: How It Works → Why Choose */}
        <div
          style={{
            background: "linear-gradient(135deg,#fff7ed,#ffedd5)",
            marginTop: "-2px",
          }}
        >
          <svg
            viewBox="0 0 1440 80"
            className="w-full block"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,20 C360,80 1080,0 1440,50 L1440,80 L0,80 Z"
              fill="#fff"
            />
          </svg>
        </div>

        {/* ── WHY CHOOSE US ── */}
        <section
          ref={ref("why")}
          className="py-24 px-6 md:px-14 relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg,#fff7ed 0%,#ffedd5 100%)",
          }}
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-300 rounded-full blur-3xl opacity-10 blob" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-yellow-200 rounded-full blur-3xl opacity-10 blob bd2" />

          <div className="max-w-5xl mx-auto relative z-10">
            <div className="text-center mb-12">
              <div className="pill mb-5 justify-center">
                <Leaf className="w-4 h-4" />
                WHY RUSHBASKETS
              </div>
              <h2
                className="text-4xl md:text-5xl font-black text-gray-900 mb-3"
                style={{ fontFamily: "'Fraunces',serif" }}
              >
                Built for Grocery,{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-red-500">
                  By Experts
                </span>
              </h2>
              <p className="text-gray-500 text-lg max-w-xl mx-auto font-medium">
                Premium features that give your business a real edge
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {whyChoose.map((w, i) => {
                const Icon = w.icon;
                return (
                  <div
                    key={w.title}
                    className={`why-card ${visible.why ? `anim-fadeUp d${i}` : ""}`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 ${w.bg}`}
                      >
                        <Icon className={`w-7 h-7 ${w.color}`} />
                      </div>
                      <div>
                        <h3 className="font-black text-gray-900 text-lg mb-1">
                          {w.title}
                        </h3>
                        <p className="text-gray-500 text-sm leading-relaxed font-medium">
                          {w.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Wave: Why Choose → Stats */}
        <div
          style={{
            background: "linear-gradient(to right,#f97316,#ea580c,#dc2626)",
            marginTop: "-2px",
          }}
        >
          <svg
            viewBox="0 0 1440 80"
            className="w-full block"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,50 C480,0 960,80 1440,30 L1440,80 L0,80 Z"
              fill="#ffedd5"
            />
          </svg>
        </div>

        {/* ── STATS ── */}
        <section
          className="relative py-20 px-6 overflow-hidden"
          style={{
            background: "linear-gradient(to right,#f97316,#ea580c,#dc2626)",
          }}
        >
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl opacity-10" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-orange-300 rounded-full blur-3xl opacity-10" />
          <div className="max-w-5xl mx-auto relative z-10">
            <div className="text-center mb-14">
              <h2
                className="text-3xl sm:text-5xl font-black text-white mb-4"
                style={{ fontFamily: "'Fraunces',serif" }}
              >
                Trusted by Businesses Worldwide
              </h2>
              <p className="text-orange-100 text-lg max-w-xl mx-auto font-medium">
                Thousands of stores already growing with{" "}
                <strong className="text-white">RushBaskets</strong>
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map(({ value, label, icon: Icon }) => (
                <div key={label} className="stat-card">
                  <div className="flex justify-center mb-3 text-orange-200">
                    <Icon className="w-7 h-7" />
                  </div>
                  <div
                    className="text-4xl sm:text-5xl font-black mb-2 bg-clip-text text-transparent bg-gradient-to-b from-white to-amber-300"
                    style={{ fontFamily: "'Fraunces',serif" }}
                  >
                    {value}
                  </div>
                  <div className="text-orange-100 text-xs font-black uppercase tracking-widest">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Wave: Stats → Feature Banner */}
        <div style={{ background: "#fff", marginTop: "-2px" }}>
          <svg
            viewBox="0 0 1440 80"
            className="w-full block"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,30 C360,80 1080,0 1440,60 L1440,80 L0,80 Z"
              fill="#f97316"
            />
          </svg>
        </div>

        {/* ── FEATURE BANNER ── */}
        <section className="py-14 bg-white border-b border-orange-100">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {featureBanner.map(({ icon: Icon, title, sub, color, bg }) => (
                <div key={title} className="feat-banner-item">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 ${bg}`}
                  >
                    <Icon className={`w-6 h-6 ${color}`} />
                  </div>
                  <div>
                    <div className="font-black text-gray-900 text-sm">
                      {title}
                    </div>
                    <div className="text-xs text-gray-500 font-semibold mt-0.5">
                      {sub}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Wave: Feature Banner → CTA */}
        <div
          style={{
            background: "linear-gradient(135deg,#ff7b1d,#c2410c)",
            marginTop: "-2px",
          }}
        >
          <svg
            viewBox="0 0 1440 80"
            className="w-full block"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,60 C480,10 960,80 1440,20 L1440,80 L0,80 Z"
              fill="#fff"
            />
          </svg>
        </div>

        {/* ── CTA ── */}
        <section
          className="relative py-28 px-6 text-center overflow-hidden"
          style={{
            background: "linear-gradient(135deg,#ff7b1d 0%,#c2410c 100%)",
          }}
        >
          <div className="absolute top-0 left-10 w-64 h-64 bg-white rounded-full blur-3xl opacity-10 blob" />
          <div className="absolute bottom-0 right-10 w-80 h-80 bg-yellow-300 rounded-full blur-3xl opacity-10 blob bd2" />

          <div className="max-w-3xl mx-auto relative z-10">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-6 anim-float">
              <ShoppingCart className="w-10 h-10 text-white" />
            </div>
            <h2
              className="text-4xl md:text-5xl font-black text-white mb-5"
              style={{ fontFamily: "'Fraunces',serif" }}
            >
              Ready to Supercharge Your Grocery Store?
            </h2>
            <p className="text-orange-100 text-lg mb-10 max-w-xl mx-auto leading-relaxed font-medium">
              Join thousands of happy store owners using RushBaskets to manage
              orders, inventory, and deliveries — all from one place.
            </p>
            <button
              onClick={() => navigate("/contact")}
              className="group inline-flex items-center gap-3 bg-white text-orange-600 font-black text-lg px-10 py-5 rounded-2xl shadow-2xl hover:bg-orange-50 transition-all hover:scale-105"
            >
              <HeartHandshake className="w-6 h-6" />
              Contact Us
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
