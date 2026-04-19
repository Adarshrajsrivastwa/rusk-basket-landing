import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  Target,
  Rocket,
  Store,
  Truck,
  ShoppingCart,
  CheckCircle,
  Package,
  Shield,
  Leaf,
  Zap,
  HeartHandshake,
  TrendingUp,
  Star,
  ChevronRight,
  ArrowLeft,
  Smartphone,
  MapPin,
  BadgeCheck,
  Clock,
  Users,
  BarChart3,
} from "lucide-react";

// ── Data ──────────────────────────────────────────────────────────────────────

const missionVision = [
  {
    icon: Target,
    title: "Our Mission",
    desc: "To create a smarter, faster grocery ecosystem that connects store owners, delivery teams, and customers — making fresh food accessible to every household, every day.",
    borderColor: "#f97316",
    titleColor: "#ea580c",
    grad: "from-orange-400 to-orange-600",
    bg: "bg-orange-50",
  },
  {
    icon: Rocket,
    title: "Our Vision",
    desc: "To become the most trusted grocery management platform in the country — recognised for reliability, innovation, and sustainable growth for every stakeholder.",
    borderColor: "#22c55e",
    titleColor: "#16a34a",
    grad: "from-green-500 to-emerald-600",
    bg: "bg-green-50",
  },
];

const howItWorks = [
  {
    icon: Store,
    title: "Store Owner",
    desc: "Add products, manage stock levels, set pricing, and monitor daily sales — all from a single intuitive dashboard.",
    borderColor: "#f97316",
    titleColor: "#ea580c",
    grad: "from-orange-400 to-orange-600",
  },
  {
    icon: Truck,
    title: "Delivery Team",
    desc: "Receive dispatch orders, follow optimised routes, and update delivery status in real-time via the driver app.",
    borderColor: "#3b82f6",
    titleColor: "#2563eb",
    grad: "from-blue-400 to-blue-600",
  },
  {
    icon: ShoppingCart,
    title: "Customer",
    desc: "Browse fresh products, place orders in seconds, and track the delivery live — right from their phone.",
    borderColor: "#22c55e",
    titleColor: "#16a34a",
    grad: "from-green-500 to-emerald-600",
  },
];

