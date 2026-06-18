import StandardBtn from "./StandardButton";
import '../styles/NewsletterSection.css';
import "../styles/StandardBtn.css";

const NewsletterSection = () => {
  return (
    <section className="newsletter-section" id="contact">
      <div className="newsletter-container">
        <div className="newsletter-row">
          <h5>Abonnez-vous pour recevoir nos conseils, actualités et astuces pour mieux vivre. ✨</h5>
          
          <div className="input-group">
            <input 
              type="email" 
              placeholder="Entrez votre email ici..." 
              className="newsletter-input"
            />
            <StandardBtn text="S'abonner"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;