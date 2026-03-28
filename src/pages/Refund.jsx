import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function RefundPolicy() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      icon: "💳",
      title: "1. Payment Processing",
      color: "#ff7b1d",
      bg: "#fff7ed",
      border: "#fed7aa",
      content: [
        "1.1. Subject to Part A: General Terms and Conditions in conjunction with Part I: Specific Terms for Online Payment Aggregation Services, Razorpay shall facilitate collection of online payments for products/services sold by You. You agree that where any settlement amount is less than Rupee 1, Razorpay shall endeavour to, but is not obligated to You, make such settlement.",
        "1.2. Subject to Clause 2 and 3 of Part I: Specific Terms for Online Payment Aggregation Services, Razorpay shall settle the Transaction Amount (net of Permissible Deductions) into your account as per agreed timelines in compliance with the PA/PG guidelines. The Merchant acknowledges and agrees that the foregoing is subject to credit to / receipt of funds by Razorpay in the Escrow Account from acquiring banks or gateways.",
        "1.3. If Razorpay settles the Transaction Amount under Part A: General Terms and Conditions or Part B: Specific Terms and Conditions, at an earlier time than agreed above, Razorpay shall have an absolute right to recover the Transaction Amount forthwith if the same is not received in the Escrow Account within three (3) Escrow Bank Working Days following the date of the Transaction for any reason whatsoever.",
        "1.4. Razorpay shall have an absolute right to place limits on the Transaction value.",
        '1.5. You may choose to purchase Fee Credits from Razorpay in respect of the Services being rendered under Part I: Specific Terms for Online Payment Aggregation Services. It is agreed that in respect of each Transaction, Razorpay shall be entitled to deduct an amount equivalent to Razorpay fees along with applicable taxes from the Fee Credit. You agree that if sufficient funds are not available in the Fee Credits, then Razorpay shall be entitled to deduct Razorpay fees along with applicable taxes from the Transaction Amount. "Fee Credits" are the credits using which You may receive the full settlement amount without any fee deduction. For example, if You have a Fee Credit of INR 100 then all the Transactions will be settled in full and the fees for these payments will be deducted from the Fee Credit of INR 100.',
        "1.6. You agree that Razorpay shall be entitled, at its sole discretion, to recover any amounts from You that are charged to Razorpay and/or debited by Facility Providers from accounts maintained by You or any reason attributable to the provision of Services to You by way of deduction from (i) the Transaction Amount to be settled to You and/or (ii) any of Your other funds held by Razorpay in the course of providing the Services. In the event such set-off or recovery does not fully reimburse Razorpay for the liability owed, You shall pay Razorpay a sum equal to any shortfall thereof.",
        "1.7. You hereby acknowledge and agree that in case of reversal of Transaction Amount to Razorpay's Escrow Account due to any reason, including but not limited to your bank (where your settlement account resides) rejecting acceptance of the Transaction Amount for any reason whatsoever, Razorpay may refund the monies to the source account from which it was received.",
        "1.8. Notwithstanding anything set forth in the Terms, You acknowledge, agree and affirm that in the event Razorpay in its absolute discretion determines that, for reasons including but not limited to internal decisions or regulatory mandates, it is not feasible or suitable to settle the funds held in the Razorpay's Escrow Account to you, Razorpay reserves the right to withhold such settlement and after giving prior notice to you, shall refund the said amount back to the source account from which it was received.",
        "1.9. Merchant hereby consents and confirms that, where any bank as a payment aggregator/payment facilitator takes Razorpay services for processing settlement of funds for such Merchant, acting as Razorpay's partner bank, the Merchant authorizes Razorpay to make settlements to such partner bank or any third party, whereby Merchant gives its instructions to such effect either directly to Razorpay or to such partner bank which is made available to Razorpay by such partner bank. Additionally, the Merchant understands and agrees that Razorpay may carry out KYC procedure for the said Merchant through any permissible means.",
      ],
    },
    {
      icon: "🔁",
      title: "2. Chargebacks",
      color: "#1d4ed8",
      bg: "#eff6ff",
      border: "#bfdbfe",
      content: [
        '2.1. If a Facility Provider communicates to Razorpay the receipt of a Chargeback Request, You will be notified of the Chargeback. You agree that liability for Chargeback, whether domestic or international, under the Terms solely rests with You. You further agree that it is Your sole discretion whether to avail non-3D secure services or not and additional terms for the same will apply as set out in the Merchant dashboard. Subject to availability of funds, Razorpay upon receipt of a Chargeback Request shall forthwith deduct Chargeback Amount from the Transaction Amounts, which may be used, based on the decision of the Facility Provider, either to a) process Chargeback in favour of the customer or b) credit to You. For the avoidance of doubt, Razorpay shall be entitled to deduct the Chargeback Amount upon receiving a Chargeback claim. You shall be entitled to furnish to Razorpay documents and information ("Chargeback Documents") pertaining to the Transaction associated with the Chargeback Request in order to substantiate (i) the completion of the aforesaid Transaction; and/or (ii) delivery of goods/services sought by the customer pursuant to the said Transaction. You shall furnish the Chargeback Documents within three (3) calendar days (or such other period specified by the Facility Provider) of receiving notification of the Chargeback Request.',
        "2.2. You agree that (i) if You are unable to furnish Chargeback Documents; and/or (ii) the Facility Provider is not satisfied with the Chargeback Documents furnished by You, then the Facility Provider shall be entitled to order Razorpay to effect a reversal of the debit of the Chargeback Amount associated with the Chargeback such that the said Chargeback Amount is credited to the customer's Payment Instrument.",
        "2.3. Notwithstanding anything in these Terms, if the Facility Providers charge the Chargeback Amount from Razorpay then You agree and acknowledge that Razorpay is entitled to recover such Chargeback Amount from You by way of deduction from (i) the Transaction Amounts to be settled to You and (ii) any of Your other funds held by Razorpay in the course of providing the Services. Provided however, if the available Transaction Amounts or other funds are insufficient for deduction of the Chargeback Amount, then Razorpay is entitled to issue a debit note seeking reimbursement of the Chargeback Amount. You shall reimburse the Chargeback Amount within seven (7) days of receipt of the debit note.",
        "2.4. On the issuance of notice of termination under the Terms, Razorpay reserves the right to withhold from each settlement made during the notice period, a sum computed based on a Stipulated Percentage (defined hereinbelow) for a period of one hundred and twenty (120) days (\"Withholding Term\") from the date of termination of these Terms. The sums so withheld shall be utilized towards settlement of Chargebacks. After processing such Chargebacks, Razorpay shall transfer the unutilized amounts, if any, to You forthwith upon completion of the Withholding Term. The 'Stipulated Percentage' is the proportion of the Chargeback Amounts out of the total Transaction Amounts settled during the subsistence of these Terms.",
        "2.5. Notwithstanding anything in the Terms, if the amount withheld pursuant to clause 2.4 above is insufficient to settle Chargebacks Amounts received during the Withholding Term, then Razorpay is entitled to issue a debit note seeking reimbursement of the Chargeback Amount. You shall reimburse the Chargeback Amount within seven (7) days of receipt of the debit note.",
        "2.6. The following applies for Chargebacks associated with EMI products which are supported by Facility Providers. For any loan cancellation requests, You need to respond to Razorpay within seven (7) working days with a suitable response. If loan is to be cancelled, then the same needs to be informed to Razorpay and if cancellation request is to be declined then You need to provide proof of delivery and justification. For loans which would get cancelled on the basis of Your confirmation, the amount would be recovered from the daily settlement.",
      ],
    },
    {
      icon: "↩️",
      title: "3. Refunds",
      color: "#16a34a",
      bg: "#f0fdf4",
      border: "#bbf7d0",
      content: [
        "3.1. You agree and acknowledge that subject to availability of funds received in the Escrow Account, You are entitled to effect Refunds at Your sole discretion.",
        "3.2. You further agree and acknowledge that initiation of Refunds is at Your discretion and Razorpay shall process a Refund only upon initiation of the same on the Platform.",
        "3.3. All Refunds initiated by You shall be routed to the same payment method through which the Transaction was processed.",
        "3.4. You agree that Razorpay fees shall always be applicable and payable by You on each Transaction irrespective of whether You have refunded the same to Your customer either through normal channels of refunds or through the instant refund service of Razorpay affiliate (if availed).",
        "3.5. You acknowledge and agree that for payments that are late authorized but not captured by You, Razorpay may initiate auto-refund to the customer within five (5) days.",
      ],
    },
    {
      icon: "🚨",
      title: "4. Fraudulent Transactions",
      color: "#dc2626",
      bg: "#fef2f2",
      border: "#fecaca",
      content: [
        '4.1. Subject to clause 2.1 and 2.2 of this Part I: Specific Terms for Online Payment Aggregation Services, if Razorpay is intimated, by a Facility Provider, that a customer has reported an unauthorised debit of the customer\'s Payment Instrument ("Fraudulent Transaction"), then in addition to its rights under clause 16 of Part A: General Terms and Conditions, Razorpay shall be entitled to suspend settlements to You during the pendency of inquiries, investigations and resolution thereof by the Facility Providers.',
        "4.2. If the amount in respect of the Fraudulent Transaction has already been settled to You pursuant to these Terms, any dispute arising in relation to the said Fraudulent Transaction, following settlement, shall be resolved in accordance with the RBI's notification DBR.No.Leg.BC.78/09.07.005/2017-18, dated July 6, 2017 read with RBI's notification DBOD. LEG. BC 86/09.07.007/2001-02 dated April 8, 2002 and other notifications, circulars and guidelines issued by the RBI in this regard from time to time.",
        "4.3. Subject to clause 4.2 above, if the Fraudulent Transaction results in a Chargeback, then such Chargeback shall be resolved in accordance with the provisions set out in the Terms.",
        "4.4. You acknowledge that Razorpay shall not be responsible for any liability arising in respect of Fraudulent Transactions whether it is an international or a domestic transaction.",
        "4.5. You shall be liable in the event of breach of the fraud amount thresholds as provided under the NPCI guideline on 'Fraud liability guidelines on UPI transactions' NPCI/2022-23/RMD/001. You hereby understand and agree that the decision of the NPCI or the concerned acquiring bank, as the case may be, shall be final and binding.",
      ],
    },
    {
      icon: "📌",
      title: "5. General",
      color: "#7e22ce",
      bg: "#fdf4ff",
      border: "#e9d5ff",
      content: [
        "5.1. In the event of any conflict between Part A: General Terms and Conditions and Part B: Specific Terms and Conditions, Part B: Specific Terms and Conditions shall prevail. To the maximum extent feasible, they shall be construed harmoniously.",
        "5.2. Capitalised terms used but not defined in this Part I: Specific Terms for Online Payment Aggregation Services of Part B shall have the meaning ascribed to such terms in Part A: General Terms and Conditions.",
        "5.3. Clauses 2 and 4 of Part I: Specific Terms for Online Payment Aggregation Services of Part B shall survive the termination of the Terms.",
        "5.4. You hereby consent for Razorpay to share Your information/data, including activity related information and personal information, with its Affiliates, for (i) the Affiliates to facilitate access to/market along with Razorpay, such products and services as the Affiliates may deem You eligible; and/or (ii) to share such information with Facility Providers (such as banks, NBFCs) associated with the Affiliates, for such Facility Providers to assess Your eligibility for the proposed products and services. To revoke or modify such consent please reach out to support.razorpay.com.",
        "5.5. You hereby agree and confirm that in case You have opted for a loan/line of credit or any other similar product through Razorpay's affiliates/group companies, and its Facility Providers/lending partners, You hereby acknowledge, confirm, agree and provide unconditional consent that Razorpay may facilitate its affiliates/group companies which reserve the right to recover the outstanding dues from the positive balance as maintained by You with Razorpay. Depending on the type of loan product opted by You: (i) where NACH mandate provided by You as the first mode of repayment fails due to insufficient balance, recovery shall happen from your positive balance maintained with Razorpay, provided You have not completed repayment to lending partner of Razorpay affiliate/group companies through any other mode; or (ii) where your positive balance is first mode of repayment, recovery shall happen from the same.",
        "5.6. You hereby agree that Razorpay may deduct amounts from Your settlement account in accordance with instructions provided by You to Razorpay. Razorpay may first deduct its fees and other liabilities, including but not limited to chargebacks, fines, and penalties followed by other deductions, based on the chronological order of the instructions received from You.",
      ],
    },
  ];

  const quickPoints = [
    { icon: "⏱️", label: "Refund Timeline", value: "5–7 Business Days" },
    { icon: "💰", label: "Refund Method", value: "Original Payment Source" },
    { icon: "📩", label: "Support Email", value: "info.rushbaskets@gmail.com" },
    { icon: "🏦", label: "Auto-Refund", value: "Within 5 Days (uncaptured)" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');
        .refund-page { font-family: 'Poppins', sans-serif; }

        .policy-card {
          border-radius: 14px;
          padding: 24px 28px;
          border-left: 5px solid;
          transition: box-shadow 0.2s, transform 0.2s;
        }
        .policy-card:hover {
          box-shadow: 0 6px 24px rgba(0,0,0,0.09);
          transform: translateY(-2px);
        }

        .clause-item {
          padding: 10px 0;
          border-bottom: 1px dashed rgba(0,0,0,0.08);
          font-size: 0.85rem;
          line-height: 1.75;
          color: #374151;
        }
        .clause-item:last-child { border-bottom: none; }

        .clause-number {
          font-weight: 700;
          margin-right: 6px;
          flex-shrink: 0;
        }

        .quick-card {
          border-radius: 14px;
          padding: 18px 20px;
          background: #fff;
          box-shadow: 0 4px 16px rgba(0,0,0,0.06);
          border-top: 4px solid #ff7b1d;
          text-align: center;
        }

        .contact-btn {
          background: #ff7b1d;
          color: #fff;
          font-weight: 700;
          border-radius: 9999px;
          padding: 12px 32px;
          font-size: 1rem;
          border: none;
          cursor: pointer;
          transition: background 0.2s, box-shadow 0.2s;
          box-shadow: 0 4px 16px rgba(255,123,29,0.3);
        }
        .contact-btn:hover {
          background: #e06010;
          box-shadow: 0 6px 24px rgba(255,123,29,0.45);
        }

        .section-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #ffedd5;
          color: #ff7b1d;
          border-radius: 9999px;
          padding: 4px 14px;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          margin-bottom: 24px;
        }
      `}</style>

      <div
        className="refund-page min-h-screen"
        style={{ background: "#fff7ed" }}
      >
        {/* ── HEADER ── */}
        <div
          style={{
            background: "linear-gradient(135deg, #ff7b1d 0%, #c2410c 100%)",
          }}
          className="py-16 px-6 text-center"
        >
          <div className="text-5xl mb-4">↩️</div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3">
            Refund & Return Policy
          </h1>
          <p className="text-orange-100 text-base">
            Last updated on March 19th, 2024
          </p>
          <div className="mt-4 inline-block bg-white bg-opacity-20 text-white text-sm font-semibold px-5 py-2 rounded-full border border-white border-opacity-30">
            RushBaskets Grocer · info.rushbaskets@gmail.com
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* ── QUICK SUMMARY CARDS ── */}
          <div className="section-badge">⚡ QUICK SUMMARY</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {quickPoints.map(({ icon, label, value }) => (
              <div key={label} className="quick-card">
                <div className="text-3xl mb-2">{icon}</div>
                <div className="text-xs text-gray-500 font-semibold mb-1">
                  {label}
                </div>
                <div className="text-sm font-bold text-gray-800">{value}</div>
              </div>
            ))}
          </div>

          {/* ── INTRO NOTE ── */}
          <div
            className="rounded-2xl p-5 mb-10 flex gap-4 items-start"
            style={{
              background: "#fff",
              border: "1px solid #fed7aa",
              boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
            }}
          >
            <span className="text-3xl flex-shrink-0">📢</span>
            <div>
              <p className="font-bold text-gray-800 mb-1">Important Notice</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                This Refund and Return Policy governs all transactions made
                through RushBaskets and applies to our payment processing
                partner Razorpay. Please read the following terms carefully
                before making any purchase. By using our platform, you agree to
                be bound by these terms.
              </p>
            </div>
          </div>

          {/* ── POLICY SECTIONS ── */}
          <div className="space-y-5 mb-10">
            {sections.map(({ icon, title, color, bg, border, content }) => (
              <div
                key={title}
                className="policy-card"
                style={{ background: bg, borderLeftColor: color }}
              >
                <h2
                  className="text-lg font-bold mb-4 flex items-center gap-2"
                  style={{ color }}
                >
                  <span>{icon}</span> {title}
                </h2>
                <div className="space-y-0">
                  {content.map((clause, i) => {
                    const dotIndex = clause.indexOf(".");
                    const clauseNum = clause.substring(0, dotIndex + 1);
                    const clauseText = clause.substring(dotIndex + 1).trim();
                    return (
                      <div key={i} className="clause-item flex gap-2">
                        <span className="clause-number" style={{ color }}>
                          {clauseNum}
                        </span>
                        <span>{clauseText}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* ── ACCEPTANCE DETAILS TABLE ── */}
          <div className="bg-white rounded-2xl shadow-sm border border-orange-100 overflow-hidden mb-10">
            <div
              className="px-6 py-4 border-b border-orange-100"
              style={{ background: "#ff7b1d" }}
            >
              <h2 className="text-white font-bold text-lg flex items-center gap-2">
                📄 Acceptance Details
              </h2>
            </div>
            <table className="w-full">
              <tbody>
                {[
                  ["Owner ID", "RMzccuo3TjJ9Vu"],
                  ["Owner Name", "RUSH BASKETS GROSER"],
                  ["IP Address", "10.26.99.194"],
                  ["Date Of Acceptance", "2026-03-26 16:17:19 IST"],
                  ["Signatory Name", "Diksha"],
                  ["Contact Number", "+919045199008"],
                  ["Email", "info.rushbaskets@gmail.com"],
                ].map(([key, val]) => (
                  <tr
                    key={key}
                    className="hover:bg-orange-50"
                    style={{ borderBottom: "1px solid #fed7aa" }}
                  >
                    <td className="px-6 py-3 font-semibold text-gray-600 text-sm w-52">
                      {key}
                    </td>
                    <td className="px-6 py-3 text-gray-800 text-sm">{val}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ── REFUND PROCESS STEPS ── */}
          <div className="bg-white rounded-2xl shadow-sm border border-orange-100 overflow-hidden mb-10">
            <div className="px-6 py-4" style={{ background: "#ff7b1d" }}>
              <h2 className="text-white font-bold text-lg flex items-center gap-2">
                🔄 How Our Refund Process Works
              </h2>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  step: "01",
                  icon: "📝",
                  title: "Raise a Request",
                  desc: "Contact us via email or the contact form with your order details and reason for return/refund.",
                },
                {
                  step: "02",
                  icon: "🔍",
                  title: "Review & Approval",
                  desc: "Our team reviews your request within 24–48 hours and verifies transaction details.",
                },
                {
                  step: "03",
                  icon: "💸",
                  title: "Refund Initiated",
                  desc: "Approved refunds are processed to the original payment source within 5–7 business days.",
                },
              ].map(({ step, icon, title, desc }) => (
                <div key={step} className="flex gap-4 items-start">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-extrabold text-white flex-shrink-0 text-sm"
                    style={{
                      background: "linear-gradient(135deg, #ff7b1d, #c2410c)",
                    }}
                  >
                    {step}
                  </div>
                  <div>
                    <div className="text-xl mb-1">{icon}</div>
                    <p className="font-bold text-gray-800 text-sm mb-1">
                      {title}
                    </p>
                    <p className="text-gray-500 text-xs leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── FOOTER NOTE ── */}
          <div
            className="rounded-2xl p-6 text-center mb-8"
            style={{
              background: "linear-gradient(135deg, #ff7b1d 0%, #c2410c 100%)",
            }}
          >
            <p className="text-white font-semibold text-base">
              🧡 RushBaskets is committed to a fair and transparent refund
              experience. If you have any questions regarding this policy,
              please don't hesitate to reach out to our support team.
            </p>
          </div>

          {/* ── BUTTONS ── */}
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => navigate("/contact")}
              className="contact-btn"
            >
              Contact Support →
            </button>
            <button
              onClick={() => navigate("/privacy")}
              style={{
                background: "transparent",
                color: "#ff7b1d",
                fontWeight: 700,
                borderRadius: "9999px",
                padding: "12px 32px",
                fontSize: "1rem",
                border: "2px solid #ff7b1d",
                cursor: "pointer",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#fff7ed";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
              }}
            >
              View Privacy Policy
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
