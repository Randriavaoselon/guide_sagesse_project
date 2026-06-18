import { useState, useEffect, useRef } from 'react';
import StandardBtn from "./StandardButton";

import "../styles/ServicesSection.css";
import "../styles/StandardBtn.css";

const ServicesSection = () => {

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
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const services = [
    {
      title: "Vie simple et équilibrée",
      description:
        "Conseils simples et pratiques pour améliorer votre quotidien et vivre mieux chaque jour.",
    },
    {
      title: "Guide de vie positive",
      description: "Guides simples et inspirants pour adopter une vie positive et épanouie au quotidien.",
    },
    {
      title: "Astuces pour progresser",
      description: "Astuces simples et efficaces pour progresser chaque jour et atteindre vos objectifs.",
    },
  ];

  return (
    <section className="services-section" ref={sectionRef}>
      <div className="services-container">
        <div className="services-row">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`service-card ${isVisible ? 'animate' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="icon-box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2C7.03 2 3 6.03 3 11c0 2.21 0.89 4.22 2.34 5.66L7 18v2c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2v-2l1.66-3.34C20.11 15.22 21 13.21 21 11c0-4.97-4.03-9-9-9z" />
                  <path d="M12 22v-2" />
                  <path d="M9 22h6" />
                </svg>
              </div>
              <h5>{service.title}</h5>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
        <div className="button-wrapper">
          <StandardBtn 
          text='Savoir plus +' 
          onClick={() => {
            (window.location.href = "https://portfolio-avenir.onrender.com/")
          }}/>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
