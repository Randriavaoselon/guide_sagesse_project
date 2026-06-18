import '../styles/PartnerSection.css';

import logo1 from '../assets/logoEP1.png'; 
import logo2 from '../assets/logoEP2.png'; 
import logo3 from '../assets/logoEP3.png'; 
import logo4 from '../assets/logoEP4.png'; 
import logo5 from '../assets/logoEP5.png'; 
import logo6 from '../assets/logoEP6.png'; 
import logo7 from '../assets/logoEP7.png'; 
import logo8 from '../assets/logoEP8.png'; 

const PartnerSection = () => {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8]

  return (
    <section className="partner-section" id='partenaires'>
      <div className="partner-container">
        <h1 className="partner-title">Nos collaborateurs de confiance</h1>
        
        <div className="partner-row">
          {logos.map((logo, index) => (
            <div key={index} className="logo-card">
              <img src={logo} alt={`Partenaire ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;