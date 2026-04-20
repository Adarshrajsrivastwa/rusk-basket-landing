import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import groceryHero from "../assets/img104.jpg";
import aboutImg from "../assets/img105.jpg";

import prod1 from "../assets/images101.jpg"; // Oranges
import prod2 from "../assets/images102.jpg"; // Dettol
import prod3 from "../assets/107.jpg"; // Horlicks
import prod4 from "../assets/images103.jpg"; // Grocery Basket

import {
  ShoppingCart,
  Package,
  BarChart3,
  Truck,
  Rocket,
  Activity,
  CheckCircle,
  Shield,
  Zap,
  Leaf,
  Star,
  ChevronRight,
  Smartphone,
  HeartHandshake,
  Carrot,
  Apple,
  Wheat,
  Droplets,
  ShoppingBag,
  BadgeCheck,
  Clock,
  Tag,
  ChevronDown,
  ChevronUp,
  PhoneCall,
} from "lucide-react";

/* ─────────────── DATA ─────────────── */
const features = [
  {
    icon: <ShoppingCart className="w-9 h-9" />,
    title: "Order Management",
    desc: "Track every order in real-time from placement to doorstep with automated status updates.",
    tags: ["Real-time", "Tracking"],
    tc: ["bg-orange-100 text-orange-700", "bg-amber-100 text-amber-700"],
    grad: "from-orange-400 to-orange-600",
  },
  {
    icon: <Package className="w-9 h-9" />,
    title: "Inventory Control",
    desc: "Smart stock alerts, category management, and automated restocking keep shelves perfectly stocked.",
    tags: ["Auto Alerts", "Categories"],
    tc: ["bg-green-100 text-green-700", "bg-emerald-100 text-emerald-700"],
    grad: "from-green-500 to-emerald-600",
  },
  {
    icon: <BarChart3 className="w-9 h-9" />,
    title: "Analytics Dashboard",
    desc: "Deep insights on sales trends, customer behaviour, and revenue with powerful reporting.",
    tags: ["Insights", "Revenue"],
    tc: ["bg-blue-100 text-blue-700", "bg-indigo-100 text-indigo-700"],
    grad: "from-blue-500 to-blue-700",
  },
];

const stats = [
  {
    value: "10K+",
    label: "Orders Delivered",
    icon: <ShoppingCart className="w-7 h-7" />,
  },
  {
    value: "2500+",
    label: "Products Listed",
    icon: <Package className="w-7 h-7" />,
  },
  {
    value: "24/7",
    label: "Support Available",
    icon: <HeartHandshake className="w-7 h-7" />,
  },
  {
    value: "4.9★",
    label: "Customer Rating",
    icon: <Star className="w-7 h-7" />,
  },
];

const categories = [
  { icon: <Carrot className="w-5 h-5 text-orange-500" />, name: "Vegetables" },
  { icon: <Apple className="w-5 h-5 text-red-500" />, name: "Fruits" },
  { icon: <Droplets className="w-5 h-5 text-blue-500" />, name: "Dairy" },
  { icon: <Wheat className="w-5 h-5 text-amber-500" />, name: "Grains" },
  {
    icon: <ShoppingBag className="w-5 h-5 text-purple-500" />,
    name: "Personal Care",
  },
];

