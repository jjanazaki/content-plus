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

export default function Home() {
  const containerRef = useRef(null);
  const [isInteracting, setIsInteracting] = useState(false);
  const scrollDirection = useRef(1); // 1 = right, -1 = left

  const cardsData = [
    { id: 1, img: cardIcon1, title: "التسويق", desc: "إطلاق حملات إعلانية على منصات التواصل" },
    { id: 2, img: cardIcon2, title: "خدمات المتاجر", desc: "انشاء وتصميم المتاجر الالكترونية" },
    { id: 3, img: cardIcon3, title: "الفيديو", desc: "خدمات الفيديو ugc" },
    { id: 4, img: cardIcon4, title: "المحتوى", desc: "خدمة كتابة المحتوى التسويقي" },
    { id: 5, img: cardIcon5, title: "خدمات المتاجر", desc: "خدمات الseo والربط مع خدمات قوقل، إلخ" },
    { id: 6, img: cardIcon6, title: "العمل الحر", desc: "خدمة إصدار وثيقة العمل الحر" },
  ];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationId;

    const autoScroll = () => {
      // Only auto-scroll if the user is NOT hovering, touching, or dragging
      if (!isInteracting) {
        container.scrollLeft += scrollDirection.current * 1; 

        // Reverse at right boundary
        if (container.scrollLeft >= container.scrollWidth - container.clientWidth - 5) {
          scrollDirection.current = -1;
        } 
        // Reverse at left boundary
        else if (container.scrollLeft <= 0) {
          scrollDirection.current = 1;
        }
      }
      animationId = requestAnimationFrame(autoScroll);
    };

    animationId = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(animationId);
  }, [isInteracting]);

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
          /* Mouse & Touch listeners to pause auto-scroll instantly on user input */
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

      <div className="space-below">
        <h1>HOME</h1>
      </div>
    </div>
  );
}