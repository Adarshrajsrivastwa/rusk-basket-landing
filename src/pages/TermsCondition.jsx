import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const sections = [
  {
    id: "acceptance",
    icon: "✅",
    title: "Acceptance of Terms",
    border: "#f97316",
    titleColor: "text-orange-600",
    tagColor: "bg-orange-100 text-orange-700",
    content: [
      "By downloading, installing, or using the RushBaskets application or website, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our platform.",
      "These Terms constitute a legally binding agreement between you (the 'User') and RushBaskets ('Company', 'we', 'us', or 'our'). We reserve the right to update these Terms at any time, and continued use of the platform constitutes your acceptance of any changes.",
      "Users must be at least 18 years of age or have parental/guardian consent to use the RushBaskets platform. By using our services, you confirm that you meet these requirements.",
    ],
  },
  {
    id: "services",
    icon: "🛒",
    title: "Use of Services",
    border: "#22c55e",
    titleColor: "text-green-600",
    tagColor: "bg-green-100 text-green-700",
    content: [
      "RushBaskets provides an e-commerce management platform for grocery businesses, including order management, inventory control, analytics, and delivery coordination. We grant you a limited, non-exclusive, non-transferable license to use our services for lawful purposes only.",
      "You agree not to misuse our platform — including but not limited to: attempting to gain unauthorized access, transmitting harmful code, scraping data without consent, or using the service for any fraudulent or unlawful activity.",
      "We reserve the right to suspend or terminate your account if we believe you are violating these Terms, without prior notice and without liability.",
    ],
  },
  {
    id: "orders",
    icon: "📦",
    title: "Orders & Payments",
    border: "#3b82f6",
    titleColor: "text-blue-600",
    tagColor: "bg-blue-100 text-blue-700",
    content: [
      "All orders placed through RushBaskets are subject to availability and confirmation. We reserve the right to cancel or limit orders at our discretion, including for suspected fraudulent activity or stock unavailability.",
      "Prices listed on our platform are subject to change without notice. Payments are processed through secure third-party gateways and must be completed at the time of order placement unless otherwise specified.",
      "Refunds and returns are governed by our separate Refund Policy. In general, perishable goods cannot be returned, but defective or incorrectly delivered items may be eligible for replacement or credit at our discretion.",
    ],
  },
  {
    id: "delivery",
    icon: "🚚",
    title: "Delivery Policy",
    border: "#a855f7",
    titleColor: "text-purple-600",
    tagColor: "bg-purple-100 text-purple-700",
    content: [
      "Delivery timelines are estimates and may vary based on your location, order volume, and external factors such as weather or traffic. RushBaskets will make commercially reasonable efforts to fulfill deliveries within promised timeframes.",
      "You are responsible for providing accurate delivery address information. We cannot be held liable for delivery failures caused by incorrect addresses, inaccessible locations, or absence of the recipient at the time of delivery.",
      "Deliveries may require a signature or ID verification for certain orders. Our delivery partners are trained professionals who adhere to safety and hygiene standards.",
    ],
  },
  {
    id: "privacy",
    icon: "🛡️",
    title: "Privacy & Data",
    border: "#f97316",
    titleColor: "text-orange-600",
    tagColor: "bg-orange-100 text-orange-700",
    content: [
      "We collect and process personal data as outlined in our Privacy Policy, which is incorporated by reference into these Terms. By using RushBaskets, you consent to our data practices including collection of usage data, preferences, and transaction history.",
      "We implement industry-standard security measures to protect your data. However, no system is completely secure and we cannot guarantee absolute protection against breaches beyond our reasonable control.",
      "We do not sell your personal information to third parties. Data may be shared with service providers (e.g., payment processors, delivery partners) only as necessary to fulfill your orders and improve our services.",
    ],
  },
  {
    id: "intellectual",
    icon: "©️",
    title: "Intellectual Property",
    border: "#22c55e",
    titleColor: "text-green-600",
    tagColor: "bg-green-100 text-green-700",
    content: [
      "All content on the RushBaskets platform — including but not limited to logos, graphics, text, software, and designs — is the exclusive property of RushBaskets and is protected by applicable intellectual property laws.",
      "You may not copy, reproduce, distribute, modify, or create derivative works from any content on our platform without prior written consent from RushBaskets.",
      "If you believe any content on our platform infringes your intellectual property rights, please contact us at info.rushbaskets@gmail.com with the relevant details and we will respond promptly.",
    ],
  },
  {
    id: "liability",
    icon: "⚖️",
    title: "Limitation of Liability",
    border: "#3b82f6",
    titleColor: "text-blue-600",
    tagColor: "bg-blue-100 text-blue-700",
    content: [
      "To the maximum extent permitted by law, RushBaskets shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of, or inability to use, our platform or services.",
      "Our total liability for any claim arising out of or related to these Terms or our services shall not exceed the amount you paid to us in the three (3) months preceding the claim.",
      "Some jurisdictions do not allow the exclusion of certain warranties or limitations of liability. In such cases, our liability is limited to the fullest extent permitted by applicable law.",
    ],
  },
  {
    id: "termination",
    icon: "🔒",
    title: "Account Termination",
    border: "#a855f7",
    titleColor: "text-purple-600",
    tagColor: "bg-purple-100 text-purple-700",
    content: [
      "You may close your RushBaskets account at any time by contacting our support team or through the account settings within the app. Pending orders will be processed and completed before termination.",
      "We reserve the right to suspend or permanently terminate accounts found to be in violation of these Terms, without prior notice. In such cases, any remaining account balance may be forfeited.",
      "Upon termination, your license to use RushBaskets immediately ceases. Provisions that by their nature should survive termination (including intellectual property, limitation of liability, and dispute resolution) shall continue to apply.",
    ],
  },
];