/* ── Products — names match actual images ── */
const products = [
  {
    id: 1,
    img: prod1,
    name: "Fresh Navel Oranges",
    category: "Fruits",
    price: 89,
    unit: "1 kg",
    rating: 4.8,
    reviews: 234,
    tag: "Farm Fresh",
    tagColor: "#16a34a",
    tagBg: "#dcfce7",
    desc: "Sun-ripened, juicy navel oranges sourced directly from orchards.",
  },
  {
    id: 2,
    img: prod2,
    name: "Dettol Antiseptic Liquid",
    category: "Personal Care",
    price: 145,
    unit: "250 ml",
    rating: 4.9,
    reviews: 512,
    tag: "Best Seller",
    tagColor: "#ea580c",
    tagBg: "#fff7ed",
    desc: "Trusted antiseptic liquid for wounds, skin & surface disinfection.",
  },
  {
    id: 3,
    img: prod3,
    name: "Horlicks Classic Malt",
    category: "Health Drinks",
    price: 199,
    unit: "500 g",
    rating: 4.7,
    reviews: 891,
    tag: "Popular",
    tagColor: "#1d4ed8",
    tagBg: "#eff6ff",
    desc: "Classic nutritious malt drink for strength, stamina & immunity.",
  },
  {
    id: 4,
    img: prod4,
    name: "Daily Essentials Basket",
    category: "Grocery",
    price: 499,
    unit: "Combo",
    rating: 4.6,
    reviews: 317,
    tag: "New Arrival",
    tagColor: "#7c3aed",
    tagBg: "#f5f3ff",
    desc: "Curated basket of everyday groceries — fresh vegetables & more.",
  },
];

/* ── FAQ ── */
const faqs = [
  {
    q: "How fast is delivery in my area?",
    a: "We deliver within 30 minutes in most serviceable areas. Delivery time may vary slightly based on your location and order volume. You can check estimated delivery time at checkout.",
  },
  {
    q: "Are the products fresh and quality-assured?",
    a: "Absolutely. All our fruits, vegetables and perishables are sourced daily from verified suppliers and farms. We conduct quality checks at every step before dispatch.",
  },
  {
    q: "What payment methods are accepted?",
    a: "We accept UPI, credit/debit cards, net banking, and Cash on Delivery. All online payments are secured with 256-bit SSL encryption.",
  },
  {
    q: "Can I return or replace a product?",
    a: "Yes. If any product is damaged, expired, or incorrect, you can raise a return/replacement request within 24 hours of delivery. We'll resolve it promptly.",
  },
  {
    q: "Is there a minimum order value?",
    a: "There is no minimum order requirement. However, orders above ₹299 qualify for free delivery. A small delivery fee applies for smaller orders.",
  },
  {
    q: "How do I track my order?",
    a: "Once your order is placed, you'll receive real-time tracking updates via SMS and in-app notifications. You can also view live order status from the Orders section.",
  },
];

