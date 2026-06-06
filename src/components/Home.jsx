import React, { useEffect, useRef, useState } from "react";
import "./Home.css";
import bg1 from "../assets/imagebg1.png";
import bg2 from "../assets/imagebg2.png";

import cardIcon1 from "../assets/card-icon1.png"; 
import cardIcon2 from "../assets/card-icon2.png"; 
import cardIcon3 from "../assets/card-icon3.png"; 
import cardIcon4 from "../assets/card-icon4.png"; 
import cardIcon5 from "../assets/card-icon5.png"; 
import cardIcon6 from "../assets/card-icon6.png"; 

// --- PRODUCT BANNER IMAGE IMPORTS ---
import productImg1 from "../assets/product1.jpg"; 
import productImg2 from "../assets/product2.jpg"; 
import productImg3 from "../assets/product3.jpg"; 

import seoImg1 from "../assets/seo1.jpg";
import seoImg2 from "../assets/seo2.jpg";
import seoImg3 from "../assets/seo3.jpg";
import seoImg4 from "../assets/seo4.jpg";

import marketingImg1 from "../assets/marketing1.jpg";
import marketingImg2 from "../assets/marketing2.jpg";
import marketingImg3 from "../assets/marketing3.jpg";

import adminImg1 from "../assets/admin1.jpg";
import adminImg2 from "../assets/admin2.jpg";

import eServiceImg1 from "../assets/eservice1.jpg";
import eServiceImg2 from "../assets/eservice2.jpg";
import eServiceImg3 from "../assets/eservice3.jpg";

import designImg1 from "../assets/design1.jpg";
import designImg2 from "../assets/design2.jpg";
import designImg3 from "../assets/design3.jpg";
import designImg4 from "../assets/design4.jpg";
import designImg5 from "../assets/design5.jpg";

// --- FOOTER BRAND IMAGES ---
import footerLogo from "../assets/footer-logo.png";
import saudiVisionImg from "../assets/saudi-badge.png";
import platformImg from "../assets/maroof-badge.png";

// Import individual payment gateway icons here
import payIcon1 from "../assets/pay1.png";
import payIcon2 from "../assets/pay2.png";
import payIcon3 from "../assets/pay3.png";
import payIcon4 from "../assets/pay4.png";
import payIcon5 from "../assets/pay5.png";
import payIcon6 from "../assets/pay6.png";
import payIcon7 from "../assets/pay7.png";
import payIcon8 from "../assets/pay8.png";

