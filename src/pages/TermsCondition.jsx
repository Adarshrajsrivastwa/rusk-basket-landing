import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const sections = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    content: [
      "By downloading, installing, or using the RushBaskets application or website, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our platform.",
      "These Terms constitute a legally binding agreement between you (the 'User') and RushBaskets ('Company', 'we', 'us', or 'our'). We reserve the right to update these Terms at any time, and continued use of the platform constitutes your acceptance of any changes.",
      "Users must be at least 18 years of age or have parental/guardian consent to use the RushBaskets platform. By using our services, you confirm that you meet these requirements.",
    ],
  },
  {
    id: "services",
    title: "2. Use of Services",
    content: [
      "RushBaskets provides an e-commerce management platform for grocery businesses, including order management, inventory control, analytics, and delivery coordination. We grant you a limited, non-exclusive, non-transferable license to use our services for lawful purposes only.",
      "You agree not to misuse our platform — including but not limited to: attempting to gain unauthorized access, transmitting harmful code, scraping data without consent, or using the service for any fraudulent or unlawful activity.",
      "We reserve the right to suspend or terminate your account if we believe you are violating these Terms, without prior notice and without liability.",
    ],
  },
  {
    id: "orders",
    title: "3. Orders & Payments",
    content: [
      "All orders placed through RushBaskets are subject to availability and confirmation. We reserve the right to cancel or limit orders at our discretion, including for suspected fraudulent activity or stock unavailability.",
      "Prices listed on our platform are subject to change without notice. Payments are processed through secure third-party gateways and must be completed at the time of order placement unless otherwise specified.",
      "Refunds and returns are governed by our separate Refund Policy. In general, perishable goods cannot be returned, but defective or incorrectly delivered items may be eligible for replacement or credit at our discretion.",
    ],
  },
  {
    id: "delivery",
    title: "4. Delivery Policy",
    content: [
      "Delivery timelines are estimates and may vary based on your location, order volume, and external factors such as weather or traffic. RushBaskets will make commercially reasonable efforts to fulfill deliveries within promised timeframes.",
      "You are responsible for providing accurate delivery address information. We cannot be held liable for delivery failures caused by incorrect addresses, inaccessible locations, or absence of the recipient at the time of delivery.",
      "Deliveries may require a signature or ID verification for certain orders. Our delivery partners are trained professionals who adhere to safety and hygiene standards.",
    ],
  },
  {
    id: "privacy",
    title: "5. Privacy & Data",
    content: [
      "We collect and process personal data as outlined in our Privacy Policy, which is incorporated by reference into these Terms. By using RushBaskets, you consent to our data practices including collection of usage data, preferences, and transaction history.",
      "We implement industry-standard security measures to protect your data. However, no system is completely secure and we cannot guarantee absolute protection against breaches beyond our reasonable control.",
      "We do not sell your personal information to third parties. Data may be shared with service providers (e.g., payment processors, delivery partners) only as necessary to fulfill your orders and improve our services.",
    ],
  },
  {
    id: "intellectual",
    title: "6. Intellectual Property",
    content: [
      "All content on the RushBaskets platform — including but not limited to logos, graphics, text, software, and designs — is the exclusive property of RushBaskets and is protected by applicable intellectual property laws.",
      "You may not copy, reproduce, distribute, modify, or create derivative works from any content on our platform without prior written consent from RushBaskets.",
      "If you believe any content on our platform infringes your intellectual property rights, please contact us at info.rushbaskets@gmail.com with the relevant details and we will respond promptly.",
    ],
  },
  {
    id: "liability",
    title: "7. Limitation of Liability",
    content: [
      "To the maximum extent permitted by law, RushBaskets shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of, or inability to use, our platform or services.",
      "Our total liability for any claim arising out of or related to these Terms or our services shall not exceed the amount you paid to us in the three (3) months preceding the claim.",
      "Some jurisdictions do not allow the exclusion of certain warranties or limitations of liability. In such cases, our liability is limited to the fullest extent permitted by applicable law.",
    ],
  },
  {
    id: "termination",
    title: "8. Account Termination",
    content: [
      "You may close your RushBaskets account at any time by contacting our support team or through the account settings within the app. Pending orders will be processed and completed before termination.",
      "We reserve the right to suspend or permanently terminate accounts found to be in violation of these Terms, without prior notice. In such cases, any remaining account balance may be forfeited.",
      "Upon termination, your license to use RushBaskets immediately ceases. Provisions that by their nature should survive termination (including intellectual property, limitation of liability, and dispute resolution) shall continue to apply.",
    ],
  },
  {
    id: "governing",
    title: "9. Governing Law & Disputes",
    content: [
      "These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising from these Terms will be subject to the exclusive jurisdiction of courts in your registered state of business.",
      "Before resorting to legal action, both parties agree to attempt to resolve disputes amicably through good-faith negotiation for a minimum of 30 days.",
      "If you have questions or concerns about these Terms, please reach out to us at info.rushbaskets@gmail.com before taking any formal steps.",
    ],
  },
];

export default function TermsAndConditions() {
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
        <h1 className="page-title">Terms & Conditions</h1>
        <p className="page-meta">RushBaskets · Last updated: June 1, 2025</p>

        <p className="page-intro">
          Please read these terms carefully before using the RushBaskets
          platform. By using our services, you agree to be bound by the
          following terms and conditions. These terms govern your use of our
          grocery e-commerce management platform.
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
