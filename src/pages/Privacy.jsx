import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const sections = [
  {
    id: "information-collect",
    icon: "📋",
    title: "Information We Collect",
    border: "#f97316",
    titleColor: "text-orange-600",
    content: [
      "Personal Information: When you register or use RushBaskets, we collect information such as your name, email address, phone number, delivery address, and payment details necessary to process your orders.",
      "Usage Data: We automatically collect data about how you interact with our platform — including pages visited, features used, time spent, device type, browser, IP address, and app version — to improve your experience.",
      "Transaction Data: Details of every order you place, including items purchased, amounts paid, delivery status, and communication history with our support team are stored securely in our systems.",
      "Location Data: With your permission, we collect approximate or precise location data to enable delivery tracking, show nearby stores, and improve our logistics operations.",
    ],
  },
  {
    id: "how-we-use",
    icon: "⚙️",
    title: "How We Use Your Information",
    border: "#22c55e",
    titleColor: "text-green-600",
    content: [
      "Order Fulfillment: Your personal and delivery information is used to process, confirm, and deliver your grocery orders. We share necessary details with our delivery partners solely for this purpose.",
      "Platform Improvement: Usage and analytics data help us understand how customers interact with RushBaskets so we can fix issues, improve features, and personalize your experience.",
      "Communications: We use your contact information to send order confirmations, delivery updates, promotional offers (with your consent), and important service announcements.",
      "Security & Fraud Prevention: We analyze account activity and transaction patterns to detect suspicious behavior, prevent fraud, and keep both buyers and sellers safe on our platform.",
    ],
  },
  {
    id: "data-sharing",
    icon: "🔗",
    title: "Data Sharing & Disclosure",
    border: "#3b82f6",
    titleColor: "text-blue-600",
    content: [
      "Service Providers: We share your data with trusted third-party partners — such as payment gateways, delivery services, and cloud infrastructure providers — only to the extent necessary to operate our platform.",
      "We Never Sell Your Data: RushBaskets does not sell, rent, or trade your personal information to advertisers or other third parties for their marketing purposes. Your data is yours.",
      "Legal Requirements: We may disclose your information if required to do so by law, court order, or government authority, or to protect the rights, safety, and security of RushBaskets, our users, or the public.",
      "Business Transfers: In the event of a merger, acquisition, or sale of assets, your data may be transferred to the new entity. We will notify you via email and/or a prominent notice on our platform before such a transfer.",
    ],
  },
  {
    id: "data-security",
    icon: "🛡️",
    title: "Data Security",
    border: "#a855f7",
    titleColor: "text-purple-600",
    content: [
      "Encryption: All data transmitted between your device and our servers is encrypted using industry-standard 256-bit SSL/TLS protocols. Payment information is processed through PCI-DSS compliant gateways.",
      "Access Controls: We implement strict role-based access controls so that only authorized personnel can access sensitive user data, and only when necessary to perform their job functions.",
      "Regular Audits: Our security practices are regularly reviewed and updated. We conduct vulnerability assessments and penetration tests to proactively identify and fix potential weaknesses.",
      "While we take every reasonable precaution to protect your data, no system can be guaranteed 100% secure. In the event of a data breach that affects your rights, we will notify you as required by applicable law.",
    ],
  },
  {
    id: "cookies",
    icon: "🍪",
    title: "Cookies & Tracking",
    border: "#f97316",
    titleColor: "text-orange-600",
    content: [
      "What Are Cookies: Cookies are small text files stored on your device that help us remember your preferences, keep you logged in, and understand how you use RushBaskets.",
      "Types We Use: We use essential cookies (required for the platform to function), analytics cookies (to understand usage patterns), and preference cookies (to remember your settings and language).",
      "Third-Party Cookies: Some features may use third-party cookies from providers like Google Analytics. These parties have their own privacy policies governing how they use this data.",
      "Managing Cookies: You can control or disable cookies through your browser settings. However, disabling essential cookies may affect the functionality of certain features on our platform.",
    ],
  },
  {
    id: "your-rights",
    icon: "⚖️",
    title: "Your Rights",
    border: "#22c55e",
    titleColor: "text-green-600",
    content: [
      "Access & Portability: You have the right to request a copy of all personal data we hold about you in a machine-readable format. Submit a request through the app or email us at info.rushbaskets@gmail.com.",
      "Correction & Deletion: If any of your information is inaccurate or you wish to have your data deleted, you can update it directly in the app or contact our support team. We will process verified requests within 30 days.",
      "Opt-Out of Marketing: You may unsubscribe from promotional emails at any time by clicking 'Unsubscribe' in any marketing email, or by updating your notification preferences within the app settings.",
      "Withdraw Consent: Where we process data based on your consent (e.g., location access, marketing), you may withdraw consent at any time. This will not affect the lawfulness of processing before withdrawal.",
    ],
  },
  {
    id: "data-retention",
    icon: "🗄️",
    title: "Data Retention",
    border: "#3b82f6",
    titleColor: "text-blue-600",
    content: [
      "We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, including legal, accounting, and reporting requirements.",
      "Order and transaction records are typically retained for 7 years to comply with Indian tax and financial regulations. Account data is deleted within 90 days of account closure upon request.",
      "Anonymized and aggregated data (which cannot identify you) may be retained indefinitely for research and analytical purposes to improve our platform and services.",
    ],
  },
  {
    id: "children",
    icon: "👶",
    title: "Children's Privacy",
    border: "#a855f7",
    titleColor: "text-purple-600",
    content: [
      "RushBaskets is not directed at children under the age of 13. We do not knowingly collect personal information from children. If you believe a child has provided us with personal data, please contact us immediately.",
      "If we discover that we have collected personal information from a child without parental consent, we will take steps to delete that information from our servers as quickly as possible.",
      "Parents and guardians who have concerns about their child's use of our platform are encouraged to contact our support team at info.rushbaskets@gmail.com for assistance.",
    ],
  },
];