const teamValues = [
  {
    icon: Leaf,
    title: "Freshness First",
    desc: "We prioritise quality at every step — from supplier to doorstep.",
    color: "text-green-500",
    bg: "bg-green-50",
  },
  {
    icon: Zap,
    title: "Speed & Efficiency",
    desc: "Fast operations mean happy customers and more revenue for stores.",
    color: "text-amber-500",
    bg: "bg-amber-50",
  },
  {
    icon: HeartHandshake,
    title: "Trust & Transparency",
    desc: "No hidden fees, no surprises. Everything is clear and upfront.",
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    icon: TrendingUp,
    title: "Growth Mindset",
    desc: "We build tools that scale with your business as it grows.",
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

const whoWeArePoints = [
  { icon: BadgeCheck, text: "Verified Suppliers", color: "text-green-500" },
  { icon: Truck, text: "Fast Delivery", color: "text-blue-500" },
  { icon: Package, text: "Stock Alerts", color: "text-orange-500" },
  { icon: Shield, text: "Secure Payments", color: "text-rose-500" },
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
        { threshold: 0.12 },
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
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=Fraunces:wght@700;900&display=swap');
        *,*::before,*::after { box-sizing:border-box; font-family:'Plus Jakarta Sans',sans-serif; }
        body { margin:0; padding:0; background:#fff; }

        @keyframes blob {
          0%,100%{ transform:translate(0,0) scale(1); }
          33%    { transform:translate(26px,-42px) scale(1.07); }
          66%    { transform:translate(-16px,16px) scale(0.94); }
        }
        .blob-anim { animation:blob 9s infinite ease-in-out; }
        .bd2 { animation-delay:2.4s; }
        .bd4 { animation-delay:4.7s; }

        @keyframes fadeUp {
          from { opacity:0; transform:translateY(32px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes slideLeft {
          from { opacity:0; transform:translateX(-36px); }
          to   { opacity:1; transform:translateX(0); }
        }
        @keyframes slideRight {
          from { opacity:0; transform:translateX(36px); }
          to   { opacity:1; transform:translateX(0); }
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

        .anim-fadeUp    { animation:fadeUp    0.7s ease-out forwards; }
        .anim-slideLeft { animation:slideLeft  0.7s ease-out forwards; }
        .anim-slideRight{ animation:slideRight 0.7s ease-out forwards; }
        .anim-slideDown { animation:slideDown  0.7s ease-out forwards; }
        .anim-scaleUp   { animation:scaleUp   0.65s ease-out forwards; }
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

        /* shimmer gradient text */
        .gradient-text {
          background:linear-gradient(90deg,#fde68a,#fff 60%,#fde68a);
          background-size:200% auto;
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
          background-clip:text;
          animation:shimmerSlide 3s linear infinite;
        }

        /* icon wrap */
        .icon-wrap {
          display:inline-flex; align-items:center; justify-content:center;
          width:60px; height:60px; border-radius:18px; color:#fff;
          margin-bottom:18px; box-shadow:0 8px 20px rgba(0,0,0,.16);
          transition:transform .3s;
        }

        /* info cards */
        .info-card {
          background:#fff; border-radius:24px;
          border:1.5px solid #ffedd5;
          box-shadow:0 4px 20px rgba(0,0,0,.05);
          padding:32px 26px; border-top:4px solid;
          transition:transform .3s ease, box-shadow .3s ease, border-color .3s;
          opacity:0;
        }
        .info-card:hover {
          transform:translateY(-10px);
          box-shadow:0 24px 56px rgba(249,115,22,.13);
          border-color:#fb923c;
        }
        .info-card:hover .icon-wrap { transform:scale(1.1) rotate(5deg); }

        /* value cards */
        .value-card {
          background:#fff; border-radius:20px;
          border:1.5px solid #f1f5f9;
          box-shadow:0 4px 18px rgba(0,0,0,.05);
          padding:28px 24px;
          transition:transform .3s, box-shadow .3s, border-color .3s;
          opacity:0;
          display:flex; align-items:flex-start; gap:16px;
        }
        .value-card:hover {
          transform:translateY(-8px);
          box-shadow:0 20px 48px rgba(249,115,22,.12);
          border-color:#fb923c;
        }

        /* stat card */
        .stat-card {
          background:rgba(255,255,255,.15); backdrop-filter:blur(12px);
          border-radius:22px; padding:28px; text-align:center;
          box-shadow:0 8px 32px rgba(0,0,0,.1);
          transition:background .3s, transform .3s;
        }
        .stat-card:hover { background:rgba(255,255,255,.25); transform:translateY(-5px); }

        /* feature banner item */
        .feat-item {
          display:flex; align-items:center; gap:14px;
          background:#fff; border:1.5px solid #ffedd5;
          border-radius:18px; padding:16px 20px;
          transition:all .25s;
          box-shadow:0 2px 10px rgba(0,0,0,.04);
        }
        .feat-item:hover {
          border-color:#fb923c;
          box-shadow:0 8px 28px rgba(249,115,22,.12);
          transform:translateY(-4px);
        }

        /* trust badge */
        .tbadge {
          display:inline-flex; align-items:center; gap:8px;
          background:#fff; border:1.5px solid #fed7aa; border-radius:9999px;
          padding:8px 18px; font-size:.82rem; font-weight:700; color:#374151;
          box-shadow:0 2px 8px rgba(0,0,0,.04); transition:all .2s;
        }
        .tbadge:hover { border-color:#fb923c; box-shadow:0 4px 14px rgba(249,115,22,.14); }

        /* buttons */
        .btn-primary {
          display:inline-flex; align-items:center; gap:8px;
          background:#fff; color:#f97316; font-weight:800;
          border-radius:18px; padding:16px 36px; font-size:1rem;
          box-shadow:0 8px 28px rgba(0,0,0,.15);
          transition:all .25s; border:none; cursor:pointer;
        }
        .btn-primary:hover {
          background:#fff7ed; transform:scale(1.05);
          box-shadow:0 12px 36px rgba(0,0,0,.2);
        }
        .btn-outline {
          display:inline-flex; align-items:center; gap:8px;
          background:transparent; color:#fff; font-weight:700;
          border-radius:18px; padding:15px 34px; font-size:1rem;
          border:2px solid rgba(255,255,255,.7); cursor:pointer;
          transition:all .25s;
        }
        .btn-outline:hover { background:rgba(255,255,255,.12); border-color:#fff; }
      `}</style>

      <div className="text-gray-800">
        {/* ── HERO ── */}
        <section
          className="relative text-white py-28 px-6 md:px-14 overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg,#ff7b1d 0%,#e06010 60%,#c2410c 100%)",
          }}
        >
          <div className="absolute top-8 left-8 w-80 h-80 bg-yellow-300 rounded-full blur-3xl opacity-10 blob-anim" />
          <div className="absolute bottom-8 right-8 w-96 h-96 bg-white rounded-full blur-3xl opacity-10 blob-anim bd2" />

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div
              className="pill mb-6 justify-center anim-slideDown d0"
              style={{
                background: "rgba(255,255,255,.2)",
                color: "#fff",
                border: "1.5px solid rgba(255,255,255,.35)",
              }}
            >
              <Leaf className="w-4 h-4" />
              ABOUT US
            </div>

            <div className="flex justify-center mb-4">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center anim-float">
                <ShoppingCart className="w-10 h-10 text-white" />
              </div>
            </div>

            <h1
              className="text-5xl md:text-6xl font-black leading-tight mb-5 anim-slideDown d1"
              style={{ fontFamily: "'Fraunces',serif" }}
            >
              About <span className="gradient-text">RushBaskets</span>
            </h1>

            <p className="text-xl text-orange-100 leading-relaxed max-w-2xl mx-auto mb-10 anim-fadeUp d2 font-medium">
              Fast, fresh, and reliable — RushBaskets is the all-in-one grocery
              management platform built for store owners, delivery teams, and
              customers who demand better.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center anim-fadeUp d3">
              <button
                onClick={() => navigate("/contact")}
                className="btn-primary"
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

        {/* Wave: Hero → Who We Are */}
        <div style={{ background: "#fff", marginTop: "-2px" }}>
          <svg
            viewBox="0 0 1440 80"
            className="w-full block"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,0 C360,80 1080,0 1440,60 L1440,80 L0,80 Z"
              fill="#c2410c"
            />
          </svg>
        </div>

        {/* ── WHO WE ARE ── */}
        <section ref={ref("who")} className="py-24 px-6 md:px-14 bg-white">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
            {/* Illustration */}
            <div
              className={`md:w-1/2 flex justify-center ${visible.who ? "anim-slideLeft d0" : "opacity-0"}`}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-orange-200 to-red-200 rounded-[32px] opacity-25 blur-xl" />
                <div
                  style={{
                    width: "100%",
                    maxWidth: 440,
                    height: 320,
                    borderRadius: 28,
                    background: "linear-gradient(135deg,#ffedd5,#fed7aa)",
                    border: "3px solid #fed7aa",
                    boxShadow: "0 20px 56px rgba(249,115,22,.18)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 16,
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div className="absolute top-0 left-0 w-40 h-40 bg-orange-300 rounded-full blur-3xl opacity-20" />
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-yellow-200 rounded-full blur-3xl opacity-20" />
                  <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl flex items-center justify-center shadow-2xl anim-float relative z-10">
                    <ShoppingCart className="w-12 h-12 text-white" />
                  </div>
                  <p
                    className="font-black text-orange-600 text-xl relative z-10"
                    style={{ fontFamily: "'Fraunces',serif" }}
                  >
                    RushBaskets
                  </p>
                  <p className="text-orange-400 text-sm font-semibold relative z-10">
                    Fresh Grocery Management
                  </p>
                </div>
              </div>
            </div>

            {/* Text */}
            <div
              className={`md:w-1/2 ${visible.who ? "anim-slideRight d1" : "opacity-0"}`}
            >
              <div className="pill mb-6">
                <Leaf className="w-4 h-4" />
                WHO WE ARE
              </div>
              <h2
                className="text-4xl md:text-5xl font-black text-gray-900 mb-5"
                style={{ fontFamily: "'Fraunces',serif" }}
              >
                Fast, Fresh &{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-red-600">
                  Reliable
                </span>
              </h2>
              <p className="text-gray-500 leading-relaxed mb-4 font-medium">
                RushBaskets was founded to revolutionise how grocery businesses
                operate. We built an advanced e-commerce management platform for
                store owners, delivery managers, and admins — so you can control
                your entire operation from a single dashboard.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8 font-medium">
                From tracking fresh produce inventory to managing customer
                orders and analysing sales trends — we make grocery management
                effortless, scalable, and profitable.
              </p>
              <div className="flex flex-wrap gap-3">
                {whoWeArePoints.map(({ icon: Icon, text, color }) => (
                  <div key={text} className="tbadge">
                    <Icon className={`w-4 h-4 ${color}`} />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Wave: Who We Are → Mission & Vision */}
        <div style={{ background: "#fff7ed", marginTop: "-2px" }}>
          <svg
            viewBox="0 0 1440 80"
            className="w-full block"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,60 C480,0 960,80 1440,20 L1440,80 L0,80 Z"
              fill="#fff"
            />
          </svg>
        </div>

        {/* ── MISSION & VISION ── */}
        <section
          ref={ref("mv")}
          className="py-24 px-6 md:px-14"
          style={{ background: "#fff7ed" }}
        >
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <div className="pill mb-5 justify-center">
                <Target className="w-4 h-4" />
                PURPOSE
              </div>
              <h2
                className="text-4xl md:text-5xl font-black text-gray-900 mb-3"
                style={{ fontFamily: "'Fraunces',serif" }}
              >
                Our Mission &{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-red-500">
                  Vision
                </span>
              </h2>
              <p className="text-gray-500 text-lg font-medium">
                What drives us every single day
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {missionVision.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className={`info-card ${visible.mv ? `anim-scaleUp d${i}` : ""}`}
                    style={{ borderTopColor: item.borderColor }}
                  >
                    <div className={`icon-wrap bg-gradient-to-br ${item.grad}`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3
                      className="text-xl font-black mb-3"
                      style={{ color: item.titleColor }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Wave: Mission → How It Works */}
        <div style={{ background: "#fff", marginTop: "-2px" }}>
          <svg
            viewBox="0 0 1440 80"
            className="w-full block"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,20 C360,80 1080,0 1440,50 L1440,80 L0,80 Z"
              fill="#fff7ed"
            />
          </svg>
        </div>

        {/* ── HOW IT WORKS ── */}
        <section ref={ref("how")} className="py-24 px-6 md:px-14 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <div className="pill mb-5 justify-center">
                <BarChart3 className="w-4 h-4" />
                HOW IT WORKS
              </div>
              <h2
                className="text-4xl md:text-5xl font-black text-gray-900 mb-3"
                style={{ fontFamily: "'Fraunces',serif" }}
              >
                A Connected{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-red-500">
                  Ecosystem
                </span>
              </h2>
              <p className="text-gray-500 text-lg font-medium">
                Store owners, delivery teams, and customers — all in sync
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {howItWorks.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className={`info-card ${visible.how ? `anim-fadeUp d${i}` : ""}`}
                    style={{ borderTopColor: item.borderColor }}
                  >
                    <div className={`icon-wrap bg-gradient-to-br ${item.grad}`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3
                      className="text-xl font-black mb-3"
                      style={{ color: item.titleColor }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Wave: How It Works → Our Values */}
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
              d="M0,50 C480,0 960,80 1440,30 L1440,80 L0,80 Z"
              fill="#fff"
            />
          </svg>
        </div>

        {/* ── OUR VALUES ── */}
        <section
          ref={ref("values")}
          className="py-24 px-6 md:px-14 relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg,#fff7ed 0%,#ffedd5 100%)",
          }}
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-300 rounded-full blur-3xl opacity-10 blob-anim" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-yellow-200 rounded-full blur-3xl opacity-10 blob-anim bd2" />

          <div className="max-w-5xl mx-auto relative z-10">
            <div className="text-center mb-12">
              <div className="pill mb-5 justify-center">
                <Zap className="w-4 h-4" />
                OUR VALUES
              </div>
              <h2
                className="text-4xl md:text-5xl font-black text-gray-900 mb-3"
                style={{ fontFamily: "'Fraunces',serif" }}
              >
                What We{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-red-500">
                  Stand For
                </span>
              </h2>
              <p className="text-gray-500 text-lg font-medium">
                The principles that shape everything we build
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {teamValues.map((v, i) => {
                const Icon = v.icon;
                return (
                  <div
                    key={v.title}
                    className={`value-card ${visible.values ? `anim-fadeUp d${i}` : ""}`}
                  >
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 ${v.bg}`}
                    >
                      <Icon className={`w-7 h-7 ${v.color}`} />
                    </div>
                    <div>
                      <h3
                        className="font-black text-gray-900 text-lg mb-1"
                        style={{ color: "#ea580c" }}
                      >
                        {v.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed font-medium">
                        {v.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Wave: Values → Stats */}
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
              d="M0,30 C360,80 1080,0 1440,60 L1440,80 L0,80 Z"
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

        {/* Wave: Stats → Feature Strip */}
        <div style={{ background: "#fff", marginTop: "-2px" }}>
          <svg
            viewBox="0 0 1440 80"
            className="w-full block"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,50 C480,0 960,80 1440,20 L1440,80 L0,80 Z"
              fill="#f97316"
            />
          </svg>
        </div>

        {/* ── FEATURE STRIP ── */}
        <section className="py-14 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {featureBanner.map(({ icon: Icon, title, sub, color, bg }) => (
                <div key={title} className="feat-item">
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

        {/* Wave: Feature Strip → CTA */}
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
          <div className="absolute top-0 left-10 w-64 h-64 bg-white rounded-full blur-3xl opacity-10 blob-anim" />
          <div className="absolute bottom-0 right-10 w-80 h-80 bg-yellow-300 rounded-full blur-3xl opacity-10 blob-anim bd2" />

          <div className="max-w-3xl mx-auto relative z-10">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-6 anim-float">
              <Rocket className="w-10 h-10 text-white" />
            </div>
            <h2
              className="text-4xl md:text-5xl font-black text-white mb-5"
              style={{ fontFamily: "'Fraunces',serif" }}
            >
              Join the Future of Grocery Management
            </h2>
            <p className="text-orange-100 text-lg mb-10 max-w-xl mx-auto leading-relaxed font-medium">
              Whether you're a store owner, delivery manager, or just someone
              who loves fresh groceries — RushBaskets is built for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://play.google.com/store/games?hl=en_IN"
                className="group inline-flex items-center gap-3 bg-white text-orange-600 font-black text-lg px-10 py-5 rounded-2xl shadow-2xl hover:bg-orange-50 transition-all hover:scale-105"
              >
                <Smartphone className="w-6 h-6" />
                Download the App
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <button
                onClick={() => navigate("/contact")}
                className="btn-outline text-lg px-10 py-4"
              >
                <HeartHandshake className="w-5 h-5" />
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
