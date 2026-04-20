import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import {
  Mail,
  Clock,
  ThumbsUp,
  Globe,
  Shield,
  MessageCircle,
  ArrowLeft,
  ShoppingCart,
  Package,
  HeartHandshake,
  Star,
  Smartphone,
  MapPin,
  Send,
  CheckCircle,
  Zap,
  HelpCircle,
} from "lucide-react";

// ── Data ──────────────────────────────────────────────────────────────────────

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    detail: "info.rushbaskets@gmail.com",
    subDetail: "24/7 Support Available",
    borderColor: "#f97316",
    titleColor: "#ea580c",
    grad: "from-orange-400 to-orange-600",
    bg: "#fff7ed",
    link: "mailto:info.rushbaskets@gmail.com",
  },
];

const quickFacts = [
  {
    icon: Clock,
    title: "Response Time",
    desc: "Within 24 hours",
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    icon: ThumbsUp,
    title: "Satisfaction Rate",
    desc: "4.9★ customer satisfaction",
    color: "text-amber-500",
    bg: "bg-amber-50",
  },
  {
    icon: Globe,
    title: "Languages",
    desc: "English, Hindi & more",
    color: "text-green-500",
    bg: "bg-green-50",
  },
  {
    icon: Shield,
    title: "Secure Support",
    desc: "All data fully encrypted",
    color: "text-orange-500",
    bg: "bg-orange-50",
  },
];

const faqs = [
  {
    q: "How quickly will I get a response?",
    a: "We typically respond within 24 hours on any day of the week.",
  },
  {
    q: "Can I track my grocery order live?",
    a: "Yes! Once dispatched, you'll receive a live tracking link directly in the app.",
  },
  {
    q: "Is 24/7 support really available?",
    a: "Absolutely — our support team is available round the clock for any issue.",
  },
  {
    q: "How do I register my store on RushBaskets?",
    a: "Contact us via this form or email and our onboarding team will guide you.",
  },
];

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
    link: "https://www.instagram.com/rushbaskets?igsh=aWtsdmJ1Y2VocDB3",
  },
];

