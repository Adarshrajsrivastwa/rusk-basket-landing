import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const sections = [
  {
    id: "information-collect",
    title: "1. Information We Collect",
    content: [
      "Personal Information: When you register or use RushBaskets, we collect information such as your name, email address, phone number, delivery address, and payment details necessary to process your orders.",
      "Usage Data: We automatically collect data about how you interact with our platform — including pages visited, features used, time spent, device type, browser, IP address, and app version — to improve your experience.",
      "Transaction Data: Details of every order you place, including items purchased, amounts paid, delivery status, and communication history with our support team are stored securely in our systems.",
      "Location Data: With your permission, we collect approximate or precise location data to enable delivery tracking, show nearby stores, and improve our logistics operations.",
    ],
  },
  {
    id: "how-we-use",
    title: "2. How We Use Your Information",
    content: [
      "Order Fulfillment: Your personal and delivery information is used to process, confirm, and deliver your grocery orders. We share necessary details with our delivery partners solely for this purpose.",
      "Platform Improvement: Usage and analytics data help us understand how customers interact with RushBaskets so we can fix issues, improve features, and personalize your experience.",
      "Communications: We use your contact information to send order confirmations, delivery updates, promotional offers (with your consent), and important service announcements.",
      "Security & Fraud Prevention: We analyze account activity and transaction patterns to detect suspicious behavior, prevent fraud, and keep both buyers and sellers safe on our platform.",
    ],
  },
  {
    id: "data-sharing",
    title: "3. Data Sharing & Disclosure",
    content: [
      "Service Providers: We share your data with trusted third-party partners — such as payment gateways, delivery services, and cloud infrastructure providers — only to the extent necessary to operate our platform.",
      "We Never Sell Your Data: RushBaskets does not sell, rent, or trade your personal information to advertisers or other third parties for their marketing purposes. Your data is yours.",
      "Legal Requirements: We may disclose your information if required to do so by law, court order, or government authority, or to protect the rights, safety, and security of RushBaskets, our users, or the public.",
      "Business Transfers: In the event of a merger, acquisition, or sale of assets, your data may be transferred to the new entity. We will notify you via email and/or a prominent notice on our platform before such a transfer.",
    ],
  },
  {
    id: "data-security",
    title: "4. Data Security",
    content: [
      "Encryption: All data transmitted between your device and our servers is encrypted using industry-standard 256-bit SSL/TLS protocols. Payment information is processed through PCI-DSS compliant gateways.",
      "Access Controls: We implement strict role-based access controls so that only authorized personnel can access sensitive user data, and only when necessary to perform their job functions.",
      "Regular Audits: Our security practices are regularly reviewed and updated. We conduct vulnerability assessments and penetration tests to proactively identify and fix potential weaknesses.",
      "While we take every reasonable precaution to protect your data, no system can be guaranteed 100% secure. In the event of a data breach that affects your rights, we will notify you as required by applicable law.",
    ],
  },
  {
    id: "cookies",
    title: "5. Cookies & Tracking",
    content: [
      "What Are Cookies: Cookies are small text files stored on your device that help us remember your preferences, keep you logged in, and understand how you use RushBaskets.",
      "Types We Use: We use essential cookies (required for the platform to function), analytics cookies (to understand usage patterns), and preference cookies (to remember your settings and language).",
      "Third-Party Cookies: Some features may use third-party cookies from providers like Google Analytics. These parties have their own privacy policies governing how they use this data.",
      "Managing Cookies: You can control or disable cookies through your browser settings. However, disabling essential cookies may affect the functionality of certain features on our platform.",
    ],
  },
  {
    id: "your-rights",
    title: "6. Your Rights",
    content: [
      "Access & Portability: You have the right to request a copy of all personal data we hold about you in a machine-readable format. Submit a request through the app or email us at info.rushbaskets@gmail.com.",
      "Correction & Deletion: If any of your information is inaccurate or you wish to have your data deleted, you can update it directly in the app or contact our support team. We will process verified requests within 30 days.",
      "Opt-Out of Marketing: You may unsubscribe from promotional emails at any time by clicking 'Unsubscribe' in any marketing email, or by updating your notification preferences within the app settings.",
      "Withdraw Consent: Where we process data based on your consent (e.g., location access, marketing), you may withdraw consent at any time. This will not affect the lawfulness of processing before withdrawal.",
    ],
  },
  {
    id: "data-retention",
    title: "7. Data Retention",
    content: [
      "We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, including legal, accounting, and reporting requirements.",
      "Order and transaction records are typically retained for 7 years to comply with Indian tax and financial regulations. Account data is deleted within 90 days of account closure upon request.",
      "Anonymized and aggregated data (which cannot identify you) may be retained indefinitely for research and analytical purposes to improve our platform and services.",
    ],
  },
  {
    id: "children",
    title: "8. Children's Privacy",
    content: [
      "RushBaskets is not directed at children under the age of 13. We do not knowingly collect personal information from children. If you believe a child has provided us with personal data, please contact us immediately.",
      "If we discover that we have collected personal information from a child without parental consent, we will take steps to delete that information from our servers as quickly as possible.",
      "Parents and guardians who have concerns about their child's use of our platform are encouraged to contact our support team at info.rushbaskets@gmail.com for assistance.",
    ],
  },
  {
    id: "contact",
    title: "9. Contact & Updates",
    content: [
      "If you have any questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact our Privacy Team at info.rushbaskets@gmail.com. We aim to respond within 48 hours.",
      "We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of significant changes via email or a prominent notice within the app at least 7 days before they take effect.",
      "This Privacy Policy is governed by the laws of India, including the Information Technology Act, 2000 and the Digital Personal Data Protection Act, 2023. By using RushBaskets, you consent to its terms.",
    ],
  },
];

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #fff; color: #000; font-family: sans-serif; }

        .page {
          max-width: 960px;
          margin: 0 auto;
          padding: 60px 24px 100px;
        }

        .page-title {
          font-size: 1.75rem;
          font-weight: 700;
          color: #000;
          margin-bottom: 6px;
        }

        .page-meta {
          font-size: 0.82rem;
          color: #888;
          margin-bottom: 28px;
        }

        .page-intro {
          font-size: 0.9rem;
          color: #333;
          line-height: 1.75;
          padding-bottom: 32px;
          border-bottom: 1px solid #e5e5e5;
          margin-bottom: 40px;
        }

        .section {
          margin-bottom: 36px;
        }

        .section-title {
          font-size: 1rem;
          font-weight: 700;
          color: #000;
          margin-bottom: 12px;
        }

        .section ul {
          list-style: none;
          padding: 0;
        }

        .section ul li {
          font-size: 0.875rem;
          color: #333;
          line-height: 1.75;
          padding: 10px 0;
          border-bottom: 1px solid #f0f0f0;
        }

        .section ul li:last-child {
          border-bottom: none;
        }

        .divider {
          border: none;
          border-top: 1px solid #e5e5e5;
          margin: 40px 0;
        }

        .footer-note {
          font-size: 0.8rem;
          color: #888;
          line-height: 1.8;
          text-align: center;
        }

        .footer-note a {
          color: #f97316;
          text-decoration: none;
        }
      `}</style>

      <div className="page">
        <h1 className="page-title">Privacy Policy</h1>
        <p className="page-meta">RushBaskets · Last updated: June 1, 2025</p>

        <p className="page-intro">
          At RushBaskets, we are committed to protecting your personal
          information. This policy explains what data we collect, how we use it,
          and the choices you have. By using our platform, you agree to the
          terms described below.
        </p>

        {sections.map((s) => (
          <div key={s.id} id={s.id} className="section">
            <h2 className="section-title">{s.title}</h2>
            <ul>
              {s.content.map((text, i) => (
                <li key={i}>{text}</li>
              ))}
            </ul>
          </div>
        ))}

        <hr className="divider" />

        <p className="footer-note">
          Questions? Email us at{" "}
          <a href="mailto:info.rushbaskets@gmail.com">
            info.rushbaskets@gmail.com
          </a>
          <br />© 2025 RushBaskets. All rights reserved.
        </p>
      </div>
    </>
  );
}
