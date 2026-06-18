import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/Navbar.css";
import "../styles/ButtonStarted.css";
import logo from "../assets/logo-rb.png";
import ButtonStarted from "./ButtonStarte";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const menuItems = ["Accueil", "Services", "Àpropos", "Contact"];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      // Si on est sur mobile (< 768px), on reste toujours visible
      if (window.innerWidth <= 768) {
        setVisible(true);
        setPrevScrollPos(currentScrollPos);
        return;
      }

      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 100);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <nav className={`navbar ${visible ? "visible" : "hidden"}`}>
      <div className="navbar-container">
        <div className="logo-container">
          <a href="/" className="logo-link">
            <img src={logo} alt="Logo" className="logo-image" />
          </a>
        </div>

        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <div className={`nav-menu ${isOpen ? "active" : ""}`}>
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .replace("àpropos", "apropos")}`}
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}

          <div className="nav-cta-mobile">
            <ButtonStarted
              text="Explorer"
              onClick={() =>
                (window.location.href =
                  "https://portfolio-avenir.onrender.com/")
              }
            />
          </div>
        </div>

        <div className="nav-cta-desktop">
          <ButtonStarted
            text="Explorer"
            onClick={() =>
              (window.location.href = "https://portfolio-avenir.onrender.com/")
            }
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
