import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";

// ── Data ──────────────────────────────────────────────────────────────────────

const contactInfo = [
  {
    icon: "📧",
    title: "Email Us",
    detail: "info.rushbaskets@gmail.com",
    subDetail: "24/7 Support Available",
    borderColor: "#f97316",
    titleColor: "#ea580c",
    bg: "#fff7ed",
    link: "mailto:info.rushbaskets@gmail.com",
  },
];

const quickFacts = [
  { icon: "⏰", title: "Response Time", desc: "Within 24 hours" },
  {
    icon: "💯",
    title: "Satisfaction Rate",
    desc: "4.9★ customer satisfaction",
  },
  { icon: "🌐", title: "Languages", desc: "English, Hindi & more" },
  { icon: "🛡️", title: "Secure Support", desc: "All data fully encrypted" },
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
    `w-full px-4 py-3 border-2 rounded-xl focus:outline-none text-sm transition-all duration-200 ${
      focused === field ? "border-orange-400 shadow-sm" : "border-gray-200"
    }`;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');
        * { font-family: 'Poppins', sans-serif; box-sizing: border-box; }
        body { margin: 0; padding: 0; background: #fff; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideLeft {
          from { opacity: 0; transform: translateX(-32px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideRight {
          from { opacity: 0; transform: translateX(32px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-24px); }
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
        @keyframes successPop {
          0%   { transform: scale(0.7); opacity: 0; }
          60%  { transform: scale(1.08); }
          100% { transform: scale(1);   opacity: 1; }
        }

        .anim-fadeUp    { animation: fadeUp    0.65s ease-out forwards; }
        .anim-slideLeft { animation: slideLeft  0.65s ease-out forwards; }
        .anim-slideRight{ animation: slideRight 0.65s ease-out forwards; }
        .anim-slideDown { animation: slideDown  0.65s ease-out forwards; }
        .anim-scaleUp   { animation: scaleUp   0.6s ease-out forwards; }
        .anim-float     { animation: float 4s ease-in-out infinite; }
        .anim-successPop{ animation: successPop 0.5s ease-out forwards; }

        .d0{animation-delay:0s}  .d1{animation-delay:.1s} .d2{animation-delay:.2s}
        .d3{animation-delay:.3s} .d4{animation-delay:.4s} .d5{animation-delay:.5s}

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

        /* contact info cards */
        .info-card {
          border-radius: 18px;
          box-shadow: 0 4px 20px rgba(0,0,0,.07);
          padding: 28px 22px;
          border-top: 4px solid;
          text-align: center;
          transition: transform .25s, box-shadow .25s;
          opacity: 0;
          text-decoration: none;
          display: block;
        }
        .info-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 32px rgba(0,0,0,.12);
        }

        /* form */
        .form-card {
          background: #fff;
          border-radius: 20px;
          box-shadow: 0 6px 28px rgba(0,0,0,.08);
          padding: 36px 32px;
          border-top: 4px solid #ff7b1d;
        }
        .submit-btn {
          width: 100%;
          background: linear-gradient(135deg, #ff7b1d, #c2410c);
          color: #fff;
          font-weight: 700;
          font-size: 1rem;
          border: none;
          border-radius: 12px;
          padding: 14px;
          cursor: pointer;
          transition: opacity .2s, transform .2s, box-shadow .2s;
          box-shadow: 0 4px 16px rgba(255,123,29,.35);
        }
        .submit-btn:hover {
          opacity: .92;
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(255,123,29,.45);
        }
        .submit-btn:disabled { opacity: .6; cursor: not-allowed; transform: none; }

        /* side panels */
        .side-card {
          background: #fff;
          border-radius: 18px;
          box-shadow: 0 4px 20px rgba(0,0,0,.07);
          padding: 26px 24px;
          border-top: 4px solid #ff7b1d;
        }

        /* faq */
        .faq-item {
          border-radius: 14px;
          padding: 20px 22px;
          border-left: 4px solid #ff7b1d;
          background: #fff7ed;
          transition: box-shadow .2s, transform .2s;
          opacity: 0;
        }
        .faq-item:hover {
          box-shadow: 0 6px 20px rgba(0,0,0,.09);
          transform: translateY(-3px);
        }

        /* social */
        .social-btn {
          width: 48px; height: 48px;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.4rem;
          color: #fff;
          transition: transform .25s, box-shadow .25s;
          text-decoration: none;
        }
        .social-btn:hover {
          transform: translateY(-4px) scale(1.1);
          box-shadow: 0 8px 20px rgba(0,0,0,.2);
        }

        /* success */
        .success-banner {
          background: linear-gradient(135deg, #22c55e, #16a34a);
          color: #fff;
          border-radius: 12px;
          padding: 14px 18px;
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 600;
          font-size: .9rem;
          margin-bottom: 20px;
        }

        /* map placeholder */
        .map-placeholder {
          width: 100%;
          height: 200px;
          background: linear-gradient(135deg, #ffedd5, #fed7aa);
          border-radius: 14px;
          border: 1px solid #fed7aa;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
          text-align: center;
          padding: 16px;
        }

        /* blob */
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
              💬 CONTACT US
            </span>

            <div className="text-6xl my-4 anim-float">🤝</div>

            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-5 anim-slideDown d1">
              Get In <span className="gradient-text">Touch</span>
            </h1>

            <p className="text-xl text-orange-100 leading-relaxed max-w-2xl mx-auto mb-10 anim-fadeUp d2">
              Have a question, a suggestion, or want to onboard your store? We'd
              love to hear from you — anytime, any day.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center anim-fadeUp d3">
              <button
                onClick={() => navigate("/")}
                className="btn-outline-white"
              >
                ← Back to Home
              </button>
            </div>
          </div>
        </section>

        <style>{`.btn-outline-white{background:transparent;color:#fff;font-weight:600;border-radius:9999px;padding:13px 32px;font-size:1rem;border:2px solid rgba(255,255,255,.7);cursor:pointer;transition:background .2s;display:inline-flex;align-items:center;gap:8px;}.btn-outline-white:hover{background:rgba(255,255,255,.12);border-color:#fff;}`}</style>

        {/* ── CONTACT INFO CARDS ── */}
        <section
          ref={ref("cards")}
          className="py-16 px-6 md:px-12"
          style={{ background: "#fff7ed" }}
        >
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <span className="section-tag">📡 REACH US</span>
              <h2 className="text-3xl font-extrabold text-gray-800">
                Contact Information
              </h2>
              <p className="text-gray-500 mt-2">
                Choose your preferred way to connect
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
              {contactInfo.map((info, i) => (
                <a
                  key={info.title}
                  href={info.link}
                  className={`info-card ${visible.cards ? `anim-scaleUp d${i}` : ""}`}
                  style={{
                    borderTopColor: info.borderColor,
                    background: info.bg,
                  }}
                >
                  <div className="text-5xl mb-3">{info.icon}</div>
                  <h3
                    className="text-lg font-bold mb-1"
                    style={{ color: info.titleColor }}
                  >
                    {info.title}
                  </h3>
                  <p className="text-gray-800 font-semibold text-sm mb-1">
                    {info.detail}
                  </p>
                  <p className="text-gray-400 text-xs">{info.subDetail}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── FORM + SIDEBAR ── */}
        <section ref={ref("form")} className="py-16 px-6 md:px-12 bg-white">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* ── LEFT: Form ── */}
            <div
              className={`lg:col-span-3 ${visible.form ? "anim-slideLeft d0" : "opacity-0"}`}
            >
              <div className="form-card">
                <span className="section-tag">✉️ SEND A MESSAGE</span>
                <h2 className="text-2xl font-extrabold text-gray-800 mb-1 mt-1">
                  We're Listening
                </h2>
                <p className="text-gray-500 text-sm mb-6">
                  Fill out the form and we'll get back within 24 hours.
                </p>

                {submitted && (
                  <div className="success-banner anim-successPop">
                    <span className="text-2xl">✅</span>
                    <span>
                      Message sent! We'll be in touch with you shortly.
                    </span>
                  </div>
                )}

                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-semibold text-sm mb-1">
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
                        placeholder=""
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold text-sm mb-1">
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
                        placeholder=""
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold text-sm mb-1">
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
                    <label className="block text-gray-700 font-semibold text-sm mb-1">
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
                    <label className="block text-gray-700 font-semibold text-sm mb-1">
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
                    {submitted ? "✅ Message Sent!" : "Send Message 🚀"}
                  </button>
                </div>
              </div>
            </div>

            {/* ── RIGHT: Sidebar ── */}
            <div
              className={`lg:col-span-2 flex flex-col gap-6 ${visible.form ? "anim-slideRight d1" : "opacity-0"}`}
            >
              {/* Google Maps embed */}
              <div className="side-card">
                <span className="section-tag">📍 LOCATION</span>
                <div
                  className="mt-3 rounded-xl overflow-hidden"
                  style={{ border: "1px solid #fed7aa" }}
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
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    marginTop: "10px",
                    color: "#ff7b1d",
                    fontSize: ".82rem",
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  <span>🗺️</span> Open in Google Maps →
                </a>
              </div>

              {/* Quick facts */}
              <div className="side-card">
                <span className="section-tag">⚡ QUICK FACTS</span>
                <div className="space-y-4 mt-3">
                  {quickFacts.map(({ icon, title, desc }) => (
                    <div key={title} className="flex items-start gap-3">
                      <span className="text-2xl flex-shrink-0">{icon}</span>
                      <div>
                        <p className="font-bold text-gray-800 text-sm">
                          {title}
                        </p>
                        <p className="text-gray-500 text-xs">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social */}
              <div className="side-card">
                <span className="section-tag">🌐 FOLLOW US</span>
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

        {/* ── STATS ── */}
        <section className="py-14 px-6" style={{ background: "#ff7b1d" }}>
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "10K+", label: "Orders Delivered" },
              { value: "2500+", label: "Products Listed" },
              { value: "24/7", label: "Support Available" },
              { value: "4.9★", label: "Customer Rating" },
            ].map(({ value, label }) => (
              <div key={label}>
                <div className="text-4xl font-extrabold text-white mb-1">
                  {value}
                </div>
                <div className="text-orange-100 text-sm">{label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── FAQ ── */}
        <section
          ref={ref("faq")}
          className="py-20 px-6 md:px-12"
          style={{ background: "#fff7ed" }}
        >
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="section-tag">❓ FAQ</span>
              <h2 className="text-3xl font-extrabold text-gray-800">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-500 mt-2">
                Quick answers to common queries
              </p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className={`faq-item ${visible.faq ? `anim-fadeUp d${i}` : ""}`}
                >
                  <h4 className="font-bold text-gray-800 text-base mb-2">
                    🛒 {faq.q}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
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
            <div className="text-5xl mb-5 anim-float">📱</div>
            <h2 className="text-4xl font-extrabold text-white mb-4">
              Ready to Grow Your Grocery Business?
            </h2>
            <p className="text-orange-100 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Download RushBaskets today and manage orders, inventory, and
              deliveries all from one powerful dashboard.
            </p>
            <a
              href="https://play.google.com/store/games?hl=en_IN"
              style={{
                background: "#fff",
                color: "#ff7b1d",
                fontWeight: 700,
                borderRadius: "9999px",
                padding: "14px 40px",
                fontSize: "1.05rem",
                boxShadow: "0 4px 20px rgba(0,0,0,.18)",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                textDecoration: "none",
                transition: "background .2s, transform .2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#fff7ed")
              }
              onMouseLeave={(e) => (e.currentTarget.style.background = "#fff")}
            >
              📱 Download the App
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
