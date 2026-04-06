import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const sections = [
  {
    id: "eligibility",
    title: "1. Return Eligibility",
    content: [
      "Items are eligible for return within 24 hours of delivery if they are damaged, defective, incorrectly delivered, or significantly different from what was ordered. Photographic evidence may be required to process your return request.",
      "Perishable goods such as fresh vegetables, fruits, dairy products, and bakery items are generally not eligible for return unless they are delivered in a spoiled, damaged, or incorrect condition at the time of delivery.",
      "Non-perishable packaged goods, personal care products, and household items may be returned within 48 hours of delivery provided they are unused, unopened, and in their original packaging with all seals intact.",
      "Items purchased during special sales, clearance events, or with promotional discount codes may have different return eligibility — please check the specific offer terms at the time of purchase.",
    ],
  },
  {
    id: "non-returnable",
    title: "2. Non-Returnable Items",
    content: [
      "Fresh Produce: Vegetables, fruits, herbs, and other fresh produce cannot be returned once delivered, except in cases of spoilage or incorrect delivery confirmed at the time of receipt.",
      "Opened or Used Products: Any item that has been opened, partially used, or whose original seal has been broken is not eligible for return unless it is found to be defective upon first use.",
      "Temperature-Sensitive Items: Frozen foods, ice creams, and chilled products that require cold chain management cannot be returned due to health and safety regulations.",
      "Custom or Special Orders: Items specifically ordered or customized at your request, such as custom cakes, special cuts of meat, or made-to-order products, cannot be returned.",
    ],
  },
  {
    id: "refund-process",
    title: "3. Refund Process",
    content: [
      "Once your return request is approved, refunds are processed within 5–7 business days. The refund will be credited to the original payment method used at the time of purchase.",
      "For Cash on Delivery (COD) orders, refunds are issued as RushBaskets Wallet Credits, which can be used on your next purchase. Bank transfers for COD refunds may take up to 7–10 business days.",
      "UPI, debit/credit card, and net banking refunds are subject to additional processing time by your bank or payment provider, typically 3–5 business days after we initiate the refund.",
      "You will receive an email and app notification at each stage of the refund process — from request approval to final credit — so you are always kept informed.",
    ],
  },
  {
    id: "how-to-return",
    title: "4. How to Initiate a Return",
    content: [
      "Step 1 — Report the Issue: Open the RushBaskets app, go to 'My Orders', select the relevant order, and tap 'Report an Issue' or 'Request Return' within the eligible return window.",
      "Step 2 — Describe the Problem: Select the reason for your return from the dropdown menu and provide a brief description. Attach clear photographs of the damaged, defective, or incorrect item if applicable.",
      "Step 3 — Schedule Pickup: For eligible physical returns, our delivery partner will schedule a pickup from your address within 24–48 hours of approval. Ensure the item is in its original packaging.",
      "Step 4 — Refund Confirmation: Once the item is picked up and verified at our warehouse, your refund will be processed. You'll receive a confirmation notification within 24 hours of item verification.",
    ],
  },
  {
    id: "replacement",
    title: "5. Replacements",
    content: [
      "In many cases, we offer a free replacement as an alternative to a refund. If you received a damaged or incorrect item, you can choose between a refund or an immediate replacement delivered at no extra charge.",
      "Replacements are subject to product availability. If the original item is out of stock, we will offer you a full refund or allow you to choose a similar alternative product at the same price.",
      "Replacement deliveries are prioritized and typically dispatched within 24 hours of your request being approved. You will receive a dedicated tracking link for your replacement order.",
      "If a replacement order also arrives with issues, you are entitled to a full refund. Please contact our support team at info.rushbaskets@gmail.com with details and we'll resolve it immediately.",
    ],
  },
  {
    id: "cancellation",
    title: "6. Order Cancellation",
    content: [
      "Before Dispatch — Orders can be cancelled free of charge within 5 minutes of placement, before they are confirmed and dispatched by our fulfillment team. Use the 'Cancel Order' option in the app under 'My Orders'.",
      "After Dispatch — Once an order has been picked up by our delivery partner, cancellation is no longer possible. In such cases, you may initiate a return after delivery if the item meets return eligibility criteria.",
      "Refund Policy — For prepaid orders cancelled within the allowed window, a full refund is processed within 3–5 business days to your original payment method.",
      "Cancelled by RushBaskets — RushBaskets reserves the right to cancel orders due to unavailability of products, delivery constraints, suspected fraudulent activity, or pricing errors. In all such cases, a full refund will be issued immediately.",
    ],
  },
  {
    id: "damaged-delivery",
    title: "7. Damaged or Wrong Delivery",
    content: [
      "If your order arrives damaged or you receive incorrect items, please do not accept the delivery if the damage is visible externally. Report the issue to the delivery agent immediately and contact our support team.",
      "If damage is discovered after delivery, report it within 24 hours through the app with photographs. We take full responsibility for items damaged during transit and will arrange a replacement or refund promptly.",
      "For wrong items delivered, we will arrange an immediate pickup of the incorrect item and either deliver the correct item within 24 hours or process a full refund, whichever you prefer.",
      "Our quality team reviews all damage and wrong-delivery reports to improve our packaging and logistics processes. Your feedback directly helps us serve you better.",
    ],
  },
  {
    id: "wallet-credits",
    title: "8. Wallet Credits & Cashback",
    content: [
      "As a faster alternative to bank refunds, RushBaskets offers instant Wallet Credits that are credited to your account within 2 hours of return approval. These can be used on any future order.",
      "Wallet Credits do not expire and can be used for partial or full payment on any purchase across the RushBaskets platform. They are non-transferable and cannot be withdrawn as cash.",
      "Cashback offers earned on original orders are non-refundable if the order is returned. However, the full product amount excluding cashback benefits will be refunded.",
      "If your account is closed, any remaining Wallet Credits will be forfeited. Please ensure you use your credits before requesting account deletion.",
    ],
  },
  {
    id: "contact",
    title: "9. Contact & Escalation",
    content: [
      "For all refund, return, and replacement queries, reach out to us at info.rushbaskets@gmail.com or through the in-app support chat. We respond within 24 hours on business days.",
      "If your issue is not resolved within 5 business days of reporting, you may escalate it by emailing with the subject line 'Escalation — [Your Order ID]' and our senior support team will take it up within 24 hours.",
      "RushBaskets reserves the right to modify this Refund & Return Policy at any time. Updates will be communicated via the app and email. Continued use of the platform after changes constitutes acceptance of the revised policy.",
    ],
  },
];

export default function RefundPolicy() {
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
        <h1 className="page-title">Refund & Return Policy</h1>
        <p className="page-meta">RushBaskets · Last updated: June 1, 2025</p>

        <p className="page-intro">
          Your satisfaction is our top priority. If something isn't right with
          your order, we'll make it right — quickly, fairly, and without
          unnecessary hassle. Please read this policy to understand your options
          for returns, refunds, and replacements.
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
