import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const sections = [
  {
    id: "eligibility",
    icon: "✅",
    title: "Return Eligibility",
    border: "#f97316",
    titleColor: "text-orange-600",
    content: [
      "Items are eligible for return within 24 hours of delivery if they are damaged, defective, incorrectly delivered, or significantly different from what was ordered. Photographic evidence may be required to process your return request.",
      "Perishable goods such as fresh vegetables, fruits, dairy products, and bakery items are generally not eligible for return unless they are delivered in a spoiled, damaged, or incorrect condition at the time of delivery.",
      "Non-perishable packaged goods, personal care products, and household items may be returned within 48 hours of delivery provided they are unused, unopened, and in their original packaging with all seals intact.",
      "Items purchased during special sales, clearance events, or with promotional discount codes may have different return eligibility — please check the specific offer terms at the time of purchase.",
    ],
  },
  {
    id: "non-returnable",
    icon: "🚫",
    title: "Non-Returnable Items",
    border: "#ef4444",
    titleColor: "text-red-600",
    content: [
      "Fresh Produce: Vegetables, fruits, herbs, and other fresh produce cannot be returned once delivered, except in cases of spoilage or incorrect delivery confirmed at the time of receipt.",
      "Opened or Used Products: Any item that has been opened, partially used, or whose original seal has been broken is not eligible for return unless it is found to be defective upon first use.",
      "Temperature-Sensitive Items: Frozen foods, ice creams, and chilled products that require cold chain management cannot be returned due to health and safety regulations.",
      "Custom or Special Orders: Items specifically ordered or customized at your request, such as custom cakes, special cuts of meat, or made-to-order products, cannot be returned.",
    ],
  },
  {
    id: "refund-process",
    icon: "💰",
    title: "Refund Process",
    border: "#22c55e",
    titleColor: "text-green-600",
    content: [
      "Once your return request is approved, refunds are processed within 5–7 business days. The refund will be credited to the original payment method used at the time of purchase.",
      "For Cash on Delivery (COD) orders, refunds are issued as RushBaskets Wallet Credits, which can be used on your next purchase. Bank transfers for COD refunds may take up to 7–10 business days.",
      "UPI, debit/credit card, and net banking refunds are subject to additional processing time by your bank or payment provider, typically 3–5 business days after we initiate the refund.",
      "You will receive an email and app notification at each stage of the refund process — from request approval to final credit — so you are always kept informed.",
    ],
  },
  {
    id: "how-to-return",
    icon: "📦",
    title: "How to Initiate a Return",
    border: "#3b82f6",
    titleColor: "text-blue-600",
    content: [
      "Step 1 — Report the Issue: Open the RushBaskets app, go to 'My Orders', select the relevant order, and tap 'Report an Issue' or 'Request Return' within the eligible return window.",
      "Step 2 — Describe the Problem: Select the reason for your return from the dropdown menu and provide a brief description. Attach clear photographs of the damaged, defective, or incorrect item if applicable.",
      "Step 3 — Schedule Pickup: For eligible physical returns, our delivery partner will schedule a pickup from your address within 24–48 hours of approval. Ensure the item is in its original packaging.",
      "Step 4 — Refund Confirmation: Once the item is picked up and verified at our warehouse, your refund will be processed. You'll receive a confirmation notification within 24 hours of item verification.",
    ],
  },
  {
    id: "replacement",
    icon: "🔄",
    title: "Replacements",
    border: "#a855f7",
    titleColor: "text-purple-600",
    content: [
      "In many cases, we offer a free replacement as an alternative to a refund. If you received a damaged or incorrect item, you can choose between a refund or an immediate replacement delivered at no extra charge.",
      "Replacements are subject to product availability. If the original item is out of stock, we will offer you a full refund or allow you to choose a similar alternative product at the same price.",
      "Replacement deliveries are prioritized and typically dispatched within 24 hours of your request being approved. You will receive a dedicated tracking link for your replacement order.",
      "If a replacement order also arrives with issues, you are entitled to a full refund. Please contact our support team at info.rushbaskets@gmail.com with details and we'll resolve it immediately.",
    ],
  },
  {
    id: "cancellation",
    icon: "❌",
    title: "Order Cancellation",
    border: "#f97316",
    titleColor: "text-orange-600",
    content: [
      "✅ Before Dispatch — Orders can be cancelled free of charge within 5 minutes of placement, before they are confirmed and dispatched by our fulfillment team. Use the 'Cancel Order' option in the app under 'My Orders'.",
      "❌ After Dispatch — Once an order has been picked up by our delivery partner, cancellation is no longer possible. In such cases, you may initiate a return after delivery if the item meets return eligibility criteria.",
      "💰 Refund Policy — For prepaid orders cancelled within the allowed window, a full refund is processed within 3–5 business days to your original payment method.",
      "⚠️ Cancelled by RushBaskets — RushBaskets reserves the right to cancel orders due to unavailability of products, delivery constraints, suspected fraudulent activity, or pricing errors. In all such cases, a full refund will be issued immediately.",
    ],
  },
  {
    id: "damaged-delivery",
    icon: "📸",
    title: "Damaged or Wrong Delivery",
    border: "#22c55e",
    titleColor: "text-green-600",
    content: [
      "If your order arrives damaged or you receive incorrect items, please do not accept the delivery if the damage is visible externally. Report the issue to the delivery agent immediately and contact our support team.",
      "If damage is discovered after delivery, report it within 24 hours through the app with photographs. We take full responsibility for items damaged during transit and will arrange a replacement or refund promptly.",
      "For wrong items delivered, we will arrange an immediate pickup of the incorrect item and either deliver the correct item within 24 hours or process a full refund, whichever you prefer.",
      "Our quality team reviews all damage and wrong-delivery reports to improve our packaging and logistics processes. Your feedback directly helps us serve you better.",
    ],
  },
  {
    id: "wallet-credits",
    icon: "💳",
    title: "Wallet Credits & Cashback",
    border: "#3b82f6",
    titleColor: "text-blue-600",
    content: [
      "As a faster alternative to bank refunds, RushBaskets offers instant Wallet Credits that are credited to your account within 2 hours of return approval. These can be used on any future order.",
      "Wallet Credits do not expire and can be used for partial or full payment on any purchase across the RushBaskets platform. They are non-transferable and cannot be withdrawn as cash.",
      "Cashback offers earned on original orders are non-refundable if the order is returned. However, the full product amount excluding cashback benefits will be refunded.",
      "If your account is closed, any remaining Wallet Credits will be forfeited. Please ensure you use your credits before requesting account deletion.",
    ],
  },
];

