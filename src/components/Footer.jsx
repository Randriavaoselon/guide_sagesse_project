import "../styles/Footer.css";
import logo from "../assets/logo-rb.png";
import { FaLinkedin, FaGithub, FaGlobe } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-row">
          <div className="footer-col">
            <a href="/" className="footer-logo">
              <img src={logo} alt="Logo VotreMarque" />
            </a>
            <p>
              Expertise en développement web et solutions IA pour accompagner
              votre transformation digitale.
            </p>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li>
                <a href="#apropos">Amélioration du quotidien</a>
              </li>
              <li>
                <a href="#apropos">Astuces pour progresser</a>
              </li>
              <li>
                <a href="#apropos">Vie simple et équilibrée</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <p>Antananarivo, Madagascar</p>
            <p>selonrandriavao@gmail.com</p>
          </div>

          <div className="footer-col">
            <h4>Suivez-nous</h4>
            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/randriavao-selon-774331263/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={24} />
              </a>{" "}
              <a
                href="https://github.com/Randriavaoselon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={24} />
              </a>{" "}
              <a
                href="https://portfolio-avenir.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGlobe size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Avenir-Tech. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