export default function Home() {
  const containerRef = useRef(null);
  const [isInteracting, setIsInteracting] = useState(false);
  const scrollDirection = useRef(1); // 1 = right, -1 = left
  const [email, setEmail] = useState("");

  const cardsData = [
    { id: 1, img: cardIcon1, title: "التسويق", desc: "إطلاق حملات إعلانية على منصات التواصل" },
    { id: 2, img: cardIcon2, title: "خدمات المتاجر", desc: "انشاء وتصميم المتاجر الالكترونية" },
    { id: 3, img: cardIcon3, title: "الفيديو", desc: "خدمات الفيديو ugc" },
    { id: 4, img: cardIcon4, title: "المحتوى", desc: "خدمة كتابة المحتوى التسويقي" },
    { id: 5, img: cardIcon5, title: "خدمات المتاجر", desc: "خدمات الseo والربط مع خدمات قوقل، إلخ" },
    { id: 6, img: cardIcon6, title: "العمل الحر", desc: "خدمة إصدار وثيقة العمل الحر" },
  ];

  const storesProducts = [
    { id: 1, category: "انشاء وتصميم المتاجر الالكترونية", title: "تصميم متجر إلكتروني احترافي على سلة | محتوى بلس", subtitle: "تصميم متجر سلة", oldPrice: "5000", newPrice: "1499", img: productImg3 },
    { id: 2, category: "انشاء وتصميم المتاجر الالكترونية", title: "إعادة تصميم متجر الإلكتروني", subtitle: "إعادة تصميم متجر الكتروني", oldPrice: "2100", newPrice: "895", img: productImg2 },
    { id: 3, category: "انشاء وتصميم المتاجر الالكترونية", title: "تصميم متجر منتجات رقمية", subtitle: "شراء متجر منتجات رقمية", oldPrice: "2900", newPrice: "995", img: productImg1 }
  ];

  const seoProducts = [
    { id: 1, category: "خدمات تحسين محركات البحث SEO", title: "خدمة تحسين محركات البحث لمتجرك | SEO", subtitle: "تحسين محركات البحث لمتجرك", oldPrice: "2400", newPrice: "1199", img: seoImg1 },
    { id: 2, category: "خدمات تحسين محركات البحث SEO", title: "تحسين سيو متجرك احترافية", subtitle: "تحسين SEO لمتجرك شهر كامل", oldPrice: "3200", newPrice: "1599", img: seoImg2 },
    { id: 3, category: "خدمات تحسين محركات البحث SEO", title: "كتابة مقالات متوافقة مع السيو", subtitle: "كتابة مقالات", oldPrice: null, newPrice: "225", img: seoImg3 },
    { id: 4, category: "خدمات تحسين محركات البحث SEO", title: "كلمات مفتاحية Keyword Research", subtitle: "كلمات مفتاحية Keyword Research", oldPrice: "799", newPrice: "399", img: seoImg4 }
  ];

  const marketingProducts = [
    { id: 1, category: "خدمات التسويق الإلكتروني", title: "اعلان سناب شات", subtitle: "باقات إعلانات سناب شات", oldPrice: null, newPrice: "1", img: marketingImg1 },
    { id: 2, category: "خدمات التسويق الإلكتروني", title: "اعلان قوقل ادز", subtitle: "اعلانات قوقل", oldPrice: "3999", newPrice: "1700", img: marketingImg2 },
    { id: 3, category: "خدمات التسويق الإلكتروني", title: "اعلان تيك توك", subtitle: "خدمة انشاء اعلانات تيك توك", oldPrice: null, newPrice: "699", img: marketingImg3 }
  ];

  const adminProducts = [
    { id: 1, category: "ادارة الحسابات", title: "ادارة متجر سلة لمدة شهر", subtitle: "ادارة متجر سلة", oldPrice: "6000", newPrice: "2499", img: adminImg1 },
    { id: 2, category: "ادارة الحسابات", title: "إدارة حسابات التواصل الاجتماعي شخصيه/ تجاريه", subtitle: "ادارة الحسابات", oldPrice: null, newPrice: "1", img: adminImg2 }
  ];

  const eServicesProducts = [
    { id: 1, category: "خدمات الكترونية", title: "الدليل الشامل لزيادة المبيعات في اليوم الوطني", subtitle: "الدليل الشامل لزيادة المبيعات", oldPrice: "399", newPrice: "79", img: eServiceImg1 },
    { id: 2, category: "خدمات الكترونية", title: "وثيقة العمل الحر", subtitle: "اصدار وثيقة العمل الحر", oldPrice: "699", newPrice: "179", img: eServiceImg2 },
    { id: 3, category: "خدمات الكترونية", title: "تفعيل تمارا لمتجرك الإلكتروني و محلك التجاري", subtitle: "تفعيل تمارا للمتاجر والمحلات", oldPrice: "800", newPrice: "399", img: eServiceImg3 }
  ];

  const designProducts = [
    { id: 1, category: "التصميم والمحتوى", title: "تصوير فيديوهات UGC احترافية", subtitle: "تصميم فيديوهات UGC احترافية", oldPrice: "1800", newPrice: "899", img: designImg1 },
    { id: 2, category: "التصميم والمحتوى", title: "تصميم بوست اعلاني", subtitle: "شراء تصميم اعلان سوشيال ميديا", oldPrice: "96", newPrice: "69", img: designImg2 },
    { id: 3, category: "التصميم والمحتوى", title: "الموشن جرافيك", subtitle: "شراء تصميم انفوجرافيك", oldPrice: "899", newPrice: "499", img: designImg3 },
    { id: 4, category: "التصميم والمحتوى", title: "كتابة المحتوى التسويقي", subtitle: "خدمة كتابة المحتوى التسويقي", oldPrice: null, newPrice: "99", img: designImg4 },
    { id: 5, category: "التصميم والمحتوى", title: "تصميم الشعارات والهويات التجارية", subtitle: "تصميم الشعارات والهوية البصرية", oldPrice: null, newPrice: "700", img: designImg5 }
  ];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationId;

    const autoScroll = () => {
      if (!isInteracting) {
        container.scrollLeft += scrollDirection.current * 1; 

        if (container.scrollLeft >= container.scrollWidth - container.clientWidth - 5) {
          scrollDirection.current = -1;
        } 
        else if (container.scrollLeft <= 0) {
          scrollDirection.current = 1;
        }
      }
      animationId = requestAnimationFrame(autoScroll);
    };

    animationId = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(animationId);
  }, [isInteracting]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    setEmail("");
  };

  const renderProductGrid = (title, productsArray) => (
    <section className="products-section" dir="rtl">
      <div className="products-header">
        <h2>{title}</h2>
      </div>
      <div className="products-grid">
        {productsArray.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-banner-wrapper">
              <img src={product.img} alt={product.title} className="product-banner-img" />
            </div>
            <div className="product-info-box">
              <span className="product-tag">{product.category}</span>
              <h3 className="product-main-title">{product.title}</h3>
              <p className="product-subtitle">{product.subtitle}</p>
              
              <div className="product-pricing">
                {product.oldPrice && (
                  <span className="old-price">
                    {product.oldPrice} <span className="currency-symbol">ر.س</span>
                  </span>
                )}
                <span className="new-price">
                  {product.newPrice} <span className="currency-symbol">ر.س</span>
                </span>
              </div>
              <button className="add-to-cart-btn">
                <span className="plus-icon">+</span> أضف للسلة
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  return (
    <div className="home-page">
      <div className="bg-container">
        <img src={bg1} alt="Background 1" className="bg-img" />
        <img src={bg2} alt="Background 2" className="bg-img" />
      </div>

      <div className="cards-section">
        <div 
          className="cards-container"
          ref={containerRef}
          onMouseEnter={() => setIsInteracting(true)}
          onMouseLeave={() => setIsInteracting(false)}
          onTouchStart={() => setIsInteracting(true)}
          onTouchEnd={() => setIsInteracting(false)}
        >
          {cardsData.map((card) => (
            <div key={card.id} className="card">
              <img src={card.img} alt={card.title} className="card-img" />
              <h3 className="card-title" dir="auto">{card.title}</h3>
              <p className="card-desc" dir="auto">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {renderProductGrid("انشاء وتصميم المتاجر الالكترونية", storesProducts)}
      {renderProductGrid("خدمات تحسين محركات البحث SEO", seoProducts)}
      {renderProductGrid("خدمات التسويق الإلكتروني", marketingProducts)}
      {renderProductGrid("ادارة الحسابات", adminProducts)}
      {renderProductGrid("خدمات الكترونية", eServicesProducts)}
      {renderProductGrid("التصميم والمحتوى", designProducts)}

      {/* --- NEW FOOTER ENGINE IMPLEMENTATION --- */}
      <footer className="main-footer" dir="rtl">
        <div className="footer-top-row">
          <button onClick={scrollToTop} className="back-to-top-btn">
            العودة إلى أعلى <span className="arrow-up">↑</span>
          </button>
        </div>

        <div className="footer-newsletter-row">
          <div className="newsletter-text">
            <h3>كن أول من يعرف!</h3>
            <p>اشترك بنشرتنا البريدية ليصلك كل جديد.</p>
          </div>
          <form onSubmit={handleSubscribe} className="newsletter-form">
            <input 
              type="email" 
              placeholder="ادخل البريد الإلكتروني" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
            <button type="submit">اشترك</button>
          </form>
        </div>

        <div className="footer-columns-grid">
          <div className="footer-col col-brand">
            <img src={footerLogo} alt="محتوى بلس" className="footer-brand-logo" />
            <p className="brand-description">
              في محتوى بلس، نقدم خدمات احترافية في تصميم المتاجر الإلكترونية والتسويق الرقمي لمساعدتك على تحقيق نجاح أعمالك. رؤيتنا تحويل أفكارك إلى واقع مميز عبر تصاميم عصرية.
            </p>
          </div>

          <div className="footer-col col-links">
            <h4>روابط تهمك</h4>
            <ul>
              <li><a href="#blog">المدونة</a></li>
              <li><a href="#works">اعمالنا</a></li>
              <li><a href="#privacy">سياسة الاستخدام والخصوصية</a></li>
              <li><a href="#designs">تصاميمنا</a></li>
              <li><a href="#refunds">سياسة الاستبدال والاسترجاع</a></li>
              <li><a href="#verify">موثقين في وزارة التجارة ؟</a></li>
            </ul>
          </div>

          <div className="footer-col col-support">
            <h4>خدمة العملاء</h4>
            <div className="social-icon-buttons">
              <a href="tel:12345" className="social-icon-link" aria-label="Phone Support">
                <span className="phone-svg-mock">📱</span>
              </a>
              <a href="https://wa.me/12345" className="social-icon-link" aria-label="WhatsApp Support">
                <span className="whatsapp-svg-mock">💬</span>
              </a>
            </div>
          </div>

          <div className="footer-col col-license">
            <h4>السجل التجاري</h4>
            <span className="license-number">2055157130</span>
            <div className="license-badge-wrapper">
              <img src={saudiVisionImg} alt="Saudi Badge" className="license-badge-img" />
            </div>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <div className="bottom-bar-right">
            <span>الحقوق محفوظة | 2026 محتوى بلس</span>
          </div>
          
          <div className="bottom-bar-center">
            <div className="payment-gateways-row">
              <img src={payIcon1} alt="Payment Method" />
              <img src={payIcon2} alt="Payment Method" />
              <img src={payIcon3} alt="Payment Method" />
              <img src={payIcon4} alt="Payment Method" />
              <img src={payIcon5} alt="Payment Method" />
              <img src={payIcon6} alt="Payment Method" />
              <img src={payIcon7} alt="Payment Method" />
              <img src={payIcon8} alt="Payment Method" />
            </div>
          </div>

          <div className="bottom-bar-left">
            <div className="platform-verification-badge">
              <img src={platformImg} alt="موثق في منصة الأعمال" />
              <span>موثق في منصة الأعمال</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Sticky Left Green Whatsapp Element */}
      <a href="https://wa.me/12345" className="floating-whatsapp-widget" aria-label="Chat on WhatsApp">
        <span className="whatsapp-widget-icon">💬</span>
      </a>
    </div>
  );
}