const quickLinks = [
  { label: "Eligibility", icon: "✅", id: "eligibility" },
  { label: "Non-Returnable", icon: "🚫", id: "non-returnable" },
  { label: "Refund Process", icon: "💰", id: "refund-process" },
  { label: "How to Return", icon: "📦", id: "how-to-return" },
  { label: "Replacements", icon: "🔄", id: "replacement" },
  { label: "Cancellation", icon: "❌", id: "cancellation" },
  { label: "Damaged Items", icon: "📸", id: "damaged-delivery" },
  { label: "Wallet Credits", icon: "💳", id: "wallet-credits" },
];

const steps = [
  {
    step: "01",
    icon: "📱",
    title: "Open the App",
    desc: "Go to My Orders and select the order with an issue.",
  },
  {
    step: "02",
    icon: "📸",
    title: "Report & Upload",
    desc: "Describe the problem and attach photos of the item.",
  },
  {
    step: "03",
    icon: "🚚",
    title: "Schedule Pickup",
    desc: "Our partner picks up the item within 24–48 hours.",
  },
  {
    step: "04",
    icon: "💰",
    title: "Get Refunded",
    desc: "Refund or replacement processed within 5–7 business days.",
  },
];

export default function RefundPolicy() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("eligibility");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setScrollProgress(total > 0 ? (scrolled / total) * 100 : 0);
      for (const s of sections) {
        const elem = document.getElementById(s.id);
        if (elem && elem.getBoundingClientRect().top <= 140)
          setActiveSection(s.id);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');
        * { font-family: 'Poppins', sans-serif; box-sizing: border-box; }
        body { margin: 0; padding: 0; background: #fff; }

        .progress-bar {
          position: fixed; top: 0; left: 0;
          height: 4px;
          background: linear-gradient(90deg, #ff7b1d, #fde68a);
          z-index: 9999;
          transition: width 0.1s linear;
          border-radius: 0 2px 2px 0;
        }

        .hero-bg { background: linear-gradient(135deg, #ff7b1d 0%, #e06010 60%, #c2410c 100%); }

        .section-tag {
          display: inline-block;
          background: #ffedd5; color: #ff7b1d;
          border-radius: 9999px; padding: 4px 16px;
          font-size: 0.8rem; font-weight: 600;
          letter-spacing: 0.05em; margin-bottom: 12px;
        }

        .btn-primary {
          background: #ff7b1d; color: #fff; font-weight: 700;
          border-radius: 9999px; padding: 12px 28px; font-size: 0.95rem;
          transition: background 0.2s, box-shadow 0.2s;
          box-shadow: 0 4px 16px rgba(255,123,29,0.3);
          display: inline-flex; align-items: center; gap: 8px;
          cursor: pointer; border: none; text-decoration: none;
        }
        .btn-primary:hover { background: #e06010; box-shadow: 0 6px 24px rgba(255,123,29,0.4); }

        .btn-outline-white {
          background: transparent; color: #fff; font-weight: 600;
          border-radius: 9999px; padding: 11px 28px; font-size: 0.95rem;
          border: 2px solid rgba(255,255,255,0.7);
          transition: background 0.2s;
          display: inline-flex; align-items: center; gap: 8px; cursor: pointer;
        }
        .btn-outline-white:hover { background: rgba(255,255,255,0.12); border-color: #fff; }

        .toc-nav {
          background: #fff; border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
          padding: 20px; position: sticky; top: 24px;
          border: 1px solid #fed7aa;
        }

        .toc-link {
          display: flex; align-items: center; gap: 10px;
          padding: 9px 12px; border-radius: 10px; cursor: pointer;
          transition: background 0.15s; font-size: 0.82rem; font-weight: 500;
          color: #374151; margin-bottom: 2px; border: none;
          background: transparent; width: 100%; text-align: left;
        }
        .toc-link:hover { background: #fff7ed; color: #ff7b1d; }
        .toc-link.active { background: #ffedd5; color: #ff7b1d; font-weight: 600; }
        .toc-dot { width: 6px; height: 6px; border-radius: 50%; background: #d1d5db; flex-shrink: 0; transition: background 0.15s; }
        .toc-link.active .toc-dot { background: #ff7b1d; }

        .policy-card {
          background: #fff; border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.07);
          padding: 36px; border-top: 4px solid;
          transition: box-shadow 0.2s; margin-bottom: 24px;
        }
        .policy-card:hover { box-shadow: 0 8px 32px rgba(0,0,0,0.11); }

        .policy-point { display: flex; gap: 14px; margin-bottom: 16px; align-items: flex-start; }
        .policy-point:last-child { margin-bottom: 0; }
        .policy-bullet {
          width: 28px; height: 28px; border-radius: 50%;
          background: #fff7ed; border: 2px solid #fed7aa;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; font-size: 0.7rem; font-weight: 700;
          color: #ff7b1d; margin-top: 2px;
        }
        .policy-point p { margin: 0; color: #4b5563; font-size: 0.92rem; line-height: 1.75; }

        .highlight-box {
          background: linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%);
          border: 1px solid #fed7aa; border-radius: 14px;
          padding: 22px 26px; margin-bottom: 24px;
          display: flex; align-items: flex-start; gap: 14px;
        }

        .last-updated-badge {
          display: inline-flex; align-items: center; gap: 6px;
          background: rgba(255,255,255,0.2); border: 1px solid rgba(255,255,255,0.4);
          border-radius: 9999px; padding: 5px 14px;
          font-size: 0.78rem; font-weight: 600; color: #fff; margin-bottom: 20px;
        }

        .step-card {
          background: #fff; border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.07);
          padding: 28px 24px; text-align: center;
          border: 1px solid #fed7aa;
          transition: box-shadow 0.2s, transform 0.2s;
          position: relative;
        }
        .step-card:hover { box-shadow: 0 8px 28px rgba(255,123,29,0.12); transform: translateY(-3px); }

        .step-number {
          position: absolute; top: -14px; left: 50%; transform: translateX(-50%);
          background: #ff7b1d; color: #fff;
          border-radius: 9999px; padding: 3px 14px;
          font-size: 0.75rem; font-weight: 700; letter-spacing: 0.05em;
        }

        .timeline-connector {
          display: none;
        }

        @media (min-width: 768px) {
          .step-grid { position: relative; }
          .timeline-connector { display: block; }
        }

        @media (max-width: 768px) {
          .policy-layout { flex-direction: column; }
          .toc-nav { position: static; }
          .policy-card { padding: 24px 20px; }
        }
      `}</style>

      <div className="progress-bar" style={{ width: `${scrollProgress}%` }} />

      <div className="text-gray-800">
        {/* ── Hero ── */}
        <section className="hero-bg text-white py-20 px-6 md:px-12 overflow-hidden">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="md:w-3/5">
              <span className="last-updated-badge">
                📅 Last Updated: June 1, 2025
              </span>
              <span
                className="section-tag"
                style={{ background: "rgba(255,255,255,0.2)", color: "#fff" }}
              >
                🔄 REFUND & RETURN POLICY
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-5 mt-2">
                Hassle-Free{" "}
                <span style={{ color: "#fde68a" }}>Returns & Refunds</span>
              </h1>
              <p className="text-lg text-orange-100 leading-relaxed mb-8 max-w-xl">
                Your satisfaction is our top priority. If something isn't right
                with your order, we'll make it right — quickly, fairly, and
                without unnecessary hassle.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection("eligibility")}
                  className="btn-outline-white"
                >
                  📖 Read Policy
                </button>
                <button
                  onClick={() => navigate("/contact")}
                  className="btn-primary"
                  style={{ background: "#fff", color: "#ff7b1d" }}
                >
                  🤝 Contact Support
                </button>
              </div>
            </div>

            {/* Hero SVG */}
            <div className="md:w-2/5 flex justify-center">
              <svg
                viewBox="0 0 320 300"
                xmlns="http://www.w3.org/2000/svg"
                style={{ width: "100%", maxWidth: "300px" }}
              >
                <circle
                  cx="160"
                  cy="150"
                  r="130"
                  fill="rgba(255,255,255,0.1)"
                />
                <circle
                  cx="160"
                  cy="150"
                  r="100"
                  fill="rgba(255,255,255,0.07)"
                />
                {/* Box */}
                <rect
                  x="80"
                  y="120"
                  width="160"
                  height="110"
                  rx="10"
                  fill="#fff"
                  opacity="0.95"
                />
                <rect
                  x="80"
                  y="120"
                  width="160"
                  height="32"
                  rx="10"
                  fill="#fde68a"
                />
                <rect x="80" y="140" width="160" height="12" fill="#fde68a" />
                {/* Tape */}
                <rect
                  x="145"
                  y="108"
                  width="30"
                  height="44"
                  rx="4"
                  fill="#fed7aa"
                  opacity="0.8"
                />
                <rect
                  x="150"
                  y="108"
                  width="20"
                  height="44"
                  rx="3"
                  fill="#ffedd5"
                  opacity="0.9"
                />
                {/* Arrow returning */}
                <path
                  d="M200 175 Q230 160 230 185 Q230 210 200 210"
                  stroke="#ff7b1d"
                  strokeWidth="5"
                  fill="none"
                  strokeLinecap="round"
                />
                <polygon points="196,168 204,175 196,182" fill="#ff7b1d" />
                {/* Checkmark */}
                <circle cx="135" cy="185" r="20" fill="#22c55e" opacity="0.9" />
                <path
                  d="M125 185 L132 192 L145 175"
                  stroke="#fff"
                  strokeWidth="3.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Money coin */}
                <circle cx="240" cy="110" r="20" fill="#fbbf24" />
                <text
                  x="240"
                  y="116"
                  fontSize="16"
                  fontWeight="bold"
                  fill="#7c2d00"
                  textAnchor="middle"
                >
                  ₹
                </text>
                {/* Sparkles */}
                <circle cx="65" cy="105" r="4" fill="rgba(255,255,255,0.5)" />
                <circle cx="258" cy="80" r="3" fill="rgba(255,255,255,0.4)" />
                <circle cx="70" cy="215" r="5" fill="rgba(255,255,255,0.35)" />
                <circle cx="255" cy="225" r="4" fill="rgba(255,255,255,0.4)" />
              </svg>
            </div>
          </div>
        </section>

        {/* ── Quick Summary Strip ── */}
        <section className="py-10 px-6 bg-white border-b border-orange-100">
          <div className="max-w-5xl mx-auto">
            <div className="highlight-box">
              <span
                style={{ fontSize: "1.8rem", lineHeight: 1, flexShrink: 0 }}
              >
                💡
              </span>
              <div>
                <p className="font-bold text-gray-800 text-sm mb-1">
                  Quick Summary
                </p>
                <p className="text-gray-600 text-sm leading-relaxed m-0">
                  Report issues within <strong>24 hours</strong> of delivery via
                  the app. Eligible items are refunded within{" "}
                  <strong>5–7 business days</strong> to your original payment
                  method. Fresh produce is generally non-returnable unless
                  spoiled or incorrect. You can also opt for an{" "}
                  <strong>instant Wallet Credit</strong> or{" "}
                  <strong>free replacement</strong> instead of a refund.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {quickLinks.map(({ label, icon, id }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  style={{
                    background: "#fff7ed",
                    border: "1px solid #fed7aa",
                    borderRadius: "9999px",
                    padding: "8px 18px",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    fontWeight: 500,
                    color: "#7c2d00",
                    fontSize: "0.85rem",
                    cursor: "pointer",
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "#ffedd5")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "#fff7ed")
                  }
                >
                  <span>{icon}</span>
                  <span>{label}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ── How It Works Steps ── */}
        <section className="py-16 px-6 md:px-12 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="section-tag">⚡ SIMPLE PROCESS</span>
              <h2 className="text-3xl font-extrabold text-gray-800">
                How to Return in 4 Steps
              </h2>
              <p className="text-gray-500 mt-2 text-sm">
                Getting a refund or replacement is quick and easy
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 step-grid">
              {steps.map(({ step, icon, title, desc }) => (
                <div
                  key={step}
                  className="step-card"
                  style={{ paddingTop: "36px" }}
                >
                  <div className="step-number">STEP {step}</div>
                  <div style={{ fontSize: "2.5rem", marginBottom: "12px" }}>
                    {icon}
                  </div>
                  <h3 className="font-bold text-gray-800 text-base mb-2">
                    {title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed m-0">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Main Policy Content ── */}
        <section
          className="py-16 px-6 md:px-12"
          style={{ background: "#fff7ed" }}
        >
          <div className="max-w-6xl mx-auto flex gap-10 policy-layout">
            {/* Sidebar TOC */}
            <aside style={{ width: "240px", flexShrink: 0 }}>
              <nav className="toc-nav">
                <p
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    color: "#9ca3af",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    marginBottom: "14px",
                    marginTop: 0,
                  }}
                >
                  Contents
                </p>
                {sections.map((s) => (
                  <button
                    key={s.id}
                    className={`toc-link ${activeSection === s.id ? "active" : ""}`}
                    onClick={() => scrollToSection(s.id)}
                  >
                    <span className="toc-dot" />
                    <span className="text-base">{s.icon}</span>
                    <span>{s.title}</span>
                  </button>
                ))}
                <div
                  style={{
                    marginTop: "20px",
                    paddingTop: "16px",
                    borderTop: "1px solid #fed7aa",
                  }}
                >
                  <p
                    style={{
                      fontSize: "0.72rem",
                      color: "#9ca3af",
                      margin: "0 0 10px 0",
                    }}
                  >
                    Need Help?
                  </p>
                  <button
                    onClick={() => navigate("/contact")}
                    className="btn-primary"
                    style={{
                      width: "100%",
                      justifyContent: "center",
                      fontSize: "0.8rem",
                      padding: "10px 16px",
                    }}
                  >
                    Contact Us →
                  </button>
                </div>
              </nav>
            </aside>

            {/* Sections */}
            <div style={{ flex: 1, minWidth: 0 }}>
              {sections.map((s, idx) => (
                <div
                  key={s.id}
                  id={s.id}
                  className="policy-card"
                  style={{ borderTopColor: s.border, scrollMarginTop: "100px" }}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "12px",
                        background: "#fff7ed",
                        border: `2px solid ${s.border}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.4rem",
                        flexShrink: 0,
                      }}
                    >
                      {s.icon}
                    </div>
                    <div>
                      <span
                        style={{
                          fontSize: "0.68rem",
                          fontWeight: 700,
                          color: "#9ca3af",
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                          display: "block",
                          marginBottom: "2px",
                        }}
                      >
                        Section {String(idx + 1).padStart(2, "0")}
                      </span>
                      <h3 className={`text-xl font-bold m-0 ${s.titleColor}`}>
                        {s.title}
                      </h3>
                    </div>
                  </div>
                  <div>
                    {s.content.map((text, i) => (
                      <div key={i} className="policy-point">
                        <div className="policy-bullet">{i + 1}</div>
                        <p>{text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              {/* Contact Card */}
              <div
                className="policy-card"
                style={{
                  borderTopColor: "#f97316",
                  background:
                    "linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%)",
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "12px",
                      background: "#ffedd5",
                      border: "2px solid #f97316",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.4rem",
                    }}
                  >
                    📬
                  </div>
                  <div>
                    <span
                      style={{
                        fontSize: "0.68rem",
                        fontWeight: 700,
                        color: "#9ca3af",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        display: "block",
                        marginBottom: "2px",
                      }}
                    >
                      Section 09
                    </span>
                    <h3 className="text-xl font-bold m-0 text-orange-600">
                      Contact & Escalation
                    </h3>
                  </div>
                </div>
                <div className="policy-point">
                  <div className="policy-bullet">1</div>
                  <p>
                    For all refund, return, and replacement queries, reach out
                    to us at{" "}
                    <strong style={{ color: "#ff7b1d" }}>
                      info.rushbaskets@gmail.com
                    </strong>{" "}
                    or through the in-app support chat. We respond within 24
                    hours on business days.
                  </p>
                </div>
                <div className="policy-point">
                  <div className="policy-bullet">2</div>
                  <p>
                    If your issue is not resolved within 5 business days of
                    reporting, you may escalate it by emailing with the subject
                    line "Escalation — [Your Order ID]" and our senior support
                    team will take it up within 24 hours.
                  </p>
                </div>
                <div className="policy-point">
                  <div className="policy-bullet">3</div>
                  <p>
                    RushBaskets reserves the right to modify this Refund &
                    Return Policy at any time. Updates will be communicated via
                    the app and email. Continued use of the platform after
                    changes constitutes acceptance of the revised policy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Stats Bar ── */}
        <section className="py-14 px-6" style={{ background: "#ff7b1d" }}>
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "24hr", label: "Return Window" },
              { value: "5–7", label: "Days for Refund" },
              { value: "2hr", label: "Wallet Credit" },
              { value: "100%", label: "Satisfaction Goal" },
            ].map(({ value, label }) => (
              <div key={label} style={{ textAlign: "center", padding: "16px" }}>
                <div className="text-4xl font-extrabold text-white mb-1">
                  {value}
                </div>
                <div
                  className="text-sm"
                  style={{ color: "#ffedd5", fontWeight: 500 }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Refund Timelines ── */}
        <section className="py-20 px-6 md:px-12 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="section-tag">⏱️ REFUND TIMELINES</span>
              <h2 className="text-3xl font-extrabold text-gray-800">
                When Will You Get Your Money?
              </h2>
              <p className="text-gray-500 mt-2 text-sm">
                Estimated refund timelines by payment method
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                {
                  icon: "💳",
                  method: "Credit / Debit Card",
                  time: "5–7 Business Days",
                  note: "Processing time depends on your bank.",
                  bg: "#eff6ff",
                  border: "#bfdbfe",
                  text: "#1d4ed8",
                  badge: "#dbeafe",
                },
                {
                  icon: "📱",
                  method: "UPI / Net Banking",
                  time: "3–5 Business Days",
                  note: "Usually faster than card refunds.",
                  bg: "#f0fdf4",
                  border: "#bbf7d0",
                  text: "#15803d",
                  badge: "#dcfce7",
                },
                {
                  icon: "💵",
                  method: "Cash on Delivery (COD)",
                  time: "Wallet Credit: 2 Hours",
                  note: "Bank transfer takes 7–10 business days.",
                  bg: "#fff7ed",
                  border: "#fed7aa",
                  text: "#c2410c",
                  badge: "#ffedd5",
                },
                {
                  icon: "👛",
                  method: "RushBaskets Wallet",
                  time: "Instant (within 2 Hours)",
                  note: "Fastest refund option available.",
                  bg: "#fdf4ff",
                  border: "#e9d5ff",
                  text: "#7e22ce",
                  badge: "#f3e8ff",
                },
              ].map(({ icon, method, time, note, bg, border, text, badge }) => (
                <div
                  key={method}
                  style={{
                    background: bg,
                    border: `1px solid ${border}`,
                    borderRadius: "16px",
                    padding: "24px",
                    display: "flex",
                    alignItems: "center",
                    gap: "18px",
                  }}
                >
                  <div style={{ fontSize: "2.2rem", flexShrink: 0 }}>
                    {icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <p
                      style={{
                        margin: "0 0 4px 0",
                        fontWeight: 700,
                        color: "#1f2937",
                        fontSize: "0.95rem",
                      }}
                    >
                      {method}
                    </p>
                    <p
                      style={{
                        margin: "0 0 6px 0",
                        color: "#4b5563",
                        fontSize: "0.8rem",
                      }}
                    >
                      {note}
                    </p>
                    <span
                      style={{
                        background: badge,
                        color: text,
                        borderRadius: "9999px",
                        padding: "3px 12px",
                        fontSize: "0.78rem",
                        fontWeight: 700,
                      }}
                    >
                      {time}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA Banner ── */}
        <section
          className="py-20 px-6 text-center"
          style={{
            background: "linear-gradient(135deg, #ff7b1d 0%, #c2410c 100%)",
          }}
        >
          <div className="max-w-2xl mx-auto">
            <div className="text-5xl mb-4">🔄</div>
            <h2 className="text-4xl font-extrabold text-white mb-4">
              Not Happy With Your Order?
            </h2>
            <p className="mb-8 text-lg" style={{ color: "#ffedd5" }}>
              We're here to help. Contact our support team and we'll make it
              right — whether that's a refund, replacement, or credit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate("/")}
                className="btn-primary"
                style={{ background: "#fff", color: "#ff7b1d" }}
              >
                🏠 Back to Home
              </button>
              <button
                onClick={() => navigate("/contact")}
                className="btn-outline-white"
              >
                Contact Support →
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