const stats = [
  { value: "10K+", label: "Orders Delivered", icon: ShoppingCart },
  { value: "2500+", label: "Products Listed", icon: Package },
  { value: "24/7", label: "Support Available", icon: HeartHandshake },
  { value: "4.9★", label: "Customer Rating", icon: Star },
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

export default function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [focused, setFocused] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [visible, setVisible] = useState({});
  const refs = useRef({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const observers = [];
    Object.entries(refs.current).forEach(([key, el]) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([e]) => {
          if (e.isIntersecting) setVisible((v) => ({ ...v, [key]: true }));
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
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    }, 3500);
  };

  const inputCls = (field) =>
    `w-full px-4 py-3 border-2 rounded-xl focus:outline-none text-sm transition-all duration-200 font-semibold ${
      focused === field
        ? "border-orange-400 shadow-sm bg-orange-50/30"
        : "border-gray-200 bg-white"
    }`;

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

        @keyframes fadeUp {
          from { opacity:0; transform:translateY(28px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes slideLeft {
          from { opacity:0; transform:translateX(-32px); }
          to   { opacity:1; transform:translateX(0); }
        }
        @keyframes slideRight {
          from { opacity:0; transform:translateX(32px); }
          to   { opacity:1; transform:translateX(0); }
        }
        @keyframes slideDown {
          from { opacity:0; transform:translateY(-24px); }
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
        @keyframes successPop {
          0%  { transform:scale(0.7); opacity:0; }
          60% { transform:scale(1.08); }
          100%{ transform:scale(1);   opacity:1; }
        }

        .anim-fadeUp    { animation:fadeUp    0.65s ease-out forwards; }
        .anim-slideLeft { animation:slideLeft  0.65s ease-out forwards; }
        .anim-slideRight{ animation:slideRight 0.65s ease-out forwards; }
        .anim-slideDown { animation:slideDown  0.65s ease-out forwards; }
        .anim-scaleUp   { animation:scaleUp   0.6s ease-out forwards; }
        .anim-float     { animation:float 4s ease-in-out infinite; }
        .anim-successPop{ animation:successPop 0.5s ease-out forwards; }

        .d0{animation-delay:0s}  .d1{animation-delay:.1s} .d2{animation-delay:.2s}
        .d3{animation-delay:.3s} .d4{animation-delay:.4s}

        /* pill — same as Home */
        .pill {
          display:inline-flex; align-items:center; gap:6px;
          background:#fff7ed; color:#c2410c;
          border:1.5px solid #fed7aa; border-radius:9999px;
          padding:7px 16px; font-size:.74rem; font-weight:800; letter-spacing:.06em;
        }

        .gradient-text {
          background:linear-gradient(90deg,#fde68a,#fff 60%,#fde68a);
          background-size:200% auto;
          -webkit-background-clip:text; -webkit-text-fill-color:transparent;
          background-clip:text; animation:shimmerSlide 3s linear infinite;
        }

        /* company name badge in hero */
        .company-badge {
          display:inline-flex; align-items:center; gap:8px;
          background:rgba(255,255,255,.15); backdrop-filter:blur(8px);
          border:1.5px solid rgba(255,255,255,.4);
          border-radius:9999px; padding:6px 18px;
          font-size:.8rem; font-weight:900; letter-spacing:.1em;
          color:#fff; text-transform:uppercase;
        }
        .company-badge-dot {
          width:7px; height:7px; border-radius:50%;
          background:#fde68a; flex-shrink:0;
          box-shadow:0 0 6px #fde68a;
        }

        /* icon wrap */
        .icon-wrap {
          display:inline-flex; align-items:center; justify-content:center;
          width:60px; height:60px; border-radius:18px; color:#fff;
          margin-bottom:18px; box-shadow:0 8px 20px rgba(0,0,0,.16);
          transition:transform .3s;
        }

        /* contact info card */
        .info-card {
          background:#fff; border-radius:24px;
          border:1.5px solid #ffedd5;
          box-shadow:0 4px 20px rgba(0,0,0,.05);
          padding:32px 26px; border-top:4px solid;
          text-align:center;
          transition:transform .3s ease, box-shadow .3s ease, border-color .3s;
          opacity:0; text-decoration:none; display:block;
        }
        .info-card:hover {
          transform:translateY(-10px);
          box-shadow:0 24px 56px rgba(249,115,22,.13);
          border-color:#fb923c;
        }
        .info-card:hover .icon-wrap { transform:scale(1.1) rotate(5deg); }

        /* form card */
        .form-card {
          background:#fff; border-radius:24px;
          box-shadow:0 6px 28px rgba(0,0,0,.07);
          padding:36px 32px;
          border-top:4px solid #f97316;
          border:1.5px solid #ffedd5;
        }

        .submit-btn {
          width:100%;
          background:linear-gradient(135deg,#f97316,#c2410c);
          color:#fff; font-weight:800; font-size:1rem;
          border:none; border-radius:14px; padding:14px;
          cursor:pointer; display:inline-flex; align-items:center;
          justify-content:center; gap:8px;
          transition:all .25s;
          box-shadow:0 4px 16px rgba(249,115,22,.35);
        }
        .submit-btn:hover {
          box-shadow:0 8px 28px rgba(249,115,22,.45);
          transform:translateY(-2px);
        }
        .submit-btn:disabled { opacity:.6; cursor:not-allowed; transform:none; }

        /* side card */
        .side-card {
          background:#fff; border-radius:20px;
          box-shadow:0 4px 20px rgba(0,0,0,.06);
          padding:26px 24px;
          border:1.5px solid #ffedd5;
          border-top:4px solid #f97316;
        }

        /* faq item */
        .faq-item {
          border-radius:20px; padding:22px 24px;
          border-left:4px solid #f97316;
          background:#fff;
          border:1.5px solid #ffedd5;
          border-left:4px solid #f97316;
          box-shadow:0 2px 10px rgba(0,0,0,.04);
          transition:box-shadow .25s, transform .25s, border-color .25s;
          opacity:0;
        }
        .faq-item:hover {
          box-shadow:0 12px 32px rgba(249,115,22,.12);
          transform:translateY(-4px);
          border-color:#fb923c;
        }

        /* social btn */
        .social-btn {
          width:48px; height:48px; border-radius:50%;
          display:flex; align-items:center; justify-content:center;
          font-size:1.3rem; color:#fff; text-decoration:none;
          transition:transform .25s, box-shadow .25s;
        }
        .social-btn:hover {
          transform:translateY(-5px) scale(1.12);
          box-shadow:0 10px 24px rgba(0,0,0,.22);
        }

        /* success banner */
        .success-banner {
          background:linear-gradient(135deg,#22c55e,#16a34a);
          color:#fff; border-radius:14px; padding:14px 18px;
          display:flex; align-items:center; gap:10px;
          font-weight:700; font-size:.9rem; margin-bottom:20px;
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
          transition:all .25s; box-shadow:0 2px 10px rgba(0,0,0,.04);
        }
        .feat-item:hover {
          border-color:#fb923c;
          box-shadow:0 8px 28px rgba(249,115,22,.12);
          transform:translateY(-4px);
        }

        /* outline button */
        .btn-outline {
          display:inline-flex; align-items:center; gap:8px;
          background:transparent; color:#fff; font-weight:700;
          border-radius:18px; padding:15px 34px; font-size:1rem;
          border:2px solid rgba(255,255,255,.7); cursor:pointer;
          transition:all .25s;
        }
        .btn-outline:hover { background:rgba(255,255,255,.12); border-color:#fff; }

        /* company name strip under form heading */
        .company-name-strip {
          display:inline-flex; align-items:center; gap:8px;
          background:linear-gradient(90deg,#fff7ed,#ffedd5);
          border:1.5px solid #fed7aa; border-radius:10px;
          padding:6px 14px; margin-bottom:10px;
        }
        .company-name-strip span {
          font-size:.72rem; font-weight:900; letter-spacing:.1em;
          color:#c2410c; text-transform:uppercase;
        }
        .company-name-strip-dot {
          width:6px; height:6px; border-radius:50%;
          background:#f97316; flex-shrink:0;
        }
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
            {/* ── COMPANY NAME BADGE (added) ── */}
            <div className="flex justify-center mb-4 anim-slideDown d0">
              <div className="company-badge">
                <div className="company-badge-dot" />
                Rush Baskets Groser
              </div>
            </div>

            <div
              className="pill mb-6 justify-center anim-slideDown"
              style={{
                background: "rgba(255,255,255,.2)",
                color: "#fff",
                border: "1.5px solid rgba(255,255,255,.35)",
                animationDelay: ".08s",
              }}
            >
              <MessageCircle className="w-4 h-4" />
              CONTACT US
            </div>

            <div className="flex justify-center mb-4">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center anim-float">
                <HeartHandshake className="w-10 h-10 text-white" />
              </div>
            </div>

            <h1
              className="text-5xl md:text-6xl font-black leading-tight mb-5 anim-slideDown d1"
              style={{ fontFamily: "'Fraunces',serif" }}
            >
              Get In <span className="gradient-text">Touch</span>
            </h1>

            <p className="text-xl text-orange-100 leading-relaxed max-w-2xl mx-auto mb-10 anim-fadeUp d2 font-medium">
              Have a question, a suggestion, or want to onboard your store? We'd
              love to hear from you — anytime, any day.
            </p>

            <div className="flex justify-center anim-fadeUp d3">
              <button onClick={() => navigate("/")} className="btn-outline">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </button>
            </div>
          </div>
        </section>

        {/* Wave: Hero → Contact Cards */}
        <div style={{ background: "#fff7ed", marginTop: "-2px" }}>
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

        {/* ── CONTACT INFO CARDS ── */}
        <section
          ref={ref("cards")}
          className="py-16 px-6 md:px-14"
          style={{ background: "#fff7ed" }}
        >
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <div className="pill mb-5 justify-center">
                <Mail className="w-4 h-4" />
                REACH US
              </div>
              <h2
                className="text-4xl md:text-5xl font-black text-gray-900 mb-3"
                style={{ fontFamily: "'Fraunces',serif" }}
              >
                Contact{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-red-500">
                  Information
                </span>
              </h2>
              {/* ── COMPANY NAME under section heading (added) ── */}
              <p
                className="text-gray-600 text-base font-black tracking-widest uppercase mb-2"
                style={{ letterSpacing: ".12em" }}
              >
                Rush Baskets Groser
              </p>
              <p className="text-gray-500 text-lg font-medium">
                Choose your preferred way to connect
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {contactInfo.map((info, i) => {
                const Icon = info.icon;
                return (
                  <a
                    key={info.title}
                    href={info.link}
                    className={`info-card ${visible.cards ? `anim-scaleUp d${i}` : ""}`}
                    style={{ borderTopColor: info.borderColor }}
                  >
                    <div
                      className={`icon-wrap bg-gradient-to-br ${info.grad} mx-auto`}
                    >
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3
                      className="text-xl font-black mb-2"
                      style={{ color: info.titleColor }}
                    >
                      {info.title}
                    </h3>
                    <p className="text-gray-800 font-bold text-sm mb-1">
                      {info.detail}
                    </p>
                    <p className="text-gray-400 text-xs font-semibold">
                      {info.subDetail}
                    </p>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* Wave: Cards → Form */}
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

        {/* ── FORM + SIDEBAR ── */}
        <section ref={ref("form")} className="py-16 px-6 md:px-14 bg-white">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* LEFT: Form */}
            <div
              className={`lg:col-span-3 ${visible.form ? "anim-slideLeft d0" : "opacity-0"}`}
            >
              <div className="form-card">
                {/* ── COMPANY NAME inside form card (added) ── */}
                <div className="company-name-strip">
                  <div className="company-name-strip-dot" />
                  <span>Rush Baskets Groser</span>
                </div>

                <div className="pill mb-4">
                  <Send className="w-4 h-4" />
                  SEND A MESSAGE
                </div>
                <h2
                  className="text-2xl font-black text-gray-900 mb-1 mt-1"
                  style={{ fontFamily: "'Fraunces',serif" }}
                >
                  We're Listening
                </h2>
                <p className="text-gray-500 text-sm mb-6 font-medium">
                  Fill out the form and we'll get back within 24 hours.
                </p>

                {submitted && (
                  <div className="success-banner anim-successPop">
                    <CheckCircle className="w-6 h-6 flex-shrink-0" />
                    <span>
                      Message sent! We'll be in touch with you shortly.
                    </span>
                  </div>
                )}

                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-bold text-sm mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocused("name")}
                        onBlur={() => setFocused(null)}
                        className={inputCls("name")}
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-bold text-sm mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onFocus={() => setFocused("phone")}
                        onBlur={() => setFocused(null)}
                        className={inputCls("phone")}
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-bold text-sm mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocused("email")}
                      onBlur={() => setFocused(null)}
                      className={inputCls("email")}
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-bold text-sm mb-1">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onFocus={() => setFocused("subject")}
                      onBlur={() => setFocused(null)}
                      className={inputCls("subject")}
                      placeholder="How can we help?"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-bold text-sm mb-1">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      rows={5}
                      onChange={handleChange}
                      onFocus={() => setFocused("message")}
                      onBlur={() => setFocused(null)}
                      className={`${inputCls("message")} resize-none`}
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  <button
                    onClick={handleSubmit}
                    disabled={submitted}
                    className="submit-btn"
                  >
                    {submitted ? (
                      <>
                        <CheckCircle className="w-5 h-5" /> Message Sent!
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" /> Send Message
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* RIGHT: Sidebar */}
            <div
              className={`lg:col-span-2 flex flex-col gap-6 ${visible.form ? "anim-slideRight d1" : "opacity-0"}`}
            >
              {/* Map */}
              <div className="side-card">
                <div className="pill mb-4">
                  <MapPin className="w-4 h-4" />
                  LOCATION
                </div>
                <div
                  className="mt-3 rounded-xl overflow-hidden"
                  style={{ border: "1.5px solid #fed7aa" }}
                >
                  <iframe
                    title="RushBaskets Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56644.!2d78.0500!3d27.5934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397353b5e29a831b%3A0x644ffc921de19add!2sHathras%2C%20Uttar%20Pradesh%20204101!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    width="100%"
                    height="200"
                    style={{ border: 0, display: "block" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <a
                  href="https://maps.google.com/?q=Hathras,Uttar+Pradesh+204101"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 mt-3 text-orange-500 text-sm font-bold hover:text-orange-700 transition-colors no-underline"
                >
                  <MapPin className="w-4 h-4" />
                  Open in Google Maps →
                </a>
              </div>

              {/* Quick Facts */}
              <div className="side-card">
                <div className="pill mb-4">
                  <Zap className="w-4 h-4" />
                  QUICK FACTS
                </div>
                <div className="space-y-4 mt-3">
                  {quickFacts.map(({ icon: Icon, title, desc, color, bg }) => (
                    <div key={title} className="flex items-start gap-3">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${bg}`}
                      >
                        <Icon className={`w-5 h-5 ${color}`} />
                      </div>
                      <div>
                        <p className="font-black text-gray-800 text-sm">
                          {title}
                        </p>
                        <p className="text-gray-500 text-xs font-semibold">
                          {desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social */}
              <div className="side-card">
                <div className="pill mb-4">
                  <Globe className="w-4 h-4" />
                  FOLLOW US
                </div>
                <div className="flex gap-3 mt-3">
                  {socialLinks.map((s) => (
                    <a
                      key={s.name}
                      href={s.link}
                      className="social-btn"
                      style={{ background: s.color }}
                      aria-label={s.name}
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Wave: Form → Stats */}
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
              d="M0,20 C360,80 1080,0 1440,50 L1440,80 L0,80 Z"
              fill="#fff"
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

        {/* Wave: Stats → FAQ */}
        <div style={{ background: "#fff7ed", marginTop: "-2px" }}>
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

        {/* ── FAQ ── */}
        <section
          ref={ref("faq")}
          className="py-20 px-6 md:px-14"
          style={{ background: "#fff7ed" }}
        >
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="pill mb-5 justify-center">
                <HelpCircle className="w-4 h-4" />
                FAQ
              </div>
              <h2
                className="text-4xl md:text-5xl font-black text-gray-900 mb-3"
                style={{ fontFamily: "'Fraunces',serif" }}
              >
                Frequently Asked{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-red-500">
                  Questions
                </span>
              </h2>
              <p className="text-gray-500 text-lg font-medium">
                Quick answers to common queries
              </p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className={`faq-item ${visible.faq ? `anim-fadeUp d${i}` : ""}`}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ShoppingCart className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-black text-gray-800 text-base mb-2">
                        {faq.q}
                      </h4>
                      <p className="text-gray-500 text-sm leading-relaxed font-medium">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Wave: FAQ → Feature Strip */}
        <div style={{ background: "#fff", marginTop: "-2px" }}>
          <svg
            viewBox="0 0 1440 80"
            className="w-full block"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,30 C360,80 1080,0 1440,60 L1440,80 L0,80 Z"
              fill="#fff7ed"
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
            {/* ── COMPANY NAME in CTA footer (added) ── */}
            <div className="flex justify-center mb-5">
              <div className="company-badge">
                <div className="company-badge-dot" />
                Rush Baskets Groser
              </div>
            </div>

            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-6 anim-float">
              <Smartphone className="w-10 h-10 text-white" />
            </div>
            <h2
              className="text-4xl md:text-5xl font-black text-white mb-5"
              style={{ fontFamily: "'Fraunces',serif" }}
            >
              Ready to Grow Your Grocery Business?
            </h2>
            <p className="text-orange-100 text-lg mb-10 max-w-xl mx-auto leading-relaxed font-medium">
              Download RushBaskets today and manage orders, inventory, and
              deliveries all from one powerful dashboard.
            </p>
            <a
              href="https://play.google.com/store/games?hl=en_IN"
              className="group inline-flex items-center gap-3 bg-white text-orange-600 font-black text-lg px-10 py-5 rounded-2xl shadow-2xl hover:bg-orange-50 transition-all hover:scale-105"
            >
              <Smartphone className="w-6 h-6" />
              Download the App
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
