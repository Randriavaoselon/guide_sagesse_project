import ButtonStarted from "./ButtonStarte";
import startedImage from "../assets/startedImage.png";

import "../styles/StartedSection.css";
import "../styles/ButtonStarted.css";

const StartedSection = () => {
  return (
    <section className="hero-section" id="accueil">
      <div className="hero-container">
        <div className="hero-content">
          <h1>Guides pour une vie meilleure!</h1>
          <p>
          À travers des conseils simples et inspirants, vous apprenez à améliorer votre quotidien, à prendre de bonnes décisions et à avancer sereinement vers vos objectifs.
          </p>
          <ButtonStarted
            text="Explorer maintenant"
            onClick={() =>
              (window.location.href = "https://portfolio-avenir.onrender.com/")
            }
          />
        </div>

        <div className="hero-image">
          <img src={startedImage} alt="Illustration de présentation" />
        </div>
      </div>
    </section>
  );
};

export default StartedSection;
