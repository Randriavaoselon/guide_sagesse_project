import { useState, useEffect, useRef } from 'react';
import '../styles/InfoSection.css';
import infoImage from '../assets/info.png';

const InfoSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); 
        }
      },
      { threshold: 0.3 } 
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: "3k+", label: "Développement personnel" },
    { value: "500+", label: "Gestion du stress" },
    { value: "10+", label: "Orientation de vie" },
    { value: "99%", label: "Productivité quotidienne" }
  ];

  return (
    <section className="info-section" id="services" ref={sectionRef}>
      <div className="info-container">
        <div className="info-image">
          <img src={infoImage} alt="Notre expertise" />
        </div>
        <div className="info-content">
          <h3>Notre expertise à votre service</h3>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`stat-card ${isVisible ? 'animate' : ''}`} // Classe conditionnelle
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <h4>{stat.value}</h4>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;