/* ─────────────── PRODUCT CARD ─────────────── */
function ProductCard({ product }) {
  return (
    <div className="pro-card group">
      <div className="pro-img-wrap">
        <img
          src={product.img}
          alt={product.name}
          className="pro-img group-hover:scale-[1.07]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/12 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
      </div>

      <div className="pro-body">
        <div className="flex items-center justify-between mb-2.5">
          <span
            className="text-xs font-black uppercase tracking-wider"
            style={{ color: product.tagColor }}
          >
            {product.category}
          </span>
          <span
            className="text-xs font-bold px-2.5 py-0.5 rounded-full"
            style={{ background: product.tagBg, color: product.tagColor }}
          >
            {product.tag}
          </span>
        </div>

        <h3 className="pro-name">{product.name}</h3>
        <p className="pro-desc">{product.desc}</p>

        <div className="flex items-center gap-1.5 mb-4">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? "text-amber-400 fill-amber-400" : "text-gray-200 fill-gray-200"}`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-400 font-semibold">
            {product.rating} &nbsp;·&nbsp; {product.reviews} reviews
          </span>
        </div>

        <div className="flex items-center justify-between pt-3.5 border-t border-gray-100">
          <div>
            <span className="text-2xl font-black text-gray-900">
              ₹{product.price}
            </span>
            <span className="text-xs text-gray-400 ml-1.5 font-medium">
              / {product.unit}
            </span>
          </div>
          <span className="text-xs text-emerald-700 font-bold bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-1.5">
            ✓ In Stock
          </span>
        </div>
      </div>
    </div>
  );
}

/* ─────────────── FAQ ITEM ─────────────── */
function FAQItem({ q, a, index }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`faq-item ${open ? "faq-open" : ""}`}
      onClick={() => setOpen(!open)}
    >
      <div className="faq-header">
        <div className="faq-num">{String(index + 1).padStart(2, "0")}</div>
        <span className="faq-q">{q}</span>
        <div className="faq-chevron">
          {open ? (
            <ChevronUp className="w-5 h-5 text-orange-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-400" />
          )}
        </div>
      </div>
      <div className={`faq-body ${open ? "faq-open-body" : ""}`}>
        <p className="faq-ans">{a}</p>
      </div>
    </div>
  );
}

/* ─────────────── HOME ─────────────── */
export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=Fraunces:wght@700;900&display=swap');
        *,*::before,*::after { box-sizing:border-box; font-family:'Plus Jakarta Sans',sans-serif; }
        body { margin:0; padding:0; background:#fff; }

        @keyframes blob {
          0%,100%{ transform:translate(0,0) scale(1); }
          33%    { transform:translate(26px,-42px) scale(1.07); }
          66%    { transform:translate(-16px,16px) scale(0.94); }
        }
        .blob { animation:blob 9s infinite ease-in-out; }
        .bd2  { animation-delay:2.4s; }
        .bd4  { animation-delay:4.7s; }

        @keyframes fadeUp {
          from { opacity:0; transform:translateY(30px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .fu  { animation:fadeUp .75s ease both; }
        .fu2 { animation:fadeUp .75s .15s ease both; }
        .fu3 { animation:fadeUp .75s .30s ease both; }
        .fu4 { animation:fadeUp .75s .45s ease both; }

        /* ── pill ── */
        .pill {
          display:inline-flex; align-items:center; gap:6px;
          background:#fff7ed; color:#c2410c;
          border:1.5px solid #fed7aa; border-radius:9999px;
          padding:7px 16px; font-size:.74rem; font-weight:800; letter-spacing:.06em;
        }

        /* ── chip ── */
        .chip {
          display:inline-flex; align-items:center; gap:8px;
          background:#fff; border:1.5px solid #fed7aa; border-radius:9999px;
          padding:10px 20px; font-weight:700; color:#9a3412; font-size:.85rem;
          cursor:pointer; transition:all .25s;
        }
        .chip:hover { background:#fff7ed; box-shadow:0 6px 18px rgba(249,115,22,.18); transform:translateY(-3px); }

        /* ── feat-card ── */
        .feat-card {
          background:#fff; border-radius:24px; padding:32px;
          border:1.5px solid #ffedd5; box-shadow:0 4px 20px rgba(0,0,0,.04);
          transition:box-shadow .35s, transform .35s, border-color .35s;
        }
        .feat-card:hover { box-shadow:0 24px 56px rgba(0,0,0,.10); transform:translateY(-10px); border-color:#fb923c; }
        .feat-card:hover .icon-wrap { transform:scale(1.1) rotate(5deg); }
        .icon-wrap {
          display:inline-flex; align-items:center; justify-content:center;
          width:64px; height:64px; border-radius:18px; color:#fff;
          margin-bottom:20px; box-shadow:0 8px 20px rgba(0,0,0,.16); transition:transform .3s;
        }

        /* ── product card ── */
        .pro-card {
          background:#fff; border-radius:22px;
          border:1.5px solid #f1f5f9;
          box-shadow:0 2px 12px rgba(0,0,0,.05);
          overflow:hidden; cursor:default;
          transition:box-shadow .35s, transform .35s, border-color .35s;
        }
        .pro-card:hover {
          box-shadow:0 24px 56px rgba(249,115,22,.13);
          transform:translateY(-10px); border-color:#fdba74;
        }
        .pro-img-wrap { position:relative; overflow:hidden; height:220px; background:#f8fafc; }
        .pro-img { width:100%; height:100%; object-fit:cover; transition:transform .55s cubic-bezier(.25,.46,.45,.94); }
        .pro-body { padding:20px; }
        .pro-name {
          font-family:'Fraunces',serif;
          font-size:1.1rem; font-weight:900; color:#111827;
          line-height:1.3; margin:0 0 8px 0;
        }
        .pro-desc { font-size:.82rem; color:#9ca3af; line-height:1.6; margin:0 0 12px 0; }

        /* ── trust badge ── */
        .tbadge {
          display:inline-flex; align-items:center; gap:8px;
          background:#fff; border:1.5px solid #fed7aa; border-radius:9999px;
          padding:8px 18px; font-size:.82rem; font-weight:700; color:#374151;
          box-shadow:0 2px 8px rgba(0,0,0,.04); transition:all .2s;
        }
        .tbadge:hover { border-color:#fb923c; box-shadow:0 4px 14px rgba(249,115,22,.14); }

        /* ── FAQ ── */
        .faq-item {
          background:#fff; border:1.5px solid #f1f5f9;
          border-radius:18px; overflow:hidden; cursor:pointer;
          transition:border-color .3s, box-shadow .3s;
          user-select:none;
        }
        .faq-item:hover, .faq-open {
          border-color:#fb923c; box-shadow:0 8px 32px rgba(249,115,22,.10);
        }
        .faq-header { display:flex; align-items:center; gap:14px; padding:20px 24px; }
        .faq-num {
          min-width:36px; height:36px; flex-shrink:0;
          background:linear-gradient(135deg,#f97316,#ea580c);
          color:#fff; border-radius:10px;
          display:flex; align-items:center; justify-content:center;
          font-size:.78rem; font-weight:900; letter-spacing:.04em;
        }
        .faq-q { flex:1; font-weight:800; font-size:.96rem; color:#111827; line-height:1.4; }
        .faq-chevron { flex-shrink:0; }
        .faq-body {
          max-height:0; overflow:hidden; padding:0 24px;
          transition:max-height .4s cubic-bezier(.4,0,.2,1), padding .3s;
        }
        .faq-open-body { max-height:200px; padding:0 24px 20px; }
        .faq-ans {
          font-size:.9rem; color:#6b7280; line-height:1.75; margin:0;
          border-left:3px solid #fed7aa; padding-left:16px;
        }

        /* ── stat card ── */
        .stat-card {
          background:rgba(255,255,255,.15); backdrop-filter:blur(12px);
          border-radius:22px; padding:28px; text-align:center;
          box-shadow:0 8px 32px rgba(0,0,0,.1);
          transition:background .3s, transform .3s;
        }
        .stat-card:hover { background:rgba(255,255,255,.25); transform:translateY(-5px); }

        /* ── company badge (hero) ── */
        .company-badge {
          display:inline-flex; align-items:center; gap:8px;
          background:#fff7ed; color:#c2410c;
          border:1.5px solid #fed7aa; border-radius:9999px;
          padding:6px 18px; font-size:.75rem; font-weight:900;
          letter-spacing:.1em; text-transform:uppercase; margin-bottom:14px;
        }
        .company-badge-dot {
          width:7px; height:7px; border-radius:50%;
          background:#f97316; flex-shrink:0;
        }

        /* ── company badge (dark/CTA sections) ── */
        .company-badge-dark {
          display:inline-flex; align-items:center; gap:8px;
          background:rgba(255,255,255,.15); backdrop-filter:blur(8px);
          border:1.5px solid rgba(255,255,255,.4); border-radius:9999px;
          padding:6px 18px; font-size:.75rem; font-weight:900;
          letter-spacing:.1em; text-transform:uppercase; color:#fff; margin-bottom:20px;
        }
        .company-badge-dark-dot {
          width:7px; height:7px; border-radius:50%;
          background:#fde68a; flex-shrink:0; box-shadow:0 0 6px #fde68a;
        }
      `}</style>

      <div className="text-gray-800">
        {/* ══ HERO ══ */}
        <section className="relative bg-white overflow-hidden">
          <div className="absolute top-8 left-8 w-80 h-80 bg-orange-100 rounded-full blur-3xl opacity-60 blob" />
          <div className="absolute top-28 right-12 w-96 h-96 bg-amber-50 rounded-full blur-3xl opacity-70 blob bd2" />
          <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-red-50 rounded-full blur-3xl opacity-50 blob bd4" />

          <div className="max-w-7xl mx-auto px-6 md:px-14 py-24 relative z-10 flex flex-col md:flex-row items-center gap-14">
            <div className="md:w-1/2 fu">
              {/* ── COMPANY NAME BADGE (added) ── */}
              <div className="company-badge">
                <div className="company-badge-dot" />
                Rush Baskets Groser
              </div>

              {/* <div className="pill mb-7">
                <ShoppingCart className="w-4 h-4" />
                GROCERY MANAGEMENT PLATFORM
              </div> */}
              <h1
                className="text-5xl md:text-6xl font-black leading-[1.08] mb-6 text-gray-900"
                style={{ fontFamily: "'Fraunces',serif" }}
              >
                Your Grocery Store,
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-orange-500 to-red-500">
                  Smarter & Faster
                </span>
              </h1>
              <p className="text-lg text-gray-500 leading-relaxed mb-9 fu2">
                RushBaskets delivers everything from farm-fresh produce to daily
                essentials — managed through a powerful admin platform built for
                modern grocery businesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 fu3">
                <a
                  href="#products"
                  className="group inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold px-8 py-4 rounded-2xl shadow-xl hover:from-orange-600 hover:to-red-600 transition-all hover:scale-105"
                >
                  <ShoppingBag className="w-5 h-5" />
                  <span>Shop Now</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#about"
                  className="inline-flex items-center gap-2 border-2 border-orange-300 text-orange-600 font-bold px-8 py-4 rounded-2xl hover:bg-orange-600 hover:text-white hover:border-orange-600 transition-all"
                >
                  <Activity className="w-4 h-4" />
                  <span>Learn More</span>
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-5 fu4">
                {[
                  {
                    i: <BadgeCheck className="w-4 h-4 text-green-500" />,
                    t: "Verified Suppliers",
                  },
                  {
                    i: <Clock className="w-4 h-4 text-orange-500" />,
                    t: "30-min Delivery",
                  },
                  {
                    i: <Shield className="w-4 h-4 text-blue-500" />,
                    t: "Secure Payments",
                  },
                ].map(({ i, t }) => (
                  <div
                    key={t}
                    className="flex items-center gap-2 text-sm font-semibold text-gray-500"
                  >
                    {i}
                    <span>{t}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:w-1/2 flex justify-center fu2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-orange-400 to-red-400 rounded-[32px] opacity-20 blur-xl" />
                <img
                  src={groceryHero}
                  alt="Grocery shopping"
                  style={{
                    width: "100%",
                    maxWidth: 500,
                    height: 400,
                    objectFit: "cover",
                    borderRadius: 28,
                    boxShadow: "0 32px 80px rgba(249,115,22,.22)",
                    border: "3px solid #fed7aa",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: 24,
                    left: -24,
                    background: "#fff",
                    borderRadius: 16,
                    padding: "14px 18px",
                    boxShadow: "0 12px 36px rgba(0,0,0,.13)",
                    border: "1.5px solid #ffedd5",
                    minWidth: 180,
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                      <Truck className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-semibold">
                        Delivery Time
                      </p>
                      <p className="text-sm font-black text-gray-900">
                        Under 10 mins
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    position: "absolute",
                    top: 24,
                    right: -20,
                    background: "#fff",
                    borderRadius: 16,
                    padding: "12px 16px",
                    boxShadow: "0 12px 32px rgba(0,0,0,.11)",
                    border: "1.5px solid #ffedd5",
                  }}
                >
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                    <span className="font-black text-gray-900">4.9</span>
                    <span className="text-xs text-gray-400 font-medium">
                      / 5.0
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 mt-0.5 font-semibold text-center">
                    10K+ Reviews
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative -mb-1">
            <svg
              viewBox="0 0 1440 72"
              className="w-full h-16"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0,36 C480,72 960,0 1440,36 L1440,72 L0,72 Z"
                fill="#fff7ed"
              />
            </svg>
          </div>
        </section>

        {/* ══ CATEGORIES ══ */}
        <section className="py-10 px-6 bg-orange-50 border-b border-orange-100">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-5">
              Browse Categories
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map(({ icon, name }) => (
                <div key={name} className="chip">
                  {icon}
                  <span>{name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ FEATURED PRODUCTS ══ */}
        <section
          id="products"
          className="py-24 px-6 md:px-12 bg-gradient-to-b from-orange-50 to-white"
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-4">
              <div>
                <div className="pill mb-4">
                  <Tag className="w-4 h-4" />
                  FEATURED PRODUCTS
                </div>
                <h2
                  className="text-4xl md:text-5xl font-black text-gray-900"
                  style={{ fontFamily: "'Fraunces',serif" }}
                >
                  Today's{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-red-500">
                    Fresh Picks
                  </span>
                </h2>
                {/* ── COMPANY NAME under Products heading (added) ── */}
                <p
                  className="mt-2 text-xs font-black uppercase tracking-widest text-orange-400"
                  style={{ letterSpacing: ".12em" }}
                >
                  Rush Baskets Groser
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
              {products.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>

        {/* ══ ABOUT ══ */}
        <section
          id="about"
          className="relative py-24 px-6 md:px-14 bg-white overflow-hidden"
        >
          <div className="absolute top-16 left-0 w-72 h-72 bg-orange-100 rounded-full blur-3xl opacity-20 blob" />
          <div className="absolute bottom-16 right-0 w-72 h-72 bg-red-100 rounded-full blur-3xl opacity-20 blob bd2" />

          <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-orange-200 to-red-200 rounded-[32px] opacity-25 blur-xl" />
                <img
                  src={aboutImg}
                  alt="Fresh grocery delivery"
                  style={{
                    width: "100%",
                    maxWidth: 440,
                    height: 340,
                    objectFit: "cover",
                    borderRadius: 28,
                    boxShadow: "0 20px 56px rgba(249,115,22,.18)",
                    border: "3px solid #fed7aa",
                  }}
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="pill mb-6">
                <Leaf className="w-4 h-4" />
                ABOUT RUSH BASKETS GROSER
              </div>
              <h2
                className="text-4xl md:text-5xl font-black text-gray-900 mb-6"
                style={{ fontFamily: "'Fraunces',serif" }}
              >
                Fast, Fresh &{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-red-600">
                  Reliable
                </span>
              </h2>
              <p className="text-gray-500 leading-relaxed mb-4">
                RushBaskets is an advanced grocery e-commerce management
                platform designed for store owners, delivery managers, and
                admins. Control your entire operation from a single, elegant
                dashboard.
              </p>
              <p className="text-gray-400 leading-relaxed mb-9">
                From tracking fresh produce inventory to managing customer
                orders and analysing sales data — we make grocery management
                effortless and profitable.
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  {
                    i: <CheckCircle className="w-4 h-4 text-orange-500" />,
                    t: "Verified Suppliers",
                  },
                  {
                    i: <Truck className="w-4 h-4 text-orange-500" />,
                    t: "Express Delivery",
                  },
                  {
                    i: <Package className="w-4 h-4 text-orange-500" />,
                    t: "Smart Stock Alerts",
                  },
                  {
                    i: <Shield className="w-4 h-4 text-orange-500" />,
                    t: "Secure Payments",
                  },
                ].map(({ i, t }) => (
                  <div key={t} className="tbadge">
                    {i}
                    <span>{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══ FEATURES ══ */}
        <section className="relative py-24 px-6 md:px-14 bg-gradient-to-b from-orange-50 via-white to-orange-50 overflow-hidden">
          <div className="absolute top-20 right-0 w-64 h-64 bg-orange-200 rounded-full blur-3xl opacity-15 blob" />
          <div className="absolute bottom-20 left-0 w-64 h-64 bg-red-100 rounded-full blur-3xl opacity-15 blob bd4" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <div className="pill mb-5 justify-center">
                <Zap className="w-4 h-4" />
                CORE FEATURES
              </div>
              <h2
                className="text-4xl md:text-5xl font-black text-gray-900 mb-4"
                style={{ fontFamily: "'Fraunces',serif" }}
              >
                Everything in One Place
              </h2>
              <p className="text-xl text-gray-500 max-w-xl mx-auto">
                Tools built for modern grocery operations — powerful, fast, and
                intuitive.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map(({ icon, title, desc, tags, tc, grad }) => (
                <div key={title} className="feat-card">
                  <div className={`icon-wrap bg-gradient-to-br ${grad}`}>
                    {icon}
                  </div>
                  <h3 className="text-xl font-black text-gray-900 mb-3">
                    {title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">
                    {desc}
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {tags.map((t, i) => (
                      <span
                        key={t}
                        className={`px-3 py-1 rounded-full text-xs font-bold ${tc[i]}`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ STATS ══ */}
        <section className="relative py-20 px-6 bg-gradient-to-r from-orange-600 via-orange-700 to-red-600 text-white overflow-hidden">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl opacity-10" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-orange-300 rounded-full blur-3xl opacity-10" />
          <div className="max-w-5xl mx-auto relative z-10">
            <div className="text-center mb-14">
              {/* ── COMPANY NAME in stats (added) ── */}
              <div className="flex justify-center mb-4">
                <div className="company-badge-dark">
                  <div className="company-badge-dark-dot" />
                  Rush Baskets Groser
                </div>
              </div>
              <h2
                className="text-3xl sm:text-5xl font-black mb-4"
                style={{ fontFamily: "'Fraunces',serif" }}
              >
                Trusted by Businesses Worldwide
              </h2>
              <p className="text-orange-100 text-lg max-w-xl mx-auto">
                Thousands of stores already growing with{" "}
                <strong className="text-white">Rush Baskets Groser</strong>
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map(({ value, label, icon }) => (
                <div key={label} className="stat-card">
                  <div className="flex justify-center mb-3 text-orange-200">
                    {icon}
                  </div>
                  <div className="text-4xl sm:text-5xl font-black mb-2 bg-clip-text text-transparent bg-gradient-to-b from-white to-amber-300">
                    {value}
                  </div>
                  <div className="text-orange-100 text-xs font-bold uppercase tracking-widest">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ FAQ ══ */}
        <section className="relative py-24 px-6 md:px-14 bg-white overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-orange-50 rounded-full blur-3xl opacity-60 blob" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-amber-50 rounded-full blur-3xl opacity-60 blob bd2" />

          <div className="max-w-4xl mx-auto relative z-10">
            <div className="text-center mb-14">
              <div className="pill mb-5 justify-center">
                <HeartHandshake className="w-4 h-4" />
                FAQ
              </div>
              <h2
                className="text-4xl md:text-5xl font-black text-gray-900 mb-4"
                style={{ fontFamily: "'Fraunces',serif" }}
              >
                Frequently Asked{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-red-500">
                  Questions
                </span>
              </h2>
              <p className="text-gray-500 text-lg max-w-xl mx-auto">
                Everything you need to know about RushBaskets — quick answers,
                zero confusion.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {faqs.map((faq, i) => (
                <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
              ))}
            </div>

            {/* still have questions strip */}
            <div
              className="mt-14 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6"
              style={{
                background: "linear-gradient(135deg,#fff7ed,#ffedd5)",
                border: "1.5px solid #fed7aa",
              }}
            >
              <div>
                <p
                  className="font-black text-gray-900 text-xl mb-1"
                  style={{ fontFamily: "'Fraunces',serif" }}
                >
                  Still have questions?
                </p>
                <p className="text-gray-500 text-sm">
                  Our support team is here for you 24/7.
                </p>
              </div>
              <button
                onClick={() => navigate("/contact")}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold px-6 py-3 rounded-xl hover:from-orange-600 hover:to-red-600 transition-all hover:scale-105 shadow-lg whitespace-nowrap"
              >
                <PhoneCall className="w-4 h-4" />
                Contact Support
              </button>
            </div>
          </div>
        </section>

        {/* ══ DOWNLOAD ══ */}
        <section
          id="download"
          className="relative py-28 px-6 text-center overflow-hidden bg-gradient-to-br from-orange-500 via-orange-600 to-red-600"
        >
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl opacity-10 blob" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-red-300 rounded-full blur-3xl opacity-10 blob bd2" />
          <div className="max-w-2xl mx-auto relative z-10">
            {/* ── COMPANY NAME in download section (added) ── */}
            <div className="flex justify-center mb-2">
              <div className="company-badge-dark">
                <div className="company-badge-dark-dot" />
                Rush Baskets Groser
              </div>
            </div>

            <div
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-8 text-sm font-black text-orange-100"
              style={{
                background: "rgba(0,0,0,.2)",
                backdropFilter: "blur(10px)",
              }}
            >
              <Smartphone className="w-4 h-4" />
              MOBILE APP
            </div>
            <h2
              className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight"
              style={{ fontFamily: "'Fraunces',serif" }}
            >
              Download the RushBaskets App
            </h2>
            <p className="text-orange-100 mb-10 text-lg">
              Manage orders, stock &amp; deliveries on the go — available free
              on Play Store.
            </p>
            <a
              href="https://play.google.com/store/search?q=rushbaskets&c=apps&hl=en_IN"
              className="group inline-flex items-center gap-3 bg-white text-orange-600 font-black text-xl px-10 py-5 rounded-2xl shadow-2xl hover:bg-orange-50 transition-all hover:scale-110"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3.18 23.76c.3.17.64.24.99.24.5 0 1.01-.16 1.44-.47L17.5 16l-3.36-3.36L3.18 23.76zM20.49 10.06l-2.76-1.6-3.71 3.71 3.71 3.71 2.79-1.62c.8-.46 1.28-1.28 1.28-2.1-.01-.83-.49-1.64-1.31-2.1zM1.04.32C.98.5.96.71.96.93v22.14c0 .22.02.43.08.62l.12.12 12.41-12.4v-.3L1.16.2 1.04.32zM5.62.47L17.5 8l-3.36 3.36L2.61.28c.43-.31.95-.47 1.44-.47.35 0 .69.08.99.24l.58.42z" />
              </svg>
              Get it on Play Store
              <Rocket className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
            <div className="mt-9 flex flex-wrap justify-center gap-8 text-orange-100 text-sm font-semibold">
              {[
                [<Shield className="w-4 h-4" />, "Free Download"],
                [<CheckCircle className="w-4 h-4" />, "No Hidden Fees"],
                [<Star className="w-4 h-4 fill-current" />, "4.9 Rated"],
              ].map(([ic, txt]) => (
                <div key={txt} className="flex items-center gap-2">
                  {ic}
                  <span>{txt}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ CONTACT ══ */}
        <section className="relative py-24 px-6 text-center bg-gradient-to-b from-white to-orange-50 overflow-hidden">
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-25 blob" />
          <div className="max-w-xl mx-auto relative z-10">
            <div className="pill mb-7 justify-center">
              <HeartHandshake className="w-4 h-4" />
              GET IN TOUCH
            </div>
            <h2
              className="text-4xl md:text-5xl font-black text-gray-900 mb-5"
              style={{ fontFamily: "'Fraunces',serif" }}
            >
              Need Help?
            </h2>
            <p className="text-gray-500 mb-10 leading-relaxed text-lg">
              Our support team is available 24/7 to help you manage your grocery
              operations seamlessly.
            </p>
            <button
              onClick={() => navigate("/contact")}
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-orange-600 to-red-600 text-white font-black text-lg px-10 py-5 rounded-2xl shadow-2xl hover:from-orange-700 hover:to-red-700 hover:scale-105 transition-all"
            >
              <span>Contact Us</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
