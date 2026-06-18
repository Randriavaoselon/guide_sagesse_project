import StandardBtn from "./StandardButton";

import "../styles/PublicationSection.css";
import "../styles/StandardBtn.css";

import pub1 from "../assets/sage_one.png";
import pub2 from "../assets/sage_two.png";
import pub3 from "../assets/sage_three.png";
import pub4 from "../assets/sage_fore.png";

const PublicationSection = () => {
  return (
    <section className="pub-section" id="apropos">
      <div className="pub-container">
        <div className="pub-row">
          <div className="pub-col-images">
            <div className="image-grid">
              <img src={pub1} alt="Publication 1" className="grid-img" />
              <img src={pub2} alt="Publication 2" className="grid-img" />
              <img src={pub3} alt="Publication 3" className="grid-img" />
              <img src={pub4} alt="Publication 4" className="grid-img" />
            </div>
          </div>

          <div className="pub-col-content">
            <h5>Nos dernières publications</h5>
            <p>
              Découvrez nos conseils, nos réflexions et nos guides pratiques
              pour améliorer votre quotidien. Nous partageons régulièrement
              notre expertise pour vous accompagner vers une vie plus équilibrée
              et épanouie.
            </p>
            <StandardBtn
              text="Découvrir plus+"
              onClick={() => {
                window.location.href = "https://portfolio-avenir.onrender.com/";
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublicationSection;
