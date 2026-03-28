import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Privacy() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      icon: "📋",
      title: "Introduction",
      color: "#ff7b1d",
      bg: "#fff7ed",
      border: "#fed7aa",
      content: `This Privacy Policy applies to your use of the website of RushBaskets, the Services (as defined under the RushBaskets "Terms of Use") and RushBaskets applications on mobile platforms (Android, Blackberry, Windows Phone, iOS etc.) (collectively ("RUSHBASKETS" or "WEBSITE")), but does not apply to any third party websites that may be linked to them, or any relationships you may have with the businesses listed on RushBaskets.

The terms "we", "our" and "us" refer to RushBaskets and the terms "you", "your" and "User" refer to you, as a user of RushBaskets. The term "Personal Information" means information that you provide to us which personally identifies you to be contacted or identified, such as your name, phone number, email address, and any other data that is tied to such information. Our practices and procedures in relation to the collection and use of Personal Information have been set-out below in order to ensure safe usage of the Website for you.

We have implemented reasonable security practices and procedures that are commensurate with the information assets being protected and with the nature of our business. While we try our best to provide security that is better than the industry standards, because of the inherent vulnerabilities of the internet, we cannot ensure or warrant complete security of all information that is being transmitted to us by you. By visiting this Website, you agree and acknowledge to be bound by this Privacy Policy and you hereby consent that we will collect, use, process and share your Personal Information in the manner set out herein below. If you do not agree with these terms, do not use the Website.

It is clarified that the terms and conditions that are provided separately, form an integral part of your use of this Website and should be read in conjunction with this Privacy Policy.`,
    },
    {
      icon: "🗂️",
      title: "Information We Collect and How We Use It",
      color: "#16a34a",
      bg: "#f0fdf4",
      border: "#bbf7d0",
      content: `We collect, receive and store your Personal Information. If you provide your third-party account credentials ("Third Party Account Information") to us, you understand that some content and information in those accounts may be transmitted to your account with us if you authorise such transmissions and that Third Party Account Information transmitted to us shall be covered by this Privacy Policy. You may opt to not provide us with certain information, however that will restrict you from registering with us or availing some of our features and services.

We use commercially reasonable efforts to ensure that the collection of Personal Information is limited to that which is necessary to fulfill the purposes identified below. If we use or plan to use your information in a manner different than the purpose for which it is collected, then we will ask you for your consent prior to such use.

The Personal Information collected will be used only for the purpose of enabling you to use the services provided by us, to help promote a safe service, calibrate consumer interest in our products and services, inform you about online offers and updates, troubleshoot problems, customize User experience, detect and protect us against error, fraud and other criminal activity, collect money, enforce our terms and conditions, and as otherwise described to you at the time of collection of such information.`,
    },
    {
      icon: "🏪",
      title: "Account Information of Merchants",
      color: "#b45309",
      bg: "#fffbeb",
      border: "#fde68a",
      content: `If you create an account to take advantage of the full range of services offered on RushBaskets, we ask for and record Personal Information such as your name, email address and mobile number. We may collect and store your Sensitive Personal Data or Information (such as any financial information including inter alia credit card, debit card details, bank account and know your customer ("KYC") documents as per RBI regulations and any other information as may be applicable) that the User may opt to save in the User account created with RushBaskets.

We use your email address to send you updates, news, and newsletters (if you willingly subscribe to the newsletter during signup, or anytime after signup) and contact you on behalf of other Users (such other Users who send you friend requests, personal messages, or other social collaboration based events). If you do not want to receive communications from us that are not relevant to you or your use of our services, please click on the unsubscribe link provided at the bottom of such e-mails sent to you by us. We use your mobile numbers to send you transaction alerts and SMS alerts based on your preferences. If you do not wish to receive such SMSs from us, please notify us at rushbaskets.com/support to stop receiving SMSs from us. RushBaskets assures that your Personal Information will not be made public or sold to any third party.

The User shall have an option to erase any information provided by the User including Personal Information. If a User opts for the said option of erasure, RushBaskets shall delete all stored information of the User from its servers.`,
    },
    {
      icon: "👥",
      title: "Customer Information",
      color: "#1d4ed8",
      bg: "#eff6ff",
      border: "#bfdbfe",
      content: `We also store customer information of customers such as address, mobile number, Third Party Wallet details, Card Details and email address making payments through RushBaskets checkouts. However, only when customer chooses to share the information on the businesses powered with RushBaskets applications we share the information to respective businesses.

However, RushBaskets is not liable in any way for any misuse of this information by the business or people related to the businesses to whom the information is shared by the customer.`,
    },
    {
      icon: "📊",
      title: "Activity",
      color: "#0369a1",
      bg: "#f0f9ff",
      border: "#bae6fd",
      content: `We record information relating to your use of RushBaskets, such as the searches you undertake, the pages you view, your browser type, IP address, location, requested URL, referring URL, and timestamp information. We use this type of information to administer RushBaskets and provide the highest possible level of security and service to you. We also use this information in the aggregate to perform statistical analyses of User behavior and characteristics in order to measure interest in and use of the various areas of RushBaskets. However, you cannot be identified from this aggregate information.

We own all the intellectual property rights associated with the Website and its contents. No right, title or interest in any downloaded material is transferred to you as a result of any such downloading or copying. The Website is protected by copyright as a collective work and/or compilation (meaning the collection, arrangement, and assembly) of all the content on this Website, pursuant to applicable law.

Our logos, product and service marks and/or names, trademarks, copyrights and other intellectual property, whether registered or not ("Our IP") are exclusively owned by us. Without our prior written permission, you agree to not display and/or use Our IP in any manner. Nothing contained in this Website or the content, should be construed as granting, in any way to the User, any license or right or interest whatsoever, in and/or to Our IP, without our express written permission.`,
    },
    {
      icon: "🍪",
      title: "Cookies",
      color: "#7e22ce",
      bg: "#fdf4ff",
      border: "#e9d5ff",
      content: `We send cookies to your computer in order to uniquely identify your browser and improve the quality of our service. The term "cookies" refers to small pieces of information that a website sends to your computer's hard drive while you are viewing the site. We may use both session cookies (which expire once you close your browser) and persistent cookies (which stay on your computer until you delete them). Persistent cookies can be removed by following your browser help file directions. If you choose to disable cookies, some areas of RushBaskets may not work properly or at all.

RushBaskets uses third party tools, who may collect anonymous information about your visits to RushBaskets using cookies, and interaction with RushBaskets products and services. Such third parties may also use information about your visits to RushBaskets products and services and other web sites to target advertisements for RushBaskets's products and services. No Personal Information is collected or used in this process. These third parties do not know or have access to the name, phone number, address, email address, or any Personal Information about RushBaskets's Users.

RushBaskets Users can opt-out of sharing this information with third parties by deactivating cookies, the process of which varies from browser to browser. Please refer to the help file of your browser to understand the process of deactivating cookies on your browser.`,
    },
    {
      icon: "🔒",
      title: "Enforcement",
      color: "#be185d",
      bg: "#fdf2f8",
      border: "#fbcfe8",
      content: `We may use the information we collect in connection with your use of RushBaskets (including your Personal Information) in order to investigate, enforce, and apply our terms and conditions and Privacy Policy.`,
    },
    {
      icon: "🔄",
      title: "Transfer of Information",
      color: "#dc2626",
      bg: "#fef2f2",
      border: "#fecaca",
      content: `We do not share your Personal Information with any third party apart from financial institutions such as banks, RBI or other regulatory agencies (as may be required) and to provide you with services that we offer through RushBaskets, conduct quality assurance testing, facilitate creation of accounts, provide technical and customer support, or provide specific services, such as synchronization of your contacts with other software applications, in accordance with your instructions. These third parties are required not to use your Personal Information other than to provide the services requested by you.

We may share your Personal Information with our parent company, subsidiaries, joint ventures, or other companies under a common control (collectively, the "Affiliates") that we may have now or in the future, in which case we will require them to honor this Privacy Policy. If another company acquires our company or our assets, that company will possess your Personal Information, and will assume the rights and obligations with respect to that information as described in this Privacy Policy.

We may disclose your Personal Information to third parties in a good faith belief that such disclosure is reasonably necessary to (a) take action regarding suspected illegal activities; (b) enforce or apply our terms and conditions and Privacy Policy; (c) comply with legal process, such as a search warrant, subpoena, statute, or court order; or (d) protect our rights, reputation, and property, or that of our Users, Affiliates, or the public. Please note that we are not required to question or contest the validity of any search warrant, subpoena or other similar governmental request that we receive.

We may disclose information in the aggregate to third parties relating to User behavior in connection with actual or prospective business relationship with those third parties, such as advertisers and content distributors. For example, we may disclose the number of Users that have been exposed to, or clicked on, advertising banners.`,
    },
    {
      icon: "🔗",
      title: "Links",
      color: "#0f766e",
      bg: "#f0fdfa",
      border: "#99f6e4",
      content: `References on this Website to any names, marks, products or services of third parties or hyperlinks to third party websites or information are provided solely for your convenience and do not in any way constitute or imply our endorsement, sponsorship or recommendation of the third party, information, product or service. Except as set forth herein, we do not share your Personal Information with those third parties, and are not responsible for their privacy practices. We suggest you read the privacy policies on all such third party websites.`,
    },
    {
      icon: "👤",
      title: "User Access of Personal Information",
      color: "#065f46",
      bg: "#ecfdf5",
      border: "#6ee7b7",
      content: `As a registered RushBaskets User, you can modify some of your Personal Information and your privacy preferences by accessing the "Account" section of this Website.`,
    },
    {
      icon: "🛡️",
      title: "Security",
      color: "#1e40af",
      bg: "#eff6ff",
      border: "#93c5fd",
      content: `Your account is password protected. We use industry standard measures to protect the Personal Informationthat is stored in our database. We follow industry standard best practices on Information Security, as alsomentioned in our website. We limit the access to your Personal Information to those employees and
contractors who need access to perform their job function, such as our customer service personnel. If youhave any questions about the security on Razorpay, please contact us at
disclosures@razorpay.com
.
You hereby acknowledge that Razorpay is not responsible for any intercepted information sent via theinternet, and you hereby release us from any and all claims arising out of or related to the use of interceptedinformation in any unauthorized manner.`,
    },
    {
      icon: "📝",
      title: "Terms and Modifications to This Privacy Policy",
      color: "#92400e",
      bg: "#fffbeb",
      border: "#fcd34d",
      content: `Our Privacy Policy is subject to change at any time without notice. To make sure you are aware of any changes, please review this policy periodically. These changes will be effective immediately on the Users of RushBaskets. Please note that at all times you are responsible for updating your Personal Information, including to provide us with your most current e-mail address.

If you do not wish to permit changes in our use of your Personal Information, you must notify us promptly that you wish to deactivate your account with us. Continued use of RushBaskets after any change/amendment to this Privacy Policy shall indicate your acknowledgement of such changes and agreement to be bound by the terms and conditions of such changes.`,
    },
    {
      icon: "⚖️",
      title: "Applicable Law",
      color: "#475569",
      bg: "#f8fafc",
      border: "#e2e8f0",
      content: `Your use of this Website will be governed by and construed in accordance with the laws of India. The Users agree that any legal action or proceedings arising out of your use may be brought exclusively in the competent courts/tribunals having jurisdiction in Bengaluru in India and irrevocably submit themselves to the jurisdiction of such courts/tribunals.`,
    },
    {
      icon: "📬",
      title: "Complaints & Grievance Redressal",
      color: "#ff7b1d",
      bg: "#fff7ed",
      border: "#fed7aa",
      content: `If you contact us to provide feedback, register a complaint, or ask a question, we will record any Personal Information and other content that you provide in your communication so that we can effectively respond to your communication. Any complaints or concerns in relation to your Personal Information or content of this Website or any dispute or breach of confidentiality or any proprietary rights of User during use of the Website or any intellectual property of any User should be immediately informed to the Grievance cum Nodal Officer at the co-ordinates mentioned below in writing or by way of raising a grievance ticket through the hyperlink mentioned below:

DPO: Mr. SHASHANK KARINCHETI
Razorpay Software Private Limited
Address: No. 22, 1st Floor, SJR Cyber, Laskar - Hosur Road, Adugodi, Bangalore - 560030
Ph: 080-46669555
Email: dpo@razorpay.com
Grievances portal: https://razorpay.com/grievances/`,
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');
        .privacy-page { font-family: 'Poppins', sans-serif; }

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

        .acceptance-table td, .acceptance-table th {
          padding: 10px 16px;
          font-size: 0.85rem;
        }
        .acceptance-table tr:not(:last-child) {
          border-bottom: 1px solid #fed7aa;
        }
      `}</style>

      <div
        className="privacy-page min-h-screen"
        style={{ background: "#fff7ed" }}
      >
        {/* Header */}
        <div
          style={{
            background: "linear-gradient(135deg, #ff7b1d 0%, #c2410c 100%)",
          }}
          className="py-16 px-6 text-center"
        >
          <div className="text-5xl mb-4">🔒</div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3">
            Privacy Policy
          </h1>
          <p className="text-orange-100 text-base">
            Last updated on March 19th, 2024
          </p>
          <div className="mt-4 inline-block bg-white bg-opacity-20 text-white text-sm font-semibold px-5 py-2 rounded-full border border-white border-opacity-30">
            RushBaskets Grocer · info.rushbaskets@gmail.com
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* Policy Sections */}
          <div className="space-y-5 mb-10">
            {sections.map(({ icon, title, color, bg, border, content }) => (
              <div
                key={title}
                className="policy-card"
                style={{ background: bg, borderLeftColor: color }}
              >
                <h2
                  className="text-lg font-bold mb-3 flex items-center gap-2"
                  style={{ color }}
                >
                  <span>{icon}</span> {title}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
                  {content}
                </p>
              </div>
            ))}
          </div>

          {/* Acceptance Details Table */}
          <div className="bg-white rounded-2xl shadow-sm border border-orange-100 overflow-hidden mb-10">
            <div
              className="px-6 py-4 border-b border-orange-100"
              style={{ background: "#ff7b1d" }}
            >
              <h2 className="text-white font-bold text-lg flex items-center gap-2">
                📄 Acceptance Details
              </h2>
            </div>
            <table className="acceptance-table w-full">
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
                  <tr key={key} className="hover:bg-orange-50">
                    <td className="font-semibold text-gray-600 w-48">{key}</td>
                    <td className="text-gray-800">{val}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer note */}
          <div
            className="rounded-2xl p-6 text-center mb-8"
            style={{
              background: "linear-gradient(135deg, #ff7b1d 0%, #c2410c 100%)",
            }}
          >
            <p className="text-white font-semibold text-base">
              🧡 Thank you for trusting RushBaskets. We are committed to keeping
              your information safe and using it only to make your grocery
              experience smoother and more convenient.
            </p>
          </div>

          {/* Contact Button */}
          <div className="flex justify-center">
            <button
              onClick={() => navigate("/contact")}
              className="contact-btn"
            >
              Contact Us →
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