const quickLinks = [
  { label: "Acceptance", icon: "✅", id: "acceptance" },
  { label: "Services", icon: "🛒", id: "services" },
  { label: "Orders", icon: "📦", id: "orders" },
  { label: "Delivery", icon: "🚚", id: "delivery" },
  { label: "Privacy", icon: "🛡️", id: "privacy" },
  { label: "IP Rights", icon: "©️", id: "intellectual" },
  { label: "Liability", icon: "⚖️", id: "liability" },
  { label: "Termination", icon: "🔒", id: "termination" },
];

export default function TermsAndConditions() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("acceptance");
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

      // Determine active section
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140) setActiveSection(s.id);
        }
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
          position: fixed;
          top: 0;
          left: 0;
          height: 4px;
          background: linear-gradient(90deg, #ff7b1d, #fde68a);
          z-index: 9999;
          transition: width 0.1s linear;
          border-radius: 0 2px 2px 0;
        }

        .hero-bg {
          background: linear-gradient(135deg, #ff7b1d 0%, #e06010 60%, #c2410c 100%);
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

        .btn-primary {
          background: #ff7b1d;
          color: #fff;
          font-weight: 700;
          border-radius: 9999px;
          padding: 12px 28px;
          font-size: 0.95rem;
          transition: background 0.2s, box-shadow 0.2s;
          box-shadow: 0 4px 16px rgba(255,123,29,0.3);
          display: inline-flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          border: none;
          text-decoration: none;
        }
        .btn-primary:hover {
          background: #e06010;
          box-shadow: 0 6px 24px rgba(255,123,29,0.4);
        }

        .btn-outline-white {
          background: transparent;
          color: #fff;
          font-weight: 600;
          border-radius: 9999px;
          padding: 11px 28px;
          font-size: 0.95rem;
          border: 2px solid rgba(255,255,255,0.7);
          transition: background 0.2s;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          text-decoration: none;
        }
        .btn-outline-white:hover {
          background: rgba(255,255,255,0.12);
          border-color: #fff;
        }

        .toc-nav {
          background: #fff;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
          padding: 20px;
          position: sticky;
          top: 24px;
          border: 1px solid #fed7aa;
        }

        .toc-link {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 9px 12px;
          border-radius: 10px;
          cursor: pointer;
          transition: background 0.15s;
          font-size: 0.85rem;
          font-weight: 500;
          color: #374151;
          margin-bottom: 2px;
          border: none;
          background: transparent;
          width: 100%;
          text-align: left;
        }
        .toc-link:hover {
          background: #fff7ed;
          color: #ff7b1d;
        }
        .toc-link.active {
          background: #ffedd5;
          color: #ff7b1d;
          font-weight: 600;
        }
        .toc-link .toc-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #d1d5db;
          flex-shrink: 0;
          transition: background 0.15s;
        }
        .toc-link.active .toc-dot {
          background: #ff7b1d;
        }

        .terms-card {
          background: #fff;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.07);
          padding: 36px;
          border-top: 4px solid;
          transition: box-shadow 0.2s;
          margin-bottom: 24px;
        }
        .terms-card:hover {
          box-shadow: 0 8px 32px rgba(0,0,0,0.11);
        }

        .terms-point {
          display: flex;
          gap: 14px;
          margin-bottom: 16px;
          align-items: flex-start;
        }
        .terms-point:last-child { margin-bottom: 0; }
        .terms-bullet {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: #fff7ed;
          border: 2px solid #fed7aa;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          font-size: 0.7rem;
          font-weight: 700;
          color: #ff7b1d;
          margin-top: 2px;
        }
        .terms-point p {
          margin: 0;
          color: #4b5563;
          font-size: 0.92rem;
          line-height: 1.75;
        }

        .highlight-box {
          background: linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%);
          border: 1px solid #fed7aa;
          border-radius: 14px;
          padding: 22px 26px;
          margin-bottom: 24px;
          display: flex;
          align-items: flex-start;
          gap: 14px;
        }
        .highlight-box .hl-icon {
          font-size: 1.8rem;
          flex-shrink: 0;
          line-height: 1;
        }

        .last-updated-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255,255,255,0.2);
          border: 1px solid rgba(255,255,255,0.4);
          border-radius: 9999px;
          padding: 5px 14px;
          font-size: 0.78rem;
          font-weight: 600;
          color: #fff;
          margin-bottom: 20px;
        }

        .contact-card {
          background: #fff;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.07);
          padding: 28px;
          text-align: center;
          border: 1px solid #fed7aa;
          transition: box-shadow 0.2s, transform 0.2s;
        }
        .contact-card:hover {
          box-shadow: 0 8px 28px rgba(255,123,29,0.12);
          transform: translateY(-3px);
        }

        @media (max-width: 768px) {
          .terms-layout { flex-direction: column; }
          .toc-nav { position: static; }
          .terms-card { padding: 24px 20px; }
        }
      `}</style>

      {/* Progress Bar */}
      <div className="progress-bar" style={{ width: `${scrollProgress}%` }} />

      <div className="text-gray-800">
        {/* ── Hero ── */}
        <section className="hero-bg text-white py-20 px-6 md:px-12 overflow-hidden">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="md:w-3/5">
                <span className="last-updated-badge">
                  📅 Last Updated: June 1, 2025
                </span>
                <span
                  className="section-tag"
                  style={{ background: "rgba(255,255,255,0.2)", color: "#fff" }}
                >
                  📋 LEGAL DOCUMENT
                </span>
                <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-5 mt-2">
                  Terms & <span style={{ color: "#fde68a" }}>Conditions</span>
                </h1>
                <p className="text-lg text-orange-100 leading-relaxed mb-8 max-w-xl">
                  Please read these terms carefully before using the RushBaskets
                  platform. By using our services, you agree to be bound by the
                  following terms and conditions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => scrollToSection("acceptance")}
                    className="btn-outline-white"
                  >
                    📖 Read Terms
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

              {/* Hero Illustration */}
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
                  {/* Document */}
                  <rect
                    x="80"
                    y="60"
                    width="160"
                    height="200"
                    rx="12"
                    fill="#fff"
                    opacity="0.95"
                  />
                  <rect
                    x="80"
                    y="60"
                    width="160"
                    height="36"
                    rx="12"
                    fill="#fde68a"
                  />
                  <rect x="80" y="84" width="160" height="12" fill="#fde68a" />
                  {/* Lines */}
                  {[110, 130, 150, 170, 190, 210, 225].map((y, i) => (
                    <rect
                      key={i}
                      x="100"
                      y={y}
                      width={i % 3 === 2 ? 80 : 120}
                      height="8"
                      rx="4"
                      fill="#fed7aa"
                      opacity="0.7"
                    />
                  ))}
                  {/* Checkmarks */}
                  <circle
                    cx="108"
                    cy="114"
                    r="8"
                    fill="#22c55e"
                    opacity="0.9"
                  />
                  <path
                    d="M104 114 L107 117 L112 111"
                    stroke="#fff"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="108"
                    cy="134"
                    r="8"
                    fill="#22c55e"
                    opacity="0.9"
                  />
                  <path
                    d="M104 134 L107 137 L112 131"
                    stroke="#fff"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  {/* Pen */}
                  <rect
                    x="185"
                    y="210"
                    width="10"
                    height="35"
                    rx="2"
                    fill="#ff7b1d"
                    transform="rotate(-30 185 210)"
                  />
                  <polygon points="175,238 183,242 179,250" fill="#e06010" />
                  <rect
                    x="186"
                    y="208"
                    width="10"
                    height="8"
                    rx="1"
                    fill="#7c2d00"
                    transform="rotate(-30 186 208)"
                  />
                  {/* Stars */}
                  <circle cx="60" cy="90" r="4" fill="rgba(255,255,255,0.5)" />
                  <circle cx="258" cy="80" r="3" fill="rgba(255,255,255,0.4)" />
                  <circle
                    cx="65"
                    cy="210"
                    r="5"
                    fill="rgba(255,255,255,0.35)"
                  />
                  <circle
                    cx="255"
                    cy="220"
                    r="4"
                    fill="rgba(255,255,255,0.4)"
                  />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* ── Summary Banner ── */}
        <section className="py-10 px-6 bg-white border-b border-orange-100">
          <div className="max-w-5xl mx-auto">
            <div className="highlight-box">
              <span className="hl-icon">💡</span>
              <div>
                <p className="font-700 text-gray-800 text-sm font-bold mb-1">
                  Quick Summary
                </p>
                <p className="text-gray-600 text-sm leading-relaxed m-0">
                  These Terms govern your use of RushBaskets — our grocery
                  e-commerce management platform. Key points: you must be 18+,
                  all orders are subject to availability, we protect your data,
                  and you agree not to misuse our platform. By continuing to use
                  RushBaskets, you accept all terms below.
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

        {/* ── Main Content ── */}
        <section
          className="py-16 px-6 md:px-12"
          style={{ background: "#fff7ed" }}
        >
          <div className="max-w-6xl mx-auto flex gap-10 terms-layout">
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
                  Table of Contents
                </p>
                {sections.map((s) => (
                  <button
                    key={s.id}
                    className={`toc-link ${activeSection === s.id ? "active" : ""}`}
                    onClick={() => scrollToSection(s.id)}
                  >
                    <span className="toc-dot" />
                    <span className="text-lg">{s.icon}</span>
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

            {/* Terms Sections */}
            <div style={{ flex: 1, minWidth: 0 }}>
              {sections.map((s, idx) => (
                <div
                  key={s.id}
                  id={s.id}
                  className="terms-card"
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
                      <div key={i} className="terms-point">
                        <div className="terms-bullet">{i + 1}</div>
                        <p>{text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              {/* Governing Law Card */}
              <div
                className="terms-card"
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
                    🏛️
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
                      Governing Law & Disputes
                    </h3>
                  </div>
                </div>
                <div className="terms-point">
                  <div className="terms-bullet">1</div>
                  <p>
                    These Terms shall be governed by and construed in accordance
                    with the laws of India. Any disputes arising from these
                    Terms will be subject to the exclusive jurisdiction of
                    courts in your registered state of business.
                  </p>
                </div>
                <div className="terms-point">
                  <div className="terms-bullet">2</div>
                  <p>
                    Before resorting to legal action, both parties agree to
                    attempt to resolve disputes amicably through good-faith
                    negotiation for a minimum of 30 days.
                  </p>
                </div>
                <div className="terms-point">
                  <div className="terms-bullet">3</div>
                  <p>
                    If you have questions or concerns about these Terms, please
                    reach out to us at{" "}
                    <strong style={{ color: "#ff7b1d" }}>
                      info.rushbaskets@gmail.com
                    </strong>{" "}
                    before taking any formal steps.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Stats (matching home) ── */}
        <section className="py-14 px-6" style={{ background: "#ff7b1d" }}>
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "10K+", label: "Happy Customers" },
              { value: "GDPR", label: "Compliant Platform" },
              { value: "256-bit", label: "SSL Encryption" },
              { value: "24/7", label: "Legal Support" },
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

        {/* ── CTA Banner ── */}
        <section
          className="py-20 px-6 text-center"
          style={{
            background: "linear-gradient(135deg, #ff7b1d 0%, #c2410c 100%)",
          }}
        >
          <div className="max-w-2xl mx-auto">
            <div className="text-5xl mb-4">📋</div>
            <h2 className="text-4xl font-extrabold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="mb-8 text-lg" style={{ color: "#ffedd5" }}>
              By continuing to use RushBaskets, you confirm that you have read,
              understood, and agree to these Terms and Conditions.
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
                Contact Us →
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
