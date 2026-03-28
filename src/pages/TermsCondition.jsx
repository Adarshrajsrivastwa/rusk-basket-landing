import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Terms() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleprivacyClick = (e) => {
    e.preventDefault();
    navigate("/privacy");
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    navigate("/contact");
  };

  const sections = [
    {
      icon: "📋",
      title: "Part A: General Terms and Conditions",
      gradient: "from-blue-500 to-cyan-500",
      content: [
        "This document/agreement/understanding is a computer-generated electronic record published in terms of Rule 3 of the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021 (amended from time to time) read with Information Technology Act, 2000 (amended from time to time) and does not require any physical or digital signatures.",
        'These Terms and Conditions ("Terms") constitute a legal agreement between You and RushBaskets ("us", "we" or "our"). The Terms govern Your access to and use of RushBaskets services, including payments, technology, software, analytics or any other services, tools or products offered or made available by RushBaskets and/or its Affiliates, and/or their Facility Providers ("Services"). The Services may be offered or made available to You via our website, mobile applications, software, APIs, social media, or other access channels ("Platform").',
        '"You", "Yours", "Yourself" or "Merchant" refers to customers, who may be a non-registered individual or corporate body, who register for, use, or access the Platform or Services. The Services provided by RushBaskets through the Platform are available and are appropriate only for use in India.',
        "Please read these Terms carefully before accessing the Platform or using the Services. By accessing the Platform or using the Services, You agree to be bound by these Terms, including our Privacy Policy and any other policy applicable to the Services received via the Platform. If You do not agree to these Terms or do not wish to be bound by these Terms, You must immediately terminate the use of the Services.",
        "RushBaskets reserves the right to amend or otherwise modify the Terms at any time by posting an updated version on the website. The updated Terms shall take effect immediately upon posting. It is Your responsibility to review these Terms periodically for updates/amendments. Your continued access of the Platform or use of the Services signifies Your assent/ratification of the updated or modified Terms.",
        "We may require You to agree to additional terms in connection with specific Services. You hereby give your consent for us to store, and use the data/information You provide on the Platform during (i) the initial sign up/registration process and (ii) registration or onboarding for any specific Service in future. You hereby further give Your consent for us to pre-fill forms for the registration or onboarding process of any specific Service with such data/information provided.",
        "Where You intend to avail online as well as offline payment aggregation services, You understand and agree that online Services will be provided by Razorpay Software Private Limited and offline Services will be provided by Ezetap Mobile Solutions Private Limited (Razorpay POS), an Affiliate of Razorpay. You acknowledge and agree that the provision of offline payment aggregation services by Razorpay POS will be governed by Part A: General Terms and Conditions along with Part VII: Specific Terms for Offline Aggregation Services and Devices of Part B.",
      ],
    },
    {
      icon: "©️",
      title: "1. Proprietary Rights",
      gradient: "from-purple-500 to-pink-500",
      content: [
        "1.1. We (and our licensors, as applicable) remain the sole owner of all right, title and interest in the Services, including the Platform and the website, including any intellectual property rights which subsist in the Services (whether registered or not). RushBaskets grants You a personal, non-exclusive, non-transferable, limited right to access the Platform and make personal use of the website and the Services. You shall not remove, obscure, or alter any proprietary rights notices (including trademark and copyright notices), which may be affixed to or contained within the Services. We reserve all rights not granted under the Terms.",
        'We (and our licensors, as applicable) retain its rights in and to trademarks, trade names, service marks, logos, domain names, and other distinctive brand features ("marks") owned or used by us in the course of our business. You do not have the right to use any of our marks without explicit consent from us. You shall not download, copy, create a derivative work, modify, reverse engineer, reverse assemble, transmit or otherwise attempt to discover any source code, sell, assign, sub-license, grant a security interest in or otherwise transfer any right in the Services or marks. You further acknowledge and agree that the Services may contain information that is designated confidential by us and You shall not disclose such information without our prior written consent.',
        "1.2. You grant a royalty-free, non-exclusive, irrevocable, transferable and sub-licensable license to RushBaskets, its Affiliates and third party service providers, to use Your data, Your customer's data, information, content, trademarks, logos and any other materials/information You upload or make available to us or on the Platform (\"Your materials\"). You agree that RushBaskets may use Your materials to operate and improve the Platform, provide the Services, and fulfil RushBaskets's rights and discharge its obligations under the Terms.",
        "You agree that RushBaskets may use Your materials in its marketing and promotional materials without requiring any incremental consent from You. You further agree that RushBaskets may conduct analytics on Your materials and that RushBaskets shall retain ownership of the results or reports derived from such data which shall be in aggregated and anonymised form for its business purposes in accordance with Applicable Laws. You shall indemnify and hold harmless RushBaskets, its Affiliates and its service providers on demand against all claims and losses arising out of or in connection with our use of Your Materials in accordance with this clause.",
      ],
    },
    {
      icon: "🖥️",
      title: "2. Usage of the Website and Services",
      gradient: "from-green-500 to-emerald-500",
      content: [
        "2.1. You shall register to become a user of the Website only if You are of the age of 18 or above and can enter into binding contracts as per Applicable Laws. You are responsible for maintaining the secrecy of Your passwords, login and account information. You are responsible for maintaining the confidentiality of any login information and secure access credentials associated with Your RushBaskets account. You will be responsible for all use of the Platform and/or Services by You or anyone using Your password and login information (with or without our permission). You are responsible for all activities that occur under Your account/in using Your secure credentials and RushBaskets shall not be liable for any such change or action performed by using Your secure credentials on the Website.",
        "2.2. You agree to provide true, accurate, current and complete information about Yourself as and when prompted by the Platform. If You provide any information that is untrue, inaccurate, not updated or incomplete (or becomes untrue, inaccurate or incomplete), or RushBaskets has reasonable grounds to suspect that such information is untrue, inaccurate, not updated or incomplete, RushBaskets shall have the right to immediately suspend or terminate Your account and/or refuse any and all current or future use of the Platform or Services, or any portion thereof, in connection thereto.",
        "2.3. By using the Services and providing your contact information, you consent to receiving information about, and offers for, various products and services from RushBaskets, its Affiliates or third parties. These communications may occur through various channels, including but not limited to telephone, SMS, email, WhatsApp, other messaging services, or any other physical, electronic, or digital means. You agree that RushBaskets may contact you electronically or by phone to gauge your interest in specific products and services and to process your requests or applications. You consent to receiving these communications on the phone or mobile number you provided on the website and explicitly waive any registration or preferences listed under the Do Not Disturb (DND) or National Customer Preference Register (NCPR) in accordance with Telecom Regulatory Authority of India (TRAI) regulations.",
        "2.4. You agree and authorize RushBaskets to share your information with its partner banks, financial institutions, group companies, Affiliates, vendors, service providers, and other third parties as necessary to provide the various products and services you select or to offer additional value-added services. You also consent to receiving communications via email, telephone, and/or SMS from RushBaskets or these third parties. If you request to opt out of receiving such communications or marketing materials in the future, this request will only apply prospectively and will not affect data that has already been shared by RushBaskets with your prior consent.",
        "2.5. By accessing the Platform or using our Services, You acknowledge and agree that we may display offers, promotions, and other content from our partners, Affiliates, and third parties to You or Your end users. These offers and promotions may be tailored based on the information provided, including past information on our Platform or by Your or end users use of our Services. We may leverage the data, including personal data, that You or Your end users submit to personalize and optimize these offers, ensuring that they are relevant and valuable to You, and You explicitly consent to such usage. This may include, but is not limited to, Your or Your end user preferences, interactions, and usage patterns on our Platform.",
        "2.6. You acknowledge and agree that for undertaking any payment and/or financial transaction through the Platform, RushBaskets may undertake due diligence measures and seek information required for KYC purposes, which as a customer/merchant You are obliged to give in accordance with Applicable Laws. You acknowledge and agree that RushBaskets may undertake enhanced due diligence measures (including any documentation), to satisfy itself relating to due diligence requirements in line with the requirements and obligations under Applicable Laws. You are solely responsible for understanding and complying with all Applicable Laws, including but not limited to the provisions of the RBI Guidelines on Regulation of Payment Aggregators and Payment Gateways, Payment and Settlement Systems Act, 2007, Prevention of Money Laundering Act, 2002, KYC Guidelines, etc. issued by the RBI as may be amended from time to time.",
        '2.7. You agree and covenant that before the commencement of any Service(s) under these Terms, You shall provide the necessary documents ("KYC Documents") to enable RushBaskets to conduct the due diligence in respect of You and Your business/activities. RushBaskets shall have the right to share the KYC Documents (or the information therein) and other related documents with the Facility Providers or governmental authorities or law enforcement agencies, as required under the Applicable Laws. You expressly consent RushBaskets to rely on the KYC Documents provided by You for providing Services. You further acknowledge and agree that RushBaskets reserves the right at all times to monitor, review, retain and/or disclose any information in relation to the Service(s) as necessary pursuant to satisfy any Applicable Laws, legal process or governmental request.',
        "2.8. RushBaskets shall have the right to demand from You, any (i) additional KYC Documents and/or (ii) any KYC related or other documents of Your customers or invoices, in its sole discretion and/or as per the Applicable Laws or pursuant to requests from governmental authorities, law enforcement agencies or Facility Providers. Your failure to submit the KYC Documents when requisitioned shall entitle RushBaskets to suspend the Services and/or stop settlement of monies (as applicable) until You submit such KYC Documents to the sole satisfaction of RushBaskets.",
        "2.9. You agree that RushBaskets shall not be responsible for any delivery, after-sales service, payment, invoicing or collection, customer enquiries (not limited to sales enquiries), technical support maintenance services and/or any other obligations or services relating to or in respect of Your products or services. Such obligations shall be Your sole responsibility. You shall indemnify RushBaskets against any claim arising from such services or obligations and shall bear any and all expenses and/or costs relating thereto.",
        "2.10. Throughout Your use of the Services, You declare that You or Your affiliates and/or its Beneficial Owner are not a Politically Exposed Person. You shall forthwith inform us in writing if this declaration becomes untrue during any period of Your use of the Services.",
        '2.11. The usage of the Platform may also require You to provide consent for providing Your Personal Information ("PI") (including but not limited to any personal data or sensitive personal data as defined under Applicable Laws) or to authorize RushBaskets to derive Your data/information from any source or public registry or portal, as may be necessary to complete Your profile or Your application on the Platform, conduct due diligence on You, undertake KYC checks by itself or any other third party and/or to provide You Services through this Platform. You explicitly authorise RushBaskets to rely on such information and You represent and warrant that such information shall be and shall remain true and accurate.',
        "2.12. You agree not to use the Platform and/or Services for any purpose that is unlawful, illegal or forbidden by these Terms, or any local laws that might apply to You. We may, at our sole discretion, at any time and without advance notice or liability, suspend, terminate or restrict Your access to all or any component of the Platform and/or Services.",
        "2.13. You are prohibited from posting or transmitting to or through this Platform: (i) any unlawful, threatening, libellous, defamatory, obscene, pornographic or other material or content that would violate rights of publicity and/or privacy or that would violate any law or that harms minors in any way; (ii) any commercial material or content (including, but not limited to, solicitation of funds, advertising, or marketing of any good or services); (iii) any material or content that infringes, misappropriates or violates any copyright, trademark, patent right or other proprietary right of any third party; (iv) contains software viruses or any other computer code, files or programs designed to interrupt, destroy or limit the functionality of any computer resource; (v) threatens the unity, integrity, defense, security or sovereignty of India, friendly relations with foreign states, or public order; (vi) impersonates another person; or (vii) is illegal in any other way.",
        "2.14. You represent and warrant that: (a) You are duly incorporated or established under the laws of Your jurisdiction and have all requisite power and authority to own and operate Your business. (b) You have the full legal capacity and power to enter into, exercise Your rights under, and perform Your obligations under these Terms. (c) The execution, delivery and performance of these Terms has been authorized by all necessary corporate and organizational actions including but not limited to board resolution and/or power of attorney and/or letter of authority to bind Your business and Your company/firm/organization. (d) You have duly accepted these Terms, which form a legal, valid and binding obligation, enforceable in accordance with its clauses. (e) You do not, and shall not, engage in any activity related to virtual currency, cryptocurrency and other crypto products (like non-fungible tokens or NFTs), prohibited investments for commercial gain or credits that can be monetized, re-sold or converted to physical or digital goods or services or otherwise exit the virtual world.",
        "2.15. You further represent, warrant, and covenant that: (a) Your use of the Platform and Services and sale of Your products/services are solely for Your own bona fide business activities which are in compliance with the Applicable Laws and also the instructions issued from time to time by the RushBaskets and its Facility Providers. (b) Your use of the Services corresponds to those activities under the categories You have expressly registered for at the time of entering into these Terms. (c) You shall not resell or assign the Services, in whole or in part, or otherwise allow the use of the Services by any third parties, including Your affiliates. (d) Your use of Services does not facilitate any activity which is unlawful, illegal, unauthorised, is carried on with the intent to defraud, or is likely to result in Your unjust enrichment and/or unlawful gain. (e) Your use of Services does not facilitate the offer, sale or purchase of prohibited products and/or services specified under these Terms.",
        "2.16. You hold express informed consent of Your customers to share customers' information, including personal data, with RushBaskets and its affiliates (i) in connection with provision of Services to You and other users of the Platform or Services, (ii) for the purposes of sharing such information with governmental authorities as and when demanded under Applicable Laws, (iii) for the purpose of transaction tracking and fraud prevention, or (iv) pursuant to regulatory authorities' orders and/or notices.",
        "2.17. You acknowledge that the Services are of complex nature and require the intervention of the Facility Providers. You acknowledge and agree that RushBaskets shall only be liable for acts or omissions which are solely and directly attributable to RushBaskets.",
        "2.18. In order to avail the Services, You shall take all necessary steps to facilitate the integration of RushBaskets's solutions with Your platform. It is hereby clarified that any Server to Server (S2S) integration, if done, shall be solely for the purpose of availing the Services and intended to be used or accessed only by You.",
        "2.19. You shall assist RushBaskets in furnishing to its auditors, the Facility Providers, governmental authorities, or law enforcement agencies, KYC Documents, relevant books, the original copy/copies of proof of transactions, invoices or other records, including pertaining to any order placed by Your customers. You shall retain records relating to transactions for a period of 10 (ten) years from the relevant date of the order placed on Your site. RushBaskets and the Facility Providers, and/or governmental agencies and/or law enforcement agencies shall be entitled to audit and inspect the records and other data relating to the customer's orders at any time whatsoever and without any prior notice.",
        "2.20. You shall not (whether online or otherwise): (i) describe Yourself as an agent or representative of RushBaskets or the Facility Provider; (ii) represent that You have any rights to offer any products or services offered by RushBaskets or the Facility Provider; and (iii) make any representations to Your customer or any third party or give any warranties which may require RushBaskets or Facility Provider to undertake to or be liable for, whether directly or indirectly, any obligation and/or responsibility to Your customer or any third party.",
        "2.21. When a customer purchases goods or services from You, You may, in Your sole discretion, impose any convenience fee on the customer. Any responsibility or losses incurred by RushBaskets as a result of the charge of any such convenience fee by You to Your customers shall be borne by You. You shall also indemnify RushBaskets for such liability or losses.",
        "2.22. You shall not engage, appoint, or otherwise utilize any third-party service provider in connection with the Services under this Agreement without the prior written consent of RushBaskets. You further agree that they shall utilize the Services solely (a) directly from RushBaskets; (b) through a payment orchestration solution provided or expressly approved by RushBaskets; or (c) via a proprietary in-house orchestration solution developed by the Merchant, subject to RushBaskets's prior written approval.",
      ],
    },
    {
      icon: "💳",
      title: "3. Payment",
      gradient: "from-orange-500 to-yellow-500",
      content: [
        "3.1. Applicable fees for the provision of Services shall be levied by RushBaskets from time to time. You agree that the fees shall be charged according to the manner, rates and frequency determined by RushBaskets. RushBaskets reserves the right to update the amount of the fees charged at its sole discretion. RushBaskets fees allow access to the entire suite of payments products, dashboard and custom reports, and includes MDR charges, if any, for payment instruments as prescribed under applicable guidelines. For clarity, RushBaskets fees include zero MDR for Rupay Debit Cards and UPI transactions.",
        "3.2. Fees are exclusive of applicable taxes and RushBaskets will charge such applicable taxes on the fees from time to time. You agree that any statutory variations in applicable taxes during the subsistence of these Terms shall be borne by You.",
        "3.3. We will raise monthly invoices in respect of fees charged for Services provided during such month. Invoices are available on the dashboard on a monthly basis. Any dispute in respect of an invoice must be communicated by You to us via a notice no later than ten (10) days from the date of the invoice. RushBaskets shall use good faith efforts to reconcile any reasonably disputed amounts.",
        "3.4. You shall be responsible to do reconciliation on a daily basis for all the transactions processed. In case of discrepancies, You shall report to RushBaskets regarding such discrepancy within three (3) days upon the receipt of the funds. RushBaskets shall not be liable for any reconciliation issue if the same is highlighted by You to RushBaskets after such time.",
        "3.5. For fees deducted upfront before provision of the specific Service, it is agreed that if You deposit applicable taxes under Section 194H of the Income Tax Act, 1961 (in respect of invoices received by You) and furnish to RushBaskets Form 16-A in respect of such taxes paid, then RushBaskets shall reimburse to You, on a quarterly basis, the amount in respect of such taxes paid. In all other cases, with respect to invoices received by You, at the time of payment of the Fees, You will withhold applicable taxes under Section 194H of the Income Tax Act, 1961. You shall deposit the withheld taxes with the government treasury, file the statutorily mandated returns and furnish the requisite tax deduction certificate (Form 16-A) to RushBaskets within one hundred and eighty (180) days so as to enable RushBaskets to obtain full credit for the taxes deducted at source.",
        "3.5A. If You operate as an e-commerce operator, facilitating the sale of goods or provisions of services of a resident e-commerce participant, You shall evaluate and comply with the requirements of TDS under Section 194O of the Income Tax Act, 1961. You, as an e-commerce operator, will withhold tax under Section 194O of the Act and deposit the same within the applicable timelines, including carrying out all the necessary compliances as prescribed under the Income Tax Act, 1961. As the payment service provider, RushBaskets would not be obligated to deduct tax under Section 194O and the same will be Your responsibility as the e-commerce operator.",
        "3.6. You shall be solely responsible for updating Your GST registration number on the RushBaskets dashboard before RushBaskets generates the invoice and shall also submit the GST certificate as part of KYC. RushBaskets will raise a GST tax invoice and report the transactions in the GST returns based on the information provided by You. The GST returns will be filed as per the statutory timelines, to enable You to avail appropriate input tax credit. RushBaskets shall not be responsible for any mistake and or misrepresentation by You in updating the GST number and other particulars as per the GST certificate. Further, any liability raised on RushBaskets by the GST authorities due to incorrect information provided by You or deliberate withholding of any statutory information by You shall be recovered by RushBaskets from You.",
        "3.6A. In order for RushBaskets to issue a proper B2B tax invoice under the GST law and to ensure GST input credit is available to You, RushBaskets shall record Your correct GSTIN. Towards this, You are advised to verify Your GSTIN and registered address captured within the account maintained with RushBaskets at periodical intervals and correct the same wherever necessary. In the event, correct GSTIN is not updated in Your account maintained with RushBaskets, then You shall be solely responsible in respect thereof and RushBaskets shall not be liable to accommodate any request for revision of invoice and/or amendment to GST reporting.",
      ],
    },
    {
      icon: "🔗",
      title: "5. Third Party Links / Offers",
      gradient: "from-red-500 to-pink-500",
      content: [
        "The Platform contains links to other websites over which we have no control. We encourage You to review the terms and privacy policies of those other websites so You can understand Your use of the websites and how they collect, use and share Your information. RushBaskets is not responsible for the terms and conditions, privacy policies or practices of other websites to which You choose to link from the Platform.",
        "You further acknowledge and agree that RushBaskets shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such site or resource. Your interaction with any third party accessed through the website is at Your own risk, and RushBaskets will have no liability with respect to the acts, omissions, errors, representations, warranties, breaches or negligence of any such third parties or for any personal injuries, death, property damage, or other damages or expenses resulting from Your interactions with the third parties.",
      ],
    },
    {
      icon: "⚠️",
      title: "7. Disclaimer of Warranty",
      gradient: "from-indigo-500 to-blue-500",
      content: [
        'To the maximum extent permitted by Applicable Laws, the Platform and the Services are provided on an "as is" basis. You acknowledge that RushBaskets does not warrant that the Service(s) will be uninterrupted or error free or fit for Your specific business purposes.',
      ],
    },
    {
      icon: "⚖️",
      title: "8. Limitation of Liability",
      gradient: "from-teal-500 to-cyan-500",
      content: [
        "8.1. RushBaskets (including its officers, directors, employees, representatives, affiliates, and providers) will not be responsible or liable for (a) any injury, death, loss, claim, act of God, accident, delay, or any direct, special, exemplary, punitive, indirect, incidental or consequential damages of any kind (including without limitation lost profits or lost savings), whether based in contract, tort, strict liability or otherwise, that arise out of or is in any way connected with (i) any failure or delay (including without limitation the use of or inability to use any component of the Platform), or (ii) any use of the Platform or Services or content therein, or (iii) the performance or non-performance by us or any Facility Provider, even if we have been advised of the possibility of damages to such parties or any other party, or (iv) any damages to or viruses that may infect Your computer equipment or other property as the result of Your access to the Platform or Services or Your use of any content therein.",
        "8.2. Notwithstanding anything under these Terms, RushBaskets's aggregate liability and that of its affiliates, officers, employees and agents relating to the Service(s), will not exceed an amount equal to one (1) month fees paid by You for the specific Service(s) giving rise to the liability. RushBaskets's liability under or in connection with Terms will be proportionately reduced to the extent any loss or damage is contributed to by You or Your third party providers.",
      ],
    },
    {
      icon: "🛡️",
      title: "9. Indemnity",
      gradient: "from-violet-500 to-purple-500",
      content: [
        "You agree to indemnify and hold RushBaskets (and its officers, affiliates, group company, directors, agents and employees) harmless from any and against all claims, whether or not brought by third parties, causes of action, demands, recoveries, losses, damages, fines, penalties or other costs or expenses of any kind or nature, including reasonable attorneys' fees, or arising out of or related to Your breach of these Terms, Your violation of any Applicable Laws or the rights of a third party, or Your use of the Platform or any disputes between You and any third party. The covenants of indemnity set forth herein shall survive and continue even after the termination of Your use of the Services.",
      ],
    },
    {
      icon: "💳",
      title: "10. Card Association Rules",
      gradient: "from-rose-500 to-pink-500",
      content: [
        '10.1. "Card Payment Network Rules" refer to the written rules, regulations, releases, guidelines, processes, interpretations and other requirements (whether contractual or otherwise) imposed and adopted by the card payment networks. These card payment networks have infrastructure and processes to enable transaction authorisation. The card payment networks require You to comply with all applicable guidelines, rules, and regulations formulated by them.',
        "10.2. The card payment networks reserve the right to amend their guidelines, rules and regulations from time to time. We may be required to amend, modify or change these Terms pursuant to amendments to the Card Payment Network Rules and such amendments, if any, shall be deemed to be binding on You with immediate effect.",
        "10.3. You agree to fully comply with all programs, guidelines, requirements that may be published and/or mandated by the card payment networks. Notwithstanding our assistance in understanding the Card Payment Network Rules, You expressly acknowledge and agree that You are assuming the risk of compliance with all provisions of the Card Payment Network Rules, regardless of whether You are aware of or have access to those provisions. For illustration purposes - MasterCard, Visa, Diners, RuPay and American Express make excerpts of their respective rules available on their internet sites.",
        "10.4. In the event that Your non-compliance of Card Payment Network Rules, results in any fines, penalties or other amounts being levied on or demanded of us by a card payment network, then without prejudice to our other rights hereunder, You shall forthwith reimburse us in an amount equal to the fines, penalties or other amount so levied or demanded or spent by us in any manner in relation to such fines, penalties and levies. If You fail to comply with Your obligations towards the card payment networks, RushBaskets may suspend settlement or suspend/terminate the Services forthwith.",
      ],
    },
    {
      icon: "✋",
      title: "11. Waiver",
      gradient: "from-amber-500 to-orange-500",
      content: [
        "RushBaskets shall not be deemed to have waived any right or provision of this Agreement unless such waiver is made in writing. A waiver of any term or condition of this Agreement shall not be deemed a waiver of any other term or condition, nor shall it be a continuing waiver.",
      ],
    },
    {
      icon: "🌪️",
      title: "12. Force Majeure",
      gradient: "from-slate-500 to-gray-600",
      content: [
        "If performance of Services/Platform by RushBaskets is prevented, restricted, delayed or interfered with by reason of labour disputes, strikes, acts of God, epidemic, pandemic, floods, lightning, severe weather, shortages of materials, rationing, inducement of any virus, malware, trojan or other disruptive mechanisms, any event of hacking or illegal usage of the Platform, utility or communication failures, earthquakes, war, revolution, acts of terrorism, civil commotion, acts of public enemies, blockade, embargo or any law, order, proclamation, regulation, ordinance, demand or requirement having legal effect of any government, regulatory or any judicial authority or representative of any such government, or any other act whatsoever, whether similar or dissimilar to those referred to in this clause, which are beyond the reasonable control of RushBaskets, then RushBaskets shall be excused and discharged from such performance to the extent of and during the period of such force majeure event, and such non-performance shall, in no manner whosoever, amount to a breach by RushBaskets of its obligations herein or incur any legal liability on RushBaskets.",
      ],
    },
    {
      icon: "🤝",
      title: "13. Anti Bribery and Sanctions Laws",
      gradient: "from-emerald-500 to-green-600",
      content: [
        "You agree to comply with all applicable anti-bribery and anti-corruption laws which prohibit officials, representatives, agents or any other person associated with or acting on behalf of You from giving, offering, promising to offer, receiving/accepting or acting in any other manner so as to induce a payment, gift, hospitality or anything else of value (either directly or indirectly) whether from within the country or from abroad to government officials, public servants, regulatory bodies, judicial authorities, persons in positions of authority, elected or contesting electoral candidates, political parties or office bearers thereof or any other third party or person in order to obtain an improper commercial/business advantage of any kind.",
        "Government officials include any government employee, candidate for public office, an employee of government-owned or government-controlled companies, public international organisations and political parties. You also agree not to give, offer, pay, promise or authorise to give or pay, directly, indirectly or through any other person, of anything of value to anybody for the purpose of inducing or rewarding any favourable action or influencing any decision in Your favour.",
      ],
    },
    {
      icon: "📌",
      title: "14. Additional Terms",
      gradient: "from-cyan-500 to-blue-500",
      content: [
        "14.1. You shall not assign or otherwise transfer Your rights or obligations under these Terms. RushBaskets may assign its rights and duties under these Terms without any such assignment being considered a change to the Terms and without any notice to You. If we fail to act on Your breach or anyone else's breach on any occasion, we are not waiving our right to act with respect to future or similar breaches.",
        "14.2. RushBaskets may, at its reasonable discretion and in compliance with Applicable Laws, blacklist Your end users to manage fraud and risk. Blacklisted users may be restricted from transactions, and removal of blacklisting may occur based on updated risk assessments. You acknowledge and agree that RushBaskets may take such measures to protect the integrity of the payment ecosystem. RushBaskets is not obligated to provide prior notice or reasons for these actions. You agree to be solely responsible for providing any notification to Your end users.",
        "14.2(a). The laws of India, without regard to its conflict of laws, rules, will govern these Terms, as well as Your and our observance of the same. If You take any legal action relating to Your use of the Platform or these Terms, You agree to file such action only in the courts located in Bangalore, India. In any such action that We may initiate, the prevailing party will be entitled to recover all legal expenses incurred in connection with the legal action, including but not limited to costs, both taxable and non-taxable, and reasonable attorney fees. You acknowledge that You have read and have understood these Terms, and that these Terms have the same force and effect as a signed agreement.",
        "14.2(b). Without prejudice to any other rights or remedies RushBaskets may have, You hereby agree and confirm that RushBaskets shall have the right to set-off by whatever means the whole or any part of Your liability to RushBaskets under these Terms (or any other agreement between You and RushBaskets or its affiliates) against any funds, sums or other amounts credited to, or owing to, You under these Terms. You agree that RushBaskets may exercise the right of set-off at any time, without any prior notice to You. In the event such set-off does not fully reimburse RushBaskets for the liability owed, You shall pay RushBaskets a sum equal to any shortfall thereof.",
        "14.2(c). You shall not (whether on-line or otherwise): (i) describe Yourself as an agent or representative of RushBaskets or any Facility Provider; (ii) represent that You have any rights to offer any products or services offered by RushBaskets or the Facility Provider; and (iii) make any representations to Your customer or any third party or give any warranties which may require RushBaskets or Facility Provider to undertake to or be liable for, whether directly or indirectly, any obligation and/or responsibility to customer or any third party.",
        "14.2(d). RushBaskets reserves the right to make changes to the website, related policies and agreements, these Terms and the Privacy Policy at any time as it deems fit and proper, including but not limited to comply with changes in law or regulation, correct inaccuracies, omissions, errors or ambiguities, reflect changes in the process flow, scope and nature of the Services and ancillary services, company reorganization, market practice or customer requirements.",
        "14.3. You agree that the fees for any Services under these Terms shall be charged according to the manner, rates and frequency determined by RushBaskets. RushBaskets reserves the right to update the amount of the fees including for Services for which no charge has been levied previously in accordance with this clause. You agree that You shall be liable to pay any additional fees as determined by RushBaskets in the event: (a) You avail certain value-added services available on the dashboard irrespective of whether they have been available free of charge previously. (b) You avail any new Services not mentioned in these Terms. You agree that Your use of any Service or a value-added service shall be construed as a consent to any additional fees which may be levied by RushBaskets on such additional Service or value-added service.",
        '14.4. An end user may avail dynamic currency conversion ("DCC") services which may be made available by RushBaskets to an end user, as applicable. The transaction amount payable by the end user towards the purchase of goods or services from a merchant shall be inclusive of charges for such DCC services availed by the end user.',
      ],
    },
    {
      icon: "📢",
      title: "15. Advertising",
      gradient: "from-fuchsia-500 to-pink-500",
      content: [
        "Some of the Services may be supported by advertising revenue and may display advertisements and promotional material. These advertisements may be targeted to the content of information stored on the Services, queries made through the Services or other information. The manner, mode and extent of advertising by RushBaskets are subject to change without any specific notice to You.",
        "In consideration for RushBaskets granting You access to and use of the Services, You agree that RushBaskets may place such advertisements on the Services through website, print media, electronic media, social media, advertising platforms, etc.",
      ],
    },
    {
      icon: "🚫",
      title: "16. Suspension and Termination",
      gradient: "from-rose-500 to-red-600",
      content: [
        "16.1. Notwithstanding anything to the contrary, RushBaskets shall have the right to immediately suspend Services and settlement of any monies or payments to You, without any liability to You, in the event of the following: (a) You breach any clause of these Terms. (b) You facilitate any transaction which is unlawful or in contravention with 'Prohibited Products and Services' listed below in clause 17. (c) RushBaskets receives instructions from Facility Providers or governmental authorities or law enforcement agencies to either suspend the Services, or part thereof, regardless of whether there is pending investigation/enquiry into any alleged illegal/unlawful activities. (d) You use the Services for any transactions which have a high-risk score as per RushBaskets's internal fraud assessment tools and other policies.",
        "16.1 (cont.). (e) RushBaskets is of the opinion that there are suspicious circumstances surrounding Your activities. (f) RushBaskets is of the opinion that there are pending, anticipated, or excessive disputes, refunds, or reversals relating to Your use of Services. (g) Your products/services infringe, or are suspected of infringing, intellectual property rights, copyrightable works, patented inventions, trademarks and trade secrets, or You are suspected of selling counterfeit and/or knock-off goods. (h) You materially change the type of the products/services provided to end customers without obtaining RushBaskets's prior written permission. (i) RushBaskets in its sole discretion determines that Your activities expose RushBaskets to risks which are unacceptable to RushBaskets. (j) RushBaskets in its sole discretion is required to do so due to regulatory changes impacting the Services.",
        "16.2. These Terms are effective upon the date You first access or use the Platform or Services and continue until such access and use is terminated by You or RushBaskets. Unless you have a separate offline agreement in relation to use the Services, or any part thereof, these Terms will apply. We may terminate these Terms or close Your RushBaskets account at any time for any reason (including, without limitation, for any activity that may create harm or loss to the goodwill of RushBaskets). Where Applicable Laws require advance notice of termination to be provided, we will, prior to termination, provide You with the required advance notice of termination.",
        "16.3. Termination does not immediately relieve You of obligations incurred by You under these Terms. Upon termination, You agree to stop using the Services. Your continued or renewed use of the Services after termination serves to renew Your consent to the Terms. In addition, upon termination You understand and agree that we will not be liable to You for compensation, reimbursement, or damages related to Your use of the Services, or any termination or suspension of the Services or deletion of Your information or account data; and You will still be liable to us for any fees or fines, or other financial obligation incurred by You or through Your use of the Services prior to termination.",
      ],
    },
    {
      icon: "🚷",
      title: "17. Prohibited Products and Services",
      gradient: "from-red-500 to-rose-600",
      content: [
        "1. Adult goods and services which includes pornography and other sexually suggestive materials (including literature, imagery and other media); escort or prostitution services; website access and/or website memberships of pornography or illegal sites. 2. Alcohol which includes alcohol or alcoholic beverages such as beer, liquor, wine, or champagne. 3. Body parts which includes organs or other body parts. 4. Bulk marketing tools which includes email lists, software, or other products enabling unsolicited email messages (spam). 5. Cable descramblers and black boxes which includes devices intended to obtain cable and satellite signals for free. 6. Child pornography which includes pornographic materials involving minors.",
        "7. Copyright unlocking devices which includes mod chips or other devices designed to circumvent copyright protection. 8. Copyrighted media which includes unauthorized copies of books, music, movies, and other licensed or protected materials. 9. Copyrighted software which includes unauthorized copies of software, video games and other licensed or protected materials, including OEM or bundled software. 10. Counterfeit and unauthorized goods which includes replicas or imitations of designer goods; items without a celebrity endorsement that would normally require such an association; fake autographs, counterfeit stamps, and other potentially unauthorized goods.",
        "11. Drugs and drug paraphernalia which includes illegal drugs and drug accessories, including herbal drugs like salvia and magic mushrooms. 12. Drug test circumvention aids which includes drug cleansing shakes, urine test additives, and related items. 13. Endangered species which includes plants, animals or other organisms (including product derivatives) in danger of extinction. 14. Gaming/gambling which includes lottery tickets, sports bets, memberships/enrolment in online gambling sites, and related content. 15. Government IDs or documents which includes fake IDs, passports, diplomas, and noble titles.",
        "16. Hacking and cracking materials which includes manuals, how-to guides, information, or equipment enabling illegal access to software, servers, website, or other protected property. 17. Illegal goods which includes materials, products, or information promoting illegal goods or enabling illegal acts. 18. Miracle cures which includes unsubstantiated cures, remedies or other items marketed as quick health fixes. 19. Offensive goods which include literature, products or other materials that: (a) defame or slander any person or groups of people based on race, ethnicity, national origin, religion, sex, or other factors; (b) encourage or incite violent acts; or (c) promote intolerance or hatred.",
        "20. Offensive goods, crime which includes crime scene photos or items, such as personal belongings, associated with criminals. 21. Pyrotechnic devices, combustibles, corrosives and hazardous materials which includes explosives and related goods; toxic, flammable, and radioactive materials and substances. 22. Regulated goods which includes air bags; batteries containing mercury; Freon or similar substances/refrigerants; chemical/industrial solvents; government uniforms; car titles; license plates; police badges and law enforcement equipment; lock-picking devices; pesticides; postage meters; recalled items; slot machines; surveillance equipment; goods regulated by government or other agency specifications.",
        "23. Securities which includes government bonds or related financial products. 24. Tobacco and cigarettes which includes cigarettes, cigars, chewing tobacco, and related products. 25. Traffic devices which includes radar detectors/jammers, license plate covers, traffic signal changers, and related products. 26. Weapons which includes firearms, ammunition, knives, brass knuckles, gun parts, and other armaments. 27. Wholesale currency which includes discounted currencies or currency exchanges. 28. Live animals or hides/skins/teeth, nails and other parts etc. of animals.",
        "29. Multi-level marketing collection fees. 30. Matrix sites or sites using a matrix scheme approach. 31. Offering work-at-home approach and/or work-at-home information; with an intention to deceive. 32. Drop-shipped merchandise. 33. Any product or service which is not in compliance with all applicable laws and regulations whether federal, state, local or international, including the laws of India. 34. Provision of any services that have the potential of casting the payment gateway facilitators in a poor light and/or that may be prone to buy and deny attitude of the cardholders when billed (e.g. adult material/mature content/escort services/friend finders) and thus leading to chargeback and fraud losses.",
        "35. Businesses or website that operate within the scope of laws which are not absolutely clear or are ambiguous in nature (e.g. web-based telephony, Website supplying medicines or controlled substances, website that promise online match-making). 36. Businesses outrightly banned by law (e.g. betting and gambling/publications or content that is likely to be interpreted by the authorities as leading to moral turpitude or decadence or incite caste/communal tensions, lotteries/sweepstakes & games of chance). 37. Businesses involved in pyramid marketing schemes or get-rich-quick schemes and any other product or service, which in the sole opinion of either the partner bank or the acquiring bank, is detrimental to the image and interests of either of them.",
        "38. Mailing lists. 39. Virtual currency, cryptocurrency and other crypto products (like non-fungible tokens or NFTs), prohibited investments for commercial gain or credits that can be monetized, re-sold or converted to physical or digital goods or services or otherwise exit the virtual world. 40. Money laundering services. 41. Database providers (for tele-callers). 42. Bidding/auction houses. 43. Activities prohibited by the Telecom Regulatory Authority of India. 44. Any other activities prohibited by Applicable Laws. 45. Entities operating as chit funds/nidhi companies (except government or public sector unit (PSU) entities). 46. Unregulated/unlicensed money service business (MSB) or money and value transfer services (MVTS) like exchange houses, remittance agents or individuals running such businesses in jurisdictions that require license for such businesses. The above list is subject to updates/changes by RushBaskets based on instructions received from Facility Providers.",
      ],
    },
    {
      icon: "📖",
      title: "18. Definitions",
      gradient: "from-blue-600 to-indigo-600",
      content: [
        '"Affiliate" shall mean any entity that directly or indirectly controls, is controlled by, or is under common control with RushBaskets, whereby "control" means the possession, directly or indirectly, of the power to direct, or cause the direction of the management and policies of such person, whether through the ownership of voting securities, by contract, or otherwise.',
        "\"Applicable Laws\" shall mean (i) any law, statute, rule, regulation, order, circular, decree, directive, judgment, decision or other similar mandate of any applicable central, national, state or local governmental/regulatory authority having competent jurisdiction and force of law over, or applicable to You, us or the subject matter in question, as may be amended from time to time, and (ii) shall without limitation include any notification, circular, directive or other similar instruction issued by the 'Financial Sector Regulators' including but not limited to the Reserve Bank of India (RBI) and/or rules, regulations, roles, responsibilities and processes as defined by NPCI.",
        '"Chargeback" shall mean the reversal of the debit of the Transaction Amount that was charged by You, where the reversal is approved by the Facility Provider following examination of the Transaction related documents and information furnished by You, consequently resulting in RushBaskets being charged the Transaction Amount and charges, penalties or fines associated with processing the Chargeback. "Chargeback Amount" shall mean the aggregate amount that the Facility Provider charges RushBaskets pursuant to a Chargeback. "Chargeback Request" means a claim for Chargeback by the Facility Provider\'s customer.',
        '"Customer" means the Merchant\'s customer who will be making payments to the Merchant in consideration for goods/services availed of by the customer from the Merchant. "Escrow Account" is an account held by RushBaskets with an Escrow Bank for the purpose of receiving the Transaction Amount and effecting settlements to You. "Escrow Bank" means a bank that is authorised by the RBI, to operate an Escrow Account under the Payment Aggregation Guidelines. "Escrow Bank Working Days" means days on which the Escrow Bank is operational to undertake settlements.',
        '"Facility Providers" shall mean banks, financial institutions, NPCI, technology service providers, or other third parties facilitating the provisions of Services or any part thereof, including but not limited to (a) acquiring banks, (b) banks issuing credit cards, debit cards, prepaid instruments and accounts, and (c) card payment networks. "KYC Guidelines" means KYC norms as set out in the Master Direction - Know Your Customer, 2016 notified by Reserve Bank of India. KYC means know-your-customer.',
        '"NPCI" means the National Payments Corporation of India constituted pursuant to the provisions of the Payment and Settlement Systems Act, 2007. "Payment Instrument" includes credit card, debit card, bank account, prepaid payment instrument or any other instrument issued under Applicable Law, used by a customer to pay the Transaction Amount. "Permissible Deductions" means (a) fees charged by RushBaskets; (b) Chargeback Amount including fines and penalties; and (c) any other sum due and payable by You to RushBaskets.',
        '"RBI" shall mean the Reserve Bank of India. "Refund" means processing of Your request to RushBaskets, for returning the Transaction Amount (or part thereof) to the Payment Instrument which was used for effecting the payment of the Transaction Amount. "Transaction" means an order or request placed by the customer with You for purchasing goods/services from You, which results in a debit to the customer\'s Payment Instrument. "Transaction Amount" means the amount paid by the Customer in connection with Transaction.',
        '"AD-1 Bank" means a scheduled commercial bank in India which is authorized under the relevant legislation to undertake all current and capital account transactions according to the directions issued by the RBI from time to time. "Import Collection Account" or "ICA" means the current account opened and maintained by Razorpay with an AD-1 bank, as per PA-CB for the purpose of settlement of monies received from the Customers importing goods and services from Merchants.',
        '"Payment Aggregator Guidelines" means the RBI circular DPSS.CO.PD.No.1810/02.14.008/2019-20 dated March 17, 2020, including any amendments, clarifications, FAQs, etc. which may be issued from time to time. "Payment Aggregator – Cross Border Guidelines" or "PA – CB" means, as applicable, RBI circular CO.DPSS.POLC.No.S-786/02-14-008/2023-24 dated October 31, 2023 including any amendments, clarifications, FAQs, etc. which may be issued from time to time.',
      ],
    },
    {
      icon: "💰",
      title: "Part B – Part I: Online Payment Aggregation Services",
      gradient: "from-green-600 to-emerald-600",
      content: [
        "1.1. Subject to these Terms, RushBaskets shall facilitate collection of online payments for products/services sold by You. You agree that where any settlement amount is less than Rupee 1, RushBaskets shall endeavour to, but is not obligated to You, make such settlement.",
        "1.2. RushBaskets shall settle the Transaction Amount (net of Permissible Deductions) into your account as per agreed timelines in compliance with the PA/PG guidelines. The Merchant acknowledges and agrees that the foregoing is subject to credit to/receipt of funds by RushBaskets in the Escrow Account from acquiring banks or gateways.",
        "1.3. If RushBaskets settles the Transaction Amount at an earlier time than agreed, RushBaskets shall have an absolute right to recover the Transaction Amount forthwith if the same is not received in the Escrow Account within three (3) Escrow Bank Working Days following the date of the Transaction for any reason whatsoever. RushBaskets shall have an absolute right to place limits on the Transaction value.",
        "1.5. You may choose to purchase Fee Credits from RushBaskets in respect of the Services. Razorpay shall be entitled to deduct an amount equivalent to fees along with applicable taxes from the Fee Credit per Transaction. If sufficient funds are not available in the Fee Credits, then RushBaskets shall deduct fees along with applicable taxes from the Transaction Amount.",
        "1.6. RushBaskets shall be entitled, at its sole discretion, to recover any amounts from You that are charged to RushBaskets and/or debited by Facility Providers from accounts maintained by You by way of deduction from (i) the Transaction Amount to be settled to You and/or (ii) any of Your other funds held by RushBaskets. In the event such set-off or recovery does not fully reimburse RushBaskets, You shall pay a sum equal to any shortfall thereof.",
        "1.7. You hereby acknowledge and agree that in case of reversal of Transaction Amount to RushBaskets's Escrow Account due to any reason, including but not limited to your bank rejecting acceptance of the Transaction Amount for any reason whatsoever, RushBaskets may refund the monies to the source account from which it was received.",
        "1.8. In the event RushBaskets in its absolute discretion determines that it is not feasible or suitable to settle the funds held in the Escrow Account to you, RushBaskets reserves the right to withhold such settlement and after giving prior notice to you, shall refund the said amount back to the source account from which it was received.",
        '2.1. Chargebacks: If a Facility Provider communicates to RushBaskets the receipt of a Chargeback Request, You will be notified of the Chargeback. You agree that liability for Chargeback, whether domestic or international, under the Terms solely rests with You. Subject to availability of funds, RushBaskets upon receipt of a Chargeback Request shall forthwith deduct Chargeback Amount from the Transaction Amounts. You shall be entitled to furnish to RushBaskets documents and information ("Chargeback Documents") pertaining to the Transaction associated with the Chargeback Request in order to substantiate (i) the completion of the aforesaid Transaction; and/or (ii) delivery of goods/services sought by the customer pursuant to the said Transaction. You shall furnish the Chargeback Documents within three (3) calendar days (or such other period specified by the Facility Provider) of receiving notification of the Chargeback Request.',
        "2.3. Notwithstanding anything in these Terms, if the Facility Providers charge the Chargeback Amount from RushBaskets then You agree and acknowledge that RushBaskets is entitled to recover such Chargeback Amount from You by way of deduction from (i) the Transaction Amounts to be settled to You and (ii) any of Your other funds held by RushBaskets in the course of providing the Services. If the available Transaction Amounts or other funds are insufficient for deduction of the Chargeback Amount, then RushBaskets is entitled to issue a debit note seeking reimbursement of the Chargeback Amount. You shall reimburse the Chargeback Amount within seven (7) days of receipt of the debit note.",
        "2.4. On the issuance of notice of termination under the Terms, RushBaskets reserves the right to withhold from each settlement made during the notice period, a sum computed based on a Stipulated Percentage for a period of one hundred and twenty (120) days (\"Withholding Term\") from the date of termination of these Terms. The sums so withheld shall be utilized towards settlement of Chargebacks. After processing such Chargebacks, RushBaskets shall transfer the unutilized amounts, if any, to You forthwith upon completion of the Withholding Term. The 'Stipulated Percentage' is the proportion of the Chargeback Amounts out of the total Transaction Amounts settled during the subsistence of these Terms.",
        "2.6. For Chargebacks associated with EMI products: For any loan cancellation requests, You need to respond to RushBaskets within seven (7) working days with a suitable response. If loan is to be cancelled, then the same needs to be informed to RushBaskets and if cancellation request is to be declined then You need to provide proof of delivery and justification. For loans which would get cancelled on the basis of Your confirmation, the amount would be recovered from the daily settlement.",
        "3.1. Refunds: You agree and acknowledge that subject to availability of funds received in the Escrow Account, You are entitled to effect Refunds at Your sole discretion. RushBaskets shall process a Refund only upon initiation of the same on the Platform. All Refunds initiated by You shall be routed to the same payment method through which the Transaction was processed. You agree that RushBaskets fees shall always be applicable and payable by You on each Transaction irrespective of whether You have refunded the same to Your customer.",
        "4.1. Fraudulent Transactions: If RushBaskets is intimated, by a Facility Provider, that a customer has reported an unauthorised debit of the customer's Payment Instrument (\"Fraudulent Transaction\"), RushBaskets shall be entitled to suspend settlements to You during the pendency of inquiries, investigations and resolution thereof by the Facility Providers. You acknowledge that RushBaskets shall not be responsible for any liability arising in respect of Fraudulent Transactions whether it is an international or a domestic transaction. You shall be liable in the event of breach of the fraud amount thresholds as provided under the NPCI guideline on 'Fraud liability guidelines on UPI transactions' NPCI/2022-23/RMD/001.",
        "5.4. You hereby consent for RushBaskets to share Your information/data, including activity related information and personal information, with its Affiliates, for (i) the Affiliates to facilitate access to/market products and services as the Affiliates may deem You eligible; and/or (ii) to share such information with Facility Providers associated with the Affiliates, for such Facility Providers to assess Your eligibility for the proposed products and services.",
        "5.5. In case You have opted for a loan/line of credit or any other similar product through RushBaskets's affiliates/group companies, You hereby provide unconditional consent that RushBaskets may facilitate its affiliates/group companies which reserve the right to recover the outstanding dues from the positive balance as maintained by You with RushBaskets.",
        "6.1. Compliance: You shall on Your website/web app/mobile site/mobile app clearly indicate/display (a) the return and refund policy of Your products/services to Your customers, including the timelines for processing such returns, refunds or cancellations; and (b) the general terms of use and conditions of use by Your customers. You shall ensure that You deliver products and services in accordance with instructions of the customers. You shall at no time hold, store, copy or keep any customer data relating to a customer's Payment Instrument.",
        "6.2. You shall set up a comprehensive customer grievance redressal mechanism which provides the procedure for addressing complaints received from Your customer and You shall include the details of the person designated by You for handling such customer complaints. You shall respond to such grievances or complaints received from Your customers within a period of 5 (five) business days from the date of receiving such grievance or complaint. You shall be solely responsible for sorting or handling any complaints received against You.",
        '6.3. You shall comply with or enter into an agreement with a third party service provider of payment processing services for compliance with the Payment Card Industry Data Security Standard ("PCI DSS"), as may be amended from time to time, and the Payment Application-Data Security Standard ("PA-DSS"), if applicable. You shall also submit an annual report in writing to RushBaskets signifying proof of compliance with the above.',
        "7.1. Optimizer Services: RushBaskets offers Optimizer Services — a technology solution that enables You to route Your payments through specific payment gateways based on Your business conditions and preferences. This solution is a software layer on top of Your payment to route every payment request received for Your unique id, based on the rules created by You on Optimizer's merchant facing dashboard. The Optimizer Services are independent and separate from the other Services. RushBaskets's role will strictly be that of a SaaS provider and will not be that of a payment service provider.",
        "7.2. Value Added Services: You may opt for certain value added services available on the dashboard which will be subject to an additional charge to be agreed upon by the parties. Such charges are to be paid on a monthly/quarterly/annual basis or other frequency as may be agreed mutually. RushBaskets also provides customisable templates for website terms of use and conditions, return and refund and shipping policy, privacy policy, etc. which You may choose to use to display on Your website/web app/mobile site/mobile app in order to comply with Your obligations under the Payment Aggregator Guidelines.",
      ],
    },
    {
      icon: "🌐",
      title: "Part IB: Online Payment Aggregation – Cross Border Services",
      gradient: "from-sky-500 to-blue-600",
      content: [
        "This Part IB applies if You are a Merchant incorporated or operating from outside India and intend to receive payments from Customers located in India.",
        "1.2. Subject to these Terms, RushBaskets shall settle the Transaction Amount, net of applicable fees, charges, taxes, and other permissible deductions, into Your designated account within five (5) Escrow Bank Working Days from the date of the Transaction.",
        "1.3. You shall, within three (3) days from the date of request, provide all necessary transaction-related documents including but not limited to digital invoices, transport documents, and any other information or documentation as may be requested by RushBaskets at its sole discretion, or as may be required under applicable laws or by Facility Providers for every instance of fund repatriation. Delay in submission or discrepancies in the Supporting Documents may result in RushBaskets rejecting the Transaction and refunding the Transaction Amount to the Customer.",
        "1.5. Prior to such settlement of funds, RushBaskets shall, if required, deduct applicable withholding taxes in accordance with prevailing Indian income tax laws. You shall provide such supporting documentation as required under applicable law. RushBaskets shall issue quarterly Tax Withholding Certificates (i.e. Transaction Based Reports) to enable You to make any tax claims in the relevant overseas jurisdiction.",
        "1.6. RushBaskets shall process settlements without withholding taxes provided that You furnish valid documentation, including but not limited to a No Permanent Establishment (No-PE) declaration and other certificates or documents required under applicable tax laws or double taxation avoidance agreements (DTAAs). In the event a tax authority imposes any taxes, penalties, interest or other charges due to RushBaskets's reliance on Your documentation, You agree to fully indemnify and hold RushBaskets harmless from any such liabilities.",
        "1.8. A currency conversion fee shall apply at the time of converting INR to Your chosen settlement currency. The conversion shall be based on the rate agreed between You and RushBaskets. The applicable rate shall be the prevailing rate as of the date and time RushBaskets initiates the actual settlement into Your account.",
        "1.10. You represent and warrant that You are, and shall at all times remain, in full compliance with all applicable tax laws and regulations in Your jurisdiction.",
        "1.12. You represent and warrant that You have independently assessed whether the services rendered by You fall under the definition and applicability of Online Information Database Access and Retrieval (OIDAR) services under Indian GST laws. You further agree to comply with all applicable GST requirements, including obtaining GST registration in India where applicable.",
        "6.10. You shall ensure that the value of each underlying import Transaction does not exceed INR 25,00,000/- (Rupees Twenty-Five Lakhs Only) per Transaction or any revised amount as prescribed by RBI from time to time. If any Transaction exceeds these limits, we reserve the right to reject such Transactions and will not be responsible for any associated losses, claims, or liabilities.",
        "6.11. If any transaction exceeds INR 2,50,000/- (Rupees Two Lakhs Fifty Thousand), you shall promptly provide us with the required information and Customer KYC documents as we may request. Failure to do so entitles us to reject the Transaction without any liability.",
        '8. Specific Terms for Payment Aggregators/E-Commerce Marketplaces: These terms apply if you are accepting payments on behalf of your sellers/clients/customers ("Sub-Merchants"). You agree and undertake that You have and shall at all times maintain the requisite licenses, permissions and/or permits to operate as a payment aggregator/e-commerce marketplace. You shall ensure that your Sub-Merchants do not sell prohibited products/services as listed in the Prohibited List of Goods and Services. You are responsible for the actions and omissions of your Sub-Merchants and shall indemnify us from any related claims or liabilities.',
        '9. Additional Terms for Transactions under Liberalised Remittance Scheme (LRS): You represent, warrant, and agree that all Transactions under the LRS will fully comply with the Foreign Exchange Management Act, 1999 ("FEMA"), the LRS Guidelines, and all applicable RBI regulations. You shall collect from each Customer the LRS declaration and the Tax Collected at Source ("TCS") declaration in the form and format prescribed or provided by RushBaskets, in accordance with Section 206C(1G) of the Income Tax Act, 1961.',
      ],
    },
    {
      icon: "🔄",
      title: "Part II: Specific Terms for E-Mandate Services",
      gradient: "from-violet-500 to-indigo-600",
      content: [
        '1. Definitions: "Bank Account" means a banking account maintained by Your customer with a Destination Bank as per Applicable Law. "Destination Bank" means a bank registered with NPCI as per the Procedural Guidelines and which authenticates details of Your customer\'s Bank Account. "E-Mandate Payments" shall mean automated deductions of pre-determined payments specified from the Bank Account (pursuant to electronic mandates issued by Your customers) in accordance with the Procedural Guidelines. "E-Mandate Registration" means the approved and authenticated E-Mandate Registration Request based on which E-Mandate Payments can be effected.',
        '"Sponsor Banks" mean the banks/entities which are authorised to implement the E-Mandate Payments by inter alia receiving API calls from RushBaskets for initiating E-Mandate Payments, communicating the necessary E-Mandate Registration information to NPCI, authentication by the Destination Bank and deduction of Bank Accounts, all in accordance with the Procedural Guidelines. "Procedural Guidelines" means the guidelines governing the processes to be followed and implemented by Sponsor Banks, Destination Banks and intermediaries for effecting E-Mandate Payments, issued by the NPCI and shall include any revisions, modifications and amendments thereto.',
        "2. You shall provide the necessary KYC Documents to RushBaskets as specified in the Mandate Terms, such that RushBaskets can share the KYC Documents (or the information therein) to the Sponsor Bank for the Sponsor Bank's decision on issuing a registration to You to avail of services for e-mandate payments.",
        "3. You acknowledge that the onboarding and registration process is a prerequisite under the Procedural Guidelines in order for You to avail of Services for e-mandate payments and the customers to be able to start submitting E-Mandate Registration Requests. RushBaskets shall not be liable to provide any Services under these Terms until the Sponsor Bank has issued a registration in Your favour.",
        "5. Being an intermediary, RushBaskets shall be responsible only for transmission of the customer details to the Sponsor Bank and shall not be responsible for failure or refusal of the E-Mandate Registration request by the Destination Bank or NPCI.",
        "7. On successful approval of the E-Mandate Registration Request, RushBaskets shall on a periodic basis (as per the E-Mandate Registration) initiate E-Mandate Payment requests with the Sponsor Bank and based on and pursuant to authentication by NPCI and the Destination Bank, receive the funds in the Escrow Account.",
        "8. The periodic payments will be facilitated by RushBaskets so long as the E-Mandate Registration is not cancelled by the Customer, Destination Bank or the Sponsor Bank. RushBaskets shall not be liable for the failure of a payment on account of the decline of the approval by Destination Bank or NPCI or on account of cancellation of the E-Mandate Registration by the Sponsor Bank, Destination Bank, Your customer or NPCI.",
        "11. In addition to rights under these Terms, if there are reasonable grounds for RushBaskets to suspect that a transaction to effect an E-Mandate Payment is done fraudulently or if the Sponsor Bank, NPCI or Destination Bank suspecting so, communicate the same to RushBaskets, then RushBaskets shall be entitled to withhold settlements to You.",
        "14. RushBaskets shall be entitled to recover from You (by deducting amounts from Your funds held by RushBaskets in the course of providing the Services, or if the funds held are insufficient, by issuing a debit note to You), any amounts (a) charged by Sponsor Bank to RushBaskets on account of refund and disputed claims from Your customers; and (b) representing penalties, fines or other charges levied by the Sponsor Bank, NPCI or any governmental authority on RushBaskets on account of fraudulent transactions on Your website.",
        "15. You agree that payments effected, or funds debited from Your customer's Bank Account on the following grounds shall not be the responsibility of RushBaskets: (a) Your customer is disputing a transaction as not done or authorized by him. (b) The charge/debit on Your customer's Bank Account has occurred because of hacking, phishing, breach of security/encryption of Your customer's PI through Your platform or any other third party platform other than that of RushBaskets. (c) Your customer claiming refund of the amounts deducted from his/her Bank Account on any ground whatsoever, including Your customer's dissatisfaction with Your sale of the goods and/or services to the Customer.",
        "16. RushBaskets will not be liable to collect the amounts from Your customers and credit the same to You in the following circumstances: (a) If any of Your customers does not have sufficient funds in the Bank Account. (b) RushBaskets is prohibited from debiting the amounts from Your customers' account by any governmental authority or Facility Provider. (c) If Your customer's account is closed or operations from such account are barred by governmental authorities or Facility Providers. (d) If You do not provide complete and correct information. (e) Any of Your Customers terminate the mandate. (f) RushBaskets has reason to believe that a Collection Information has not been properly authorized.",
      ],
    },
    {
      icon: "🎫",
      title: "Part III: Specific Terms for TokenHQ Services",
      gradient: "from-teal-500 to-green-600",
      content: [
        '1. You understand and acknowledge that the TokenHQ is an end-to-end solution for You to allow Your customers to continue using the saved cards feature in compliance with RBI\'s guidelines on tokenisation set out in the Circular CO.DPSS.POLC.No.s-516/02-14-003/2021-22 read with DPSS.CO.PDNo.1463/02.14.003/2018-19 dated January 8, 2019 and related guidelines and clarifications issued by the RBI (together "Circular"). For the purposes of these Terms, the Applicable Laws shall be deemed to include the Circular.',
        "2. Where RushBaskets is acting as a technical service provider and You are the token requestor, You acknowledge and agree that RushBaskets shall have no liability towards You or any third party for Your acts or omissions or Your failure to comply with Applicable Laws.",
        '3. Where RushBaskets is acting as the token requestor on Your behalf, You acknowledge and agree that RushBaskets\'s role is limited to requesting for tokens on Your behalf upon receiving consent of Your customers. RushBaskets will integrate with available card networks and issuing banks (each a "Token Service Provider" or "TSP") and its APIs will have the flexibility to respond back with token numbers for Your use.',
        "4. In order to allow using the saved card feature, the customer card details must be tokenized. Accordingly, You shall (except in the case of standard checkout): (a) be solely responsible for obtaining consent of the customer to tokenize (and save) the customer's card. Such consent shall be explicit and not by way of a forced/default/automatic selection of checkbox, radio button, etc. (b) inform the customers of the purpose of obtaining such consent and that the card will not be tokenized (and saved) if the customer does not provide explicit consent. (c) share such customer consent with RushBaskets in order for RushBaskets to trigger the additional factor authentication (AFA) with the issuing bank which is required to register the tokenisation request. (d) provide the customer an option to de-register the token and delete the card.",
        "5. You shall keep RushBaskets fully indemnified at all times from and against all losses, damages, penalties, etc., incurred by or imposed on RushBaskets to the extent it arises from any breach by You of Part III: Specific Terms for TokenHQ Services.",
        "6. You shall keep a log of all instances of obtaining customer consent under Applicable Laws and of Your compliance with Part III: Specific Terms for TokenHQ Services and provide the same to RushBaskets on a real time basis or as requested from time to time. In addition to any right hereunder, RushBaskets and Facility Providers have the right to audit Your compliance with these terms and conditions at any time upon notice.",
        "8. You agree that You shall be solely responsible for any hashed string storage undertaken by You.",
      ],
    },
    {
      icon: "🔁",
      title: "Part IV: Specific Terms for Subscription Services",
      gradient: "from-orange-500 to-red-500",
      content: [
        "1. Subscription services provide You the platform to create and manage subscription plans for Your customers with automated recurring transactions. With this product You can (i) create multiple subscription plans for customers, (ii) automatically charge customers based on a billing cycle that You control, and (iii) get instant alerts on payment activity as well as the status of subscriptions.",
        '2. You acknowledge and agree that these terms shall apply for debit, credit and prepaid instruments or other methods as notified from time to time (together "Card") of customers, and does not apply to once-only/one-time payments.',
        "3. You acknowledge and agree that: (a) The customer desirous of opting for e-mandate facility on Card is required to undertake a one-time registration process, with an Additional Factor Authentication (AFA) validation by the issuer bank. (b) Where the first transaction is being performed along with the registration of e-mandate, then AFA validation may be combined. Subsequent recurring transactions shall be performed only for those Cards which have been successfully registered and for which the first transaction was successfully authenticated and authorised. (c) On successful registration and approval of the e-mandate request, RushBaskets shall on a periodic basis initiate subsequent recurring payments unless such e-mandate is modified or de-registered by the customer. (d) RushBaskets expressly disclaims all liability for any outages or failures attributable to Facility Providers.",
        "4. You further acknowledge and agree that in order to process recurring transactions, customer Card details will need to be saved/secured/tokenized in accordance with Applicable Laws. For custom checkout and server-to-server integration You shall: (a) solely be responsible for obtaining informed consent from customers for the purpose of processing of e-mandates, including saving/securing/tokenizing the customer's Card details. Such consent shall be explicit and not by way of a forced/default/automatic selection. (b) share customer consent with RushBaskets for RushBaskets to trigger the AFA with the issuing bank which is required to both save the Card and process the e-mandate registration.",
        "5. You agree that payments effected, or funds debited from a customer's bank account on the following grounds shall not be the responsibility of RushBaskets: (a) Customer disputing a transaction as not done or authorized by him/her. (b) The charge/debit on the customer's bank account has occurred because of hacking, phishing, breach of security/encryption of the customer's personal data through Your platform. (c) Customer claiming refund of the amounts deducted from his/her bank account on any ground whatsoever, including customer's dissatisfaction with Your sale of the goods and/or services to the customer.",
        "7. You agree to keep RushBaskets fully indemnified at all times from and against all losses, damages, penalties, etc., incurred by or imposed on RushBaskets to the extent it arises from any breach by You of Part IV: Specific Terms for Subscription Services.",
        "8. You shall maintain records of its activities under these terms, including where applicable keeping log of all instances of obtaining customer consent, and shall provide the same to RushBaskets on a real time basis or as requested from time to time. In addition to any right under Part IV, RushBaskets and Facility Providers have the right to audit Your compliance hereunder at any time upon notice.",
        "9. You agree that You shall be solely responsible for any hashed string storage undertaken by You.",
      ],
    },
    {
      icon: "🤲",
      title: "Part V: Razorpay Partner Program",
      gradient: "from-lime-500 to-green-500",
      content: [
        "The Razorpay partner program is a referral program through which You can refer the Razorpay services to Your clients or customers and get rewarded. You may become a partner by agreeing to the detailed Partner Terms and Conditions and signing up as a partner.",
      ],
    },
    {
      icon: "✨",
      title: "Part VI: Magic Checkout",
      gradient: "from-pink-500 to-purple-500",
      content: [
        'Magic checkout is the checkout technology platform developed by Razorpay for Your customers registered with Razorpay which enables the customer to seamlessly save and use their information for placing orders with You ("Magic Checkout Services").',
        "1.1. Privacy and Data Protection Rights: Razorpay has adopted reasonable security practices and procedures that are commensurate with the information assets being protected, and has implemented relevant technical, operational, managerial and physical security control measures to protect the information in its possession from loss, misuse and unauthorized access, disclosure, alteration and destruction.",
        "1.2. In the process of providing Magic Checkout Services, You acknowledge and agree that Razorpay may collect, store and use certain information, including personal data, from Your customers. For the purposes of providing Magic Checkout Services, Razorpay shall have the right to collect, store and use of customers' personal data, including but not limited to name, email address, phone number and address, as provided by the customers and/or You to Razorpay from time to time directly or indirectly (or provided in past).",
        "1.3. The information may be used by Razorpay for: (i) providing Magic Checkout Services (including for the purposes of verification of the identity, processing of payment, communication regarding the purchase and monitoring of past behaviour to identify fraudulent transactions); (ii) administrative, marketing and customer support purposes; and/or (iii) providing other Razorpay services.",
        "1.4. You represent and warrant to Razorpay that: (a) You shall use the Magic Checkout Services solely for providing services/goods to Your customers. (b) You shall obtain all consents required under Applicable Law from Your customers before sharing PII of the Customers with Razorpay.",
        "1.5. Your usage/access of the Magic Checkout Services shall constitute Your acceptance to the Terms and the Privacy Policy. You acknowledge and confirm that You shall obtain a valid consent under the Applicable Law to share the personal data of the customers with Razorpay. In the event You withdraw Your consent/acceptance to these terms, Razorpay may in its sole discretion discontinue Your access, in part or full, to the Services.",
        "2.1. RTO Protection: In case You are availing the RTO Protection as a service from Razorpay for a consideration, You shall be entitled to claim reimbursement for the return shipping fees incurred by You on such orders which have been returned to You (\"RTO Protection\") provided that: (a) You have switched on/accepted the Magic Intelligence feature at all times on Your dashboard. (b) The return of such orders have been solely due to the Magic Intelligence feature failing to detect/identify such 'return to origin' order. (c) The orders for which RTO Protection is claimed are not pre-paid orders.",
        "2.2. You agree that Razorpay shall be liable to provide reimbursement to You under RTO Protection only upon submission of return shipping invoice/documents as validated by Razorpay.",
        "2.3. You shall, at the end of every month, raise an invoice for claiming reimbursements under the RTO Protection, which shall be discharged by Razorpay within a period of 30 (thirty) days from the date of the invoice, provided all the conditions specified are fulfilled to the satisfaction of Razorpay.",
      ],
    },
    {
      icon: "🏪",
      title:
        "Part VII: Specific Terms for Offline Aggregation Services and Devices",
      gradient: "from-amber-500 to-yellow-600",
      content: [
        "1.1. Merchant shall avail the Services and Devices subject to the terms incorporated herein. Razorpay POS will provide offline payment collection and aggregation Services (for the offline transactions conducted via Devices) and the Devices to the Merchant for its legitimate, bonafide and legal business activities only. Razorpay POS shall settle the regular card/UPI Transaction Amount (net of Permissible Deductions) into Your account as per the agreed timelines or within two (2) Bank working days, whichever is higher, holding the Escrow account following the date of the Transaction.",
        "1.2. Razorpay POS will provide: (a) Payment Services which includes the ability to process payments from various modes of payment opted by the Merchant. (b) Acceptance of American Express cards - Upon request of the Merchant, Razorpay POS has the ability to support American Express Cards on the Devices opted for by Merchant. Activation of American Express will be subject to Razorpay POS approval and will comply with American Express policy. (c) Mobile Application: In support of the above services, Razorpay POS will supply the Merchant with a mobile application and the Razorpay POS' SDK which is used by the Merchant to use Services. (d) Portal: Razorpay POS agrees to retain and maintain transaction records for the Services purchased by the Merchant and provide a portal to the Merchant showing such records.",
        "1.2(e). Affordability Services: At the request of the Merchant, Razorpay to enable affordability payment options on the POS terminals which will facilitate the Merchant to provide an option to its customers to pay via EMI (CC, DC, Brand EMI, NBFC)/BNPL/Cashback Offers/IBD (Instant Discount) payment option. The Merchant understands that Razorpay is merely a facilitator for the enablement of various affordability payment option and is not responsible for any decline in these transactions or non-approval of customer loan request by the respective NBFC/Banks/lending service provider.",
        "Settlement Timelines for Affordability Services: DC EMI – T+2 days; CC EMI – T+1 day; NBFC EMI – T+2 days; Brand EMI – T+1 day; BNPL – T+1 day. Where 'T' means the day of transaction. The above settlement timeline may get impacted by the delay in settlement to Razorpay by the respective bank/NBFC/lending partner/brand partner.",
        "1.2(f). Reconciliation Services: Razorpay will provide transaction reconciliation services to the Merchant. Under these services, Razorpay will provide a reconciliation report on the basis of transaction initiated at POS terminals deployed at Merchant location vis-à-vis settlement of transaction amount made by Merchant's partner bank. Merchant agrees that preparation of reconciliation report is dependent on settlement data shared by Merchant's partner bank with Razorpay.",
        "1.2(g). EMI Plus Services (EMI Plus Club Wallet): Razorpay EMI Plus Club Wallet programme is Razorpay led programme for the benefit of Merchants to sell any product to its customers on Zero Cost EMI without any interest charge to customer. In order to avail this service, the Merchant is required to collect 1% of the transaction amount as processing fees on all Razorpay EMI Plus Club Wallet transactions from the customer on behalf of Razorpay. Monthly default Wallet limit shall be INR 2,00,000 per POS terminal/Device. Maximum POS terminal/Device limit for availing these services shall be 4 POS terminal/Devices per merchant. The Wallet limit will be reset to INR 2,00,000 on the 1st day of every calendar month.",
        "1.2(h). SMS Pay – Card Not Present (CNP): The Merchant has requested Razorpay to enable SMS pay service wherein the Merchant can collect payments from the customers via SMS pay links. An SMS pay link will be sent to the customer mobile number. The responsibility for recording explicit consent from the customers for using their mobile numbers for sending out SMS pay links shall solely vest with the Merchant.",
        "1.2(i). Digital Invoicing Services: At the request of Merchant, Razorpay will enable Digital Invoicing Services for the Merchant, wherein the Merchant and its customer will have an option to share and / or maintain the invoice copy relating to the transaction in a digital form. The Merchant has agreed to avail such Digital Invoicing Services on such Terms and conditions mentioned here and additional terms and conditions, as are incorporated hereinbelow.",
        "Razorpay will provide access to a platform that will facilitate the Merchant and its customer to submit / receive the invoices, respectively in digital form. Both Merchant and the customer will have the provision to store the invoice on Razorpay's platform provided for this purpose.",
        "Various features and functionality of the Digital Invoicing Services has been incorporated in the list below (Digital Invoicing Service Features). If the Merchant requires any additional / premium features of Digital Invoicing Services, the same may be provided by Razorpay, at such additional cost and other terms, as may be agreed between the Parties.",
        "The Merchant understands that Razorpay will be providing this Digital Invoicing Services in association with its Affiliate named JHKP Technologies Private Limited (a.k.a. BillMe).",
        "The Merchant acknowledges and agrees that Razorpay holds the right to add, remove or modify features of the Digital Invoicing Services at its own discretion, with prior intimation to the Merchant.",
        "Razorpay does not claim any ownership of the digital invoice copies. Merchant has the authority to make deletions to the Merchant copy as and when the Merchant finds it necessary to do so.",
        "The Merchant agrees and authorizes Razorpay to share Merchant's and customer's information and make such details available to its affiliates, vendors, service providers/facility providers and other third parties, in so far as required in association with the Digital Invoicing Services availed by the Merchant.",
        "Merchant agrees to receive communications through emails, telephone and/or SMS, from Razorpay / its Affiliates or third parties. If the Merchant requests not to receive such communication/marketing material any further, such dissent shall only be applicable prospectively.",
        "In case where the Merchant opts for Digital Invoicing Services, Razorpay hereby grants to the Merchant a non-exclusive, non-transferable, revocable right to use the Digital Invoicing Services during the term solely for the Merchant's legitimate business operations.",
        "The Merchant hereby agrees and understands that Razorpay may either by itself or in association with any third-party contractor / affiliates provide Digital Invoicing Services. In any case, the Merchant understands that Razorpay or such third-party contractor / affiliates reserves the right / ownership of Digital Invoicing Services and the platform including but not limited to any intellectual property rights associated with the same.",
        "Razorpay will charge a separate fee for providing Digital Invoicing Services which may be collected along with Device rentals. Furthermore, the Merchant also agrees to pay SMS charges on per SMS basis for transmitting digital invoices. The same shall be recovered as per the provisions incorporated under the Agreement.",
        "For availment of Digital Invoicing Services and to receive access to the platform, the Merchant shall provide such information as may be requested by Razorpay from time to time. The Merchant hereby undertakes: To provide true, accurate, and complete information about the Merchant as may be required during the account creation/registration process for the provision of Digital Invoicing Services; and To maintain and promptly update Merchant's information from time to time, as applicable.",
        "Merchant understands that Razorpay will use Merchant's details to provide the Digital invoicing Services and if any information turns out to be inaccurate or outdated, then some or all of the services may not operate correctly.",
        "The Merchant hereby undertakes liability for any losses, claims, default in the Digital invoicing Services due to incorrect information provided by the Merchant and thereby agrees to indemnify Razorpay for such losses.",
        "The Merchant shall be responsible to undertake explicit consent from the customers to use and share any data being collected to provide such services, with Razorpay and its Affiliates, the customer's mobile number for the purpose of facilitating digital invoicing. The consent to be taken by the Merchant from customers must include consent for sharing customers mobile number already existing in Razorpay database with Razorpay's Affiliates and vice-versa.",
        "If the Merchant provides any information for the purposes of undertaking or indulging fraudulent or criminal activities and Razorpay has reasonable grounds to suspect that such information has been provided, in all such instances Razorpay reserves the right to suspend or terminate Digital Invoicing Services and Merchant's access to the platform.",
        "The Merchant grants Razorpay / its affiliates / or third-party contractor involved in the provision of the Digital Invoicing Services, with a limited, non-transferable right to display the Merchant's company name, brand name, trademarks or registered trademarks on its websites, applications and other media and online resources for representational / promotional purposes.",
        "The Merchant shall be solely responsible for ensuring the safety of access to its account on the platform for availing the Digital Invoicing Services. The Merchant agrees that Razorpay shall not be responsible for any loss that the Merchant suffers as a result of an unauthorized person accessing its account and/or using the Digital Invoicing Services.",
        "1.2(j). Devices: For enabling the Services, Razorpay will provide Devices to the Merchant on agreed pricing terms. For provision of these Services, the Merchant shall provide necessary KYC details and other information as may be required by Razorpay in relation to Merchant stores and locations, where the Devices are requested to be deployed.",
        '1.3. Merchant agrees that each Device ordered by Merchant shall have a minimum period of usage of 12 (twelve) months (in case the Merchant opts for monthly plan), also referred to as the "Lock-in period" commencing from the date of deployment of such Device at the Merchant location. It is to be clarified that in the event the Merchant deactivates or returns a particular Device or set of Devices, before the expiry of the Lock-in period, Merchant shall make a one-time payment to Razorpay POS of an amount equivalent to the remaining rental or fees (as applicable) for the unexpired duration of the Lock-in Period for such Devices. On termination of Services for whatever reasons, the Merchant shall return all the Devices immediately to Razorpay POS (if taken on rental basis).',
        "1.4. Razorpay POS will provide Devices and mobile application that are necessary for the provision of the Razorpay POS Services. Merchant shall acknowledge the receipt of such Device in a form and manner acceptable to Razorpay POS and each such acknowledgement shall be deemed to be a part of this Agreement.",
        "1.5. Razorpay POS, or its business associate, shall after receiving instructions in writing, install the Device at Merchant's premises. Merchant shall ensure that the necessary infrastructure (like mobile phone(s) or tablet(s) and internet) required to install the Device is available at the Merchant's designated location. To the fullest extent permitted by law, Razorpay is not responsible for any delays, delivery failures, or any other loss or damage resulting from (i) the transfer of data over public communications networks and facilities, including the internet, or (ii) any delay or delivery failure on the part of any other service provider not contracted by us.",
        "1.6. Merchant shall arrange, co-operate, and provide for installation at its premises the Device and such related accessories and software as Razorpay POS may deem fit and appropriate. Merchant states and agrees that the Device shall be used exclusively at the Merchant's designated establishment/ location for the purchase of goods or services for which the Merchant has been signed up and for no other purpose whatsoever. Razorpay POS shall not be used in extreme or hazardous environments like (exposure to high heat, fire hazard or water) neither Merchant shall forcefully plug and unplug the charging interface or tilt it.",
        "1.7. Merchant shall retain in its possession and for its exclusive use the Device and keep the same in good condition. Merchant agrees and acknowledges to safe keep and control the use of the Device such that any transaction using the Device shall be deemed to be authorized and sanctioned by Merchant. Merchant shall not use the Device for any fraudulent transactions, business malpractices and illegal activities. Merchant shall not and shall ensure that the personnel of Merchant using the Device shall not, use the Device in such a manner that it harms the security systems enabled on the Device.",
        "1.8. Merchant shall not lease or resell the Device and / or such other services as may be mutually agreed to between Merchant and Razorpay POS to any other Party without the permission, in writing, of Razorpay POS.",
        "1.9. Razorpay POS shall be entitled to charge Merchant for the costs and charges of the Device (including accessories) and/or the costs of repairing the Device/s in the event the Device(s) is/are damaged or lost as a result of improper handling by Merchant unless the Device is bought (and not leased/ rented) by Merchant from Razorpay POS.",
        "1.10. In case the Device is provided by Razorpay POS to Merchant on rental basis, then the Device shall be the exclusive property of Razorpay POS, and Merchant shall forthwith (not less than 3 days) surrender the Device to Razorpay POS in the event of termination of this arrangement for any reason whatsoever. During the tenure of this arrangement and thereafter Merchant shall not claim any right, title, interest or lien over the Device.",
        "1.11. In case the Device is provided by Razorpay POS on lease to Merchant, Merchant shall not (i) sell, assign, transfer, lease or otherwise cause or allow or attempt to cause or allow, any dealings with the Device or any encumbrance on the Device to be created (ii) remove, conceal or alter any markings, tags or plates attached to the Device or part of it indicating Razorpay POS' ownership of the Device (iii) reverse engineer, decompile, disassemble, tamper with or otherwise seek to obtain the source code or non-public APIs to the software or the Razorpay POS; copy or modify the software or Razorpay POS or any documentation, or create any derivative work from it (iv) Cause or allow Razorpay POS' right to access, repossession or disposition of the Device pursuant to this Agreement or otherwise to be encumbered in any way jeopardized by any act of/by Merchant or its servants or agents or by any other factor within its control (v) Permit any third party to perform the maintenance services on the Device or effect modifications, enhancement or software/hardware changes to the Device without the prior written consent of Razorpay POS.",
        "1.12. The loss or damage caused to Razorpay POS arising out of negligence, or misuse of the Device and / or default in payment due to any reason whatsoever or that of any telecommunication devices attached to / inbuilt within / embedded in the Device, by the Merchant or its employees shall be to the account of Merchant, and Razorpay POS will recover such losses and expenses from Merchant.",
        "1.13. Merchant shall permit the representatives of Razorpay POS or any other concerned service provider to carry out physical inspections of the Device or telecom equipment (or possession of any of these, in case of termination of this arrangement) during business hours, with or without prior notice (in cases where Devices are taken on rental basis).",
        "1.14. You agree that Razorpay, may obtain information related to accounts and transaction along with personal information of the Merchant and its respective Customers, and Razorpay may use the such data to analyse, improve, market, support and operate the Razorpay POS and the services and otherwise for any business purpose during the term and after termination of the present engagement. All usage of such data, its retention and process shall be governed under applicable law(s) and internal policies of Razorpay.",
        "1.15. Limited to the jurisdiction of India, Merchant shall ensure that: (a) it enter into transactions only in Indian Rupees unless otherwise permitted by Bank/ Razorpay in advance in writing; (b) Retain invoices, charge slip's and transactional data for a minimum period of six (6) months and provide the same in legible format as and when required by Razorpay, (c) while presenting any transaction information, certify to Razorpay that (i) that the sale of such goods and /or services are not unlawful, (ii) the transaction information pertaining to each sale has been supplied only once (iii) Merchant has supplied goods and /or services to which the transaction information relates and to the value stated therein, and (iv) all statements of facts contained therein are true and complete in all respects. (d) in the event Razorpay POS is leased by Razorpay, accept any decision to remove the said POS due to the reason of non-performance of the term mentioned herein or any fraud (e) the Merchant shall immediately return the Equipment to Razorpay upon request.",
        "1.16. Razorpay shall have the right to recover or take back the Razorpay POS where (a) YOU are in breach of its applicable Terms and Conditions; (b) Upon termination or expiry of this Terms and Conditions; (c) Upon YOUR failure to pay the Fees for a period of 60 days; (d) At Razorpay's sole discretion.",
        "1.17. In cases of rental Devices, any losses or damages caused to Devices shall be calculated as below: (i) Lost/Misplaced/Irreparable Device charges: In the event there is any loss/misplacement/irreparable harm to a Device, the Merchant shall be liable to pay the full Price of the Device, in addition to the applicable taxes. (ii) Damaged Repairable Devices (including accessories): The Merchant shall be liable to pay repair charges including inspection charges, as incurred by Razorpay POS at actuals.",
        "2.1. Chargebacks: If a Facility Provider communicates to Razorpay the receipt of a Chargeback Request, You will be notified of the Chargeback. You agree that liability for Chargeback rests with You. Subject to availability of funds, Razorpay upon receipt of a Chargeback Request shall forthwith deduct Chargeback Amount from the Transaction Amounts. You shall furnish the Chargeback Documents within three (3) calendar days (or such other period specified by the Facility Provider) of receiving notification of the Chargeback Request.",
        "2.3. Notwithstanding anything in these Terms, if the Facility Providers charge the Chargeback Amount from Razorpay then Razorpay is entitled to recover such Chargeback Amount from You by way of deduction from (i) the Transaction Amounts to be settled to You and (ii) any of Your other funds held by Razorpay. If the available Transaction Amounts or other funds are insufficient, then Razorpay is entitled to issue a debit note seeking reimbursement of the Chargeback Amount. You shall reimburse the Chargeback Amount within seven (7) days of receipt of the debit note.",
        '2.4. On the issuance of notice of termination of the Terms, Razorpay reserves the right to withhold from each settlement made during the notice period, a sum computed based on a Stipulated Percentage for a period of one hundred and twenty (120) days ("Withholding Term") from the date of termination of these Terms. The sums so withheld shall be utilized towards settlement of Chargebacks. After processing such Chargebacks, Razorpay shall transfer the unutilized amounts, if any, to You forthwith upon completion of the Withholding Term.',
        "2.6. For Chargebacks associated with EMI products: For any loan cancellation requests, You need to respond to Razorpay within 7 working days with a suitable response. If loan is to be cancelled, then the same needs to be informed to Razorpay and if cancellation request is to be declined then You need to provide proof of delivery and justification. For loans which would get cancelled on the basis of Your confirmation, the amount would be recovered from the daily settlement.",
        "3.1. Refunds: You agree and acknowledge that subject to availability of funds received in the Escrow Account, You are entitled to effect Refunds at Your sole discretion. RushBaskets shall process a Refund only upon initiation of the same via software application provided by Razorpay. All Refunds initiated by You shall be routed to the same payment method through which the Transaction was processed. You agree that Razorpay fees shall always be applicable and payable by You on each Transaction, irrespective of the Refunds.",
        '4.1. Payment: Charges associated with the provision of Services to the Merchant and Device Rentals ("Fees") shall be in accordance with the pricing terms agreed to by the Merchant at the time of subscribing to the Services on the Website. All Fees will be deducted from the monies required to be settled to the Merchant. However, if the Device rentals are not deducted from the transaction settlement amount then the same will be deducted from e-nach /e-mandate set up by the Merchant at the instruction of Razorpay POS.',
        "4.2. The Parties agree that the Fees are exclusive of applicable taxes and Razorpay shall charge such applicable taxes on the Fees from time to time. It is agreed that any statutory variations in applicable taxes during the subsistence of this Agreement shall be borne by the Merchant.",
        "4.3. In the event of any delay in payment of any amounts to Razorpay beyond the due date of payment, Razorpay at its sole discretion may opt one or more of the following remedies: (i) Charge a late payment interest at the rate of 15% per annum on the due amount; (ii) Suspend some or all of the Service(s) it provides under this agreement, until payment of the due amount. Consequently, it is agreed between the parties that Razorpay shall not be liable for any loss, damages, claims including third party claims, which may result owing to suspension of some or all of services by Razorpay in case of non-payment or delayed payment; (iii) Set off the due amount from the transaction settlement amount payable to the Merchant.",
      ],
    },
    {
      icon: "🧾",
      title: "Digital Invoicing Service Features",
      gradient: "from-yellow-500 to-amber-500",
      content: [],
      tableData: {
        headers: ["Particulars", "S.No.", "Feature", "Remark", "Quantity"],
        rows: [
          [
            "Digital Billing Features",
            "1",
            "Digital Invoicing - BillMe DigiPrinter (Windows OS)",
            "",
            "",
          ],
          [
            "",
            "2",
            "Customer data collection (BillMe Digi Printer)",
            "UI type 3",
            "",
          ],
          ["", "3", "Digital bill complaint Management", "", "100 Complaints"],
          [
            "",
            "4",
            "Banner in bill (Single image, Carousel or GIF)",
            "Coupons can be sent on the images",
            "Single Image Only",
          ],
          [
            "",
            "5",
            "Ad below bill (Single image, Carousel, GIF, YouTube video or MP4 video)",
            "Coupons can be sent on the images",
            "Single Image Only",
          ],
          ["", "6", "Social media buttons of your brands", "", ""],
          ["", "7", "Star rating feedback", "", ""],
          ["", "8", "User Access (unlimited users)", "", ""],
          [
            "CRM",
            "1",
            "SMS campaign builder with scheduler",
            "5 Templates Pre-Registered under BillMe / Razorpay Name",
            "100",
          ],
          ["Report Exports", "1", "Daily Sales Report", "", ""],
          ["User Bills", "1", "user.billme.co.in", "", ""],
        ],
      },
    },
    {
      icon: "🎮",
      title: "Specific Terms for Gaming Merchants",
      gradient: "from-purple-600 to-indigo-600",
      content: [
        "These terms apply only if You are a gaming merchant.",
        '9.1. You represent and warrant to RushBaskets that: (a) You do not engage in any activity that violates any Applicable Law pertaining to gaming, gambling, betting or wagering. (b) No services provided by You to any customer ("Merchant Services") are of a nature that may be construed as a competition/contest/game/sport/event (online or offline) whose outcome is based merely or preponderantly or predominantly on chance. (c) The Merchant services are at all times in compliance with all Applicable Laws including pertaining to restriction or prohibition on gambling, betting, wagering and gaming activities.',
        "(d) The provision of the Merchant Services to customers in the states of Nagaland and Sikkim (if so provided) are in accordance with the Applicable Laws of these states and You have obtained and hold all necessary and valid licenses and registrations to provide the Merchant Services in Nagaland and Sikkim. (e) No Merchant services including facilitation, hosting or providing a platform for any competition/contest/game/sport/event (online or offline) for monies are rendered by it to (i) any customers in the states of Telangana, Odisha and Assam or (ii) any customers who are residents of the states of Telangana, Odisha and Assam.",
        "9.2. The representations and warranties set out in clause 9.1 above shall be repeated on each day during the term of these Terms.",
        "9.3. You hereby agree and undertake to provide at the time of commencing use of the Services a written confirmation, certifying that the representations and warranties set out in clause 9.1 above are true and correct. You agree that we may require you to provide a fresh confirmation on demand at any time during Your use of the Services.",
        "9.4. Notwithstanding any other provision of the Terms for gaming merchants, You shall indemnify and hold RushBaskets, its affiliates, and each of their directors, managers, officers, employees and agents harmless from and against all losses (including any losses that are special, incidental, indirect, consequential, exemplary or punitive in nature) arising from claims, demands, actions or other proceedings as a result of or on account of (a) any of Your representations or warranties as set out in Clause 9.1 above being breached or becoming untrue or incorrect, or (b) Your engagement in any activity that violates any Applicable Law pertaining to gaming, gambling, betting or wagering.",
        "Letter of Undertaking (for Gaming Merchants): Gaming merchants are required to provide a Letter of Undertaking on merchant's letter head addressed to Razorpay Software Private Limited, SJR Cyber, 1st Floor, 22 Laskar-Hosur Road, Adugodi, Bangalore - 560030, confirming compliance with: (1) KYC norms and AML standards under the Prevention of Money Laundering Act, 2002. (2) No Merchant Services are based merely or predominantly on chance. (3) Merchant Services are at all times in compliance with all applicable laws pertaining to gaming, gambling, betting and wagering activities. (4) The Merchant holds all necessary valid licenses and/or permissions and registrations. (5) No Merchant Services for monies are rendered to customers in Restricted States or customers who are residents of Restricted States.",
      ],
    },
    {
      icon: "🏦",
      title: "Specific Terms for SNRR Merchants",
      gradient: "from-cyan-600 to-teal-600",
      content: [
        "These terms apply in case You hold a Special Non-Resident Rupee Account (\"SNRR Account\") pursuant to the RBI 'Master Direction - Deposits and Accounts' dated January 1, 2016 and Circular on 'Non-resident Rupee Accounts – Review of Policy' dated November 22, 2019.",
        "8.1. Any person resident outside India, having a business interest in India shall open an SNRR Account with an authorised dealer for the purpose of putting through bona fide transactions in rupees, not involving any violation of provisions of Applicable Laws. The business interest shall include: (a) Investments made in India in accordance with Foreign Exchange Management (Non-debt Instruments) Rules, 2019. (b) Import of goods and services in accordance with Section 5 of the Foreign Exchange Management Act 1999. (c) Export of goods and services in accordance with Section 7 of the Foreign Exchange Management Act 1999.",
        "8.4. The SNRR Account shall not bear any interest.",
        "8.5. The debits and credits in the SNRR Account shall be specific/incidental to the business proposed to be done by the account holder.",
        "8.6. The tenure of the SNRR Account shall be concurrent to the tenure of the contract/period of operation/the business of the account holder and in no case shall exceed seven years. Approval of the RBI shall be obtained in cases requiring renewal.",
        "8.8. The balances in the SNRR Account shall be eligible for repatriation.",
        '8.9. You shall not transfer from any Non-Resident Ordinary account ("NRO") account to the SNRR Account.',
        "8.10. All transactions in the SNRR Account shall be subject to payment of applicable taxes in India.",
        "8.14. You shall ensure that You have prior approval of RBI in case You have entities incorporated in Pakistan and/or Bangladesh or You are a Pakistan or Bangladesh national.",
      ],
    },
    {
      icon: "🔒",
      title: "Privacy Policy Acceptance",
      gradient: "from-orange-500 to-amber-600",
      content: [
        "YOUR PRIVACY IS EXTREMELY IMPORTANT TO US. UPON ACCEPTANCE OF THESE TERMS YOU CONFIRM THAT YOU HAVE READ, UNDERSTOOD AND UNEQUIVOCALLY ACCEPTED OUR POLICIES, INCLUDING THE PROVISIONS OF OUR PRIVACY POLICY.",
        "By using the website, You hereby consent to the use of Your information as we have outlined in our Privacy Policy.",
        "You may address any complaints or discrepancies in relation to the processing (including storing and using) of Your Personal Information (including Sensitive Personal Information) to the DPO details provided below.",
      ],
    },
    {
      icon: "📬",
      title: "Complaints & Grievance Redressal",
      gradient: "from-green-600 to-teal-500",
      content: [
        "ANY COMPLAINTS OR CONCERNS WITH REGARDS TO CONTENT OF THIS WEBSITE OR COMMENT OR BREACH OF THESE TERMS OR ANY INTELLECTUAL PROPERTY OF ANY USER, INSTANCES OF CUSTOMER GRIEVANCES, REGULATORY QUERIES AND CLARIFICATIONS SHALL BE INFORMED/COMMUNICATED TO THE NODAL OFFICER AT THE COORDINATES MENTIONED BELOW IN WRITING OR BY WAY OF RAISING A GRIEVANCE TICKET THROUGH THE HYPERLINK MENTIONED BELOW.",
        "Nodal Officer: MR. VIJAY THAKRAL, Razorpay Software Private Limited, Address: No. 22, 1st Floor, SJR Cyber, Laskar-Hosur Road, Adugodi, Bangalore - 560030. E-mail: nodal-officer@razorpay.com. Grievances Portal: https://razorpay.com/grievances/",
        "DPO: MR. SHASHANK KARINCHETI, Razorpay Software Private Limited, Address: No. 22, 1st Floor, SJR Cyber, Laskar-Hosur Road, Adugodi, Bangalore - 560030. E-mail: dpo@razorpay.com. Grievances Portal: https://razorpay.com/grievances/",
        "Applicable Law: Your use of this Website will be governed by and construed in accordance with the laws of India. The Users agree that any legal action or proceedings arising out of your use may be brought exclusively in the competent courts/tribunals having jurisdiction in Bengaluru, India.",
      ],
    },
  ];

  return (
    <>
      <style>{`
        .content-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .content-list li {
          position: relative;
          padding-left: 1.5rem;
          margin-bottom: 0.75rem;
          line-height: 1.6;
        }

        .content-list li::before {
          content: '▸';
          position: absolute;
          left: 0;
          color: currentColor;
          font-weight: bold;
        }
      `}</style>

      <section className="py-16 px-6 min-h-screen bg-gray-50">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <div className="text-6xl">📋</div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            Terms & Conditions
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Welcome to{" "}
            <span className="font-semibold text-green-600">RushBaskets</span>.
            Please read these terms carefully before using our services to
            ensure a safe and transparent experience.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Last accepted: March 26, 2026 | Accepted by: Diksha | Owner: RUSH
            BASKETS GROSER
          </p>
        </div>

        {/* Cards Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {sections.map((section, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow ${section.tableData ? "lg:col-span-2" : ""}`}
            >
              <div className="text-5xl mb-3">{section.icon}</div>
              <h3
                className={`text-xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r ${section.gradient}`}
              >
                {section.title}
              </h3>
              {section.content.length > 0 && (
                <ul className="content-list text-gray-700 text-sm mb-4">
                  {section.content.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
              {section.tableData && (
                <div className="overflow-x-auto mt-2">
                  <table className="w-full border-collapse border border-gray-300 text-sm">
                    <thead>
                      <tr
                        className={`bg-gradient-to-r ${section.gradient} text-white`}
                      >
                        {section.tableData.headers.map((h, i) => (
                          <th
                            key={i}
                            className="border border-gray-300 px-3 py-2 text-left font-semibold"
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {section.tableData.rows.map((row, rIdx) => {
                        const isFirstOfGroup = row[0] !== "";
                        return (
                          <tr
                            key={rIdx}
                            className={
                              rIdx % 2 === 0 ? "bg-gray-50" : "bg-white"
                            }
                          >
                            {row.map((cell, cIdx) => (
                              <td
                                key={cIdx}
                                className="border border-gray-300 px-3 py-2 text-gray-700 align-top"
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Acceptance Details Table */}
        <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden mb-10">
          <div className="px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-green-600 to-cyan-600">
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
                  className="hover:bg-gray-50 border-b border-gray-100"
                >
                  <td className="font-semibold text-gray-600 w-48 px-6 py-3 text-sm">
                    {key}
                  </td>
                  <td className="text-gray-800 px-6 py-3 text-sm">{val}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom CTA Section */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-green-600 to-cyan-600 rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-white mb-3">
              Thank You for Choosing RushBaskets
            </h2>
            <p className="text-green-50 text-lg mb-6">
              By using our services, you agree to these terms designed to ensure
              safety and transparency for everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleContactClick}
                className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                Contact Us →
              </button>
              <button
                onClick={handleprivacyClick}
                className="bg-white text-cyan-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                View Privacy Policy →
              </button>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="max-w-4xl mx-auto mt-8 text-center">
          <p className="text-gray-500 text-sm">
            Last accepted: March 26, 2026 | By using RushBaskets services, you
            agree to these Terms & Conditions
          </p>
        </div>
      </section>
    </>
  );
}