const quickLinks = [
  { label: "Data We Collect", icon: "📋", id: "information-collect" },
  { label: "How We Use It", icon: "⚙️", id: "how-we-use" },
  { label: "Data Sharing", icon: "🔗", id: "data-sharing" },
  { label: "Security", icon: "🛡️", id: "data-security" },
  { label: "Cookies", icon: "🍪", id: "cookies" },
  { label: "Your Rights", icon: "⚖️", id: "your-rights" },
  { label: "Retention", icon: "🗄️", id: "data-retention" },
  { label: "Children", icon: "👶", id: "children" },
];

export default function PrivacyPolicy() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("information-collect");
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
        if (elem) {
          const rect = elem.getBoundingClientRect();
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
          top: 0; left: 0;
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
        .btn-primary:hover { background: #e06010; box-shadow: 0 6px 24px rgba(255,123,29,0.4); }

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
        }
        .btn-outline-white:hover { background: rgba(255,255,255,0.12); border-color: #fff; }

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
          font-size: 0.82rem;
          font-weight: 500;
          color: #374151;
          margin-bottom: 2px;
          border: none;
          background: transparent;
          width: 100%;
          text-align: left;
        }
        .toc-link:hover { background: #fff7ed; color: #ff7b1d; }
        .toc-link.active { background: #ffedd5; color: #ff7b1d; font-weight: 600; }
        .toc-link .toc-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #d1d5db;
          flex-shrink: 0;
          transition: background 0.15s;
        }
        .toc-link.active .toc-dot { background: #ff7b1d; }

        .policy-card {
          background: #fff;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.07);
          padding: 36px;
          border-top: 4px solid;
          transition: box-shadow 0.2s;
          margin-bottom: 24px;
        }
        .policy-card:hover { box-shadow: 0 8px 32px rgba(0,0,0,0.11); }

        .policy-point {
          display: flex;
          gap: 14px;
          margin-bottom: 16px;
          align-items: flex-start;
        }
        .policy-point:last-child { margin-bottom: 0; }
        .policy-bullet {
          width: 28px; height: 28px;
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
        .policy-point p { margin: 0; color: #4b5563; font-size: 0.92rem; line-height: 1.75; }

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

        .commitment-card {
          background: #fff;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.07);
          padding: 28px 24px;
          text-align: center;
          border: 1px solid #fed7aa;
          transition: box-shadow 0.2s, transform 0.2s;
        }
        .commitment-card:hover {
          box-shadow: 0 8px 28px rgba(255,123,29,0.12);
          transform: translateY(-3px);
        }

        @media (max-width: 768px) {
          .policy-layout { flex-direction: column; }
          .toc-nav { position: static; }
          .policy-card { padding: 24px 20px; }
        }
      `}</style>

      {/* Progress Bar */}
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
                🔒 PRIVACY POLICY
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-5 mt-2">
                Your Privacy,{" "}
                <span style={{ color: "#fde68a" }}>Our Priority</span>
              </h1>
              <p className="text-lg text-orange-100 leading-relaxed mb-8 max-w-xl">
                At RushBaskets, we are committed to protecting your personal
                information. This policy explains what data we collect, how we
                use it, and the choices you have.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection("information-collect")}
                  className="btn-outline-white"
                >
                  📖 Read Policy
                </button>
                <button
                  onClick={() => navigate("/contact")}
                  className="btn-primary"
                  style={{ background: "#fff", color: "#ff7b1d" }}
                >
                  🤝 Contact Us
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
                {/* Shield */}
                <path
                  d="M160 50 L230 80 L230 160 Q230 210 160 240 Q90 210 90 160 L90 80 Z"
                  fill="#fff"
                  opacity="0.95"
                />
                <path
                  d="M160 65 L218 90 L218 160 Q218 202 160 226 Q102 202 102 160 L102 90 Z"
                  fill="#ffedd5"
                />
                {/* Lock icon inside shield */}
                <rect
                  x="140"
                  y="140"
                  width="40"
                  height="32"
                  rx="5"
                  fill="#ff7b1d"
                />
                <path
                  d="M148 140 Q148 120 160 120 Q172 120 172 140"
                  stroke="#ff7b1d"
                  strokeWidth="6"
                  fill="none"
                  strokeLinecap="round"
                />
                <circle cx="160" cy="156" r="5" fill="#fff" />
                <rect x="158" y="158" width="4" height="8" rx="2" fill="#fff" />
                {/* Checkmark badge */}
                <circle cx="210" cy="95" r="18" fill="#22c55e" />
                <path
                  d="M202 95 L208 101 L218 88"
                  stroke="#fff"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Sparkles */}
                <circle cx="65" cy="100" r="4" fill="rgba(255,255,255,0.5)" />
                <circle cx="255" cy="90" r="3" fill="rgba(255,255,255,0.4)" />
                <circle cx="70" cy="210" r="5" fill="rgba(255,255,255,0.35)" />
                <circle cx="250" cy="215" r="4" fill="rgba(255,255,255,0.4)" />
                <circle cx="90" cy="240" r="3" fill="rgba(255,255,255,0.3)" />
              </svg>
            </div>
          </div>
        </section>

        {/* ── Quick Links Strip ── */}
        <section className="py-10 px-6 bg-white border-b border-orange-100">
          <div className="max-w-5xl mx-auto">
            <div className="highlight-box">
              <span
                style={{ fontSize: "1.8rem", lineHeight: 1, flexShrink: 0 }}
              >
                🔒
              </span>
              <div>
                <p className="font-bold text-gray-800 text-sm mb-1">
                  Our Privacy Commitment
                </p>
                <p className="text-gray-600 text-sm leading-relaxed m-0">
                  RushBaskets collects only the data necessary to deliver a
                  great grocery experience. We never sell your personal
                  information, we protect it with industry-standard security,
                  and we give you full control over your data at all times.
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
                    Privacy Questions?
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

            {/* Policy Sections */}
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

              {/* Contact Us Card */}
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
                      Contact & Updates
                    </h3>
                  </div>
                </div>
                <div className="policy-point">
                  <div className="policy-bullet">1</div>
                  <p>
                    If you have any questions, concerns, or requests regarding
                    this Privacy Policy or your personal data, please contact
                    our Privacy Team at{" "}
                    <strong style={{ color: "#ff7b1d" }}>
                      info.rushbaskets@gmail.com
                    </strong>
                    . We aim to respond within 48 hours.
                  </p>
                </div>
                <div className="policy-point">
                  <div className="policy-bullet">2</div>
                  <p>
                    We may update this Privacy Policy from time to time to
                    reflect changes in our practices or legal requirements. We
                    will notify you of significant changes via email or a
                    prominent notice within the app at least 7 days before they
                    take effect.
                  </p>
                </div>
                <div className="policy-point">
                  <div className="policy-bullet">3</div>
                  <p>
                    This Privacy Policy is governed by the laws of India,
                    including the Information Technology Act, 2000 and the
                    Digital Personal Data Protection Act, 2023. By using
                    RushBaskets, you consent to its terms.
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
              { value: "256-bit", label: "SSL Encryption" },
              { value: "0", label: "Data Sold to 3rd Parties" },
              { value: "DPDP", label: "Act Compliant" },
              { value: "48hr", label: "Data Request Response" },
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

        {/* ── Our Commitments ── */}
        <section className="py-20 px-6 md:px-12 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="section-tag">🌿 OUR COMMITMENTS</span>
              <h2 className="text-3xl font-extrabold text-gray-800">
                We Promise To
              </h2>
              <p className="text-gray-500 mt-2 text-sm">
                Our core privacy promises to every RushBaskets user
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: "🔒",
                  title: "Keep Data Secure",
                  desc: "Your data is encrypted and protected with industry-leading security practices at all times.",
                  color: "#f97316",
                },
                {
                  icon: "🚫",
                  title: "Never Sell Your Data",
                  desc: "We will never sell, rent, or trade your personal information to any third party for marketing.",
                  color: "#22c55e",
                },
                {
                  icon: "👁️",
                  title: "Be Transparent",
                  desc: "We clearly explain what data we collect and why, with no hidden agendas or fine print surprises.",
                  color: "#3b82f6",
                },
                {
                  icon: "🎛️",
                  title: "Give You Control",
                  desc: "You can access, correct, or delete your personal data at any time through the app or by contacting us.",
                  color: "#a855f7",
                },
                {
                  icon: "📬",
                  title: "Respond Quickly",
                  desc: "All privacy-related queries and data requests are handled within 48 hours by our dedicated team.",
                  color: "#f97316",
                },
                {
                  icon: "📋",
                  title: "Stay Compliant",
                  desc: "We follow India's Digital Personal Data Protection Act and all applicable data privacy regulations.",
                  color: "#22c55e",
                },
              ].map(({ icon, title, desc, color }) => (
                <div key={title} className="commitment-card">
                  <div style={{ fontSize: "2.2rem", marginBottom: "12px" }}>
                    {icon}
                  </div>
                  <h3 className="font-bold text-gray-800 text-base mb-2">
                    {title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed m-0">
                    {desc}
                  </p>
                  <div
                    style={{
                      width: "32px",
                      height: "3px",
                      background: color,
                      borderRadius: "9999px",
                      margin: "14px auto 0",
                    }}
                  />
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
            <div className="text-5xl mb-4">🛡️</div>
            <h2 className="text-4xl font-extrabold text-white mb-4">
              Your Data is Safe With Us
            </h2>
            <p className="mb-8 text-lg" style={{ color: "#ffedd5" }}>
              Have questions about how we handle your privacy? Our team is
              available 24/7 to address any concerns you may have.
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
